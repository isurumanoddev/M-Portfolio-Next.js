'use client'


import {motion} from "framer-motion"
import Link from "next/link";
import {Home, Message, More, Psychology, Work} from "@mui/icons-material";

function Header() {
    return (
        <header className={"absolute w-full top-3 md:top-0  md:backdrop-blur-0   md:w-full h-[60px] flex flex-col justify-center items-center md:items-end my-auto md:fixed z-50  bg-transparent md:bg-[#0a1029] "}>

            <motion.div className={"flex flex-row gap-5 w-[300px] md:w-full mx-auto backdrop-blur-md rounded-full md:rounded-none md:gap-10 items-center justify-center md:justify-end py-2 md:pr-10 "}

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
                    className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#hero"><p className={"hidden sm:flex"}>Home </p> <Home className={"sm:hidden"}/></Link></div>
                <div className={""}><Link className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#about"><p className={"hidden sm:flex"}>About </p> <More className={"sm:hidden"}/></Link></div>
                <div className={""}><Link className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#skills"><p className={"hidden sm:flex"}>Skills </p> <Psychology className={"sm:hidden"}/></Link></div>
                <div className={""}><Link className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#projects"><p className={"hidden sm:flex"}>Projects </p> <Work className={"sm:hidden"}/></Link>
                </div>
                <div className={""}><Link className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#contact"><p className={"hidden sm:flex"}>Contact </p> <Message className={"sm:hidden"}/></Link></div>

            </motion.div>
        </header>
    );
}

export default Header;