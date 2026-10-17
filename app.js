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
const ytLink = document.getElementById("ytLink");
const commentsCountText = document.getElementById("commentsCountText");
const commentsList = document.getElementById("commentsList");
const loadMoreCommentsBtn = document.getElementById("loadMoreCommentsBtn");
const toast = document.getElementById("toast");
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Utilitários
function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
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
// Piped e API própria são configurados em config.js; a API própria (VPS/Cloudflare) só é usada
// se estiver ativada lá e se o Piped falhar (veja worker/README.md).
const CONFIG = window.HOOTUBE_CONFIG || {};
const cleanUrl = value => String(value || "").trim().replace(/\/+$/, "");

const API_BASES = (CONFIG.apiBases || []).map(cleanUrl).filter(Boolean);
const UI_LANG = navigator.language || "pt-BR";
const API_COOLDOWN_MS = 60 * 1000;
const apiCooldown = new Map(); // base -> instante até o qual é ignorada após uma falha

// Chama a API em ordem de prioridade. Com `onlyBase` (continuações), usa só aquele servidor.
async function fetchApiJson(path, onlyBase = null) {
  if (!API_BASES.length) throw new Error("API não configurada");

  const now = Date.now();
  let bases = onlyBase ? [onlyBase] : API_BASES.filter(b => (apiCooldown.get(b) || 0) <= now);
  if (!bases.length) bases = API_BASES; // todas em espera: tenta de novo mesmo assim

  const url = path + (path.includes("?") ? "&" : "?") + "hl=" + encodeURIComponent(UI_LANG);
  let lastError;
  for (const base of bases) {
    try {
      const res = await fetch(base + url, { signal: AbortSignal.timeout(10000) });
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
  const units = [
    [31536000, "ano", "anos"],
    [2592000, "mês", "meses"],
    [604800, "semana", "semanas"],
    [86400, "dia", "dias"],
    [3600, "hora", "horas"],
    [60, "minuto", "minutos"]
  ];
  for (const [size, one, many] of units) {
    const n = Math.floor(diffSec / size);
    if (n >= 1) return `há ${n} ${n === 1 ? one : many}`;
  }
  return "agora há pouco";
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
    channel: item.uploaderName || "Canal no YouTube",
    channelAvatar: directImageUrl(item.uploaderAvatar),
    subscribers: "",
    views: item.views >= 0 ? `${item.views.toLocaleString("pt-BR")} visualizações` : "",
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
    channel: item.channel || "Canal no YouTube",
    channelAvatar: item.channelAvatar || "",
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
async function searchYouTube(query) {
  try {
    return await fetchPipedPage(`/search?q=${encodeURIComponent(query)}&filter=videos`);
  } catch (err) {
    if (!API_BASES.length) throw err; // sem API própria ativada: não há reserva
  }
  const { data, base } = await fetchApiJson(`/api/search?q=${encodeURIComponent(query)}`);
  return parseApiSearchPage(data, base);
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
    card.setAttribute("aria-label", `Assistir ${data.title}`);
  });
}

// =========================================================
// Renderização dos Resultados de Pesquisa
// =========================================================
function renderResults(videos) {
  resultsContainer.innerHTML = "";

  if (videos.length === 0) {
    emptyState.classList.remove("hidden");
    resultsCount.textContent = "0 resultados";
    return;
  }

  emptyState.classList.add("hidden");
  resultsCount.textContent = `${videos.length} resultado${videos.length > 1 ? "s" : ""}`;

  videos.forEach(video => {
    // Link de verdade (abre em nova guia com Ctrl/Cmd+clique, botão do meio ou menu de contexto)
    const card = document.createElement("a");
    card.className = "video-card";
    card.href = buildUrl({ v: video.youtubeId || video.id });
    card.setAttribute("aria-label", `Assistir ${video.title}`);

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

    resultsContainer.appendChild(card);
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
      setEmptyState("Não foi possível buscar", "O serviço de busca não respondeu. Tente novamente em instantes.");
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
      showToast("Não foi possível carregar mais resultados.");
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
    setEmptyState("Nenhum resultado encontrado", "Tente termos de pesquisa diferentes ou cole o link de um vídeo.");
    return;
  }

  const start = (session.page - 1) * RESULTS_PER_PAGE;
  const pageItems = session.items.slice(start, start + RESULTS_PER_PAGE);

  emptyState.classList.add("hidden");
  resultsHeading.textContent = `Resultados da pesquisa por "${session.query}"`;
  resultsHeader.classList.remove("hidden");
  resultsContainer.classList.remove("hidden");
  renderResults(pageItems);
  resultsCount.textContent = `Página ${session.page}`;
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
      `aria-label="Página ${n}"${n === session.page ? ' aria-current="page"' : ""}>${n}</button>`
    );
  }

  paginationNav.innerHTML =
    `<button type="button" class="page-btn page-nav" data-page="${session.page - 1}" ${session.page <= 1 ? "disabled" : ""}>Anterior</button>` +
    numbers.join("") +
    `<button type="button" class="page-btn page-nav" data-page="${session.page + 1}" ${hasNext ? "" : "disabled"}>Próxima</button>`;
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
  playerSubscribers.textContent = video.subscribers;
  playerViews.textContent = video.views;
  playerDate.textContent = video.date;
  playerTags.textContent = video.tags.join(" ");
  renderDescription(video.description);

  // A descrição vem como o Piped entrega (trecho curto); o resto está no YouTube
  ytLink.classList.toggle("hidden", !video.youtubeId);
  if (video.youtubeId) ytLink.href = `https://www.youtube.com/watch?v=${encodeURIComponent(video.youtubeId)}`;
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
}

async function enrichPlayer(video) {
  // Detalhes completos só existem na API própria: busca-os apenas se o vídeo veio dela
  // (com o Piped como fonte principal, a descrição é o trecho curto que ele entrega).
  const details = video.fromApi && API_BASES.length ? await fetchVideoDetails(video.youtubeId) : null;
  if (details) {
    applyVideoDetails(video, details);
  } else if (!video.titleLocalized) {
    const info = await fetchOEmbed(video.youtubeId);
    if (info && info.title) video.title = info.title;
  }
  if (state.currentVideo !== video) return;
  fillPlayerMetadata(video);
  setPageTitle(video.title);
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
  setPageTitle(video.title);

  // Configura o player de mídia
  mountVideoPlayer(video);

  // Metadados do vídeo
  fillPlayerMetadata(video);

  // Detalhes completos (API própria) ou, sem ela, título no idioma original via oEmbed
  if (video.youtubeId) enrichPlayer(video);

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

function renderDescription(text) {
  playerDescription.textContent = "";
  playerDescription.classList.toggle("hidden", !text);
  appendLinkedText(playerDescription, text);
}

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
  const units = { second: "segundo", minute: "minuto", hour: "hora", day: "dia", week: "semana", month: "mês", year: "ano" };
  const m = /^(\d+)\s+(second|minute|hour|day|week|month|year)s?\s+ago(.*)$/i.exec(text || "");
  if (!m) return text || "";
  const n = Number(m[1]);
  const unit = units[m[2].toLowerCase()];
  const plural = n === 1 ? unit : (unit === "mês" ? "meses" : unit + "s");
  return `há ${n} ${plural}${/edited/i.test(m[3]) ? " (editado)" : ""}`;
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

async function fetchApiCommentsPage(videoId, cursor) {
  const path = cursor
    ? `/api/comments/${encodeURIComponent(videoId)}?token=${encodeURIComponent(cursor.token)}`
    : `/api/comments/${encodeURIComponent(videoId)}`;
  const { data, base } = await fetchApiJson(path, cursor && cursor.base);
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
// A primeira página tenta o Piped e, se falhar, a API própria; as seguintes seguem a mesma fonte.
async function fetchCommentsPage(videoId, cursor) {
  if (cursor && cursor.src === "api") return fetchApiCommentsPage(videoId, cursor);
  try {
    return await fetchPipedCommentsPage(videoId, cursor);
  } catch (err) {
    if (cursor || !API_BASES.length) throw err;
  }
  return fetchApiCommentsPage(videoId, null);
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
  const label = typeof total === "number" ? total.toLocaleString("pt-BR") : String(total).replace(/\u00a0/g, " ");
  const singular = total === 1 || total === "1";
  commentsCountText.textContent = `${label} Comentário${singular ? "" : "s"}`;
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
  more.textContent = "Mostrar mais respostas";
  box.append(list, more);

  const label = `${comment.replyCount.toLocaleString("pt-BR")} resposta${comment.replyCount !== 1 ? "s" : ""}`;
  const renderToggle = () => { toggle.textContent = `${open ? "Ocultar" : "Ver"} ${label}`; };
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
      if (token === commentsToken) showToast("Não foi possível carregar as respostas.");
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
    if (local.length === 0) setCommentsMessage("Nenhum comentário.");
    else appendComments(local);
    return;
  }

  const videoId = video.youtubeId || video.id.replace("yt-", "");
  commentsState = { items: [], total: null, nextpage: null, videoId };
  commentsCountText.textContent = "Comentários";
  setCommentsMessage("Carregando comentários...");

  try {
    const page = await fetchCommentsPage(videoId, null);
    if (token !== commentsToken) return;
    if (page.disabled) {
      commentsCountText.textContent = "Comentários";
      setCommentsMessage("Os comentários estão desativados para este vídeo.");
      return;
    }
    commentsState.items = page.items;
    commentsState.total = page.total;
    commentsState.nextpage = page.next;
    updateCommentsHeader();
    commentsList.innerHTML = "";
    if (commentsState.items.length === 0) {
      setCommentsMessage("Nenhum comentário.");
      return;
    }
    appendComments(commentsState.items);
    loadMoreCommentsBtn.classList.toggle("hidden", !commentsState.nextpage);
  } catch (err) {
    if (token !== commentsToken) return;
    commentsCountText.textContent = "Comentários";
    setCommentsMessage("Não foi possível carregar os comentários.");
  }
}

async function loadMoreComments() {
  const st = commentsState;
  if (!st || !st.nextpage || loadMoreCommentsBtn.disabled) return;

  const token = commentsToken;
  loadMoreCommentsBtn.disabled = true;
  loadMoreCommentsBtn.textContent = "Carregando...";
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
    if (token === commentsToken) showToast("Não foi possível carregar mais comentários.");
  } finally {
    loadMoreCommentsBtn.disabled = false;
    loadMoreCommentsBtn.textContent = "Mostrar mais comentários";
  }
}

function showInitialFeed() {
  searchToken++;
  searchSession = null;
  paginationNav.classList.add("hidden");
  clearPlayer();
  playerView.classList.add("hidden");
  resultsView.classList.remove("hidden");
  initialFeedState.classList.remove("hidden");
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

function buildUrl({ q = "", p = 1, v = "" } = {}) {
  const params = new URLSearchParams();
  if (v) {
    params.set("v", v);
  } else if (q) {
    params.set("q", q);
    if (p > 1) params.set("p", String(p));
  }
  const qs = params.toString();
  return window.location.pathname + (qs ? `?${qs}` : "");
}

function readRoute() {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("p"), 10);
  return {
    q: (params.get("q") || "").trim(),
    p: page > 0 ? page : 1,
    v: (params.get("v") || "").trim()
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
    title: "Vídeo do YouTube (" + youtubeId + ")",
    thumbnail: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
    duration: "",
    channel: "Canal no YouTube",
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

  searchInput.value = q;
  clearSearchBtn.classList.toggle("hidden", !q);
  state.currentQuery = q;
  state.currentPage = p;

  if (v) {
    searchToken++;
    const video = await resolveVideo(v);
    if (token !== routeToken) return;
    if (!video) {
      showToast("Vídeo inválido.");
      navigate({ q, p }, { replace: true });
      return;
    }
    openVideoPlayer(video);
    backToResultsBtn.classList.toggle("hidden", !(searchSession || (history.state && history.state.fromSearch)));
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
// Pesquisas recentes: até 10, guardadas no navegador (localStorage), com "x" para remover
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
    remove.setAttribute("aria-label", `Remover "${term}" das pesquisas recentes`);
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
  const { q, v } = readRoute();
  if (q || v) navigate({});
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const term = searchInput.value.trim();
  hideRecent();
  if (!term) {
    goHome();
    return;
  }
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

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim().length > 0) {
    clearSearchBtn.classList.remove("hidden");
  } else {
    goHome();
  }
  renderRecent();
});

clearSearchBtn.addEventListener("click", () => {
  goHome();
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
homeLogo.addEventListener("click", (e) => {
  e.preventDefault();
  goHome();
});

// Voltar da página do player para a busca
backToResultsBtn.addEventListener("click", () => {
  if (history.state && history.state.fromSearch) {
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
      showToast("Link do vídeo copiado para a área de transferência!");
    } else {
      showToast("Link: " + url);
    }
  } catch (err) {
    showToast("Link copiado: " + url);
  }
});

// Carregar mais comentários
loadMoreCommentsBtn.addEventListener("click", loadMoreComments);

// Reset Search
resetSearchBtn.addEventListener("click", goHome);

// Alternar Tema (Dark / Light)
themeToggleBtn.addEventListener("click", () => {
  state.isDarkTheme = !state.isDarkTheme;
  document.body.classList.toggle("light-theme", !state.isDarkTheme);
  document.body.classList.toggle("dark-theme", state.isDarkTheme);
  
  const themeIcon = document.getElementById("themeIcon");
  if (state.isDarkTheme) {
    themeIcon.innerHTML = `<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>`;
    showToast("Tema escuro ativado");
  } else {
    themeIcon.innerHTML = `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>`;
    showToast("Tema claro ativado");
  }
});

// Voltar / avançar / atualizar: a URL é a fonte da verdade
window.addEventListener("popstate", applyRoute);

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

