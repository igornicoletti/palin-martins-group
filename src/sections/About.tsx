import { ArrowDown } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export const About = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true)
        scrollToNextSection()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('recovermeter')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='bg-background h-full min-h-screen flex flex-col justify-center relative'>
      <div className='px-6 md:px-10 py-20 lg:py-28'>
        <div className='w-full mx-auto text-center'>
          <h2 className='text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-wide text-foreground-typography'>
            Soluções <br className='sm:hidden' /> estratégicas em <span className='text-gradient-primary'><br />Tributação e Compliance</span></h2>
          <p className='mt-12 max-w-3xl mx-auto text-lg xl:text-2xl font-light leading-relaxed tracking-wide text-foreground-typography'>
            Nos concentramos em mercados onde tecnologia e inovação podem desbloquear valor a longo prazo.</p>
        </div>
        <div className='mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto text-center items-center justify-center'>
          <a href='#' className='bg-palin text-foreground-typography tracking-wide font-medium rounded-xl px-6 py-3'>
            Entrar em contato</a>
          <a href='#' className='bg-backfore text-foreground-typography tracking-wide font-medium rounded-xl px-6.5 py-3.5'>
            Conhecer os serviços</a>
        </div>
      </div>
      <button onClick={scrollToNextSection} className='hidden md:flex absolute cursor-pointer bottom-10 left-1/2 transform -translate-x-1/2 text-foreground-typography/20 hover:text-primary transition-colors animate-bounce'>
        <ArrowDown size={36} className='transition-transform duration-300 hover:scale-110' />
      </button>
    </section>
  )
}
