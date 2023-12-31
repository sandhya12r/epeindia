import Header from './components/Header'
import SliderComponent from './components/SliderComponent'
import InquiryForm from './components/InquiryForm'
import WhyEPE from './components/WhyEPE'
import Footer from './components/Footer'
export default function Home() {
  return (
    <main>
      <Header />
      <SliderComponent />
      <WhyEPE />
      <InquiryForm />
      <Footer />
    </main>
  )
}
