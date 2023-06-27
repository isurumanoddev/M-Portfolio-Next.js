import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div className={"h-screen snap-y snap-normal overflow-x-hidden overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#64FFDA] scrollbar-thin"}>
            <Header/>
            <section id={"hero"} className={""}>
                <Hero/>
            </section>
            <section id={"about"} className={""}>
                <About/>
            </section>
            <section id={"skills"} className={""}>
                <Skills/>
            </section>
              <section id={"projects"} className={""}>
                <Projects/>
            </section>
            <section id={"portfolio"} className={""}>
                <Portfolio/>
            </section>
            <section id={"#contact"} className={""}>
                <Contact/>
            </section>


        </div>
    )
}
