
import Image from 'next/image'
import styles from './page.module.css'
import '@/app/App.css'
import { NavBar } from '@/components/Navbar'
import { Banner } from '@/components/Banner'
import { Skills } from '@/components/Skill'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import meter1 from "../assets/img/meter1.svg";

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Contact />
      <Footer />


    </div>
  )
}
