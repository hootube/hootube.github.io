/* =========================================================
   Idiomas do HooTube
   O texto original do app é em português e serve de chave: t("texto") devolve o próprio texto
   em pt e a tradução nos outros idiomas (sem tradução, volta o português). {nome} é substituído
   pelos valores passados. O idioma vem do navegador (navigator.languages); se não for pt, en
   ou es, usa o inglês. Para forçar um idioma nos testes: ?lang=en
   Para adicionar um idioma: crie o dicionário abaixo e inclua o código em SUPPORTED.
   ========================================================= */
(function () {
  const SUPPORTED = ["pt", "en", "es"];
  const FALLBACK = "en";

  function pickLanguage() {
    try {
      const forced = new URLSearchParams(location.search).get("lang");
      if (forced && SUPPORTED.includes(forced.slice(0, 2).toLowerCase())) return forced.slice(0, 2).toLowerCase();
    } catch (err) { /* sem URL */ }
    for (const tag of (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "pt-BR"])) {
      const code = String(tag).slice(0, 2).toLowerCase();
      if (SUPPORTED.includes(code)) return code;
    }
    return FALLBACK;
  }

  const lang = pickLanguage();

  const en = {
    // ---- página e cabeçalho
    "HooTube: pesquise e assista a vídeos do YouTube de um jeito simples.": "HooTube: search and watch YouTube videos in a simple way.",
    "Pesquise e assista a vídeos do YouTube de um jeito simples.": "Search and watch YouTube videos in a simple way.",
    "HooTube Início": "HooTube Home",
    "Digite algo para pesquisar...": "Type something to search...",
    "Limpar pesquisa": "Clear search",
    "Pesquisar": "Search",
    "Pesquisas recentes": "Recent searches",
    "Alternar tema": "Toggle theme",
    "Configurações": "Settings",
    "Canais inscritos": "Subscribed channels",
    "Playlists salvas": "Saved playlists",
    "Playlist": "Playlist",
    "Paginação dos resultados": "Results pagination",
    "Feed vazio... Pesquise algo para iniciar!": "Empty feed... Search for something to start!",
    "Voltar ao início": "Back to home",
    "Nenhum resultado encontrado": "No results found",
    "Tente termos de pesquisa diferentes ou cole o link de um vídeo.": "Try different search terms or paste a video link.",
    "Resultados": "Results",
    "Verificado": "Verified",
    "Compartilhar": "Share",
    "Salvar": "Save",
    "Salvo": "Saved",
    "Inscrever-se": "Subscribe",
    "Inscrito": "Subscribed",
    "Carregando descrição do vídeo...": "Loading video description...",
    "Ver descrição completa no YouTube": "See full description on YouTube",
    "Comentários": "Comments",
    "Mostrar mais comentários": "Show more comments",
    "Nome do Canal": "Channel name",
    "Título do Vídeo": "Video title",
    // ---- janelas
    "Fechar": "Close",
    "Salvar em…": "Save to…",
    "Nova playlist…": "New playlist…",
    "Nome da nova playlist": "New playlist name",
    "Criar": "Create",
    "Renomear playlist": "Rename playlist",
    "Novo nome da playlist": "New playlist name",
    "Tudo fica guardado de forma local, neste aparelho. Exporte para guardar um backup ou levar para outro aparelho; ao importar, o conteúdo do arquivo é somado ao que você já tem.":
      "Everything is stored locally, on this device only. Export to keep a backup or move to another device; when importing, the file's content is added to what you already have.",
    "Inscrições": "Subscriptions",
    "Playlists": "Playlists",
    "Exportar inscrições": "Export subscriptions",
    "Importar inscrições": "Import subscriptions",
    "Exportar playlists": "Export playlists",
    "Importar playlists": "Import playlists",
    "Link copiado para a área de transferência!": "Link copied to the clipboard!",
    "Renomear": "Rename",
    "Duplicar": "Duplicate",
    "Excluir": "Delete",
    "Mais opções": "More options",
    "Opções da playlist": "Playlist options",
    // ---- resultados, player, comentários
    "Assistir {title}": "Watch {title}",
    "Salvar “{title}” em uma playlist": "Save “{title}” to a playlist",
    "Salvo em playlist (editar)": "Saved in a playlist (edit)",
    "Salvar em playlist": "Save to playlist",
    "0 resultados": "0 results",
    "Página {n}": "Page {n}",
    "Anterior": "Previous",
    "Próxima": "Next",
    "Não foi possível buscar": "Could not search",
    "O serviço de busca não respondeu. Tente novamente em instantes.": "The search service did not respond. Please try again in a moment.",
    "Não foi possível carregar mais resultados.": "Could not load more results.",
    "Canal no YouTube": "YouTube channel",
    "Vídeo do YouTube": "YouTube video",
    "{n} visualizações": "{n} views",
    "agora há pouco": "just now",
    "(editado)": "(edited)",
    "Comentário": "Comment",
    "Mostrar mais respostas": "Show more replies",
    "Ocultar {label}": "Hide {label}",
    "Ver {label}": "View {label}",
    "resposta": "reply",
    "respostas": "replies",
    "Não foi possível carregar as respostas.": "Could not load the replies.",
    "Nenhum comentário.": "No comments.",
    "Carregando comentários...": "Loading comments...",
    "Os comentários estão desativados para este vídeo.": "Comments are turned off for this video.",
    "Não foi possível carregar os comentários.": "Could not load the comments.",
    "Carregando...": "Loading...",
    "Não foi possível carregar mais comentários.": "Could not load more comments.",
    "Vídeo inválido.": "Invalid video.",
    "Voltar para a playlist": "Back to the playlist",
    "Voltar para a pesquisa": "Back to search",
    "Remover \"{term}\" das pesquisas recentes": "Remove \"{term}\" from recent searches",
    "Link do vídeo copiado para a área de transferência!": "Video link copied to the clipboard!",
    "Link: {url}": "Link: {url}",
    "Link copiado: {url}": "Link copied: {url}",
    "Tema escuro ativado": "Dark theme on",
    "Tema claro ativado": "Light theme on",
    // ---- playlists
    "Não foi possível guardar as playlists localmente.": "Could not save the playlists locally.",
    "Limite de {n} playlists atingido.": "Limit of {n} playlists reached.",
    "Esta playlist já tem {n} vídeos.": "This playlist already has {n} videos.",
    "(cópia)": "(copy)",
    "(cópia {n})": "(copy {n})",
    "Suas playlists": "Your playlists",
    "Suas inscrições": "Your subscriptions",
    "Abrir a playlist {name} ({total})": "Open the playlist {name} ({total})",
    "Playlist não encontrada.": "Playlist not found.",
    "Voltar para o início": "Back to home",
    "Nenhum vídeo ainda. Abra um vídeo e use o botão Salvar.": "No videos yet. Open a video and use the Save button.",
    "Remover {title} da playlist {name}": "Remove {title} from the playlist {name}",
    "Removido de “{name}”.": "Removed from “{name}”.",
    "Mais opções da playlist {name}": "More options for the playlist {name}",
    "e seus {videos}": "and its {videos}",
    "Excluir a playlist “{name}”{detail}? Isso não pode ser desfeito.": "Delete the playlist “{name}”{detail}? This cannot be undone.",
    "Playlist excluída.": "Playlist deleted.",
    "Criada “{name}”.": "Created “{name}”.",
    "Digite um nome para a playlist.": "Type a name for the playlist.",
    "Já existe uma playlist com esse nome.": "A playlist with that name already exists.",
    "Playlist renomeada.": "Playlist renamed.",
    "Você ainda não tem playlists. Crie a primeira abaixo.": "You don't have any playlists yet. Create the first one below.",
    "Salvo em “{name}”.": "Saved to “{name}”.",
    // ---- inscrições
    "Não foi possível guardar as inscrições localmente.": "Could not save the subscriptions locally.",
    "Inscrição em {name} cancelada.": "Unsubscribed from {name}.",
    "Limite de inscrições atingido.": "Subscription limit reached.",
    "Inscrito em {name}.": "Subscribed to {name}.",
    "Ver vídeos de {name}": "See videos from {name}",
    "Cancelar inscrição": "Unsubscribe",
    "Cancelar inscrição em {name}": "Unsubscribe from {name}",
    // ---- configurações, exportar e importar
    "Você ainda não tem playlists salvas.": "You don't have any saved playlists yet.",
    "Você ainda não tem inscrições.": "You don't have any subscriptions yet.",
    "Você ainda não tem playlists para exportar.": "You don't have any playlists to export yet.",
    "Você ainda não tem inscrições para exportar.": "You don't have any subscriptions to export yet.",
    "Playlists exportadas.": "Playlists exported.",
    "Inscrições exportadas.": "Subscriptions exported.",
    "playlist": "playlist", "vídeo": "video", "vídeos": "videos", "canal inscrito": "subscribed channel", "canais inscritos": "subscribed channels",
    "playlist nova": "new playlist", "playlists novas": "new playlists", "vídeo novo": "new video", "vídeos novos": "new videos",
    "inscrição nova": "new subscription", "inscrições novas": "new subscriptions",
    "inscrições": "subscriptions", "playlists": "playlists",
    "Arquivo grande demais para ser um backup de {label}.": "File too large to be a {label} backup.",
    "Este arquivo é de {other}. Use \"Importar {label}\" com o arquivo certo.": "This file contains {other}. Use \"Import {label}\" with the right file.",
    "Arquivo inválido: não é um backup de {label} do HooTube.": "Invalid file: not a HooTube {label} backup.",
    "Nenhuma inscrição válida encontrada no arquivo.": "No valid subscription found in the file.",
    "Nenhuma playlist válida encontrada no arquivo.": "No valid playlist found in the file.",
    "Importado: {what}.": "Imported: {what}.",
    "{a} e {b}": "{a} and {b}",
    "Nada novo para importar: tudo já estava salvo.": "Nothing new to import: everything was already saved.",
    "Voltar": "Back",
    "Voltar para o canal": "Back to the channel",
    "{n} inscritos": "{n} subscribers",
    "Mostrar mais vídeos": "Show more videos",
    "Canal": "Channel",
    "Não foi possível carregar o canal.": "Could not load the channel.",
    "Este canal não tem vídeos para mostrar.": "This channel has no videos to show.",
    "resultado": "result", "resultados": "results",
    "Backup completo": "Full backup",
    "Playlists, inscrições e configurações (tema e pesquisas recentes) num arquivo só.": "Playlists, subscriptions and settings (theme and recent searches) in a single file.",
    "Exportar tudo": "Export everything",
    "Importar tudo": "Import everything",
    "Backup completo exportado.": "Full backup exported.",
    "backup completo": "full backup",
    "configurações": "settings",
    "Arquivo inválido: não é um backup do HooTube.": "Invalid file: not a HooTube backup.",
    "Limpar dados": "Clear data",
    "Apaga as playlists, as inscrições, as pesquisas recentes e o tema guardados neste aparelho. Exporte um backup antes se quiser poder recuperar.": "Deletes the playlists, subscriptions, recent searches and theme stored on this device. Export a backup first if you want to be able to recover them.",
    "Apagar todas as playlists, inscrições, pesquisas recentes e o tema guardados neste aparelho? Isso não pode ser desfeito.": "Delete all playlists, subscriptions, recent searches and the theme stored on this device? This cannot be undone.",
    "Dados apagados.": "Data deleted.",
    // ---- player (rótulos)
    "Abrir no YouTube": "Open on YouTube"
  };

  const es = {
    "HooTube: pesquise e assista a vídeos do YouTube de um jeito simples.": "HooTube: busca y mira videos de YouTube de forma sencilla.",
    "Pesquise e assista a vídeos do YouTube de um jeito simples.": "Busca y mira videos de YouTube de forma sencilla.",
    "HooTube Início": "HooTube Inicio",
    "Digite algo para pesquisar...": "Escribe algo para buscar...",
    "Limpar pesquisa": "Borrar búsqueda",
    "Pesquisar": "Buscar",
    "Pesquisas recentes": "Búsquedas recientes",
    "Alternar tema": "Cambiar tema",
    "Configurações": "Configuración",
    "Canais inscritos": "Canales suscritos",
    "Playlists salvas": "Listas guardadas",
    "Playlist": "Lista",
    "Paginação dos resultados": "Paginación de resultados",
    "Feed vazio... Pesquise algo para iniciar!": "Feed vacío... ¡Busca algo para empezar!",
    "Voltar ao início": "Volver al inicio",
    "Nenhum resultado encontrado": "No se encontraron resultados",
    "Tente termos de pesquisa diferentes ou cole o link de um vídeo.": "Prueba con otros términos de búsqueda o pega el enlace de un video.",
    "Resultados": "Resultados",
    "Verificado": "Verificado",
    "Compartilhar": "Compartir",
    "Salvar": "Guardar",
    "Salvo": "Guardado",
    "Inscrever-se": "Suscribirse",
    "Inscrito": "Suscrito",
    "Carregando descrição do vídeo...": "Cargando la descripción del video...",
    "Ver descrição completa no YouTube": "Ver la descripción completa en YouTube",
    "Comentários": "Comentarios",
    "Mostrar mais comentários": "Mostrar más comentarios",
    "Nome do Canal": "Nombre del canal",
    "Título do Vídeo": "Título del video",
    "Fechar": "Cerrar",
    "Salvar em…": "Guardar en…",
    "Nova playlist…": "Nueva lista…",
    "Nome da nova playlist": "Nombre de la nueva lista",
    "Criar": "Crear",
    "Renomear playlist": "Renombrar lista",
    "Novo nome da playlist": "Nuevo nombre de la lista",
    "Tudo fica guardado de forma local, neste aparelho. Exporte para guardar um backup ou levar para outro aparelho; ao importar, o conteúdo do arquivo é somado ao que você já tem.":
      "Todo se guarda de forma local, solo en este dispositivo. Exporta para guardar una copia o llevarla a otro dispositivo; al importar, el contenido del archivo se suma a lo que ya tienes.",
    "Inscrições": "Suscripciones",
    "Playlists": "Listas",
    "Exportar inscrições": "Exportar suscripciones",
    "Importar inscrições": "Importar suscripciones",
    "Exportar playlists": "Exportar listas",
    "Importar playlists": "Importar listas",
    "Link copiado para a área de transferência!": "¡Enlace copiado al portapapeles!",
    "Renomear": "Renombrar",
    "Duplicar": "Duplicar",
    "Excluir": "Eliminar",
    "Mais opções": "Más opciones",
    "Opções da playlist": "Opciones de la lista",
    "Assistir {title}": "Ver {title}",
    "Salvar “{title}” em uma playlist": "Guardar “{title}” en una lista",
    "Salvo em playlist (editar)": "Guardado en una lista (editar)",
    "Salvar em playlist": "Guardar en una lista",
    "0 resultados": "0 resultados",
    "Página {n}": "Página {n}",
    "Anterior": "Anterior",
    "Próxima": "Siguiente",
    "Não foi possível buscar": "No se pudo buscar",
    "O serviço de busca não respondeu. Tente novamente em instantes.": "El servicio de búsqueda no respondió. Inténtalo de nuevo en unos instantes.",
    "Não foi possível carregar mais resultados.": "No se pudieron cargar más resultados.",
    "Canal no YouTube": "Canal de YouTube",
    "Vídeo do YouTube": "Video de YouTube",
    "{n} visualizações": "{n} visualizaciones",
    "agora há pouco": "justo ahora",
    "(editado)": "(editado)",
    "Comentário": "Comentario",
    "Mostrar mais respostas": "Mostrar más respuestas",
    "Ocultar {label}": "Ocultar {label}",
    "Ver {label}": "Ver {label}",
    "resposta": "respuesta",
    "respostas": "respuestas",
    "Não foi possível carregar as respostas.": "No se pudieron cargar las respuestas.",
    "Nenhum comentário.": "Sin comentarios.",
    "Carregando comentários...": "Cargando comentarios...",
    "Os comentários estão desativados para este vídeo.": "Los comentarios están desactivados en este video.",
    "Não foi possível carregar os comentários.": "No se pudieron cargar los comentarios.",
    "Carregando...": "Cargando...",
    "Não foi possível carregar mais comentários.": "No se pudieron cargar más comentarios.",
    "Vídeo inválido.": "Video no válido.",
    "Voltar para a playlist": "Volver a la lista",
    "Voltar para a pesquisa": "Volver a la búsqueda",
    "Remover \"{term}\" das pesquisas recentes": "Quitar \"{term}\" de las búsquedas recientes",
    "Link do vídeo copiado para a área de transferência!": "¡Enlace del video copiado al portapapeles!",
    "Link: {url}": "Enlace: {url}",
    "Link copiado: {url}": "Enlace copiado: {url}",
    "Tema escuro ativado": "Tema oscuro activado",
    "Tema claro ativado": "Tema claro activado",
    "Não foi possível guardar as playlists localmente.": "No se pudieron guardar las listas de forma local.",
    "Limite de {n} playlists atingido.": "Se alcanzó el límite de {n} listas.",
    "Esta playlist já tem {n} vídeos.": "Esta lista ya tiene {n} videos.",
    "(cópia)": "(copia)",
    "(cópia {n})": "(copia {n})",
    "Suas playlists": "Tus listas",
    "Suas inscrições": "Tus suscripciones",
    "Abrir a playlist {name} ({total})": "Abrir la lista {name} ({total})",
    "Playlist não encontrada.": "Lista no encontrada.",
    "Voltar para o início": "Volver al inicio",
    "Nenhum vídeo ainda. Abra um vídeo e use o botão Salvar.": "Aún no hay videos. Abre un video y usa el botón Guardar.",
    "Remover {title} da playlist {name}": "Quitar {title} de la lista {name}",
    "Removido de “{name}”.": "Quitado de “{name}”.",
    "Mais opções da playlist {name}": "Más opciones de la lista {name}",
    "e seus {videos}": "y sus {videos}",
    "Excluir a playlist “{name}”{detail}? Isso não pode ser desfeito.": "¿Eliminar la lista “{name}”{detail}? Esto no se puede deshacer.",
    "Playlist excluída.": "Lista eliminada.",
    "Criada “{name}”.": "Creada “{name}”.",
    "Digite um nome para a playlist.": "Escribe un nombre para la lista.",
    "Já existe uma playlist com esse nome.": "Ya existe una lista con ese nombre.",
    "Playlist renomeada.": "Lista renombrada.",
    "Você ainda não tem playlists. Crie a primeira abaixo.": "Aún no tienes listas. Crea la primera abajo.",
    "Salvo em “{name}”.": "Guardado en “{name}”.",
    "Não foi possível guardar as inscrições localmente.": "No se pudieron guardar las suscripciones de forma local.",
    "Inscrição em {name} cancelada.": "Suscripción a {name} cancelada.",
    "Limite de inscrições atingido.": "Se alcanzó el límite de suscripciones.",
    "Inscrito em {name}.": "Suscrito a {name}.",
    "Ver vídeos de {name}": "Ver videos de {name}",
    "Cancelar inscrição": "Cancelar suscripción",
    "Cancelar inscrição em {name}": "Cancelar suscripción a {name}",
    "Você ainda não tem playlists salvas.": "Aún no tienes listas guardadas.",
    "Você ainda não tem inscrições.": "Aún no tienes suscripciones.",
    "Você ainda não tem playlists para exportar.": "Aún no tienes listas para exportar.",
    "Você ainda não tem inscrições para exportar.": "Aún no tienes suscripciones para exportar.",
    "Playlists exportadas.": "Listas exportadas.",
    "Inscrições exportadas.": "Suscripciones exportadas.",
    "playlist": "lista", "vídeo": "video", "vídeos": "videos", "canal inscrito": "canal suscrito", "canais inscritos": "canales suscritos",
    "playlist nova": "lista nueva", "playlists novas": "listas nuevas", "vídeo novo": "video nuevo", "vídeos novos": "videos nuevos",
    "inscrição nova": "suscripción nueva", "inscrições novas": "suscripciones nuevas",
    "inscrições": "suscripciones", "playlists": "listas",
    "Arquivo grande demais para ser um backup de {label}.": "El archivo es demasiado grande para ser una copia de {label}.",
    "Este arquivo é de {other}. Use \"Importar {label}\" com o arquivo certo.": "Este archivo es de {other}. Usa \"Importar {label}\" con el archivo correcto.",
    "Arquivo inválido: não é um backup de {label} do HooTube.": "Archivo no válido: no es una copia de {label} de HooTube.",
    "Nenhuma inscrição válida encontrada no arquivo.": "No se encontró ninguna suscripción válida en el archivo.",
    "Nenhuma playlist válida encontrada no arquivo.": "No se encontró ninguna lista válida en el archivo.",
    "Importado: {what}.": "Importado: {what}.",
    "{a} e {b}": "{a} y {b}",
    "Nada novo para importar: tudo já estava salvo.": "Nada nuevo que importar: todo ya estaba guardado.",
    "Voltar": "Volver",
    "Voltar para o canal": "Volver al canal",
    "{n} inscritos": "{n} suscriptores",
    "Mostrar mais vídeos": "Mostrar más videos",
    "Canal": "Canal",
    "Não foi possível carregar o canal.": "No se pudo cargar el canal.",
    "Este canal não tem vídeos para mostrar.": "Este canal no tiene videos para mostrar.",
    "resultado": "resultado", "resultados": "resultados",
    "Backup completo": "Copia completa",
    "Playlists, inscrições e configurações (tema e pesquisas recentes) num arquivo só.": "Listas, suscripciones y ajustes (tema y búsquedas recientes) en un solo archivo.",
    "Exportar tudo": "Exportar todo",
    "Importar tudo": "Importar todo",
    "Backup completo exportado.": "Copia completa exportada.",
    "backup completo": "copia completa",
    "configurações": "ajustes",
    "Arquivo inválido: não é um backup do HooTube.": "Archivo no válido: no es una copia de HooTube.",
    "Limpar dados": "Borrar datos",
    "Apaga as playlists, as inscrições, as pesquisas recentes e o tema guardados neste aparelho. Exporte um backup antes se quiser poder recuperar.": "Borra las listas, las suscripciones, las búsquedas recientes y el tema guardados en este dispositivo. Exporta una copia antes si quieres poder recuperarlos.",
    "Apagar todas as playlists, inscrições, pesquisas recentes e o tema guardados neste aparelho? Isso não pode ser desfeito.": "¿Borrar todas las listas, suscripciones, búsquedas recientes y el tema guardados en este dispositivo? Esto no se puede deshacer.",
    "Dados apagados.": "Datos borrados.",
    "Abrir no YouTube": "Abrir en YouTube"
  };

  const dictionaries = { en, es };
  const dict = dictionaries[lang] || null;   // pt: sem dicionário, o texto original é o próprio idioma

  function t(key, vars) {
    let text = (dict && dict[key]) || key;
    if (vars) text = text.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? vars[name] : m));
    return text;
  }

  const locale = { pt: "pt-BR", en: "en", es: "es" }[lang];

  // Traduz o que já está escrito no index.html (textos, placeholder, title, aria-label, meta)
  function translateDom() {
    if (!dict) return;
    const norm = s => s.replace(/\s+/g, " ").trim();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (node.parentElement && /^(SCRIPT|STYLE)$/.test(node.parentElement.tagName)) return;
      const key = norm(node.nodeValue);
      if (key && dict[key]) node.nodeValue = node.nodeValue.replace(key, dict[key]);
    });
    document.querySelectorAll("[title],[placeholder],[aria-label],[alt]").forEach(el => {
      ["title", "placeholder", "aria-label", "alt"].forEach(attr => {
        const value = el.getAttribute(attr);
        if (value && dict[norm(value)]) el.setAttribute(attr, dict[norm(value)]);
      });
    });
    document.querySelectorAll('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]').forEach(el => {
      const value = el.getAttribute("content");
      if (value && dict[norm(value)]) el.setAttribute("content", dict[norm(value)]);
    });
  }

  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  window.HOOTUBE_LANG = lang;
  window.HOOTUBE_LOCALE = locale;
  window.t = t;
  translateDom();
})();
