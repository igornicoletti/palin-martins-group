import { partnersData } from '@/data'

export const Partners = () => {
  return (
    <section className="bg-backfore py-24 lg:py-32">
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-1 gap-24">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24 self-start lg:text-right">
              <h2 className="text-6xl sm:text-7xl font-light leading-none tracking-wide text-foreground-typography">
                <span className="text-foreground-typography">Nossos <br />clientes nos <br />fazem GRANDES</span>
              </h2>
            </div>
            <div className="text-base md:text-lg xl:text-lg font-light leading-relaxed tracking-wide text-foreground-typography space-y-4">
              <p>
                Com mais de <span className="font-normal">20 anos de experiência</span>, a Palin & Martins é uma
                <span className="font-normal"> consultoria tributária de referência</span>, localizada em São José do Rio Preto, São Paulo.
              </p>
              <p>
                Nossa equipe especializada atende tanto <span className="font-normal">pessoas físicas quanto jurídicas</span>, com
                destaque na <span className="font-normal">recuperação de créditos de ICMS</span>, sempre alcançando
                <span className="font-normal"> ótimos resultados</span> para nossos clientes. Também atuamos em
                <span className="font-normal"> Compliance Tributário</span>, <span className="font-normal">recuperação de tributos federais</span> e
                oferecemos <span className="font-normal">serviços jurídicos</span>. Tudo isso com base na legislação, garantindo
                <span className="font-normal"> segurança e sustentabilidade para o seu negócio</span>.
              </p>
              <p>
                Nosso foco é <span className="font-normal">entender as necessidades de cada cliente</span> e oferecer
                <span className="font-normal"> soluções personalizadas e eficazes</span>, que ajudam a
                <span className="font-normal"> fortalecer os negócios e garantir total satisfação</span>.
              </p>
              <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-14 items-center justify-center">
                {partnersData.map((partner) => (
                  <img
                    key={partner.src}
                    src={partner.src}
                    alt={partner.alt}
                    className="w-full max-w-24 mx-auto object-contain" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
