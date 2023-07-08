import About from "@/components/About";


import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";



import getBasePath from "@/lib/getBasePath";
import axios from "axios";


async function fetchProject() {
  try {
    const response =  await axios.get(`${getBasePath()}/api/projects`);

    return response.data
  } catch (error) {
    console.error(error);
  }
}
async function fetchSkills() {
  try {
     const res = await axios.get(`${getBasePath()}/api/skills`);

    return res.data
  } catch (error) {
    console.error(error);
  }
}



export default async function Home() {
const projects =await fetchProject()
const skills =await fetchSkills()







    return (
        <div
            className={"h-screen  snap-y scroll-smooth snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-red-700 scrollbar-thin"}>
            {/*<Header/>*/}
            <section id={"hero"} className={"snap-center"}>
                <Hero/>
            </section>
            <section id={"about"} className={"snap-center"}>
                <About/>
            </section>
            <section id={"skills"} className={"snap-center"}>
                <Skills skills={skills}  />
            </section>
            <section id={"projects"} className={"snap-center"}>
                <Projects  projects={projects} />
            </section>
            <section id={"contact"} className={"snap-center"}>
                <Contact/>
            </section>



        </div>
    )
}

