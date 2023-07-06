
import { NavBar } from '@/components/Navbar'
import { Banner } from '@/components/Banner'
import { Skills } from '@/components/Skill'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />


    </div>
  )
}
