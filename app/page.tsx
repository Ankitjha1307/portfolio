import Skills from "@/sections/Skills/skills";
import About from "@/sections/About/about";
import CTA from "@/sections/CTA/demo";
import Hero from "@/sections/Hero/Usage";
import Contact from "@/sections/Contact/contact";
import Footer from "@/sections/Footer/footer";
import { SiteNav } from "@/components/ui/site-nav";
import Projects from "@/sections/Projects/demo";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <CTA />
      <Projects autoplay={true} />
      <Skills />
      <Contact />
      <Footer />
      <SiteNav />
    </div>
  );
}
