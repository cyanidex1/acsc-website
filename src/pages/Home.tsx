import Navbar from "@/sections/Navbar"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Events from "@/sections/Events"
import Team from "@/sections/Team"
import Faculty from "@/sections/Faculty"
import Join from "@/sections/Join"
import Footer from "@/sections/Footer"

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Faculty />
        <Team />
        <Join />
        <Footer />
      </main>
    </div>
  )
}
