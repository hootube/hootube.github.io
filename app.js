/**
 * HooTube - Frontend Script
 * Gerencia busca, renderização de resultados e reprodução de vídeos.
 */

// Banco de dados simulado de vídeos
const VIDEO_DATABASE = [
  {
    id: "bbb-01",
    title: "Big Buck Bunny - Animação Completa em 4K",
    type: "file",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=720&auto=format&fit=crop&q=80",
    duration: "9:56",
    channel: "Blender Foundation",
    channelAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    subscribers: "2,4 M de inscritos",
    views: "15.420.100 visualizações",
    date: "há 3 anos",
    category: "Animação",
    tags: ["#Blender", "#OpenSource", "#Animacao", "#4K"],
    description: `Big Buck Bunny é um curta-metragem de animação de comédia em computação gráfica da Blender Foundation.

Produzido com software livre Blender, o filme conta a história de um coelho gigante e bem-humorado que decide se vingar de três roedores da floresta que maltratam animais indefesos.

Trilha sonora original composta por Jan Morgenstern.
Site oficial: https://peach.blender.org/`,
    likes: 342000,
    comments: [
      {
        id: "c1",
        author: "Dev Criativo",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
        time: "há 2 meses",
        text: "Esse clássico do Blender nunca perde a graça! Incrível a qualidade alcançada com software livre.",
        likes: 124
      },
      {
        id: "c2",
        author: "Camila Rocha",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        time: "há 1 semana",
        text: "A qualidade desse player do HooTube ficou excelente, super fluida!",
        likes: 42
      }
    ]
  },
  {
    id: "tos-02",
    title: "Tears of Steel - Ficção Científica VFX no Futuro",
    type: "file",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=720&auto=format&fit=crop&q=80",
    duration: "12:14",
    channel: "Mango Open Movie",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    subscribers: "890 mil inscritos",
    views: "4.821.500 visualizações",
    date: "há 1 ano",
    category: "Ciência",
    tags: ["#SciFi", "#VFX", "#CGI", "#Cinema"],
    description: `Tears of Steel foi realizado com financiamento coletivo e apoio da comunidade Blender internacional.

Explora um futuro distópico onde cientistas tentam resgatar a humanidade de robôs gigantes na ponte de Amsterdã. Os efeitos visuais e o pipeline foram criados inteiramente em ferramentas abertas.`,
    likes: 115000,
    comments: [
      {
        id: "c3",
        author: "Lucas Ferreira",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
        time: "há 3 semanas",
        text: "Os efeitos práticos misturados com 3D ficaram muito bem calibrados.",
        likes: 18
      }
    ]
  },
  {
    id: "sintel-03",
    title: "Sintel - A Jornada Épica da Guerreira e seu Dragão",
    type: "file",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=720&auto=format&fit=crop&q=80",
    duration: "14:48",
    channel: "Durian Open Art",
    channelAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    subscribers: "1,8 M de inscritos",
    views: "8.900.240 visualizações",
    date: "há 2 anos",
    category: "Animação",
    tags: ["#Fantasia", "#Dragão", "#Sintel", "#Animacao3D"],
    description: `Sintel é a terceira produção de animação aberta da Blender Foundation.
Uma jovem solitária resgata e cuida de um pequeno dragão ferido ao qual dá o nome de Scales. Quando o dragão é capturado por uma fera alada colossal, Sintel embarca numa busca perigosa por terras congeladas e desertos.`,
    likes: 290000,
    comments: [
      {
        id: "c4",
        author: "Marcos Vinicius",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
        time: "há 4 dias",
        text: "O final desse curta sempre parte meu coração... Obra-prima!",
        likes: 95
      }
    ]
  },
  {
    id: "ed-04",
    title: "Elephants Dream - Surrealismo e Máquinas Infinitas",
    type: "file",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=720&auto=format&fit=crop&q=80",
    duration: "10:53",
    channel: "Orange Movie Project",
    channelAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    subscribers: "650 mil inscritos",
    views: "3.120.400 visualizações",
    date: "há 4 anos",
    category: "Vídeos em Alta",
    tags: ["#Surreal", "#ArteDigital", "#CurtaMetragem"],
    description: `O primeiro filme em código aberto do mundo! Dois personagens exploram as entranhas labirínticas de uma máquina gigante com intenções misteriosas.`,
    likes: 87000,
    comments: [
      {
        id: "c5",
        author: "Beatriz Lima",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
        time: "há 1 mês",
        text: "Pioneiro absoluto da computação gráfica aberta. Vale a pena rever sempre.",
        likes: 31
      }
    ]
  },
  {
    id: "nature-05",
    title: "Explorando as Maravilhas da Vida Selvagem em Ultra HD",
    type: "file",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=720&auto=format&fit=crop&q=80",
    duration: "0:15",
    channel: "Planeta Selvagem TV",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    subscribers: "3,1 M de inscritos",
    views: "920.000 visualizações",
    date: "há 5 dias",
    category: "Natureza",
    tags: ["#Natureza", "#Documentario", "#VidaSelvagem"],
    description: `Imagens deslumbrantes da fauna e flora capturadas com lentes de alta precisão.
Descubra a harmonia oculta nos habitats mais remotos do nosso planeta.`,
    likes: 64000,
    comments: []
  },
  {
    id: "tech-06",
    title: "O Futuro da Inteligência Artificial e Robótica Moderna",
    type: "file",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=720&auto=format&fit=crop&q=80",
    duration: "0:15",
    channel: "Tech Hub Brasil",
    channelAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=80",
    subscribers: "980 mil inscritos",
    views: "410.300 visualizações",
    date: "há 2 semanas",
    category: "Tecnologia",
    tags: ["#Tecnologia", "#AI", "#Futuro", "#Robotica"],
    description: `Uma visão detalhada sobre como os novos modelos multimodais e atuadores robóticos estão redefinindo as fábricas e lares de amanhã.`,
    likes: 38000,
    comments: []
  },
  {
    id: "music-07",
    title: "Sessão Acústica Lo-Fi para Foco e Estudos",
    type: "file",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=720&auto=format&fit=crop&q=80",
    duration: "1:00",
    channel: "HooBeats Music",
    channelAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    subscribers: "5,6 M de inscritos",
    views: "18.350.000 visualizações",
    date: "há 6 meses",
    category: "Música",
    tags: ["#LoFi", "#MusicaParaEstudar", "#Relax"],
    description: `Batidas suaves combinadas com arranjos sutis para ajudar na sua concentração durante os estudos e o trabalho. Aproveite a vibe!`,
    likes: 820000,
    comments: []
  }
];

// Estado da Aplicação
const state = {
  currentQuery: "",
  currentPage: 1,
  currentVideo: null,
  isDarkTheme: true
};

// Elementos DOM
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const recentSearches = document.getElementById("recentSearches");
const homeLogo = document.getElementById("homeLogo");
const initialFeedState = document.getElementById("initialFeedState");

const resultsView = document.getElementById("resultsView");
const resultsHeader = document.getElementById("resultsHeader");
const resultsContainer = document.getElementById("resultsContainer");
const resultsHeading = document.getElementById("resultsHeading");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const paginationNav = document.getElementById("pagination");
const emptyStateTitle = document.getElementById("emptyStateTitle");
const emptyStateText = document.getElementById("emptyStateText");
const resetSearchBtn = document.getElementById("resetSearchBtn");
const currentYearElem = document.getElementById("currentYear");

const playerView = document.getElementById("playerView");
const backToResultsBtn = document.getElementById("backToResultsBtn");
const videoFrameWrapper = document.getElementById("videoFrameWrapper");
const playerTitle = document.getElementById("playerTitle");
const playerChannelAvatar = document.getElementById("playerChannelAvatar");
const playerChannelName = document.getElementById("playerChannelName");
const playerSubscribers = document.getElementById("playerSubscribers");
const shareBtn = document.getElementById("shareBtn");
const playerViews = document.getElementById("playerViews");
const playerDate = document.getElementById("playerDate");
const playerTags = document.getElementById("playerTags");
const playerDescription = document.getElementById("playerDescription");
const descriptionBox = document.getElementById("descriptionBox");
const descToggleBtn = document.getElementById("descToggleBtn");
const commentsCountText = document.getElementById("commentsCountText");
const commentsList = document.getElementById("commentsList");
const loadMoreCommentsBtn = document.getElementById("loadMoreCommentsBtn");
const toast = document.getElementById("toast");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const settingsBtn = document.getElementById("settingsBtn");
const saveBtn = document.getElementById("saveBtn");
const saveIcon = document.getElementById("saveIcon");
const saveLabel = document.getElementById("saveLabel");
const saveModal = document.getElementById("saveModal");
const settingsModal = document.getElementById("settingsModal");
const playlistPicker = document.getElementById("playlistPicker");
const saveModalVideo = document.getElementById("saveModalVideo");
const playlistNewForm = document.getElementById("playlistNewForm");
const playlistNewName = document.getElementById("playlistNewName");
const settingsSummary = document.getElementById("settingsSummary");
const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");
const importFile = document.getElementById("importFile");
const playlistsHome = document.getElementById("playlistsHome");
const channelPage = document.getElementById("channelPage");
const channelMoreBtn = document.getElementById("channelMoreBtn");
const subscriptionsHome = document.getElementById("subscriptionsHome");
const subscribeBtn = document.getElementById("subscribeBtn");
const subsSummary = document.getElementById("subsSummary");
const exportSubsBtn = document.getElementById("exportSubsBtn");
const importSubsBtn = document.getElementById("importSubsBtn");
const exportAllBtn = document.getElementById("exportAllBtn");
const importAllBtn = document.getElementById("importAllBtn");
const clearDataBtn = document.getElementById("clearDataBtn");
const playlistPage = document.getElementById("playlistPage");
const renameModal = document.getElementById("renameModal");
const renameForm = document.getElementById("renameForm");
const renameInput = document.getElementById("renameInput");

// Utilitários
let toastTimer = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  // Cancela o temporizador do aviso anterior, senão ele esconderia este antes da hora
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// Analisador de links do YouTube
function extractYouTubeId(urlOrQuery) {
  if (!urlOrQuery) return null;
  const trimmed = urlOrQuery.trim();
  // Regex para vários formatos de link do YouTube ou ID direto
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
  const match = trimmed.match(regExp);
  if (match && match[1]) {
    return match[1];
  }
  // Se for apenas o ID de 11 caracteres alfanuméricos com hífen/underline
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  return null;
}

// =========================================================
// Busca no YouTube via instâncias públicas do Piped (sem API key, sem login)
// =========================================================
// Ordem das fontes: 1) Piped  2) VPS  3) Cloudflare.
// Fontes configuradas em config.js: API própria na VPS (principal), Piped (reserva) e, por último,
// uma API reserva opcional (Cloudflare). Cada uma só é tentada se a anterior falhar.
const CONFIG = window.HOOTUBE_CONFIG || {};
const cleanUrl = value => String(value || "").trim().replace(/\/+$/, "");

const API_BASES = (CONFIG.apiBases || []).map(cleanUrl).filter(Boolean);          // principal (antes do Piped)
const API_LATE = (CONFIG.apiFallbacks || []).map(cleanUrl).filter(Boolean);       // reserva (depois do Piped)
const HAS_API = API_BASES.length + API_LATE.length > 0;
const UI_LANG = navigator.language || "pt-BR";
const API_COOLDOWN_MS = 60 * 1000;
const apiCooldown = new Map(); // base -> instante até o qual é ignorada após uma falha

// Chama a API em ordem de prioridade. Com `onlyBase` (continuações), usa só aquele servidor;
// `bases` escolhe o grupo (principal ou reserva). Servidor que falhou fica em espera por 1 min
// (nesse tempo o app nem tenta, para a busca cair logo no Piped).
async function fetchApiJson(path, onlyBase = null, bases = [...API_BASES, ...API_LATE]) {
  if (!bases.length) throw new Error("API não configurada");

  const now = Date.now();
  const candidates = onlyBase ? [onlyBase] : bases.filter(b => (apiCooldown.get(b) || 0) <= now);
  if (!candidates.length) throw new Error("API em espera");

  const url = path + (path.includes("?") ? "&" : "?") + "hl=" + encodeURIComponent(UI_LANG);
  let lastError;
  for (const base of candidates) {
    try {
      const res = await fetch(base + url, { signal: AbortSignal.timeout(7000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      apiCooldown.delete(base);
      return { data: await res.json(), base };
    } catch (err) {
      apiCooldown.set(base, Date.now() + API_COOLDOWN_MS);
      lastError = err;
    }
  }
  throw lastError;
}

// Instância principal do Piped: troque "pipedInstance" no config.js se ela cair.
// As reservas (pipedFallbacks) só são tentadas se a principal falhar.
const DEFAULT_PIPED_INSTANCE = "https://api.piped.private.coffee";
const PIPED_INSTANCES = [...new Set(
  [CONFIG.pipedInstance || DEFAULT_PIPED_INSTANCE, ...(CONFIG.pipedFallbacks || [])]
    .map(cleanUrl)
    .filter(Boolean)
)];
let searchToken = 0;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "AO VIVO";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

function formatRelativeDate(timestamp) {
  if (!timestamp || timestamp < 0) return "";
  const diffSec = Math.max(0, (Date.now() - timestamp) / 1000);
  const units = [[31536000, "year"], [2592000, "month"], [604800, "week"], [86400, "day"], [3600, "hour"], [60, "minute"]];
  for (const [size, unit] of units) {
    const n = Math.floor(diffSec / size);
    if (n >= 1) return relativeTime(-n, unit);
  }
  return t("agora há pouco");
}

// "há 3 meses" / "3 months ago" / "hace 3 meses", no idioma da interface
function relativeTime(value, unit) {
  try {
    return new Intl.RelativeTimeFormat(window.HOOTUBE_LOCALE || "pt-BR", { numeric: "always" }).format(value, unit);
  } catch (err) {
    return `${value} ${unit}`;
  }
}

// O proxy de imagens da instância falha com frequência; usa o host original (ex.: yt3.ggpht.com)
function directImageUrl(proxied) {
  if (!proxied) return "";
  try {
    const u = new URL(proxied);
    const host = u.searchParams.get("host");
    return host ? `https://${host}${u.pathname}` : proxied;
  } catch {
    return proxied;
  }
}

function mapPipedItem(item) {
  const id = new URL(item.url, "https://www.youtube.com").searchParams.get("v");
  return {
    id: "yt-" + id,
    youtubeId: id,
    type: "youtube",
    title: item.title,
    thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    duration: formatDuration(item.duration),
    channel: item.uploaderName || t("Canal no YouTube"),
    channelAvatar: directImageUrl(item.uploaderAvatar),
    channelId: ((item.uploaderUrl || "").match(/\/channel\/(UC[\w-]{20,})/) || [])[1] || "",
    subscribers: "",
    views: item.views >= 0 ? t("{n} visualizações", { n: item.views.toLocaleString(window.HOOTUBE_LOCALE) }) : "",
    date: formatRelativeDate(item.uploaded) || item.uploadedDate || "",
    category: "YouTube",
    tags: ["#YouTube"],
    description: item.shortDescription || "",
    likes: 0,
    comments: []
  };
}

const RESULTS_PER_PAGE = 15;

// Sessão de busca atual: acumula os resultados da API e pagina no cliente
let searchSession = null;

// Vídeos já vistos nos resultados (id do YouTube -> objeto), usados ao abrir o player
const videoCache = new Map();

function parsePipedPage(data) {
  const items = (data.items || []).filter(i => i.type === "stream" && i.url).map(mapPipedItem);
  items.forEach(v => videoCache.set(v.youtubeId, v));
  return { items, nextpage: data.nextpage ? { src: "piped", token: data.nextpage } : null };
}

async function fetchPipedPage(path) {
  let lastError;
  for (const base of PIPED_INSTANCES) {
    try {
      const res = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return parsePipedPage(await res.json());
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error("Nenhuma instância disponível");
}

// Vídeo no formato da API própria (títulos já vêm no idioma do navegador)
function mapApiVideo(item) {
  return {
    fromApi: true,
    id: "yt-" + item.id,
    youtubeId: item.id,
    type: "youtube",
    title: item.title,
    titleLocalized: true,
    thumbnail: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
    duration: item.live ? "AO VIVO" : (item.durationText || formatDuration(item.duration)),
    channel: item.channel || t("Canal no YouTube"),
    channelAvatar: item.channelAvatar || "",
    channelId: item.channelId || "",
    subscribers: "",
    views: item.viewsText || "",
    date: item.published || "",
    category: "YouTube",
    tags: ["#YouTube"],
    description: item.snippet || "",
    likes: 0,
    comments: []
  };
}

function parseApiSearchPage(data, base) {
  const items = (data.items || []).filter(i => i.id).map(mapApiVideo);
  items.forEach(v => videoCache.set(v.youtubeId, v));
  return { items, nextpage: data.next ? { src: "api", base, token: data.next } : null };
}

// Cursor de continuação: { src: "api" | "piped", token, base? }
async function searchApi(query, bases) {
  const { data, base } = await fetchApiJson(`/api/search?q=${encodeURIComponent(query)}`, null, bases);
  return parseApiSearchPage(data, base);
}

// VPS -> Piped -> API reserva (Cloudflare, se ativada)
async function searchYouTube(query) {
  let lastError;
  if (API_BASES.length) {
    try { return await searchApi(query, API_BASES); } catch (err) { lastError = err; }
  }
  try {
    return await fetchPipedPage(`/search?q=${encodeURIComponent(query)}&filter=videos`);
  } catch (err) { lastError = err; }
  if (API_LATE.length) return searchApi(query, API_LATE);
  throw lastError;
}

async function searchYouTubeNext(query, cursor) {
  if (cursor.src === "api") {
    const { data, base } = await fetchApiJson(`/api/search?token=${encodeURIComponent(cursor.token)}`, cursor.base);
    return parseApiSearchPage(data, base);
  }
  return fetchPipedPage(
    `/nextpage/search?nextpage=${encodeURIComponent(cursor.token)}&q=${encodeURIComponent(query)}&filter=videos`
  );
}

// Carrega mais resultados da API até cobrir `needed` itens (ou acabar)
async function ensureResults(session, needed) {
  while (session.items.length < needed && session.nextpage) {
    const page = await searchYouTubeNext(session.query, session.nextpage);
    const seen = new Set(session.items.map(v => v.id));
    session.items.push(...page.items.filter(v => !seen.has(v.id)));
    session.nextpage = page.items.length ? page.nextpage : null;
  }
}

// =========================================================
// Título original do vídeo
// O Piped devolve títulos auto-traduzidos para inglês; o oEmbed do YouTube
// (com CORS liberado) devolve o título no idioma original do vídeo.
// =========================================================
const oembedCache = new Map();

function fetchOEmbed(youtubeId) {
  if (!oembedCache.has(youtubeId)) {
    const url = `https://www.youtube.com/oembed?url=${encodeURIComponent("https://www.youtube.com/watch?v=" + youtubeId)}&format=json`;
    const request = fetch(url, { signal: AbortSignal.timeout(6000) })
      .then(res => (res.ok ? res.json() : null))
      .catch(() => null);
    oembedCache.set(youtubeId, request);
    request.then(data => { if (!data) oembedCache.delete(youtubeId); });
  }
  return oembedCache.get(youtubeId);
}

// Troca o título do card pelo original, sem bloquear a renderização
function localizeTitle(video, card) {
  if (!video.youtubeId || video.titleLocalized) return;
  fetchOEmbed(video.youtubeId).then(data => {
    if (!data || !data.title || data.title === video.title) return;
    video.title = data.title;
    if (!card.isConnected) return;
    card.querySelector(".video-card-title").textContent = data.title;
    card.querySelector(".video-card-thumb").alt = data.title;
    card.setAttribute("aria-label", t("Assistir {title}", { title: data.title }));
  });
}

// =========================================================
// Renderização dos Resultados de Pesquisa
// =========================================================
// Ícone no canto superior direito do resultado: salva em uma playlist sem abrir o vídeo
function createCardSaveButton(video, savedIds) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card-save-btn";
  button.dataset.id = video.youtubeId;
  button.setAttribute("aria-haspopup", "dialog");
  button.setAttribute("aria-label", t("Salvar “{title}” em uma playlist", { title: video.title }));
  button.insertAdjacentHTML("beforeend", `<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="${ICON_PLAYLIST_ADD}"/></svg>`);
  setCardSaveState(button, savedIds.has(video.youtubeId));
  button.addEventListener("click", () => openSaveModal(video));
  return button;
}

function renderResults(videos) {
  resultsContainer.innerHTML = "";

  if (videos.length === 0) {
    emptyState.classList.remove("hidden");
    resultsCount.textContent = t("0 resultados");
    return;
  }

  emptyState.classList.add("hidden");
  resultsCount.textContent = countLabel(videos.length, "resultado", "resultados");
  const savedIds = savedVideoIds();

  videos.forEach(video => {
    // Link de verdade (abre em nova guia com Ctrl/Cmd+clique, botão do meio ou menu de contexto)
    const card = document.createElement("a");
    card.className = "video-card";
    card.href = buildUrl({ v: video.youtubeId || video.id });
    card.setAttribute("aria-label", t("Assistir {title}", { title: video.title }));

    card.innerHTML = `
      <div class="video-card-thumb-wrap">
        <img src="${video.thumbnail}" alt="${escapeHtml(video.title)}" class="video-card-thumb" loading="lazy" referrerpolicy="no-referrer">
        <span class="video-duration">${escapeHtml(video.duration)}</span>
      </div>
      <div class="video-card-details">
        <h3 class="video-card-title">${escapeHtml(video.title)}</h3>
        <div class="video-card-meta">
          <span>${escapeHtml(video.views)}</span>
          <span>•</span>
          <span>${escapeHtml(video.date)}</span>
        </div>
        <div class="video-card-channel">
          <img src="${escapeHtml(video.channelAvatar)}" alt="${escapeHtml(video.channel)}" class="channel-mini-avatar" referrerpolicy="no-referrer">
          <span class="channel-name">${escapeHtml(video.channel)}</span>
          <svg viewBox="0 0 24 24" class="badge-icon"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1 1.4-1.4 2.8 2.7 7.4-7.4 1.4 1.4-8.8 8.8z"/></svg>
        </div>
        <p class="video-card-desc">${escapeHtml(video.description)}</p>
      </div>
    `;

    // Clique normal navega dentro do app (sem recarregar); com modificador, deixa o navegador abrir o link
    card.addEventListener("click", (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      openVideoFromResults(video);
    });

    // O botão de salvar fica ao lado do link (um botão não pode ficar dentro de um <a>)
    const wrap = document.createElement("div");
    wrap.className = "video-card-wrap";
    wrap.append(card, createCardSaveButton(video, savedIds));
    resultsContainer.appendChild(wrap);
    localizeTitle(video, card);
  });
}

// Exibe a página `page` dos resultados da busca `term` (reaproveita a sessão se for a mesma busca)
async function showSearch(term, page) {
  state.currentQuery = term;
  state.currentPage = page;
  const token = ++searchToken;
  const reuse = !!searchSession && searchSession.query === term;
  const previousPage = reuse ? searchSession.page : null;
  showResultsLayout();
  setPageTitle(term);

  if (!reuse) {
    searchSession = null;
    resultsContainer.classList.add("hidden");
    paginationNav.classList.add("hidden");
    emptyState.classList.add("hidden");
    resultsHeading.textContent = `Buscando "${term}"...`;
    resultsCount.textContent = "";
    resultsHeader.classList.remove("hidden");

    let first;
    try {
      first = await searchYouTube(term);
    } catch (err) {
      if (token !== searchToken) return;
      resultsHeader.classList.add("hidden");
      setEmptyState(t("Não foi possível buscar"), t("O serviço de busca não respondeu. Tente novamente em instantes."));
      return;
    }
    if (token !== searchToken) return;
    searchSession = { query: term, items: first.items, nextpage: first.nextpage, page: 1 };
  }

  const session = searchSession;
  const needed = page * RESULTS_PER_PAGE;
  if (needed > session.items.length && session.nextpage) {
    paginationNav.querySelectorAll("button").forEach(b => (b.disabled = true));
    try {
      await ensureResults(session, needed);
    } catch (err) {
      if (token !== searchToken) return;
      showToast(t("Não foi possível carregar mais resultados."));
    }
    if (token !== searchToken) return;
  }

  // Sem resultados suficientes para essa página: usa a última existente
  const lastPage = Math.max(1, Math.ceil(session.items.length / RESULTS_PER_PAGE));
  session.page = Math.min(page, lastPage);
  state.currentPage = session.page;
  if (session.page !== page) syncUrl({ q: term, p: session.page });
  renderSearchPage();
  if (previousPage !== null && previousPage !== session.page) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Renderiza a página atual da sessão de busca
function renderSearchPage() {
  const session = searchSession;
  if (!session) return;

  if (session.items.length === 0) {
    resultsHeader.classList.add("hidden");
    resultsContainer.classList.add("hidden");
    paginationNav.classList.add("hidden");
    setEmptyState(t("Nenhum resultado encontrado"), t("Tente termos de pesquisa diferentes ou cole o link de um vídeo."));
    return;
  }

  const start = (session.page - 1) * RESULTS_PER_PAGE;
  const pageItems = session.items.slice(start, start + RESULTS_PER_PAGE);

  emptyState.classList.add("hidden");
  resultsHeading.textContent = `Resultados da pesquisa por "${session.query}"`;
  resultsHeader.classList.remove("hidden");
  resultsContainer.classList.remove("hidden");
  renderResults(pageItems);
  resultsCount.textContent = t("Página {n}", { n: session.page });
  renderPagination();
}

function renderPagination() {
  const session = searchSession;
  const loadedPages = Math.ceil(session.items.length / RESULTS_PER_PAGE);
  const hasNext = session.page < loadedPages || !!session.nextpage;

  if (loadedPages <= 1 && !hasNext) {
    paginationNav.classList.add("hidden");
    return;
  }

  const numbers = [];
  for (let n = 1; n <= loadedPages; n++) {
    numbers.push(
      `<button type="button" class="page-btn${n === session.page ? " active" : ""}" data-page="${n}" ` +
      `aria-label="${t("Página {n}", { n })}"${n === session.page ? ' aria-current="page"' : ""}>${n}</button>`
    );
  }

  paginationNav.innerHTML =
    `<button type="button" class="page-btn page-nav" data-page="${session.page - 1}" ${session.page <= 1 ? "disabled" : ""}>${t("Anterior")}</button>` +
    numbers.join("") +
    `<button type="button" class="page-btn page-nav" data-page="${session.page + 1}" ${hasNext ? "" : "disabled"}>${t("Próxima")}</button>`;
  paginationNav.classList.remove("hidden");
}

function setEmptyState(title, text) {
  emptyStateTitle.textContent = title;
  emptyStateText.textContent = text;
  emptyState.classList.remove("hidden");
}

// =========================================================
// Player de Vídeo
// =========================================================
function fillPlayerMetadata(video) {
  playerTitle.textContent = video.title;
  playerChannelAvatar.classList.toggle("hidden", !video.channelAvatar);
  playerChannelAvatar.src = video.channelAvatar || "";
  playerChannelAvatar.alt = video.channel;
  playerChannelName.textContent = video.channel;
  updateSubscribeButton(video);
  [playerChannelAvatar, playerChannelName].forEach(el => el.classList.toggle("channel-link", !!video.channelId));
  playerSubscribers.textContent = video.subscribers;
  playerViews.textContent = video.views;
  playerDate.textContent = video.date;
  playerTags.textContent = video.tags.join(" ");
  renderDescription(video.description);
}

// Descrição completa, views, data, inscritos e título localizado vêm da API própria.
// Se ela não responder, o título original vem do oEmbed (o Piped traz títulos em inglês).
const detailsCache = new Map();

function fetchVideoDetails(youtubeId) {
  if (!detailsCache.has(youtubeId)) {
    const request = fetchApiJson(`/api/video/${encodeURIComponent(youtubeId)}`)
      .then(({ data }) => data)
      .catch(() => null);
    detailsCache.set(youtubeId, request);
    request.then(data => { if (!data) detailsCache.delete(youtubeId); });
  }
  return detailsCache.get(youtubeId);
}

function applyVideoDetails(video, d) {
  video.title = d.title || video.title;
  video.titleLocalized = true;
  if (d.description) video.description = d.description;
  if (d.viewsText) video.views = d.viewsText;
  if (d.publishedRelative || d.published) video.date = d.publishedRelative || d.published;
  if (d.subscribers) video.subscribers = d.subscribers.replace(/\u00a0/g, " ");
  if (d.channel) video.channel = d.channel;
  if (d.channelAvatar) video.channelAvatar = d.channelAvatar;
  if (d.channelId) video.channelId = d.channelId;
}

// Vídeo aberto por link direto (?v=) ou por uma playlist não passou por uma busca, então faltam a
// foto do canal, as views, a data e a descrição. O Piped tem tudo isso nos resultados de busca:
// pesquisa pelo título (que o oEmbed já deu) e pega o resultado que tem o mesmo id.
async function enrichFromSearch(video) {
  if (!video.youtubeId || video.channelAvatar || video.fromApi || video.searchEnriched) return;
  video.searchEnriched = true;
  const queries = [video.title, `${video.title} ${video.channel}`]
    .filter(q => q && !q.startsWith(t("Vídeo do YouTube") + " ("))
    .map(q => q.trim().slice(0, 150));

  for (const query of queries) {
    try {
      const page = await fetchPipedPage(`/search?q=${encodeURIComponent(query)}&filter=videos`);
      const found = page.items.find(v => v.youtubeId === video.youtubeId);
      if (!found) continue;
      video.channelAvatar = video.channelAvatar || found.channelAvatar;
      video.channelId = video.channelId || found.channelId;
      video.views = video.views || found.views;
      video.date = video.date || found.date;
      video.description = video.description || found.description;
      video.duration = video.duration || found.duration;
      videoCache.set(video.youtubeId, video); // a busca guardou o objeto dela; mantém o do player
      return;
    } catch (err) { /* tenta a próxima consulta */ }
  }
}

async function enrichPlayer(video) {
  // Detalhes completos (descrição inteira, no idioma original) só existem na API própria; se ela
  // não responder, o Piped dá só o trecho curto da descrição.
  const details = video.youtubeId && HAS_API ? await fetchVideoDetails(video.youtubeId) : null;
  if (details) {
    applyVideoDetails(video, details);
  } else if (!video.titleLocalized) {
    const info = await fetchOEmbed(video.youtubeId);
    if (info && info.title) video.title = info.title;
  }
  if (state.currentVideo !== video) return;
  fillPlayerMetadata(video);
  setPageTitle(video.title);

  await enrichFromSearch(video);
  if (state.currentVideo !== video) return;
  fillPlayerMetadata(video);
}

// Player (Vidstack + Plyr) carregado sob demanda; se falhar, usa o iframe/<video> simples
let playerApi = null;

function clearPlayer() {
  if (playerApi) playerApi.destroyPlayer();
  videoFrameWrapper.replaceChildren();
}

function mountFallbackPlayer(video) {
  videoFrameWrapper.replaceChildren();
  if (video.youtubeId) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
    iframe.title = video.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoFrameWrapper.appendChild(iframe);
  } else {
    const videoElem = document.createElement("video");
    videoElem.src = video.videoUrl;
    videoElem.poster = video.thumbnail;
    videoElem.controls = true;
    videoElem.autoplay = true;
    videoElem.playsInline = true;
    videoFrameWrapper.appendChild(videoElem);
  }
}

async function mountVideoPlayer(video) {
  clearPlayer();
  try {
    playerApi = playerApi || await import("./player/player.js");
    if (state.currentVideo !== video) return;
    await playerApi.mountPlayer(videoFrameWrapper, {
      youtubeId: video.youtubeId,
      src: video.videoUrl,
      title: video.title,
      poster: video.youtubeId ? undefined : video.thumbnail
    });
  } catch (err) {
    console.warn("Player personalizado indisponível, usando o padrão:", err);
    if (state.currentVideo === video) mountFallbackPlayer(video);
  }
}

function openVideoPlayer(video) {
  state.currentVideo = video;
  descExpanded = false;
  setPageTitle(video.title);

  // Configura o player de mídia
  mountVideoPlayer(video);

  // Metadados do vídeo
  fillPlayerMetadata(video);

  // Detalhes completos (API própria) ou, sem ela, título no idioma original via oEmbed
  if (video.youtubeId) enrichPlayer(video);

  updateSaveButton();

  // Carrega comentários
  loadComments(video);


  // Exibe a tela do player e esconde os resultados
  resultsView.classList.add("hidden");
  playerView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================
// Descrição com links clicáveis
// =========================================================
const URL_PATTERN = /https?:\/\/[^\s<>"']+/gi;

// Preenche `container` com texto + <a> para cada URL, sem usar innerHTML (o texto vem de fora)
function appendLinkedText(container, text) {
  let last = 0;
  for (const match of (text || "").matchAll(URL_PATTERN)) {
    // Pontuação final da frase não faz parte do link
    const url = match[0].replace(/[.,;:!?)\]]+$/, "");
    if (match.index > last) container.append(text.slice(last, match.index));

    const a = document.createElement("a");
    a.href = url;
    a.textContent = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer nofollow";
    a.className = "description-link";
    container.append(a);

    last = match.index + url.length;
  }
  if (text && last < text.length) container.append(text.slice(last));
}

// Descrição recolhida em poucas linhas, com "Ver mais" / "Ver menos" (o botão só aparece se o texto
// não couber recolhido). Medir exige o player visível, por isso também roda quando ele muda de tamanho.
let descExpanded = false;
let descOverflows = false;

function syncDescriptionToggle() {
  if (!descExpanded) descOverflows = playerDescription.scrollHeight > playerDescription.clientHeight + 1;
  playerDescription.classList.toggle("expanded", descExpanded);
  descToggleBtn.classList.toggle("hidden", !(descOverflows || descExpanded));
  descToggleBtn.textContent = t(descExpanded ? "Ver menos" : "Ver mais");
  descToggleBtn.setAttribute("aria-expanded", String(descExpanded));
}

function renderDescription(text) {
  playerDescription.textContent = "";
  playerDescription.classList.toggle("hidden", !text);
  appendLinkedText(playerDescription, text);
  syncDescriptionToggle();
  requestAnimationFrame(syncDescriptionToggle);
}

descToggleBtn.addEventListener("click", () => {
  descExpanded = !descExpanded;
  syncDescriptionToggle();
});
if (window.ResizeObserver) new ResizeObserver(syncDescriptionToggle).observe(playerDescription);

// =========================================================
// Comentários (somente leitura)
// =========================================================
const LIKE_ICON = '<svg viewBox="0 0 24 24" class="icon comment-like-icon"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>';

// Estado dos comentários do vídeo aberto
let commentsState = null;
let commentsToken = 0;

function formatCount(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(".", ",") + " mi";
  if (num >= 1000) return Math.round(num / 1000) + " mil";
  return String(num);
}

function formatCommentTime(text) {
  const m = /^(\d+)\s+(second|minute|hour|day|week|month|year)s?\s+ago(.*)$/i.exec(text || "");
  if (!m) return text || "";
  return relativeTime(-Number(m[1]), m[2].toLowerCase()) + (/edited/i.test(m[3]) ? " " + t("(editado)") : "");
}

function mapPipedComment(c) {
  return {
    id: c.commentId,
    author: c.author || "",
    avatar: directImageUrl(c.thumbnail),
    time: formatCommentTime(c.commentedTime),
    text: String(c.commentText || "").replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, ""),
    likes: c.likeCount || 0,
    replyCount: c.replyCount || 0,
    replies: c.repliesPage ? { src: "piped", token: c.repliesPage } : null
  };
}

// Comentário no formato da API própria (tempo e curtidas já vêm formatados)
function mapApiComment(c, base) {
  return {
    id: c.id,
    author: c.author || "",
    avatar: c.avatar || "",
    time: c.time || "",
    text: c.text || "",
    likes: c.likes || "",
    replyCount: c.replyCount || 0,
    replies: c.repliesToken ? { src: "api", base, token: c.repliesToken } : null
  };
}

// Retorna { data, base }. Com `accept`, prefere a primeira instância cuja resposta passe no teste
// (usa a última resposta válida como reserva se nenhuma passar).
async function fetchPipedJson(path, { accept, preferred } = {}) {
  const bases = preferred
    ? [preferred, ...PIPED_INSTANCES.filter(b => b !== preferred)]
    : PIPED_INSTANCES;
  let fallback = null;
  let lastError;
  for (const base of bases) {
    try {
      const res = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!accept || accept(data)) return { data, base };
      fallback = fallback || { data, base };
    } catch (err) {
      lastError = err;
    }
  }
  if (fallback) return fallback;
  throw lastError || new Error("Nenhuma instância disponível");
}

// Algumas instâncias não devolvem a foto de quem comentou; prefere uma que devolva
let commentsBase = null;

async function fetchComments(path) {
  const hasPhotos = d => d.disabled || !(d.comments || []).length || d.comments.some(c => c.thumbnail);
  const { data, base } = await fetchPipedJson(path, { accept: hasPhotos, preferred: commentsBase });
  if (hasPhotos(data)) commentsBase = base;
  return data;
}

async function fetchApiCommentsPage(videoId, cursor, bases) {
  const path = cursor
    ? `/api/comments/${encodeURIComponent(videoId)}?token=${encodeURIComponent(cursor.token)}`
    : `/api/comments/${encodeURIComponent(videoId)}`;
  const { data, base } = await fetchApiJson(path, cursor && cursor.base, bases);
  return {
    disabled: !!data.disabled,
    total: data.total ? String(data.total) : null,
    items: (data.items || []).map(c => mapApiComment(c, base)),
    next: data.next ? { src: "api", base, token: data.next } : null
  };
}

async function fetchPipedCommentsPage(videoId, cursor) {
  const path = cursor
    ? `/nextpage/comments/${encodeURIComponent(videoId)}?nextpage=${encodeURIComponent(cursor.token)}`
    : `/comments/${encodeURIComponent(videoId)}`;
  const data = await fetchComments(path);
  return {
    disabled: !!data.disabled,
    total: Number.isFinite(data.commentCount) && data.commentCount >= 0 ? data.commentCount : null,
    items: (data.comments || []).map(mapPipedComment),
    next: data.nextpage ? { src: "piped", token: data.nextpage } : null
  };
}

// Cursor de continuação: { src: "api" | "piped", token, base? } (null = primeira página).
// A primeira página tenta a VPS, depois o Piped e por fim a API reserva; as seguintes seguem a mesma fonte.
async function fetchCommentsPage(videoId, cursor) {
  if (cursor && cursor.src === "api") return fetchApiCommentsPage(videoId, cursor);
  if (cursor) return fetchPipedCommentsPage(videoId, cursor);

  let lastError;
  if (API_BASES.length) {
    try { return await fetchApiCommentsPage(videoId, null, API_BASES); } catch (err) { lastError = err; }
  }
  try {
    return await fetchPipedCommentsPage(videoId, null);
  } catch (err) { lastError = err; }
  if (API_LATE.length) return fetchApiCommentsPage(videoId, null, API_LATE);
  throw lastError;
}

async function fetchRepliesPage(videoId, cursor) {
  if (cursor.src === "api") {
    const { data, base } = await fetchApiJson(`/api/replies?token=${encodeURIComponent(cursor.token)}`, cursor.base);
    return {
      items: (data.items || []).map(c => mapApiComment(c, base)),
      next: data.next ? { src: "api", base, token: data.next } : null
    };
  }
  const data = await fetchComments(
    `/nextpage/comments/${encodeURIComponent(videoId)}?nextpage=${encodeURIComponent(cursor.token)}`
  );
  return {
    items: (data.comments || []).map(mapPipedComment),
    next: data.nextpage ? { src: "piped", token: data.nextpage } : null
  };
}

function setCommentsMessage(text) {
  commentsList.innerHTML = "";
  const p = document.createElement("p");
  p.className = "comments-message";
  p.textContent = text;
  commentsList.appendChild(p);
  loadMoreCommentsBtn.classList.add("hidden");
}

function updateCommentsHeader() {
  const total = commentsState.total ?? commentsState.items.length;
  const label = typeof total === "number" ? total.toLocaleString(window.HOOTUBE_LOCALE) : String(total).replace(/\u00a0/g, " ");
  const singular = total === 1 || total === "1";
  commentsCountText.textContent = `${label} ${singular ? t("Comentário") : t("Comentários")}`;
}

function createCommentElement(comment, isReply = false) {
  const item = document.createElement("div");
  item.className = isReply ? "comment-item reply" : "comment-item";

  const initial = (comment.author.replace(/^@/, "")[0] || "?").toUpperCase();
  let avatar;
  if (comment.avatar) {
    avatar = document.createElement("img");
    // Sem referrer: o servidor de imagens do Google bloqueia (429) parte das requisições vindas de localhost
    avatar.referrerPolicy = "no-referrer";
    avatar.src = comment.avatar;
    avatar.alt = "";
    avatar.className = "comment-item-avatar";
    // O servidor de imagens do Google limita rajadas: tenta de novo uma vez antes de usar a inicial
    avatar.addEventListener("error", () => {
      if (avatar.dataset.retried) {
        avatar.replaceWith(createAvatarFallback(initial));
        return;
      }
      avatar.dataset.retried = "1";
      setTimeout(() => {
        avatar.src = "";
        avatar.src = comment.avatar;
      }, 1500 + Math.random() * 2500);
    });
  } else {
    avatar = createAvatarFallback(initial);
  }

  const body = document.createElement("div");
  body.className = "comment-body";
  body.innerHTML = `
    <div class="comment-author-line">
      <span class="comment-author">${escapeHtml(comment.author)}</span>
      <span class="comment-time">${escapeHtml(comment.time)}</span>
    </div>
    <p class="comment-content"></p>
    <div class="comment-toolbar">${LIKE_ICON}<span class="comment-likes">${escapeHtml(typeof comment.likes === "string" ? comment.likes || "0" : formatCount(comment.likes || 0))}</span></div>
  `;

  appendLinkedText(body.querySelector(".comment-content"), comment.text);

  if (!isReply) attachReplies(body, comment);

  item.append(avatar, body);
  return item;
}

// Botão "Ver N respostas" + lista de respostas carregada sob demanda
function attachReplies(body, comment) {
  if (!comment.replyCount || !comment.replies || !commentsState || !commentsState.videoId) return;

  const videoId = commentsState.videoId;
  const token = commentsToken;
  let next = comment.replies;
  let loaded = false;
  let loading = false;
  let open = false;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "replies-toggle";

  const box = document.createElement("div");
  box.className = "replies hidden";
  const list = document.createElement("div");
  list.className = "replies-list";
  const more = document.createElement("button");
  more.type = "button";
  more.className = "replies-toggle hidden";
  more.textContent = t("Mostrar mais respostas");
  box.append(list, more);

  const label = countLabel(comment.replyCount, "resposta", "respostas");
  const renderToggle = () => { toggle.textContent = t(open ? "Ocultar {label}" : "Ver {label}", { label }); };
  renderToggle();

  async function loadReplies() {
    if (loading || !next) return;
    loading = true;
    toggle.disabled = more.disabled = true;
    try {
      const page = await fetchRepliesPage(videoId, next);
      if (token !== commentsToken) return;
      page.items.forEach(r => list.appendChild(createCommentElement(r, true)));
      next = page.items.length ? page.next : null;
      loaded = true;
    } catch (err) {
      if (token === commentsToken) showToast(t("Não foi possível carregar as respostas."));
    } finally {
      loading = false;
      toggle.disabled = more.disabled = false;
      more.classList.toggle("hidden", !next || !loaded);
    }
  }

  toggle.addEventListener("click", () => {
    open = !open;
    box.classList.toggle("hidden", !open);
    renderToggle();
    if (open && !loaded) loadReplies();
  });
  more.addEventListener("click", loadReplies);

  body.append(toggle, box);
}

function createAvatarFallback(initial) {
  const div = document.createElement("div");
  div.className = "comment-item-avatar comment-avatar-fallback";
  div.textContent = initial;
  return div;
}

function appendComments(comments) {
  comments.forEach(c => commentsList.appendChild(createCommentElement(c)));
}

// Abre a seção de comentários do vídeo (API própria ou Piped; exemplos locais direto)
async function loadComments(video) {
  const token = ++commentsToken;
  commentsList.innerHTML = "";
  loadMoreCommentsBtn.classList.add("hidden");

  if (!(video.type === "youtube" || video.youtubeId)) {
    const local = video.comments || [];
    commentsState = { items: local, total: local.length, nextpage: null, videoId: null };
    updateCommentsHeader();
    if (local.length === 0) setCommentsMessage(t("Nenhum comentário."));
    else appendComments(local);
    return;
  }

  const videoId = video.youtubeId || video.id.replace("yt-", "");
  commentsState = { items: [], total: null, nextpage: null, videoId };
  commentsCountText.textContent = t("Comentários");
  setCommentsMessage(t("Carregando comentários..."));

  try {
    const page = await fetchCommentsPage(videoId, null);
    if (token !== commentsToken) return;
    if (page.disabled) {
      commentsCountText.textContent = t("Comentários");
      setCommentsMessage(t("Os comentários estão desativados para este vídeo."));
      return;
    }
    commentsState.items = page.items;
    commentsState.total = page.total;
    commentsState.nextpage = page.next;
    updateCommentsHeader();
    commentsList.innerHTML = "";
    if (commentsState.items.length === 0) {
      setCommentsMessage(t("Nenhum comentário."));
      return;
    }
    appendComments(commentsState.items);
    loadMoreCommentsBtn.classList.toggle("hidden", !commentsState.nextpage);
  } catch (err) {
    if (token !== commentsToken) return;
    commentsCountText.textContent = t("Comentários");
    setCommentsMessage(t("Não foi possível carregar os comentários."));
  }
}

async function loadMoreComments() {
  const st = commentsState;
  if (!st || !st.nextpage || loadMoreCommentsBtn.disabled) return;

  const token = commentsToken;
  loadMoreCommentsBtn.disabled = true;
  loadMoreCommentsBtn.textContent = t("Carregando...");
  try {
    const page = await fetchCommentsPage(st.videoId, st.nextpage);
    if (token !== commentsToken) return;
    const seen = new Set(st.items.map(c => c.id));
    const fresh = page.items.filter(c => !seen.has(c.id));
    st.items.push(...fresh);
    st.nextpage = fresh.length ? page.next : null;
    appendComments(fresh);
    loadMoreCommentsBtn.classList.toggle("hidden", !st.nextpage);
  } catch (err) {
    if (token === commentsToken) showToast(t("Não foi possível carregar mais comentários."));
  } finally {
    loadMoreCommentsBtn.disabled = false;
    loadMoreCommentsBtn.textContent = t("Mostrar mais comentários");
  }
}

function showInitialFeed() {
  searchToken++;
  searchSession = null;
  paginationNav.classList.add("hidden");
  clearPlayer();
  playerView.classList.add("hidden");
  resultsView.classList.remove("hidden");
  renderHomeContent();
  channelPage.classList.add("hidden");
  channelMoreBtn.classList.add("hidden");
  resultsHeader.classList.add("hidden");
  resultsContainer.classList.add("hidden");
  emptyState.classList.add("hidden");
  state.currentVideo = null;
  state.currentQuery = "";
  state.currentPage = 1;
  setPageTitle("");
}

function showResultsLayout() {
  clearPlayer();
  playerView.classList.add("hidden");
  resultsView.classList.remove("hidden");
  initialFeedState.classList.add("hidden");
  playlistsHome.classList.add("hidden");
  subscriptionsHome.classList.add("hidden");
  playlistPage.classList.add("hidden");
  channelPage.classList.add("hidden");
  channelMoreBtn.classList.add("hidden");
  state.currentVideo = null;
}

// =========================================================
// Roteamento por URL, uma por etapa:
//   busca:  ?q=pesquisa  (e &p=pagina a partir da 2ª página)
//   vídeo:  ?v=video     (sem os parâmetros da busca)
// =========================================================
const YOUTUBE_ID_PATTERN = /^[\w-]{11}$/;

function setPageTitle(text) {
  document.title = text ? `${text} - HooTube` : "HooTube";
}

function buildUrl({ q = "", p = 1, v = "", pl = "", c = "" } = {}) {
  const params = new URLSearchParams();
  if (v) {
    params.set("v", v);
  } else if (pl) {
    params.set("playlist", pl);
  } else if (c) {
    params.set("channel", c);
  } else if (q) {
    params.set("q", q);
    if (p > 1) params.set("p", String(p));
  }
  const qs = params.toString();
  return window.location.pathname + (qs ? `?${qs}` : "");
}

const CHANNEL_ID_PATTERN = /^UC[\w-]{20,}$/;

function readRoute() {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("p"), 10);
  return {
    q: (params.get("q") || "").trim(),
    p: page > 0 ? page : 1,
    v: (params.get("v") || "").trim(),
    pl: (params.get("playlist") || "").trim(),
    c: CHANNEL_ID_PATTERN.test((params.get("channel") || "").trim()) ? params.get("channel").trim() : ""
  };
}

// Atualiza só a URL (sem renderizar)
function syncUrl(route, extraState = null) {
  history.replaceState(extraState || history.state, "", buildUrl(route));
}

// Muda a URL (entrada nova no histórico, ou troca a atual) e renderiza a rota
function navigate(route, { replace = false, historyState = null } = {}) {
  const url = buildUrl(route);
  const current = window.location.pathname + window.location.search;
  if (url !== current) {
    history[replace ? "replaceState" : "pushState"](historyState, "", url);
  }
  return applyRoute();
}

function createBasicYoutubeVideo(youtubeId, overrides = {}) {
  return {
    id: "yt-" + youtubeId,
    youtubeId,
    type: "youtube",
    title: t("Vídeo do YouTube") + " (" + youtubeId + ")",
    thumbnail: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
    duration: "",
    channel: t("Canal no YouTube"),
    channelAvatar: "",
    subscribers: "",
    views: "",
    date: "",
    category: "YouTube",
    tags: ["#YouTube"],
    description: "",
    likes: 0,
    comments: [],
    ...overrides
  };
}

// Descobre o vídeo da rota: exemplos locais, cache da busca ou dados básicos via oEmbed
async function resolveVideo(videoId) {
  const sample = VIDEO_DATABASE.find(v => v.id === videoId);
  if (sample) return sample;
  if (!YOUTUBE_ID_PATTERN.test(videoId)) return null;
  if (videoCache.has(videoId)) return videoCache.get(videoId);

  const info = await fetchOEmbed(videoId);
  const video = createBasicYoutubeVideo(videoId, info ? {
    title: info.title || undefined,
    channel: info.author_name || undefined
  } : {});
  videoCache.set(videoId, video);
  return video;
}

let routeToken = 0;

async function applyRoute() {
  const route = readRoute();
  const { v } = route;
  const token = ++routeToken;

  // A URL do vídeo não leva a busca; usa a busca em memória (se houver) para o botão de voltar
  const q = v ? (searchSession ? searchSession.query : "") : route.q;
  const p = v ? (searchSession ? searchSession.page : 1) : route.p;

  // Ao abrir um vídeo a barra de busca é limpa; nas buscas ela mostra o termo
  const shown = v ? "" : q;
  searchInput.value = shown;
  clearSearchBtn.classList.toggle("hidden", !shown);
  state.currentQuery = q;
  state.currentPage = p;

  if (v) {
    searchToken++;
    const video = await resolveVideo(v);
    if (token !== routeToken) return;
    if (!video) {
      showToast(t("Vídeo inválido."));
      navigate({ q, p }, { replace: true });
      return;
    }
    openVideoPlayer(video);
    const origem = history.state || {};
    backToResultsBtn.classList.toggle("hidden", !(origem.fromPlaylist || origem.fromChannel || searchSession || origem.fromSearch));
    backToResultsBtn.querySelector("span").textContent = origem.fromChannel ? t("Voltar para o canal") : origem.fromPlaylist ? t("Voltar para a playlist") : t("Voltar para a pesquisa");
    return;
  }

  if (route.pl) {
    showPlaylistPage(route.pl);
    return;
  }

  if (route.c) {
    showChannelPage(route.c);
    return;
  }

  if (q) {
    await showSearch(q, p);
  } else {
    showInitialFeed();
  }
}

// Clique num resultado: guarda no histórico que veio da busca (permite "voltar" real)
function openVideoFromResults(video) {
  const channelId = readRoute().c;
  if (channelId) {
    navigate({ v: video.youtubeId || video.id }, { historyState: { fromChannel: channelId } });
    return;
  }
  navigate(
    { q: state.currentQuery, p: state.currentPage, v: video.youtubeId || video.id },
    { historyState: { fromSearch: true } }
  );
}

// =========================================================
// Event Listeners
// =========================================================

// Busca
// =========================================================
// Pesquisas recentes: até 10, guardadas localmente (localStorage), com "x" para remover
// =========================================================
const RECENT_KEY = "hootube.pesquisasRecentes";
const RECENT_MAX = 10;
let recentMemory = [];   // reserva caso o localStorage esteja bloqueado (aba privada, etc.)
let recentActive = -1;   // item destacado pelo teclado

const CLOCK_ICON = '<svg viewBox="0 0 24 24" class="icon recent-icon" aria-hidden="true"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>';
const CLOSE_ICON = '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

function loadRecent() {
  try {
    const list = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    if (Array.isArray(list)) return list.filter(t => typeof t === "string" && t.trim()).slice(0, RECENT_MAX);
  } catch (err) { /* localStorage indisponível ou conteúdo inválido */ }
  return recentMemory;
}

function storeRecent(list) {
  recentMemory = list;
  try { localStorage.setItem(RECENT_KEY, JSON.stringify(list)); } catch (err) { /* sem espaço ou bloqueado */ }
}

// A pesquisa mais recente vai para o topo; repetidas (sem diferenciar maiúsculas) não duplicam
function saveRecent(term) {
  const text = term.trim();
  if (!text) return;
  const key = text.toLowerCase();
  storeRecent([text, ...loadRecent().filter(item => item.toLowerCase() !== key)].slice(0, RECENT_MAX));
}

function removeRecent(term) {
  storeRecent(loadRecent().filter(item => item !== term));
}

// Recentes que combinam com o que está digitado (todas, se o campo estiver vazio)
function matchingRecent() {
  const typed = searchInput.value.trim().toLowerCase();
  const all = loadRecent();
  return typed ? all.filter(item => item.toLowerCase().includes(typed) && item.toLowerCase() !== typed) : all;
}

function hideRecent() {
  recentSearches.classList.add("hidden");
  searchInput.setAttribute("aria-expanded", "false");
  searchInput.removeAttribute("aria-activedescendant");
  recentActive = -1;
}

function renderRecent() {
  const items = matchingRecent();
  recentSearches.replaceChildren();
  recentActive = -1;
  if (!items.length || document.activeElement !== searchInput) {
    hideRecent();
    return;
  }

  items.forEach((term, index) => {
    const li = document.createElement("li");
    li.className = "recent-item";
    li.id = `recentItem${index}`;
    li.setAttribute("role", "option");
    li.dataset.term = term;
    li.insertAdjacentHTML("beforeend", CLOCK_ICON);

    const text = document.createElement("span");
    text.className = "recent-text";
    text.textContent = term;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "recent-remove";
    remove.setAttribute("aria-label", t("Remover \"{term}\" das pesquisas recentes", { term }));
    remove.title = "Remover";
    remove.insertAdjacentHTML("beforeend", CLOSE_ICON);

    li.append(text, remove);
    recentSearches.appendChild(li);
  });

  recentSearches.classList.remove("hidden");
  searchInput.setAttribute("aria-expanded", "true");
}

function setRecentActive(index) {
  const items = [...recentSearches.children];
  items.forEach(item => item.classList.remove("active"));
  recentActive = index;
  if (index < 0 || !items[index]) {
    searchInput.removeAttribute("aria-activedescendant");
    return;
  }
  items[index].classList.add("active");
  searchInput.setAttribute("aria-activedescendant", items[index].id);
  items[index].scrollIntoView({ block: "nearest" });
}

function searchRecent(term) {
  searchInput.value = term;
  hideRecent();
  searchForm.requestSubmit();
}

// Mantém o foco no campo ao clicar na lista (senão o campo perde o foco e a lista some antes do clique)
recentSearches.addEventListener("mousedown", e => e.preventDefault());

recentSearches.addEventListener("click", e => {
  const item = e.target.closest(".recent-item");
  if (!item) return;
  if (e.target.closest(".recent-remove")) {
    removeRecent(item.dataset.term);
    renderRecent();
  } else {
    searchRecent(item.dataset.term);
  }
});

searchInput.addEventListener("focus", renderRecent);
searchInput.addEventListener("click", () => { if (recentSearches.classList.contains("hidden")) renderRecent(); });
searchInput.addEventListener("blur", () => setTimeout(() => { if (document.activeElement !== searchInput) hideRecent(); }, 150));

searchInput.addEventListener("keydown", e => {
  const open = !recentSearches.classList.contains("hidden");
  const count = recentSearches.children.length;
  if (e.key === "Escape" && open) {
    hideRecent();
  } else if ((e.key === "ArrowDown" || e.key === "ArrowUp") && count) {
    e.preventDefault();
    if (!open) { renderRecent(); return; }
    const step = e.key === "ArrowDown" ? 1 : -1;
    setRecentActive((recentActive + step + count + (recentActive < 0 && step < 0 ? 1 : 0)) % count);
  } else if (e.key === "Enter" && open && recentActive >= 0) {
    e.preventDefault();
    searchRecent(recentSearches.children[recentActive].dataset.term);
  } else if (e.key === "Delete" && e.shiftKey && open && recentActive >= 0) {
    e.preventDefault();
    removeRecent(recentSearches.children[recentActive].dataset.term);
    renderRecent();
  }
});

function goHome() {
  searchInput.value = "";
  clearSearchBtn.classList.add("hidden");
  const { q, v, pl, c } = readRoute();
  if (q || v || pl || c) navigate({});
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const term = searchInput.value.trim();
  hideRecent();
  if (!term) return; // campo vazio: não faz nada (o conteúdo na tela continua)
  // Link (ou ID) de vídeo colado vai direto para o player.
  // Um texto de 11 caracteres só conta como ID se o vídeo existir; senão é uma busca.
  const youtubeId = extractYouTubeId(term);
  if (youtubeId && (/youtu/i.test(term) || await fetchOEmbed(youtubeId))) {
    navigate({ v: youtubeId });
  } else {
    saveRecent(term);
    navigate({ q: term });
  }
  // No celular, fecha o teclado para ver os resultados
  if (window.matchMedia("(pointer: coarse)").matches) searchInput.blur();
});

// Apagar o texto só esvazia o campo: os resultados (ou o vídeo) na tela não mudam
searchInput.addEventListener("input", () => {
  clearSearchBtn.classList.toggle("hidden", searchInput.value.trim().length === 0);
  renderRecent();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearSearchBtn.classList.add("hidden");
  searchInput.focus();
  renderRecent();
});

// Paginação
paginationNav.addEventListener("click", (e) => {
  const btn = e.target.closest(".page-btn");
  if (!btn || btn.disabled) return;
  if (searchSession) navigate({ q: searchSession.query, p: Number(btn.dataset.page) });
});

// Logo Início
homeLogo.href = buildUrl({}); // raiz do site (abre certo com Ctrl/botão do meio)
homeLogo.addEventListener("click", (e) => {
  if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  goHome();
});

// Voltar da página do player para a busca
backToResultsBtn.addEventListener("click", () => {
  if (history.state && (history.state.fromSearch || history.state.fromPlaylist || history.state.fromChannel)) {
    history.back();
  } else if (searchSession) {
    navigate({ q: searchSession.query, p: searchSession.page });
  } else {
    navigate({});
  }
});



// Compartilhar
shareBtn.addEventListener("click", async () => {
  // Link limpo do vídeo (sem a pesquisa)
  const { v } = readRoute();
  const url = window.location.href.split(/[?#]/)[0] + (v ? `?v=${encodeURIComponent(v)}` : "");
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      showToast(t("Link do vídeo copiado para a área de transferência!"));
    } else {
      showToast(t("Link: {url}", { url }));
    }
  } catch (err) {
    showToast(t("Link copiado: {url}", { url }));
  }
});

// Carregar mais comentários
loadMoreCommentsBtn.addEventListener("click", loadMoreComments);

// Reset Search
resetSearchBtn.addEventListener("click", goHome);

// Tema (escuro / claro): a escolha fica guardada localmente
const THEME_KEY = "hootube.tema";
const THEME_ICON_DARK = `<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>`;
const THEME_ICON_LIGHT = `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>`;

function applyTheme(dark) {
  state.isDarkTheme = dark;
  document.body.classList.toggle("light-theme", !dark);
  document.body.classList.toggle("dark-theme", dark);
  document.getElementById("themeIcon").innerHTML = dark ? THEME_ICON_DARK : THEME_ICON_LIGHT;
}

try {
  if (localStorage.getItem(THEME_KEY) === "claro") applyTheme(false);
} catch (err) { /* localStorage indisponível: fica no escuro */ }

themeToggleBtn.addEventListener("click", () => {
  applyTheme(!state.isDarkTheme);
  try { localStorage.setItem(THEME_KEY, state.isDarkTheme ? "escuro" : "claro"); } catch (err) { /* sem espaço ou bloqueado */ }
  showToast(t(state.isDarkTheme ? "Tema escuro ativado" : "Tema claro ativado"));
});

// Voltar / avançar / atualizar: a URL é a fonte da verdade
window.addEventListener("popstate", applyRoute);

// =========================================================
// Playlists: guardadas localmente (localStorage), mostradas na tela inicial
//   playlist = { id, name, createdAt, videos: [{ id, title, channel, duration, savedAt }] }
// =========================================================
const PLAYLISTS_KEY = "hootube.playlists";
const PLAYLIST_NAME_MAX = 60;
const PLAYLISTS_MAX = 100;       // limites também protegem contra arquivos de importação absurdos
const PLAYLIST_VIDEOS_MAX = 500;
const IMPORT_MAX_BYTES = 2 * 1024 * 1024;
let playlistsMemory = [];        // reserva caso o localStorage esteja bloqueado

const TRASH_ICON = '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>';
const ICON_PLAYLIST_ADD = "M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z";
const ICON_PLAYLIST_CHECK = "M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z";

function cleanText(value, max = 200) {
  return String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function newId() {
  return (globalThis.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

// Valida e normaliza (dados vindos do armazenamento ou de um arquivo importado nunca são confiáveis)
function sanitizeVideoEntry(entry) {
  const id = entry && typeof entry.id === "string" ? entry.id.trim() : "";
  if (!YOUTUBE_ID_PATTERN.test(id)) return null;
  return {
    id,
    title: cleanText(entry.title) || t("Vídeo do YouTube"),
    channel: cleanText(entry.channel, 100),
    duration: cleanText(entry.duration, 12),
    savedAt: Number.isFinite(entry.savedAt) ? entry.savedAt : Date.now()
  };
}

function sanitizePlaylist(item) {
  const name = cleanText(item && item.name, PLAYLIST_NAME_MAX);
  if (!name) return null;
  const seen = new Set();
  const videos = (Array.isArray(item.videos) ? item.videos : [])
    .map(sanitizeVideoEntry)
    .filter(v => v && !seen.has(v.id) && seen.add(v.id))
    .slice(0, PLAYLIST_VIDEOS_MAX);
  return {
    id: cleanText(item.id, 64) || newId(),
    name,
    createdAt: Number.isFinite(item.createdAt) ? item.createdAt : Date.now(),
    videos
  };
}

function loadPlaylists() {
  try {
    const list = JSON.parse(localStorage.getItem(PLAYLISTS_KEY) || "[]");
    if (Array.isArray(list)) return list.map(sanitizePlaylist).filter(Boolean).slice(0, PLAYLISTS_MAX);
  } catch (err) { /* localStorage indisponível ou conteúdo inválido */ }
  return playlistsMemory;
}

function persistPlaylists(list) {
  playlistsMemory = list;
  try {
    localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(list));
  } catch (err) {
    showToast(t("Não foi possível guardar as playlists localmente."));
  }
}

function videoToEntry(video) {
  return sanitizeVideoEntry({
    id: video.youtubeId,
    title: video.title,
    channel: video.channel,
    duration: video.duration,
    savedAt: Date.now()
  });
}

// Cria a playlist; se já existir uma com o mesmo nome (sem diferenciar maiúsculas), reaproveita
function createPlaylist(name) {
  const clean = cleanText(name, PLAYLIST_NAME_MAX);
  if (!clean) return null;
  const list = loadPlaylists();
  const existing = list.find(p => p.name.toLowerCase() === clean.toLowerCase());
  if (existing) return existing;
  if (list.length >= PLAYLISTS_MAX) {
    showToast(t("Limite de {n} playlists atingido.", { n: PLAYLISTS_MAX }));
    return null;
  }
  const playlist = { id: newId(), name: clean, createdAt: Date.now(), videos: [] };
  list.push(playlist);
  persistPlaylists(list);
  return playlist;
}

function playlistsWithVideo(youtubeId) {
  return loadPlaylists().filter(p => p.videos.some(v => v.id === youtubeId));
}

function setVideoInPlaylist(playlistId, video, present) {
  const list = loadPlaylists();
  const playlist = list.find(p => p.id === playlistId);
  const entry = videoToEntry(video);
  if (!playlist || !entry) return false;
  const has = playlist.videos.some(v => v.id === entry.id);
  if (present && !has) {
    if (playlist.videos.length >= PLAYLIST_VIDEOS_MAX) {
      showToast(t("Esta playlist já tem {n} vídeos.", { n: PLAYLIST_VIDEOS_MAX }));
      return false;
    }
    playlist.videos.push(entry);
  }
  if (!present && has) playlist.videos = playlist.videos.filter(v => v.id !== entry.id);
  persistPlaylists(list);
  return true;
}

function removeVideoFromPlaylist(playlistId, videoId) {
  const list = loadPlaylists();
  const playlist = list.find(p => p.id === playlistId);
  if (!playlist) return;
  playlist.videos = playlist.videos.filter(v => v.id !== videoId);
  persistPlaylists(list);
}

function deletePlaylist(playlistId) {
  persistPlaylists(loadPlaylists().filter(p => p.id !== playlistId));
}

// Renomeia; recusa nome vazio ou já usado por OUTRA playlist (sem diferenciar maiúsculas)
function renamePlaylist(playlistId, rawName) {
  const name = cleanText(rawName, PLAYLIST_NAME_MAX);
  if (!name) return { ok: false, reason: "empty" };
  const list = loadPlaylists();
  const playlist = list.find(p => p.id === playlistId);
  if (!playlist) return { ok: false, reason: "missing" };
  if (list.some(p => p.id !== playlistId && p.name.toLowerCase() === name.toLowerCase())) {
    return { ok: false, reason: "duplicate" };
  }
  playlist.name = name;
  persistPlaylists(list);
  return { ok: true, playlist };
}

// Cópia com os mesmos vídeos, logo depois da original: "Nome (cópia)", "Nome (cópia 2)", ...
function duplicatePlaylist(playlistId) {
  const list = loadPlaylists();
  const index = list.findIndex(p => p.id === playlistId);
  if (index < 0) return null;
  if (list.length >= PLAYLISTS_MAX) {
    showToast(t("Limite de {n} playlists atingido.", { n: PLAYLISTS_MAX }));
    return null;
  }
  const source = list[index];
  const root = source.name.replace(/ \((?:cópia|copy|copia)(?: \d+)?\)$/i, ""); // copiar uma cópia não empilha "(cópia) (cópia)"
  const taken = new Set(list.map(p => p.name.toLowerCase()));
  let name = "";
  for (let n = 1; !name || taken.has(name.toLowerCase()); n++) {
    const suffix = " " + (n === 1 ? t("(cópia)") : t("(cópia {n})", { n }));
    name = root.slice(0, PLAYLIST_NAME_MAX - suffix.length).trimEnd() + suffix;
  }
  const copy = { id: newId(), name, createdAt: Date.now(), videos: source.videos.map(v => ({ ...v })) };
  list.splice(index + 1, 0, copy);
  persistPlaylists(list);
  return copy;
}

const countLabel = (n, one, many) => `${n.toLocaleString(window.HOOTUBE_LOCALE)} ${t(n === 1 ? one : many)}`;

// ---- Inscrições: lista de canais guardada localmente (como as playlists) ----------------
const SUBS_KEY = "hootube.inscricoes";
const SUBS_MAX = 500;
let subsMemory = [];

const subKey = sub => sub.id.startsWith("UC") ? sub.id : "n:" + sub.name.toLowerCase();

function sanitizeSubscription(item) {
  const name = cleanText(item && item.name, 100);
  if (!name) return null;
  const rawId = cleanText(item.id, 64);
  const avatar = typeof item.avatar === "string" && /^https:\/\//.test(item.avatar) ? item.avatar.slice(0, 500) : "";
  return {
    id: /^UC[\w-]{20,}$/.test(rawId) ? rawId : "n:" + name.toLowerCase(),
    name,
    avatar,
    subscribedAt: Number.isFinite(item.subscribedAt) ? item.subscribedAt : Date.now()
  };
}

function loadSubscriptions() {
  try {
    const list = JSON.parse(localStorage.getItem(SUBS_KEY) || "[]");
    if (Array.isArray(list)) return list.map(sanitizeSubscription).filter(Boolean).slice(0, SUBS_MAX);
  } catch (err) { /* localStorage indisponível ou conteúdo inválido */ }
  return subsMemory;
}

function persistSubscriptions(list) {
  subsMemory = list;
  try {
    localStorage.setItem(SUBS_KEY, JSON.stringify(list));
  } catch (err) {
    showToast(t("Não foi possível guardar as inscrições localmente."));
  }
}

function findSubscription(list, channel) {
  const name = (channel.name || "").toLowerCase();
  return list.find(s => (channel.id && s.id === channel.id) || (name && s.name.toLowerCase() === name));
}

function updateSubscribeButton(video) {
  const on = !!video && !!findSubscription(loadSubscriptions(), { id: video.channelId, name: video.channel });
  subscribeBtn.classList.toggle("subscribed", on);
  subscribeBtn.setAttribute("aria-pressed", String(on));
  subscribeBtn.textContent = on ? t("Inscrito") : t("Inscrever-se");
  subscribeBtn.classList.toggle("hidden", !video || !video.channel);
}

// Inscreve ou cancela a inscrição; devolve true se o canal ficou inscrito
function toggleSubscription(channel) {
  const list = loadSubscriptions();
  const existing = findSubscription(list, { id: channel.id, name: channel.name });
  if (existing) {
    persistSubscriptions(list.filter(s => s !== existing));
    showToast(t("Inscrição em {name} cancelada.", { name: existing.name }));
    return false;
  }
  if (list.length >= SUBS_MAX) { showToast(t("Limite de inscrições atingido.")); return false; }
  const sub = sanitizeSubscription({ id: channel.id, name: channel.name, avatar: channel.avatar });
  persistSubscriptions([sub, ...list]);
  showToast(t("Inscrito em {name}.", { name: sub.name }));
  return true;
}

subscribeBtn.addEventListener("click", () => {
  const video = state.currentVideo;
  if (!video || !video.channel) return;
  toggleSubscription({ id: video.channelId, name: video.channel, avatar: video.channelAvatar });
  updateSubscribeButton(video);
});

// Foto e nome do canal no player abrem a página do canal (quando o id é conhecido)
[playerChannelAvatar, playerChannelName].forEach(el => el.addEventListener("click", () => {
  const video = state.currentVideo;
  if (video && video.channelId) navigate({ c: video.channelId }, { historyState: { fromVideo: true } });
}));

function renderSubscriptionsHome() {
  const subs = loadSubscriptions();
  subscriptionsHome.replaceChildren();
  subscriptionsHome.classList.toggle("hidden", subs.length === 0);
  if (!subs.length) return;

  const heading = document.createElement("h2");
  heading.className = "home-section-title";
  heading.textContent = t("Suas inscrições");
  const row = document.createElement("div");
  row.className = "playlist-tiles sub-tiles";
  subs.forEach(sub => row.appendChild(createSubscriptionTile(sub)));
  subscriptionsHome.append(heading, row);
}

function createSubscriptionTile(sub) {
  const wrap = document.createElement("div");
  wrap.className = "sub-tile-wrap";

  // Abre a página do canal (sem o id, que só vem do Piped, cai na busca pelo nome)
  const link = document.createElement("a");
  link.className = "sub-tile";
  const route = CHANNEL_ID_PATTERN.test(sub.id) ? { c: sub.id } : { q: sub.name };
  link.href = buildUrl(route);
  link.setAttribute("aria-label", t("Ver vídeos de {name}", { name: sub.name }));
  link.addEventListener("click", e => {
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(route, { historyState: { fromHome: true } });
  });

  const avatar = document.createElement("span");
  avatar.className = "sub-tile-avatar";
  if (sub.avatar) {
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = "";
    img.referrerPolicy = "no-referrer";
    img.src = sub.avatar;
    avatar.appendChild(img);
  } else {
    avatar.textContent = sub.name.charAt(0).toUpperCase();
  }
  const name = document.createElement("span");
  name.className = "sub-tile-name";
  name.textContent = sub.name;
  link.append(avatar, name);

  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "kebab-btn sub-remove-btn";
  remove.title = t("Cancelar inscrição");
  remove.setAttribute("aria-label", t("Cancelar inscrição em {name}", { name: sub.name }));
  remove.insertAdjacentHTML("beforeend", '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>');
  remove.addEventListener("click", () => {
    persistSubscriptions(loadSubscriptions().filter(s => subKey(s) !== subKey(sub)));
    showToast(t("Inscrição em {name} cancelada.", { name: sub.name }));
    if (isHomeVisible()) renderHomeContent();
  });

  wrap.append(link, remove);
  return wrap;
}

// ---- Tela inicial: vitrine com um cartão por playlist (cada uma abre a sua página) --------
function isHomeVisible() {
  const { q, v, pl, c } = readRoute();
  return !q && !v && !pl && !c && !resultsView.classList.contains("hidden");
}

function isPlaylistPageVisible() {
  return !!readRoute().pl && !playlistPage.classList.contains("hidden");
}

// Redesenha a tela de playlists que estiver aberta (depois de salvar, importar, remover...)
function refreshPlaylistViews() {
  if (isHomeVisible()) renderHomeContent();
  else if (isPlaylistPageVisible()) renderPlaylistPage(readRoute().pl);
}

// Os cartões substituem o aviso de "feed vazio" (que volta se não houver nenhuma playlist)
function renderHomeContent() {
  closePlaylistMenu(false);
  const playlists = loadPlaylists();
  playlistsHome.replaceChildren();
  playlistPage.classList.add("hidden");
  renderSubscriptionsHome();
  playlistsHome.classList.toggle("hidden", playlists.length === 0);
  initialFeedState.classList.toggle("hidden", playlists.length > 0 || loadSubscriptions().length > 0);
  if (!playlists.length) return;

  const heading = document.createElement("h2");
  heading.className = "home-section-title";
  heading.textContent = t("Suas playlists");
  const grid = document.createElement("div");
  grid.className = "playlist-tiles";
  playlists.forEach(playlist => grid.appendChild(createPlaylistTile(playlist)));
  playlistsHome.append(heading, grid);
}

function createPlaylistTile(playlist) {
  const total = countLabel(playlist.videos.length, "vídeo", "vídeos");

  // Link de verdade (abre em nova guia com Ctrl/Cmd+clique)
  const link = document.createElement("a");
  link.className = "pl-tile";
  link.href = buildUrl({ pl: playlist.id });
  link.setAttribute("aria-label", t("Abrir a playlist {name} ({total})", { name: playlist.name, total }));
  link.addEventListener("click", e => {
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate({ pl: playlist.id }, { historyState: { fromHome: true } });
  });

  const media = document.createElement("div");
  media.className = "pl-tile-media";
  const thumb = document.createElement("div");
  thumb.className = "pl-tile-thumb";
  const first = playlist.videos[0];
  if (first) {
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = "";
    img.referrerPolicy = "no-referrer";
    img.src = `https://i.ytimg.com/vi/${first.id}/hqdefault.jpg`;
    thumb.appendChild(img);
  } else {
    const empty = document.createElement("div");
    empty.className = "pl-tile-empty";
    empty.insertAdjacentHTML("beforeend", `<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="${ICON_PLAYLIST_ADD}"/></svg>`);
    thumb.appendChild(empty);
  }
  const badge = document.createElement("span");
  badge.className = "video-duration";
  badge.textContent = total;
  thumb.appendChild(badge);
  media.appendChild(thumb);

  const title = document.createElement("h3");
  title.className = "pl-tile-title";
  title.textContent = playlist.name;
  link.append(media, title);

  const wrap = document.createElement("div");
  wrap.className = "pl-tile-wrap";
  wrap.append(link, createKebabButton(playlist, "home"));
  return wrap;
}

// ---- Página de um canal (?channel=ID): dados e vídeos vêm do Piped ---------------------------
let channelToken = 0;
let channelState = null; // { id, videos, nextpage }

async function fetchChannelJson(path) {
  let lastError;
  for (const base of PIPED_INSTANCES) {
    try {
      const res = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(10000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error("Nenhuma instância disponível");
}

// Os vídeos do canal não trazem o nome/foto dele em alguns Pipeds: completa com os dados do canal
function mapChannelVideos(items, channel) {
  const videos = (items || []).filter(i => (!i.type || i.type === "stream") && i.url).map(item => {
    const video = mapPipedItem(item);
    if (!item.uploaderName) video.channel = channel.name;
    if (!video.channelAvatar) video.channelAvatar = channel.avatar;
    video.channelId = video.channelId || channel.id;
    videoCache.set(video.youtubeId, video);
    return video;
  });
  return videos;
}

async function showChannelPage(id) {
  const token = ++channelToken;
  searchToken++;
  searchSession = null;
  clearPlayer();
  playerView.classList.add("hidden");
  resultsView.classList.remove("hidden");
  initialFeedState.classList.add("hidden");
  playlistsHome.classList.add("hidden");
  subscriptionsHome.classList.add("hidden");
  playlistPage.classList.add("hidden");
  paginationNav.classList.add("hidden");
  resultsHeader.classList.add("hidden");
  emptyState.classList.add("hidden");
  resultsContainer.replaceChildren();
  resultsContainer.classList.remove("hidden");
  channelMoreBtn.classList.add("hidden");
  state.currentVideo = null;
  state.currentQuery = "";
  state.currentPage = 1;
  channelState = null;
  setPageTitle("");

  channelPage.classList.remove("hidden");
  channelPage.replaceChildren();
  const back = document.createElement("button");
  back.type = "button";
  back.className = "back-btn";
  back.insertAdjacentHTML("beforeend", `<svg viewBox="0 0 24 24" class="icon"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg><span>${t("Voltar")}</span>`);
  back.addEventListener("click", () => {
    if (history.state && (history.state.fromHome || history.state.fromVideo)) history.back();
    else navigate({});
  });
  const status = document.createElement("p");
  status.className = "channel-status";
  status.textContent = t("Carregando...");
  channelPage.append(back, status);

  let data;
  try {
    data = await fetchChannelJson(`/channel/${encodeURIComponent(id)}`);
  } catch (err) {
    if (token === channelToken) status.textContent = t("Não foi possível carregar o canal.");
    return;
  }
  if (token !== channelToken) return;

  const channel = {
    id,
    name: cleanText(data.name, 100) || t("Canal no YouTube"),
    avatar: directImageUrl(data.avatarUrl),
    subscribers: Number.isFinite(data.subscriberCount) && data.subscriberCount >= 0 ? data.subscriberCount : null,
    description: cleanText(data.description, 400),
    verified: !!data.verified
  };
  setPageTitle(channel.name);

  const head = document.createElement("div");
  head.className = "channel-head";
  const avatar = document.createElement("span");
  avatar.className = "channel-head-avatar";
  if (channel.avatar) {
    const img = document.createElement("img");
    img.alt = "";
    img.referrerPolicy = "no-referrer";
    img.src = channel.avatar;
    avatar.appendChild(img);
  } else {
    avatar.textContent = channel.name.charAt(0).toUpperCase();
  }
  const info = document.createElement("div");
  info.className = "channel-head-info";
  const title = document.createElement("h1");
  title.className = "channel-head-name";
  title.textContent = channel.name;
  info.appendChild(title);
  if (channel.subscribers !== null) {
    const subs = document.createElement("span");
    subs.className = "subscribers-count";
    subs.textContent = t("{n} inscritos", { n: new Intl.NumberFormat(window.HOOTUBE_LOCALE, { notation: "compact" }).format(channel.subscribers) });
    info.appendChild(subs);
  }
  if (channel.description) {
    const desc = document.createElement("p");
    desc.className = "channel-head-desc";
    desc.textContent = channel.description;
    info.appendChild(desc);
  }
  const subscribe = document.createElement("button");
  subscribe.type = "button";
  subscribe.className = "subscribe-btn";
  const paint = () => {
    const on = !!findSubscription(loadSubscriptions(), { id: channel.id, name: channel.name });
    subscribe.classList.toggle("subscribed", on);
    subscribe.setAttribute("aria-pressed", String(on));
    subscribe.textContent = on ? t("Inscrito") : t("Inscrever-se");
  };
  subscribe.addEventListener("click", () => { toggleSubscription(channel); paint(); });
  paint();
  head.append(avatar, info, subscribe);
  status.remove();
  channelPage.appendChild(head);

  // Alguns Pipeds entregam o canal sem a lista de vídeos: nesse caso busca pelo nome e fica
  // só com os resultados cujo canal tem este id
  const videos = mapChannelVideos(data.relatedStreams, channel);
  channelState = { id, channel, videos, mode: videos.length ? "channel" : "search", nextpage: videos.length ? (data.nextpage || null) : null };
  if (channelState.mode === "search") {
    const loading = document.createElement("p");
    loading.className = "channel-status";
    loading.textContent = t("Carregando...");
    channelPage.appendChild(loading);
    try { await loadMoreChannelVideos(channelState); } catch (err) { /* mostra "sem vídeos" abaixo */ }
    loading.remove();
    if (token !== channelToken) return;
  }
  renderChannelVideos();
  if (!videos.length) {
    const none = document.createElement("p");
    none.className = "channel-status";
    none.textContent = t("Este canal não tem vídeos para mostrar.");
    channelPage.appendChild(none);
  }
}

function renderChannelVideos() {
  if (!channelState) return;
  renderResults(channelState.videos);
  emptyState.classList.add("hidden");
  resultsContainer.classList.remove("hidden");
  channelMoreBtn.classList.toggle("hidden", !channelState.nextpage);
  channelMoreBtn.disabled = false;
  channelMoreBtn.textContent = t("Mostrar mais vídeos");
}

// Busca mais vídeos do canal (pela API do canal ou, no plano B, pela busca) e soma ao estado
async function loadMoreChannelVideos(current) {
  const have = new Set(current.videos.map(v => v.youtubeId));
  const add = list => list.filter(v => v.channelId === current.id && !have.has(v.youtubeId) && have.add(v.youtubeId)).forEach(v => current.videos.push(v));

  if (current.mode === "channel") {
    const data = await fetchChannelJson(`/nextpage/channel/${encodeURIComponent(current.id)}?nextpage=${encodeURIComponent(current.nextpage)}`);
    const before = current.videos.length;
    mapChannelVideos(data.relatedStreams, current.channel).filter(v => !have.has(v.youtubeId)).forEach(v => current.videos.push(v));
    current.nextpage = data.nextpage || null;
    return current.videos.length - before;
  }

  const query = encodeURIComponent(current.channel.name);
  const before = current.videos.length;
  for (let hop = 0; hop < 3 && current.videos.length - before < 10; hop++) {
    if (hop > 0 && !current.nextpage) break;
    const path = current.nextpage
      ? `/nextpage/search?nextpage=${encodeURIComponent(current.nextpage.token)}&q=${query}&filter=videos`
      : `/search?q=${query}&filter=videos`;
    const page = await fetchPipedPage(path);
    add(page.items);
    current.nextpage = page.nextpage;
    if (!page.nextpage) break;
  }
  return current.videos.length - before;
}

channelMoreBtn.addEventListener("click", async () => {
  const current = channelState;
  if (!current || !current.nextpage) return;
  const token = channelToken;
  channelMoreBtn.disabled = true;
  channelMoreBtn.textContent = t("Carregando...");
  try {
    await loadMoreChannelVideos(current);
    if (token !== channelToken || channelState !== current) return;
    renderChannelVideos();
  } catch (err) {
    if (token !== channelToken) return;
    showToast(t("Não foi possível carregar mais resultados."));
    channelMoreBtn.disabled = false;
    channelMoreBtn.textContent = t("Mostrar mais vídeos");
  }
});

// ---- Página de uma playlist (?playlist=ID) -------------------------------------------
function showPlaylistPage(id) {
  searchToken++;
  searchSession = null;
  clearPlayer();
  playerView.classList.add("hidden");
  resultsView.classList.remove("hidden");
  initialFeedState.classList.add("hidden");
  playlistsHome.classList.add("hidden");
  subscriptionsHome.classList.add("hidden");
  channelPage.classList.add("hidden");
  channelMoreBtn.classList.add("hidden");
  paginationNav.classList.add("hidden");
  resultsHeader.classList.add("hidden");
  resultsContainer.classList.add("hidden");
  emptyState.classList.add("hidden");
  state.currentVideo = null;
  state.currentQuery = "";
  state.currentPage = 1;

  if (!renderPlaylistPage(id)) {
    playlistPage.classList.add("hidden");
    showToast(t("Playlist não encontrada."));
    navigate({}, { replace: true });
  }
}

function renderPlaylistPage(id) {
  closePlaylistMenu(false);
  const playlist = loadPlaylists().find(p => p.id === id);
  if (!playlist) return false;
  playlistPage.replaceChildren();
  setPageTitle(playlist.name);

  const back = document.createElement("button");
  back.type = "button";
  back.className = "back-btn";
  back.insertAdjacentHTML("beforeend", `<svg viewBox="0 0 24 24" class="icon"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg><span>${t("Voltar para o início")}</span>`);
  back.addEventListener("click", () => {
    if (history.state && history.state.fromHome) history.back();
    else navigate({});
  });

  const head = document.createElement("div");
  head.className = "playlist-head";
  const title = document.createElement("h1");
  title.className = "playlist-page-title";
  title.textContent = playlist.name;
  const count = document.createElement("span");
  count.className = "playlist-count";
  count.textContent = countLabel(playlist.videos.length, "vídeo", "vídeos");
  head.append(title, count, createKebabButton(playlist, "page"));
  playlistPage.append(back, head);

  if (!playlist.videos.length) {
    const empty = document.createElement("p");
    empty.className = "playlist-empty";
    empty.textContent = t("Nenhum vídeo ainda. Abra um vídeo e use o botão Salvar.");
    playlistPage.appendChild(empty);
  } else {
    const grid = document.createElement("div");
    grid.className = "playlist-grid";
    playlist.videos.forEach(entry => grid.appendChild(createPlaylistCard(playlist, entry)));
    playlistPage.appendChild(grid);
  }
  playlistPage.classList.remove("hidden");
  return true;
}

function createPlaylistCard(playlist, entry) {
  const card = document.createElement("div");
  card.className = "pl-card";

  // Link de verdade (abre em nova guia com Ctrl/Cmd+clique); o botão de remover fica ao lado, não dentro dele
  const link = document.createElement("a");
  link.className = "pl-link";
  link.href = buildUrl({ v: entry.id });
  link.setAttribute("aria-label", t("Assistir {title}", { title: entry.title }));
  link.addEventListener("click", e => {
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate({ v: entry.id }, { historyState: { fromPlaylist: playlist.id } });
  });

  const thumbWrap = document.createElement("div");
  thumbWrap.className = "pl-thumb-wrap";
  const img = document.createElement("img");
  img.className = "pl-thumb";
  img.loading = "lazy";
  img.alt = "";
  img.referrerPolicy = "no-referrer";
  img.src = `https://i.ytimg.com/vi/${entry.id}/hqdefault.jpg`;
  thumbWrap.appendChild(img);
  if (entry.duration) {
    const badge = document.createElement("span");
    badge.className = "video-duration";
    badge.textContent = entry.duration;
    thumbWrap.appendChild(badge);
  }

  const title = document.createElement("h3");
  title.className = "pl-title";
  title.textContent = entry.title;
  const channel = document.createElement("span");
  channel.className = "pl-channel";
  channel.textContent = entry.channel;
  link.append(thumbWrap, title, channel);

  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "pl-remove";
  remove.title = "Remover da playlist";
  remove.setAttribute("aria-label", t("Remover {title} da playlist {name}", { title: entry.title, name: playlist.name }));
  remove.insertAdjacentHTML("beforeend", CLOSE_ICON);
  remove.addEventListener("click", () => {
    removeVideoFromPlaylist(playlist.id, entry.id);
    renderPlaylistPage(playlist.id);
    showToast(t("Removido de “{name}”.", { name: playlist.name }));
  });

  card.append(link, remove);
  return card;
}

// ---- Menu ⋮ da playlist: renomear, duplicar, excluir -------------------------------------
const MORE_ICON = '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>';
const EDIT_ICON = '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';
const COPY_ICON = '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';

let playlistMenu = null;   // { el, button, playlistId, context } enquanto o menu está aberto
let renamingId = null;

function createKebabButton(playlist, context) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "kebab-btn";
  button.title = t("Mais opções");
  button.setAttribute("aria-label", t("Mais opções da playlist {name}", { name: playlist.name }));
  button.setAttribute("aria-haspopup", "menu");
  button.setAttribute("aria-expanded", "false");
  button.insertAdjacentHTML("beforeend", MORE_ICON);
  button.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    if (playlistMenu && playlistMenu.button === button) closePlaylistMenu();
    else openPlaylistMenu(button, playlist.id, context);
  });
  return button;
}

function closePlaylistMenu(restoreFocus = true) {
  if (!playlistMenu) return;
  const { el, button } = playlistMenu;
  playlistMenu = null;
  el.remove();
  button.setAttribute("aria-expanded", "false");
  if (restoreFocus && button.isConnected) button.focus();
}

function openPlaylistMenu(button, playlistId, context) {
  closePlaylistMenu(false);
  const el = document.createElement("div");
  el.className = "pl-menu";
  el.setAttribute("role", "menu");
  el.setAttribute("aria-label", t("Opções da playlist"));
  [["rename", t("Renomear"), EDIT_ICON], ["duplicate", t("Duplicar"), COPY_ICON], ["delete", t("Excluir"), TRASH_ICON, true]]
    .forEach(([action, label, icon, danger]) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "pl-menu-item" + (danger ? " danger" : "");
      item.setAttribute("role", "menuitem");
      item.dataset.action = action;
      item.insertAdjacentHTML("beforeend", icon);
      const text = document.createElement("span");
      text.textContent = label;
      item.appendChild(text);
      el.appendChild(item);
    });
  document.body.appendChild(el);

  // Abaixo do botão, alinhado à direita; se não couber, sobe; sempre dentro da tela
  const rect = button.getBoundingClientRect();
  const left = Math.min(Math.max(8, rect.right - el.offsetWidth), window.innerWidth - el.offsetWidth - 8);
  let top = rect.bottom + 4;
  if (top + el.offsetHeight > window.innerHeight - 8) top = Math.max(8, rect.top - el.offsetHeight - 4);
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;

  button.setAttribute("aria-expanded", "true");
  playlistMenu = { el, button, playlistId, context };
  el.querySelector(".pl-menu-item").focus();
}

function confirmDeletePlaylist(playlist, context) {
  const n = playlist.videos.length;
  const detail = n ? " " + t("e seus {videos}", { videos: countLabel(n, "vídeo", "vídeos") }) : "";
  if (!confirm(t("Excluir a playlist “{name}”{detail}? Isso não pode ser desfeito.", { name: playlist.name, detail }))) return;
  deletePlaylist(playlist.id);
  showToast(t("Playlist excluída."));
  if (context === "page") navigate({}, { replace: true }); // sem deixar a página apagada no histórico
  else refreshPlaylistViews();
}

function openRenameModal(playlist) {
  renamingId = playlist.id;
  renameInput.value = playlist.name;
  openModal(renameModal, "#renameInput");
  renameInput.select();
}

function runPlaylistAction(action) {
  if (!playlistMenu) return;
  const { playlistId, context } = playlistMenu;
  closePlaylistMenu(); // devolve o foco ao botão ⋮ (é para onde a janela de renomear volta ao fechar)
  const playlist = loadPlaylists().find(p => p.id === playlistId);
  if (!playlist) return;
  if (action === "rename") {
    openRenameModal(playlist);
  } else if (action === "duplicate") {
    const copy = duplicatePlaylist(playlistId);
    if (!copy) return;
    refreshPlaylistViews();
    showToast(t("Criada “{name}”.", { name: copy.name }));
  } else if (action === "delete") {
    confirmDeletePlaylist(playlist, context);
  }
}

document.addEventListener("click", e => {
  const item = e.target.closest(".pl-menu-item");
  if (item) runPlaylistAction(item.dataset.action);
});

// Clicar fora, rolar a página ou redimensionar fecha o menu
document.addEventListener("pointerdown", e => {
  if (playlistMenu && !playlistMenu.el.contains(e.target) && !playlistMenu.button.contains(e.target)) closePlaylistMenu(false);
}, true);
window.addEventListener("scroll", () => closePlaylistMenu(false), true);
window.addEventListener("resize", () => closePlaylistMenu(false));

document.addEventListener("keydown", e => {
  if (!playlistMenu) return;
  const items = [...playlistMenu.el.querySelectorAll(".pl-menu-item")];
  const at = items.indexOf(document.activeElement);
  if (e.key === "Escape") {
    e.preventDefault();
    closePlaylistMenu();
  } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    items[(at + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length].focus();
  } else if (e.key === "Home" || e.key === "End") {
    e.preventDefault();
    items[e.key === "Home" ? 0 : items.length - 1].focus();
  } else if (e.key === "Tab") {
    closePlaylistMenu(false);
  }
});

renameForm.addEventListener("submit", e => {
  e.preventDefault();
  const result = renamePlaylist(renamingId, renameInput.value);
  if (!result.ok) {
    if (result.reason === "missing") {
      closeModal(renameModal);
      showToast(t("Playlist não encontrada."));
      refreshPlaylistViews();
      return;
    }
    showToast(result.reason === "empty" ? t("Digite um nome para a playlist.") : t("Já existe uma playlist com esse nome."));
    renameInput.focus();
    return;
  }
  closeModal(renameModal);
  refreshPlaylistViews();
  showToast(t("Playlist renomeada."));
});

// ---- Janelas (modais) ---------------------------------------------------------------
let modalOpener = null;

function openModal(modal, focusSelector) {
  modalOpener = document.activeElement;
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  const target = (focusSelector && modal.querySelector(focusSelector)) || modal.querySelector("button, input");
  if (target) target.focus();
}

function closeModal(modal) {
  modal.classList.add("hidden");
  if (!document.querySelector(".modal:not(.hidden)")) document.body.classList.remove("modal-open");
  if (modalOpener && modalOpener.isConnected) modalOpener.focus();
  modalOpener = null;
}

document.addEventListener("click", e => {
  const close = e.target.closest("[data-close]");
  if (close) closeModal(close.closest(".modal"));
});

document.addEventListener("keydown", e => {
  const modal = document.querySelector(".modal:not(.hidden)");
  if (!modal) return;
  if (e.key === "Escape") {
    e.preventDefault();
    closeModal(modal);
  } else if (e.key === "Tab") {
    // mantém o foco dentro da janela
    const items = [...modal.querySelectorAll('button:not([disabled]), input:not([disabled]):not([hidden]), a[href]')]
      .filter(el => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    else if (!modal.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  }
});

// ---- Salvar o vídeo em playlists ---------------------------------------------------
function updateSaveButton() {
  const video = state.currentVideo;
  const canSave = !!(video && video.youtubeId);
  saveBtn.classList.toggle("hidden", !canSave);
  if (!canSave) return;
  const saved = playlistsWithVideo(video.youtubeId).length > 0;
  saveBtn.setAttribute("aria-pressed", String(saved));
  saveIcon.querySelector("path").setAttribute("d", saved ? ICON_PLAYLIST_CHECK : ICON_PLAYLIST_ADD);
  saveLabel.textContent = saved ? t("Salvo") : t("Salvar");
}

// Vídeo que a janela "Salvar em…" está editando: o aberto no player ou um resultado da pesquisa
let saveTarget = null;

// Marca nos resultados da pesquisa os vídeos que já estão em alguma playlist
function savedVideoIds() {
  return new Set(loadPlaylists().flatMap(p => p.videos.map(v => v.id)));
}

function setCardSaveState(button, saved) {
  button.setAttribute("aria-pressed", String(saved));
  button.title = saved ? t("Salvo em playlist (editar)") : t("Salvar em playlist");
  button.querySelector("path").setAttribute("d", saved ? ICON_PLAYLIST_CHECK : ICON_PLAYLIST_ADD);
}

function updateResultSaveButtons() {
  const saved = savedVideoIds();
  document.querySelectorAll(".card-save-btn").forEach(button => setCardSaveState(button, saved.has(button.dataset.id)));
}

// Botão do botão Salvar do player + ícones dos resultados
function refreshSaveStates() {
  updateSaveButton();
  updateResultSaveButtons();
}

function openSaveModal(video) {
  if (!video || !video.youtubeId) return;
  saveTarget = video;
  saveModalVideo.textContent = video.title || "";
  renderPlaylistPicker();
  playlistNewName.value = "";
  openModal(saveModal, loadPlaylists().length ? ".playlist-picker input" : "#playlistNewName");
}

function renderPlaylistPicker() {
  const video = saveTarget;
  playlistPicker.replaceChildren();
  const playlists = loadPlaylists();
  if (!playlists.length) {
    const empty = document.createElement("li");
    empty.className = "picker-empty";
    empty.textContent = t("Você ainda não tem playlists. Crie a primeira abaixo.");
    playlistPicker.appendChild(empty);
    return;
  }
  playlists.forEach(playlist => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.className = "pick";
    const box = document.createElement("input");
    box.type = "checkbox";
    box.dataset.id = playlist.id;
    box.checked = playlist.videos.some(v => v.id === video.youtubeId);
    const name = document.createElement("span");
    name.className = "pick-name";
    name.textContent = playlist.name;
    const count = document.createElement("span");
    count.className = "pick-count";
    count.textContent = playlist.videos.length;
    label.append(box, name, count);
    li.appendChild(label);
    playlistPicker.appendChild(li);
  });
}

saveBtn.addEventListener("click", () => openSaveModal(state.currentVideo));

playlistPicker.addEventListener("change", e => {
  const box = e.target.closest('input[type="checkbox"]');
  if (!box || !saveTarget) return;
  const playlist = loadPlaylists().find(p => p.id === box.dataset.id);
  const ok = setVideoInPlaylist(box.dataset.id, saveTarget, box.checked);
  if (!ok) { box.checked = !box.checked; return; }
  renderPlaylistPicker();
  refreshSaveStates();
  refreshPlaylistViews();
  if (playlist) showToast(box.checked ? t("Salvo em “{name}”.", { name: playlist.name }) : t("Removido de “{name}”.", { name: playlist.name }));
  // mantém o foco no mesmo item depois de redesenhar a lista
  const again = playlistPicker.querySelector(`input[data-id="${CSS.escape(box.dataset.id)}"]`);
  if (again) again.focus();
});

playlistNewForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!saveTarget) return;
  const playlist = createPlaylist(playlistNewName.value);
  if (!playlist) {
    if (!playlistNewName.value.trim()) showToast(t("Digite um nome para a playlist."));
    return;
  }
  setVideoInPlaylist(playlist.id, saveTarget, true); // criar já salva o vídeo, como no YouTube
  playlistNewName.value = "";
  renderPlaylistPicker();
  refreshSaveStates();
  refreshPlaylistViews();
  showToast(t("Salvo em “{name}”.", { name: playlist.name }));
});

// ---- Configurações: exportar e importar --------------------------------------------
function describePlaylists() {
  const list = loadPlaylists();
  if (!list.length) return t("Você ainda não tem playlists salvas.");
  const videos = list.reduce((n, p) => n + p.videos.length, 0);
  return `${countLabel(list.length, "playlist", "playlists")} · ${countLabel(videos, "vídeo", "vídeos")}`;
}

function describeSubscriptions() {
  const n = loadSubscriptions().length;
  return n ? countLabel(n, "canal inscrito", "canais inscritos") : t("Você ainda não tem inscrições.");
}

function refreshSettingsSummary() {
  settingsSummary.textContent = describePlaylists();
  subsSummary.textContent = describeSubscriptions();
}

settingsBtn.addEventListener("click", () => {
  refreshSettingsSummary();
  openModal(settingsModal, "#exportSubsBtn");
});

function downloadJson(data, filename) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

const today = () => new Date().toISOString().slice(0, 10);

exportBtn.addEventListener("click", () => {
  const playlists = loadPlaylists();
  if (!playlists.length) {
    showToast(t("Você ainda não tem playlists para exportar."));
    return;
  }
  downloadJson({ app: "HooTube", type: "playlists", version: 1, exportedAt: new Date().toISOString(), playlists },
    `hootube-playlists-${today()}.json`);
  showToast(t("Playlists exportadas."));
});

exportSubsBtn.addEventListener("click", () => {
  const subscriptions = loadSubscriptions();
  if (!subscriptions.length) {
    showToast(t("Você ainda não tem inscrições para exportar."));
    return;
  }
  downloadJson({ app: "HooTube", type: "subscriptions", version: 1, exportedAt: new Date().toISOString(), subscriptions },
    `hootube-inscricoes-${today()}.json`);
  showToast(t("Inscrições exportadas."));
});

let importKind = "playlists";
importBtn.addEventListener("click", () => { importKind = "playlists"; importFile.click(); });
importSubsBtn.addEventListener("click", () => { importKind = "subscriptions"; importFile.click(); });
importAllBtn.addEventListener("click", () => { importKind = "all"; importFile.click(); });

// Backup completo: playlists, inscrições e configurações (tema e pesquisas recentes)
exportAllBtn.addEventListener("click", () => {
  downloadJson({
    app: "HooTube", type: "backup", version: 1, exportedAt: new Date().toISOString(),
    playlists: loadPlaylists(),
    subscriptions: loadSubscriptions(),
    settings: { theme: state.isDarkTheme ? "escuro" : "claro", recentSearches: loadRecent() }
  }, `hootube-backup-${today()}.json`);
  showToast(t("Backup completo exportado."));
});

// Soma as playlists do arquivo às existentes (mesmo id ou mesmo nome = junta os vídeos)
function mergePlaylists(current, incoming) {
  const result = current.map(p => ({ ...p, videos: [...p.videos] }));
  let newPlaylists = 0, newVideos = 0;
  incoming.forEach(item => {
    let target = result.find(p => p.id === item.id) || result.find(p => p.name.toLowerCase() === item.name.toLowerCase());
    if (!target) {
      if (result.length >= PLAYLISTS_MAX) return;
      target = { id: item.id, name: item.name, createdAt: item.createdAt, videos: [] };
      result.push(target);
      newPlaylists++;
    }
    const have = new Set(target.videos.map(v => v.id));
    item.videos.forEach(v => {
      if (have.has(v.id) || target.videos.length >= PLAYLIST_VIDEOS_MAX) return;
      target.videos.push(v);
      have.add(v.id);
      newVideos++;
    });
  });
  return { result, newPlaylists, newVideos };
}

// Soma as inscrições do arquivo às existentes (sem duplicar o mesmo canal)
function mergeSubscriptions(current, incoming) {
  const result = [...current];
  let added = 0;
  incoming.forEach(item => {
    if (result.length >= SUBS_MAX || findSubscription(result, item)) return;
    result.push(item);
    added++;
  });
  return { result, added };
}

// Soma as inscrições do arquivo às existentes (sem duplicar o mesmo canal)
function mergeSubscriptions(current, incoming) {
  const result = [...current];
  let added = 0;
  incoming.forEach(item => {
    if (result.length >= SUBS_MAX || findSubscription(result, item)) return;
    result.push(item);
    added++;
  });
  return { result, added };
}

// Cada importar* devolve o texto do que entrou de novo ("" se nada) ou null se não havia dados válidos
function importSubscriptionsData(raw) {
  const incoming = (Array.isArray(raw) ? raw : []).map(sanitizeSubscription).filter(Boolean);
  if (!incoming.length) return null;
  const { result, added } = mergeSubscriptions(loadSubscriptions(), incoming);
  if (added) persistSubscriptions(result);
  return added ? countLabel(added, "inscrição nova", "inscrições novas") : "";
}

function importPlaylistsData(raw) {
  const incoming = (Array.isArray(raw) ? raw : []).map(sanitizePlaylist).filter(Boolean);
  if (!incoming.length) return null;
  const { result, newPlaylists, newVideos } = mergePlaylists(loadPlaylists(), incoming);
  if (!newPlaylists && !newVideos) return "";
  persistPlaylists(result);
  return t("{a} e {b}", { a: countLabel(newPlaylists, "playlist nova", "playlists novas"), b: countLabel(newVideos, "vídeo novo", "vídeos novos") });
}

// Tema e pesquisas recentes do backup; devolve true se algo mudou
function importSettingsData(settings) {
  if (!settings || typeof settings !== "object") return null;
  let changed = false;
  if (settings.theme === "claro" || settings.theme === "escuro") {
    const dark = settings.theme === "escuro";
    if (dark !== state.isDarkTheme) {
      applyTheme(dark);
      try { localStorage.setItem(THEME_KEY, settings.theme); } catch (err) { /* sem espaço ou bloqueado */ }
      changed = true;
    }
  }
  if (Array.isArray(settings.recentSearches)) {
    const current = loadRecent();
    const seen = new Set(current.map(x => x.toLowerCase()));
    const extra = settings.recentSearches
      .filter(x => typeof x === "string" && x.trim() && !seen.has(x.trim().toLowerCase()) && seen.add(x.trim().toLowerCase()))
      .map(x => cleanText(x, 200));
    if (extra.length && current.length < RECENT_MAX) {
      storeRecent([...current, ...extra].slice(0, RECENT_MAX));
      changed = true;
    }
  }
  return changed;
}

importFile.addEventListener("change", async () => {
  const file = importFile.files[0];
  importFile.value = ""; // permite escolher o mesmo arquivo de novo
  if (!file) return;
  const kind = importKind;
  const label = t(kind === "subscriptions" ? "inscrições" : kind === "all" ? "backup completo" : "playlists");
  if (file.size > IMPORT_MAX_BYTES) {
    showToast(t("Arquivo grande demais para ser um backup de {label}.", { label }));
    return;
  }

  let data;
  try {
    data = JSON.parse(await file.text());
  } catch (err) {
    showToast(t("Arquivo inválido: não é um backup de {label} do HooTube.", { label }));
    return;
  }
  const isObject = data && typeof data === "object" && !Array.isArray(data);
  // Lista solta = formato antigo de playlists
  const sections = isObject ? data : { playlists: data };
  if (isObject && kind !== "all" && data.type && data.type !== "backup" && data.type !== kind) {
    showToast(t("Este arquivo é de {other}, não de {label}.", { other: t(data.type === "subscriptions" ? "inscrições" : "playlists"), label }));
    return;
  }

  const parts = [];
  let valid = false;
  if (kind === "all" || kind === "playlists") {
    const r = importPlaylistsData(sections.playlists);
    if (r !== null) { valid = true; if (r) parts.push(r); }
  }
  if (kind === "all" || kind === "subscriptions") {
    const r = importSubscriptionsData(sections.subscriptions);
    if (r !== null) { valid = true; if (r) parts.push(r); }
  }
  if (kind === "all") {
    const r = importSettingsData(sections.settings);
    if (r !== null) { valid = true; if (r) parts.push(t("configurações")); }
  }
  if (!valid) {
    showToast(kind === "all" ? t("Arquivo inválido: não é um backup do HooTube.")
      : kind === "subscriptions" ? t("Nenhuma inscrição válida encontrada no arquivo.")
      : t("Nenhuma playlist válida encontrada no arquivo."));
    return;
  }

  refreshSettingsSummary();
  refreshSaveStates();
  updateSubscribeButton(state.currentVideo);
  if (isHomeVisible()) renderHomeContent(); else refreshPlaylistViews();
  showToast(parts.length ? t("Importado: {what}.", { what: parts.join(", ") }) : t("Nada novo para importar: tudo já estava salvo."));
});

// Limpar dados: apaga tudo o que o HooTube guardou localmente (chaves "hootube.*")
clearDataBtn.addEventListener("click", () => {
  if (!confirm(t("Apagar todas as playlists, inscrições, pesquisas recentes e o tema guardados neste aparelho? Isso não pode ser desfeito."))) return;
  try {
    Object.keys(localStorage).filter(k => k.startsWith("hootube.")).forEach(k => localStorage.removeItem(k));
  } catch (err) { /* localStorage indisponível: só limpa a memória */ }
  playlistsMemory = [];
  subsMemory = [];
  recentMemory = [];
  applyTheme(true);
  hideRecent();
  closePlaylistMenu(false);
  refreshSettingsSummary();
  refreshSaveStates();
  updateSubscribeButton(state.currentVideo);
  if (isHomeVisible()) renderHomeContent(); else refreshPlaylistViews();
  showToast(t("Dados apagados."));
});

// Favicon na cor primária (--cor_primaria em style.css); o do index.html é só reserva
function applyFavicon() {
  const color = getComputedStyle(document.documentElement).getPropertyValue("--cor_primaria").trim();
  const link = document.querySelector('link[rel="icon"]');
  if (!color || !link) return;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M5 2h7v11h8V2h7v28h-7V19h-8v11H5z" fill="${color}"/></svg>`;
  link.href = "data:image/svg+xml," + encodeURIComponent(svg);
}

// Inicialização
function init() {
  applyFavicon();
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }

  // Links antigos no formato #v=ID viram ?v=ID
  const legacy = /^#v=(.+)$/.exec(window.location.hash);
  if (legacy) {
    const id = legacy[1].replace(/^yt-/, "");
    history.replaceState(null, "", buildUrl({ v: id }));
  }

  applyRoute();
}

init();

