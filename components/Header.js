'use client'


import {motion} from "framer-motion"
import Link from "next/link";

function Header() {
    return (
        <header className={"w-full h-[60px] flex flex-col justify-center my-auto fixed z-50 bg-[#0a1029]"}>

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
                <div className={"border-b-2 border-b-green-500"}><Link
                    className={" text-sm transition hover:text-[#64FFDA]"} href="#hero">Home</Link></div>
                <div className={""}><Link className={" text-sm transition hover:text-[#64FFDA]"} href="#about">About</Link></div>
                <div className={""}><Link className={" text-sm transition hover:text-[#64FFDA]"} href="#portfolio">Portfolio</Link>
                </div>
                <div className={""}><Link className={" text-sm transition hover:text-[#64FFDA]"} href="#contact">Contact</Link></div>

            </motion.div>
        </header>
    );
}

export default Header;