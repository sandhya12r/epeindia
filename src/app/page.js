import Image from 'next/image'
import Header from './components/Header'
import SliderComponent from './components/SliderComponent'
export default function Home() {
  return (
    <main>
      <Header />
      <SliderComponent/>
    </main>
  )
}
