import { CategoryFilter, JobList } from '@/components'
import { careersData } from '@/data'
import { useState } from 'react'

export const Careers = () => {
  const [selectedFilter, setSelectedFilter] = useState('Todas')
  const categories = ['Todas', ...careersData.map((data) => data.category)]
  const filteredPositions = selectedFilter === 'Todas'
    ? careersData
    : careersData.filter((p) => p.category === selectedFilter)

  return (
    <section className='bg-foreground'>
      <div className='px-6 sm:px-10 py-20 lg:py-28'>
        <div className='grid grid-cols-1 gap-24'>
          <div className='w-full max-w-7xl mx-auto'>
            <h2 className='text-4xl sm:text-5xl font-light leading-tight tracking-wide text-background-typography'>
              <span className='text-gradient-secundary'>
                Explore nossas carreiras e junte-se à nossa equipe</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mt-12 text-base sm:text-lg font-light leading-relaxed tracking-wide text-background-typography'>
              <div className='space-y-2'>
                <p>Na Palin & Martins, acreditamos que o sucesso da empresa depende do desenvolvimento e bem-estar de nossos colaboradores.</p>
                <p>Promovemos um ambiente de trabalho colaborativo, inovador e inclusivo, onde as ideias são valorizadas e a dedicação é reconhecida.</p>
              </div>
              <div className='space-y-2'>
                <p>Oferecemos oportunidades de crescimento, treinamentos constantes e benefícios que equilibram a vida profissional e pessoal.</p>
                <p>Junte-se a nós e faça parte de uma empresa que investe no seu potencial e no seu futuro.</p>
              </div>
            </div>
          </div>
          <div className='w-full max-w-5xl mx-auto grid grid-cols-1 gap-12'>
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
