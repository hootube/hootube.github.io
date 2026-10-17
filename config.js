/**
 * Configuração do HooTube.
 *
 * Ordem das fontes de dados (busca, comentários):
 *   1) Piped           <- principal, ativo
 *   2) VPS             <- inativo (comentado abaixo)
 *   3) Cloudflare      <- inativo (comentado abaixo)
 * A VPS e a Cloudflare só são usadas se forem ativadas aqui E se o Piped falhar.
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
  // API PRÓPRIA (worker) — INATIVA. Para ativar, tire o "//" da linha desejada.
  // A ordem importa: a primeira linha ativa é tentada antes da seguinte.
  // Só é consultada se o Piped acima falhar. Veja worker/README.md.
  // ============================================================================
  apiBases: [
    // "https://api.huvuptvbz.qd.je",                    // 2) VPS (precisa de HTTPS funcionando)
    // "https://hootube-api.pablomalmeida7.workers.dev"  // 3) Cloudflare Workers
  ]
};
