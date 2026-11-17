/**
 * Configuração centralizada de contatos e destinos dos botões do site Thiago Correia (TC).
 * Altere os valores abaixo caso precise atualizar o telefone, mensagem padrão ou perfil do Instagram.
 */
export const CONTACT_CONFIG = {
  companyName: 'THIAGO CORREIA',
  brandMark: 'TC',
  location: 'Milagres - Bahia',

  whatsapp: {
    displayPhone: '75-98314-6551',
    // Número internacional apenas dígitos (55 + DDD + número)
    phoneDigits: '5575983146551',
    defaultMessage:
      'Olá! Gostaria de solicitar um orçamento com a Thiago Correia (TC) - Locação de Máquinas e Construtora.',
  },

  instagram: {
    url: 'https://www.instagram.com/thiagocorreiads?rpxt=eGhoaDFoYnp2ZGo3',
    handle: '@thiagocorreiads',
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage ?? CONTACT_CONFIG.whatsapp.defaultMessage
  );
  return `https://wa.me/${CONTACT_CONFIG.whatsapp.phoneDigits}?text=${message}`;
}
