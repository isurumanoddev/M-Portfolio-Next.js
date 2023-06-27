'use client'
import {motion} from "framer-motion"
import React from "react";
import ProjectCard from "@/components/ProjectCard";

function Projects() {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}

            className={"min-h-screen mx-auto items-center relative flex flex-col text-center md:text-left md:flex-row max-w-full px-10 justify-evenly"}>
            <h3 className={"absolute uppercase top-14 text-2xl text-center tracking-[20px]"}>Projects</h3>


            <div className={"w-full space-x-5 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#64FFDA] scrollbar-thin p-10 "}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>

        </motion.div>
    );
}

export default Projects;