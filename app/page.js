import About from "@/components/About";


import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import {fetchProjects} from "@/utils/fetchProjects";
import {fetchSkills} from "@/utils/fetchSkills";

async function getData() {
    const res = await fetchSkills()
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors

    return res.json()
}


export default async function Home() {
    const data = await getData()
    console.log(data)
    return (
        <div
            className={"h-screen snap-y snap-normal overflow-x-hidden overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#E76161] scrollbar-thin"}>
            {/*<Header/>*/}
            <section id={"hero"} className={"snap-center"}>
                <Hero/>
            </section>
            <section id={"about"} className={"snap-center"}>
                <About/>
            </section>
            <section id={"skills"} className={"snap-center"}>
                <Skills skills={data}/>
            </section>
            <section id={"projects"} className={"snap-center"}>
                <Projects/>
            </section>
            <section id={"contact"} className={"snap-center"}>
                <Contact/>
            </section>


        </div>
    )
}

