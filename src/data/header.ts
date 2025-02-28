import { Briefcase, Buildings, ClipboardText, FacebookLogo, Info, InstagramLogo, LinkedinLogo, Phone, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

export const headerData = {
  institucional: [
    { name: 'Sobre nós', description: 'Conheça nossa história e valores.', href: '/sobre', icon: Buildings },
    { name: 'Recuperômetro', description: 'Acompanhe a recuperação de tributos.', href: '/recuperometro', icon: ClipboardText },
    { name: 'Ecossistema', description: 'Nosso impacto e parcerias.', href: '/ecossistema', icon: Buildings },
    { name: 'Carreiras', description: 'Faça parte do nosso time.', href: '/carreiras', icon: Briefcase },
    { name: 'Contato', description: 'Fale conosco.', href: '/contato', icon: Phone },
    { name: 'Dúvidas', description: 'Perguntas frequentes.', href: '/duvidas', icon: Info },

  ],
  resources: [
    { icon: FacebookLogo, href: 'https://web.facebook.com/PalineMartins?locale=pt_BR' },
    { icon: InstagramLogo, href: 'https://www.instagram.com/palin.martins/' },
    { icon: YoutubeLogo, href: 'https://www.youtube.com/@PalineMartins' },
    { icon: LinkedinLogo, href: 'https://www.linkedin.com/in/palinemartins/' },
    { icon: WhatsappLogo, href: '#' },
  ],
}
