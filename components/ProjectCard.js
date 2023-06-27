'use client'
import {motion} from "framer-motion"

function ProjectCard() {
    return (
        <article className={"bg-[#131b30] backdrop-blur-md snap-center w-[400px] md:w-[500px]  xl:w-[600px] h-3/4  flex flex-col rounded-lg items-center space-y-7 flex-shrink-0"}>
            <motion.img
                initial={{y: -150, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1.2}}
                viewport={{once: false}}
                className={"rounded-md overflow-hidden object-cover w-[200px] md:w-[250px] lg:w-[300px] p-5 "}
                src="https://camo.githubusercontent.com/92509a812a314b7d6084f4156dbe118f15248c7617ac7306c13bd14117a0be41/68747470733a2f2f692e6962622e636f2f64476264596a572f73637265656e6361702d312e6a7067"
                alt=""/>
            <div className={"px-0 md:px-10"}>
                <h4>Netflix Clone</h4>

                <ul className={"list-disc space-y-3 ml-5 text-[14px]"}>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                </ul>

            </div>

        </article>
    );
}

export default ProjectCard;