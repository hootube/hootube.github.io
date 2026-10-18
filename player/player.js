/**
 * Player do HooTube: Vidstack oficial (npm "vidstack") com o layout do Plyr.
 * O arquivo vidstack.js é gerado em ../player-build (npm run build).
 * Carregado sob demanda pelo app.js (import dinâmico). Um player por vez.
 *
 *   const { mountPlayer, destroyPlayer } = await import("./player/player.js");
 *   await mountPlayer(elemento, { youtubeId: "dQw4w9WgXcQ", title: "..." });
 */

const STYLES = ["vidstack.css", "player.css"];

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

// Ordem dos controles (a posição na barra é ajustada em player.css)
const CONTROLS = [
  "play-large", "play", "rewind", "fast-forward",
  "progress", "mute+volume", "current-time", "captions", "settings", "fullscreen"
];

const PT_TRANSLATIONS = {
  "Audio": "Áudio",
  "Auto": "Automático",
  "Captions": "Legendas",
  "Enter Fullscreen": "Tela cheia",
  "Exit Fullscreen": "Sair da tela cheia",
  "Fast forward": "Avançar 10 s",
  "Go back to previous menu": "Voltar",
  "Mute": "Silenciar",
  "Normal": "Normal",
  "Pause": "Pausar",
  "Play": "Reproduzir",
  "Quality": "Qualidade",
  "Reset": "Redefinir",
  "Restart": "Reiniciar",
  "Rewind": "Voltar 10 s",
  "Settings": "Configurações",
  "Speed": "Velocidade",
  "Unmute": "Ativar som",
  "Volume": "Volume",
  "Disabled": "Desativado",
  "Enabled": "Ativado",
  "Enable captions": "Ativar legendas",
  "Disable captions": "Desativar legendas"
};

// Rótulos do Vidstack por idioma da interface (window.HOOTUBE_LANG, definido em i18n.js).
// Em inglês só os de 10 s precisam de ajuste: o resto já vem em inglês do próprio Vidstack.
const ES_TRANSLATIONS = {
  "Audio": "Audio", "Auto": "Automático", "Captions": "Subtítulos",
  "Enter Fullscreen": "Pantalla completa", "Exit Fullscreen": "Salir de pantalla completa",
  "Fast forward": "Avanzar 10 s", "Go back to previous menu": "Volver", "Mute": "Silenciar",
  "Normal": "Normal", "Pause": "Pausar", "Play": "Reproducir", "Quality": "Calidad", "Reset": "Restablecer",
  "Restart": "Reiniciar", "Rewind": "Retroceder 10 s", "Settings": "Configuración", "Speed": "Velocidad",
  "Unmute": "Activar sonido", "Volume": "Volumen", "Disabled": "Desactivado", "Enabled": "Activado",
  "Enable captions": "Activar subtítulos", "Disable captions": "Desactivar subtítulos"
};
const EN_TRANSLATIONS = { "Fast forward": "Forward 10 s", "Rewind": "Back 10 s" };
const TRANSLATIONS = { pt: PT_TRANSLATIONS, es: ES_TRANSLATIONS, en: EN_TRANSLATIONS }[window.HOOTUBE_LANG || "pt"] || EN_TRANSLATIONS;
const T = (text) => (window.t ? window.t(text) : text);

const YOUTUBE_ICON =
  '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' +
  '<span class="plyr__tooltip" role="tooltip">' + T("Abrir no YouTube") + '</span>';

let vidstackPromise = null;
let stylesLoaded = false;
let current = null;   // { player, container, observer, cleanups }
let mountToken = 0;   // invalida montagens em andamento quando o vídeo muda

function loadStyles() {
  if (stylesLoaded) return;
  stylesLoaded = true;
  for (const file of STYLES) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = new URL(file, import.meta.url).href;
    document.head.appendChild(link);
  }
}

function loadVidstack() {
  if (!vidstackPromise) {
    vidstackPromise = import("./vidstack.js").catch(err => {
      vidstackPromise = null; // permite tentar de novo depois
      throw err;
    });
  }
  return vidstackPromise;
}

// Botão "abrir no YouTube" na barra de controles (a barra é criada depois do player)
function watchYouTubeButton(container, youtubeId) {
  const insert = () => {
    const bar = container.querySelector(".plyr__controls");
    if (!bar || bar.querySelector("#hoo-yt-btn")) return;
    const button = document.createElement("button");
    button.id = "hoo-yt-btn";
    button.type = "button";
    button.className = "plyr__controls__item plyr__control";
    button.setAttribute("aria-label", T("Abrir no YouTube"));
    button.innerHTML = YOUTUBE_ICON;
    button.addEventListener("click", () => {
      window.open(`https://www.youtube.com/watch?v=${encodeURIComponent(youtubeId)}`, "_blank", "noopener");
    });
    bar.insertBefore(button, bar.lastElementChild);
  };

  const observer = new MutationObserver(insert);
  observer.observe(container, { childList: true, subtree: true });
  insert();
  return observer;
}

// O navegador só libera autoplay depois de uma interação do usuário com a página. Ao atualizar
// (F5) ou abrir o link direto não há interação: tentar autoplay deixa o Vidstack achando que está
// tocando (paused=false) com o vídeo parado, então nesse caso o player começa pausado.
function hasUserInteracted() {
  return navigator.userActivation ? navigator.userActivation.hasBeenActive : false;
}

// =========================================================
// Gestos e atalhos (iguais aos do YouTube)
//
// Os gestos do próprio layout (<media-gesture>) não anexam seus listeners no Vidstack 1.15 com
// o YouTube (procuram o <media-provider> cedo demais), então ficam desligados no PlyrLayout
// (clickToPlay/clickToFullscreen: false) e os atalhos nativos do Vidstack também (keyDisabled);
// este código os substitui. Teclado: Espaço/K, F, M, ←/→ (5 s), J/L (10 s), ↑/↓ (volume),
// 0–9, Home/End e < / > (velocidade). Toque: duplo toque nas laterais avança/volta 10 s e
// duplo toque no centro alterna a tela cheia. Mouse: clique pausa e duplo clique é tela cheia.
// Toque/clique simples só pausa/toca se os controles JÁ estavam visíveis; com os controles
// escondidos, ele apenas os exibe (o seguinte pausa/toca).
// =========================================================
const DOUBLE_TAP_MS = 280;      // intervalo máximo entre os dois toques/cliques
const SEEK_CHAIN_MS = 600;      // depois de um duplo toque, toques seguidos na lateral continuam pulando
const SEEK_SMALL = 5;           // setas
const SEEK_BIG = 10;            // J / L e toque duplo
const VOLUME_STEP = 0.05;
const RATES = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

function togglePlay(player) {
  // "tocando" e não "pausado": depois de um autoplay bloqueado o player diz paused=false
  // sem ter iniciado, e o comando precisa tocar (não pausar)
  if (player.state.playing) player.pause();
  else player.play().catch(() => {});
}

function toggleFullscreen(player) {
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  else player.requestFullscreen().catch(() => {});
}

function seekBy(player, seconds) {
  const duration = Number.isFinite(player.duration) ? player.duration : Infinity;
  player.currentTime = Math.min(Math.max(0, player.currentTime + seconds), duration);
}

// Aviso rápido no vídeo ("+10 s", "Volume 50%"...), como no YouTube
function showHint(container, text, side = "center") {
  let hint = container.querySelector(".hoo-hint");
  if (!hint) {
    hint = document.createElement("div");
    hint.className = "hoo-hint";
    hint.setAttribute("aria-hidden", "true");
    container.appendChild(hint);
  }
  hint.textContent = text;
  hint.dataset.side = side;
  hint.classList.remove("show");
  void hint.offsetWidth; // reinicia a animação
  hint.classList.add("show");
}

const INTERACTIVE = 'input, textarea, select, [contenteditable=""], [contenteditable="true"]';
// Elementos que já tratam Espaço/Enter/setas por conta própria
const OWN_KEYS = 'button, a, summary, [role="button"], [role="menuitem"], [role="menuitemradio"], [role="slider"], [role="switch"], media-slider, media-time-slider, media-volume-slider';

function setupKeyboardShortcuts(player, container) {
  const onKeyDown = event => {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
    if (document.querySelector(".modal:not(.hidden)")) return; // janela aberta (salvar, configurações)
    const target = event.target instanceof Element ? event.target : document.body;
    if (target.closest(INTERACTIVE)) return; // digitando na busca ou nos comentários

    const key = event.key;
    const lower = key.length === 1 ? key.toLowerCase() : key;
    const focusInPlayer = player.contains(target) || !!document.fullscreenElement;
    const handled = () => event.preventDefault();

    switch (lower) {
      case " ":
      case "k":
        // Em botões/controles o próprio elemento já reage ao Espaço; evita alternar duas vezes
        if (lower === " " && target.closest(OWN_KEYS)) return;
        if (event.repeat) return handled();
        handled(); togglePlay(player);
        showHint(container, player.state.playing ? "Pausar" : "Reproduzir");
        return;
      case "f":
        if (event.repeat) return handled();
        handled(); toggleFullscreen(player);
        return;
      case "m":
        if (event.repeat) return handled();
        handled(); player.muted = !player.muted;
        showHint(container, player.muted ? "Sem som" : "Com som");
        return;
      case "ArrowLeft":
      case "ArrowRight": {
        if (target.closest(OWN_KEYS)) return;
        const amount = lower === "ArrowLeft" ? -SEEK_SMALL : SEEK_SMALL;
        handled(); seekBy(player, amount);
        showHint(container, `${amount > 0 ? "+" : "−"}${SEEK_SMALL} s`, amount > 0 ? "right" : "left");
        return;
      }
      case "j":
      case "l": {
        const amount = lower === "j" ? -SEEK_BIG : SEEK_BIG;
        handled(); seekBy(player, amount);
        showHint(container, `${amount > 0 ? "+" : "−"}${SEEK_BIG} s`, amount > 0 ? "right" : "left");
        return;
      }
      case "ArrowUp":
      case "ArrowDown": {
        // Só com o foco no player; fora dele as setas continuam rolando a página
        if (!focusInPlayer || target.closest(OWN_KEYS)) return;
        const volume = Math.min(1, Math.max(0, Math.round((player.volume + (lower === "ArrowUp" ? VOLUME_STEP : -VOLUME_STEP)) * 100) / 100));
        handled(); player.muted = false; player.volume = volume;
        showHint(container, `${TRANSLATIONS["Volume"] || "Volume"} ${Math.round(volume * 100)}%`);
        return;
      }
      case "Home":
      case "End":
        if (!focusInPlayer) return;
        handled(); player.currentTime = lower === "Home" ? 0 : (Number.isFinite(player.duration) ? player.duration : player.currentTime);
        return;
      case "<":
      case ">": {
        const index = RATES.indexOf(player.playbackRate);
        const next = RATES[Math.min(RATES.length - 1, Math.max(0, (index === -1 ? RATES.indexOf(1) : index) + (lower === ">" ? 1 : -1)))];
        handled(); player.playbackRate = next;
        showHint(container, `${next}×`);
        return;
      }
      default:
        if (/^[0-9]$/.test(lower) && Number.isFinite(player.duration)) {
          handled(); player.currentTime = player.duration * (Number(lower) / 10);
        }
    }
  };

  document.addEventListener("keydown", onKeyDown);
  return () => document.removeEventListener("keydown", onKeyDown);
}

function setupPointerGestures(player, container) {
  let tapTimer = 0;
  let pending = null;      // primeiro toque/clique aguardando o segundo
  let visibleAtDown = true; // controles visíveis no instante em que o toque/clique começou
  let chainUntil = 0;      // até quando toques laterais continuam pulando

  const zoneOf = (event, element) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    return x < 1 / 3 ? "left" : x > 2 / 3 ? "right" : "center";
  };

  const seekZone = zone => {
    const amount = zone === "left" ? -SEEK_BIG : SEEK_BIG;
    seekBy(player, amount);
    showHint(container, `${amount > 0 ? "+" : "−"}${SEEK_BIG} s`, zone);
    chainUntil = performance.now() + SEEK_CHAIN_MS;
  };

  // Registrado na captura para ler o estado ANTES de o próprio toque reexibir os controles
  const onPointerDown = event => {
    if (event.button === 0 && event.target.closest?.(".vds-blocker")) visibleAtDown = !!player.state.controlsVisible;
  };

  const onPointerUp = event => {
    const blocker = event.target.closest?.(".vds-blocker");
    if (event.button !== 0 || !blocker) return;
    const touch = event.pointerType === "touch" || event.pointerType === "pen";
    const zone = touch ? zoneOf(event, blocker) : "any";
    const now = performance.now();

    // Toques seguidos na lateral, logo depois de um duplo toque, continuam pulando
    if (touch && zone !== "center" && now < chainUntil) {
      clearTimeout(tapTimer);
      pending = null;
      seekZone(zone);
      return;
    }

    // Segundo toque/clique dentro do intervalo
    if (pending && now - pending.time < DOUBLE_TAP_MS) {
      clearTimeout(tapTimer);
      const first = pending;
      pending = null;
      if (!touch) return toggleFullscreen(player);        // mouse: duplo clique = tela cheia
      if (zone === first.zone && zone === "center") return toggleFullscreen(player);
      if (zone === first.zone) return seekZone(zone);      // laterais: avança/volta 10 s
      pending = { zone, time: now };                       // zonas diferentes: vale o último toque
      tapTimer = setTimeout(() => { pending = null; togglePlay(player); }, DOUBLE_TAP_MS);
      return;
    }

    // Primeiro toque/clique: espera para saber se vem um segundo
    const controlsWereVisible = visibleAtDown;
    pending = { zone, time: now };
    tapTimer = setTimeout(() => {
      pending = null;
      if (controlsWereVisible) togglePlay(player);
      else player.controls.show(); // controles escondidos: o toque só os exibe
    }, DOUBLE_TAP_MS);
  };

  player.addEventListener("pointerdown", onPointerDown, true);
  player.addEventListener("pointerup", onPointerUp);
  return () => {
    clearTimeout(tapTimer);
    player.removeEventListener("pointerdown", onPointerDown, true);
    player.removeEventListener("pointerup", onPointerUp);
  };
}

export function destroyPlayer() {
  mountToken++;
  if (!current) return;
  const { player, container, observer, cleanups } = current;
  current = null;
  observer?.disconnect();
  cleanups.forEach(cleanup => cleanup());
  try { player.destroy(); } catch (err) { /* já destruído */ }
  player.remove();
  container.classList.remove("hoo-player");
}

/**
 * Cria o player dentro de `container`, substituindo o anterior.
 * Opções: youtubeId ou src (arquivo de vídeo), title, poster, autoplay.
 */
export async function mountPlayer(container, { youtubeId, src, title = "", poster, autoplay = hasUserInteracted() }) {
  destroyPlayer();
  const token = mountToken;

  loadStyles();
  const { VidstackPlayer, PlyrLayout } = await loadVidstack();
  if (token !== mountToken) return null;

  container.classList.add("hoo-player");
  const target = document.createElement("div");
  container.replaceChildren(target);

  const player = await VidstackPlayer.create({
    target,
    src: youtubeId ? `youtube/${youtubeId}` : src,
    title,
    poster,
    autoPlay: autoplay,
    playsInline: true,
    keyDisabled: true, // os atalhos são tratados em setupKeyboardShortcuts
    viewType: "video",
    streamType: "on-demand",
    layout: new PlyrLayout({
      controls: CONTROLS,
      speed: SPEEDS,
      seekTime: 10,
      thumbnails: "",
      clickToPlay: false,
      clickToFullscreen: false,
      translations: TRANSLATIONS
    })
  });

  // Outra montagem (ou destroy) aconteceu enquanto o player era criado
  if (token !== mountToken) {
    try { player.destroy(); } catch (err) { /* ignora */ }
    player.remove();
    return null;
  }

  const cleanups = [
    setupKeyboardShortcuts(player, container),
    setupPointerGestures(player, container)
  ];
  // Se mesmo assim o autoplay for bloqueado, volta o estado para "pausado" (mostra o botão de play)
  player.addEventListener("autoplay-fail", () => player.pause());
  const observer = youtubeId ? watchYouTubeButton(container, youtubeId) : null;
  current = { player, container, observer, cleanups };
  return player;
}
