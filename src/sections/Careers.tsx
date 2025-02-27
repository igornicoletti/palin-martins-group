import { CategoryFilter, JobList } from '@/components'
import { careersData } from '@/data'
import { useState } from 'react'

export const Careers = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todas")
  const categories = ["Todas", ...careersData.map((data) => data.category)]
  const filteredPositions = selectedFilter === "Todas"
    ? careersData
    : careersData.filter((p) => p.category === selectedFilter)

  return (
    <section className="bg-foreground py-24 lg:py-32">
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-1 gap-24">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-4xl font-light leading-tight tracking-wide text-background-typography">
              <span className="text-gradient-secundary">Explore nossas carreiras e junte-se à nossa equipe</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 text-base md:text-lg font-light leading-relaxed tracking-wide text-background-typography'>
              <div><p>Na Palin & Martins, acreditamos que o sucesso da empresa depende do desenvolvimento e bem-estar de nossos colaboradores.</p>
                <p>Promovemos um ambiente de trabalho colaborativo, inovador e inclusivo, onde as ideias são valorizadas e a dedicação é reconhecida.</p></div>
              <div><p>Oferecemos oportunidades de crescimento, treinamentos constantes e benefícios que equilibram a vida profissional e pessoal.</p>
                <p>Junte-se a nós e faça parte de uma empresa que investe no seu potencial e no seu futuro.</p></div>
            </div>
          </div>
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 gap-12">
            <CategoryFilter
              categories={categories}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter} />
            <JobList filteredPositions={filteredPositions} />
          </div>
        </div>
      </div>
    </section>
  )
}
