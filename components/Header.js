'use client'


import {motion} from "framer-motion"
import Link from "next/link";

function Header() {
    return (
        <header className={"w-full h-[60px] flex flex-col justify-center my-auto fixed z-50 bg-[#0a1029] "}>

            <motion.div className={"flex flex-row gap-10 items-center justify-center md:justify-end py-2 md:pr-10 "}

                // initial={{
                //     x: -500,
                //     opacity:0,
                //     scale: 0.5,
                //
                // }}
                // animate={{x: 0,opacity:1,scale:1}}
                // transition={{duration:1.5}}
            >
                <div className={"border-b-2 border-b-[#E76161]" }><Link
                    className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#hero">Home</Link></div>
                <div className={""}><Link className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#about">About</Link></div>
                <div className={""}><Link className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#skills">Skills</Link></div>
                <div className={""}><Link className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#portfolio">Projects</Link>
                </div>
                <div className={""}><Link className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#contact">Contact</Link></div>

            </motion.div>
        </header>
    );
}

export default Header;