import { Briefcase, Buildings, ClipboardText, CurrencyDollar, FileText, Info, Phone, ShieldCheck } from '@phosphor-icons/react'

export const headerData = {
  institucional: [
    { name: 'Sobre nós', description: 'Conheça nossa história e valores.', href: '/sobre', icon: Buildings },
    { name: 'Recuperômetro', description: 'Acompanhe a recuperação de tributos.', href: '/recuperometro', icon: ClipboardText },
    { name: 'Ecossistema', description: 'Nosso impacto e parcerias.', href: '/ecossistema', icon: Buildings },
    { name: 'Carreiras', description: 'Faça parte do nosso time.', href: '/carreiras', icon: Briefcase },
    { name: 'Contato', description: 'Fale conosco.', href: '/contato', icon: Phone },
    { name: 'Dúvidas', description: 'Perguntas frequentes.', href: '/duvidas', icon: Info },
  ],
  serviços: [
    { name: 'Consultoria Tributária', description: 'Soluções estratégicas para sua empresa.', href: '/servicos', icon: ClipboardText },
    { name: 'Recuperação de Tributos Federais', description: 'Maximize seus créditos fiscais.', href: '/servicos', icon: CurrencyDollar },
    { name: 'Recuperação de Créditos de ICMS', description: 'Aproveite oportunidades tributárias.', href: '/servicos', icon: FileText },
    { name: 'Compliance Tributário', description: 'Assegure conformidade e segurança.', href: '/servicos', icon: ShieldCheck },
  ],
}
