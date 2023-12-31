import Header from './components/Header'
import SliderComponent from './components/SliderComponent'
import InquiryForm from './components/InquiryForm'
import WhyEPE from './components/WhyEPE'
import Footer from './components/Footer'
import Projects from './components/Projects'
export default function Home() {
  return (
    <main>
      <Header />
      <SliderComponent />
      <WhyEPE />
      <InquiryForm />
      <Projects />
      <Footer />
    </main>
  )
}
