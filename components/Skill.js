'use client'
import {motion} from "framer-motion"

function Skill({directionLeft}) {
    return (
        <div className={"group relative flex cursor-pointer"}>
            <motion.img
                initial={{x: directionLeft ? -200 : 200, opacity: 0}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1}}

                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"}
                className={"w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border border-gray-500  p-2"}
            />

        </div>

    );
}

export default Skill;