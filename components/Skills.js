'use client'

import {motion} from "framer-motion"
import Skill from "@/components/Skill";

import React from "react";



async function Skills({skills}) {




    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2.5}}


            className={"mx-auto px-10   relative flex flex-col text-center md:text-left min-h-screen max-w-6xl justify-center items-center"}>
            <h3 className={"absolute top-[100px] text-2xl uppercase text-center tracking-[20px]"}>Skills</h3>

            <div className={" grid grid-cols-4 gap-5 backdrop-blur-md "}>

                {

                    skills?.map((skill) => (
                        <Skill key={skill._id} image={skill.imageUrl}/>
                    ))
                }

            </div>

        </motion.div>
    );
}

export default Skills;

