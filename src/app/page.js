import Image from 'next/image'
import Header from './components/Header'
import SliderComponent from './components/SliderComponent'
import Footer from './components/Footer'
import Projects from './components/Projects'
export default function Home() {
  return (
    <main>
      <Header />
      <SliderComponent/>
      <Projects/>
      <Footer/>
    </main>
  )
}
