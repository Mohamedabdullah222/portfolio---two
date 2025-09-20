import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import LenisScroll from './components/LenisScroll'
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
            <Contact />
            <Footer />
            <ScrollToTopButton />
        </>
    )
}