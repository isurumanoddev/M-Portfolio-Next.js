import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <div className={"h-screen snap-y snap-normal overflow-scroll"}>
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
            <section id={"portfolio"} className={""}>
                <Portfolio/>
            </section>


        </div>
    )
}
