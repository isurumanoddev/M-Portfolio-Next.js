import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <div className={"h-screen snap-y snap-mandatory overflow-scroll"}>
            <Header/>
            <section id={"hero"} className={"snap-center"}>
                <Hero/>
            </section>
            <section id={"about"} className={"snap-center"}>
                <About/>
            </section>
            <section id={"portfolio"} className={"snap-center"}>
                <Portfolio/>
            </section>


        </div>
    )
}
