import { CounterRecovermeter } from '@/components'

export const Recovermeter = () => {
  return (
    <section id="recovermeter" className="bg-background min-h-screen flex flex-col justify-center relative">
      <div className="px-6 md:px-10">
        <div className="w-full mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-wide text-foreground-typography">
            Recuperômetro
          </h2>
          <h3 className="mt-12 text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight tracking-wide text-gradient-primary">
            <CounterRecovermeter />
          </h3>
          <p className="mt-12 max-w-3xl mx-auto text-lg xl:text-2xl font-light leading-relaxed tracking-wide text-foreground-typography">
            Valor total de créditos recuperados com soluções inteligentes que asseguram a sustentabilidade e o crescimento dos negócios.
          </p>
          <p className="mt-2 max-w-3xl mx-auto text-base font-light leading-relaxed tracking-wide text-foreground-typography/50">
            Valores acumulados até novembro/2024
          </p>
          <div className="mt-24 flex flex-col md:flex-row gap-6 w-full mx-auto items-center justify-center">
            <a href="#" className="bg-backfore text-background-typography tracking-wide font-medium rounded-xl px-6.5 py-3.5">
              Conhecer todos os serviços</a>
          </div>
        </div>
      </div>
    </section>


  )
}
