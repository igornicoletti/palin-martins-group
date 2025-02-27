import { About, Careers, Contact, Faq, Footer, Header, Partners, Recovermeter } from '@/sections'

export const App = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <Header />
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
