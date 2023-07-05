import About from "@/components/About";


import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";

const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,{cache:"force-cache"});

    const data = await res.json()
    return data.projects;
}
const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);

    const data = await res.json()

    return data.skills
}


export default async function Home() {
const projects =await fetchProjects()
const skills =await fetchSkills()

    return (
        <div
            className={"h-screen  snap-y scroll-smooth snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#E76161] scrollbar-thin"}>
            {/*<Header/>*/}
            <section id={"hero"} className={"snap-center"}>
                <Hero/>
            </section>
            <section id={"about"} className={"snap-center"}>
                <About/>
            </section>
            <section id={"skills"} className={"snap-center"}>
                <Skills  />
            </section>
            <section id={"projects"} className={"snap-center"}>
                <Projects />
            </section>
            <section id={"contact"} className={"snap-center"}>
                <Contact/>
            </section>


        </div>
    )
}

