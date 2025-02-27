import { DisclosureFaq } from '@/components'
import { faqData } from '@/data'

export const Faq = () => {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div>
            <p className="text-2xl font-light text-palin">FAQ</p>
            <h2 className="text-4xl lg:text-5xl font-light text-foreground-typography">Perguntas frequentes</h2>
          </div>
          <dl className="lg:col-span-2 lg:mt-10 divide-y divide-text-foreground-typography/10">
            {faqData.map((faq) => (
              <DisclosureFaq key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
