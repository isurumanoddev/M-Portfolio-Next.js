import About from "@/components/About";


import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";



import getBasePath from "@/lib/getBasePath";
import axios from "axios";

export const dynamic = 'force-'

async function fetchProjects() {
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

    const {projects} = await fetchProjects();
    const skills = await fetchSkills();
    // console.log("projects : ",projects)






    return (
        <div
            className={"h-screen  snap-y scroll-smooth snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-red-700 scrollbar-thin"}>
            {/*<Header/>*/}
            <section id={"hero"} className={""}>
                <Hero/>
            </section>
            <section id={"about"} className={""}>
                <About/>
            </section>
            <section id={"skills"} className={""}>
                <Skills   />
            </section>
            <section id={"projects"} className={""}>
                <Projects  projects={projects} />
            </section>
            <section id={"contact"} className={""}>
                <Contact/>
            </section>



        </div>
    )
}

