'use client'
import {motion} from "framer-motion"
import {Button} from "@mui/material";
import {Article, GitHub} from "@mui/icons-material";

function ProjectCard() {
    return (
        <article
            className={"bg-[#131b30] backdrop-blur-md snap-center w-full md:w-[500px]  xl:w-[600px] h-full  flex flex-col items-center space-y-4 flex-shrink-0"}>
            <motion.img
                initial={{y: -150, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1.2}}
                viewport={{once: false}}
                className={"rounded-md overflow-hidden object-cover w-[300px] md:w-[350px] lg:w-[450px] p-1 "}
                src="https://camo.githubusercontent.com/92509a812a314b7d6084f4156dbe118f15248c7617ac7306c13bd14117a0be41/68747470733a2f2f692e6962622e636f2f64476264596a572f73637265656e6361702d312e6a7067"
                alt=""/>
            <motion.div
                  initial={{y: 60, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: false}}


                className={"px-1 md:px-10 flex flex-col gap-2 pb-3 text-center"}>
                <h4 className={"text-lg lg:text-[20px] tracking-[10px]"}>Netflix Clone</h4>

                <div className={" space-y-3 text-center text-[14px]"}>
                    A fully functional E-commerce site built with React.js,
                    React Router, Context API, Stripe, Firebase, and Google Auth.
                    Experience a seamless online shopping experience with this Amazon clone.

                </div>

                <div className={"flex flex-row flex-wrap space-x-2 space-y-2 px-2"}>


                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next js</p>

                </div>
                <div className={"flex flex-row justify-center items-center gap-3 "}>
                    <Button
                        className={'button3'}>Github <GitHub/></Button>
                    <Button
                        className={'button3'}>Live <Article/></Button>
                </div>

            </motion.div>

        </article>
    );
}

export default ProjectCard;