/**
 * Configuração do HooTube.
 *
 * Ordem das fontes de dados (busca, detalhes do vídeo, comentários):
 *   1) VPS (API própria)  <- principal, ativa
 *   2) Piped              <- reserva, ativa
 *   3) Cloudflare         <- terceira opção, INATIVA (comentada abaixo)
 * Cada fonte só é tentada se a anterior falhar. A página do canal usa o Piped.
 */
window.HOOTUBE_CONFIG = {

  // ============================================================================
  // >>> INSTÂNCIA DO PIPED: TROQUE AQUI MANUALMENTE se ela cair ou ficar lenta <<<
  // Se a busca ou os comentários pararem de funcionar, troque pelo endereço de outra
  // instância pública (lista: https://github.com/TeamPiped/documentation, "Public instances").
  // O endereço é o da API (geralmente começa com "pipedapi." ou "api.piped."), sem barra no final.
  // ============================================================================
  pipedInstance: "https://api.piped.private.coffee",

  // Reservas do Piped: só são tentadas se a instância acima falhar. Pode esvaziar a lista: [].
  pipedFallbacks: [
    "https://pipedapi.ducks.party",
    "https://pipedapi.wireway.ch"
  ],

  // ============================================================================
  // API PRÓPRIA (worker) — veja worker/README.md
  // ============================================================================

  // 1) Principal: VPS (HTTPS). É tentada primeiro; se falhar, o app usa o Piped.
  apiBases: [
    "https://api-hootube.alpsolucoes.com"
  ],

  // 3) Terceira opção, só depois do Piped falhar. INATIVA: tire o "//" para ativar.
  apiFallbacks: [
    // "https://hootube-api.pablomalmeida7.workers.dev"  // Cloudflare Workers
  ]
};
