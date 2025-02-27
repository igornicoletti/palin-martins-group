import { ContactCard } from '@/components'
import { contactData } from '@/data'

export const Contact = () => {
  return (
    <section className="bg-foreground py-24 lg:py-32">
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-1 gap-24">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-wide text-background-typography">
              Entre em contato conosco. <span className="text-gradient-secundary"><br />Estamos aqui para ajudar!</span>
            </h2>
            <p className="mt-12 text-base md:text-lg xl:text-xl font-light leading-relaxed tracking-wide text-background-typography">
              Entre em contato com nossa equipe de especialistas para soluções personalizadas e orientações detalhadas sobre como podemos apoiar seu negócio de forma eficiente.
            </p>
          </div>
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
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
