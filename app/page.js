import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div className={"h-screen snap-y snap-normal overflow-x-hidden overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#E76161] scrollbar-thin"}>
            <Header/>
            <section id={"hero"} className={"snap-center"}>
                <Hero/>
            </section>
            <section id={"about"} className={"snap-center"}>
                <About/>
            </section>
            <section id={"skills"} className={"snap-center"}>
                <Skills/>
            </section>
              <section id={"projects"} className={"snap-center"}>
                <Projects/>
            </section>
            {/*<section id={"portfolio"} className={"snap-center"}>*/}
            {/*    <Portfolio/>*/}
            {/*</section>*/}
            <section id={"contact"} className={"snap-center"}>
                <Contact/>
            </section>


        </div>
    )
}
