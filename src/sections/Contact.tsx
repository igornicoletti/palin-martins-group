import { ContactCard } from '@/components'
import { contactData } from '@/data'

export const Contact = () => {
  return (
    <section className='bg-foreground py-20 lg:py-28'>
      <div className='px-6 sm:px-10'>
        <div className='grid grid-cols-1 gap-24'>
          <div className='w-full max-w-5xl mx-auto sm:text-center'>
            <p className='text-2xl font-light text-palin'>
              Entre em contato conosco.</p>
            <h2 className='text-4xl lg:text-6xl font-light text-gradient-secundary'>
              Estamos aqui para ajudar!</h2>
          </div>
          <div className='w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {contactData.map((contact) => (
              <ContactCard
                key={contact.id}
                icon={contact.icon}
                title={contact.title}
                button={contact.button}
                description={contact.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
