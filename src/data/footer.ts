import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

export const footerData = {
  sections: [

    {
      title: 'Institucional',
      links: [
        { label: 'Sobre nós', href: '/sobre' },
        { label: 'Carreiras', href: '/carreiras' },
        { label: 'Contato', href: '/contato' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Consultoria Tributária', href: '/servicos' },
        { label: 'Recuperação de Tributos Federais', href: '/servicos' },
        { label: 'Recuperação de Créditos de ICMS', href: '/servicos' },
        { label: 'Compliance Tributário', href: '/servicos' },
        { label: 'Serviços Jurídicos', href: '/servicos' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', href: '/politica-privacidade' },
        { label: 'Termos de Uso', href: '/termos-uso' },
      ],
    },
  ],
  socialLinks: [
    { icon: FacebookLogo, href: 'https://web.facebook.com/PalineMartins?locale=pt_BR' },
    { icon: InstagramLogo, href: 'https://www.instagram.com/palin.martins/' },
    { icon: YoutubeLogo, href: 'https://www.youtube.com/@PalineMartins' },
    { icon: LinkedinLogo, href: 'https://www.linkedin.com/in/palinemartins/' },
    { icon: WhatsappLogo, href: "#" },
  ],
  company: "PALIN&MARTINS",
  copyright: "© 2025 PALIN&MARTINS."
}
