import Image from 'next/image'
import Header from './components/Header'
import SliderComponent from './components/SliderComponent'
import InquiryForm from './components/InquiryForm'
export default function Home() {
  return (
    <main>
      <Header />
      <SliderComponent/>
      <InquiryForm />
    </main>
  )
}
