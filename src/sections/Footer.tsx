import { footerData } from '@/data'

export const Footer = () => {
  return (
    <footer className='bg-background pt-24 lg:pt-32 pb-8'>
      <div className='w-full max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24'>
          <a href='/' className='whitespace-nowrap'>
            <img src='/images/logo-symbol.png' alt={footerData.company} className='h-14 w-auto sm:h-14' />
          </a>
          <div className='col-span-2 flex flex-col sm:flex-row gap-16 justify-between'>
            {footerData.sections.map((section, index) => (
              <div key={index}>
                <h2 className='mb-6 font-normal text-foreground-typography'>{section.title}</h2>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx} className='mb-2 font-light text-foreground-typography/75'>
                      <a href={link.href} className='hover:underline'>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
          <span className='order-2 md:order-1 font-light text-foreground-typography/75 md:text-center'>
            {footerData.copyright}</span>
          <div className='order-1 md:order-2 flex md:mt-0 space-x-6 md:justify-center'>
            {footerData.socialLinks.map((social, index) => (
              <a key={index} href={social.href} className='text-foreground-typography/50 hover:text-palin'>
                <social.icon aria-hidden='true' weight='duotone' className='size-6' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
