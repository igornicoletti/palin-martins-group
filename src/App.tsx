import { About, Careers, Contact, Faq, Footer, Partners, Recovermeter } from '@/sections'

export const App = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <About />
        <Recovermeter />
        <Partners />
        {/* <Services /> */}
        <Careers />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </>
  )
}
