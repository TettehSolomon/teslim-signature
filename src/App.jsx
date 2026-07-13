import TopNavBar from './components/TopNavBar'
import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <TopNavBar />
      <main className="pt-24">
        <Hero />
        <ProductCategories />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
