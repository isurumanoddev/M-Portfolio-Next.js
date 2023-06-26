'use client'


import React from "react";

function Header() {
    return (
        <header className={"w-full h-[60px] flex flex-col justify-center my-auto fixed z-50 bg-[#0a1029]"}>

            <div className={"flex flex-row gap-3 items-center justify-center md:justify-end py-2 md:pr-3 "}>
                <div className={"px-4 "}><a className={" text-sm transition hover:text-[#64FFDA]"} href="">Home</a></div>
                <div className={"px-4 "}><a className={" text-sm transition hover:text-[#64FFDA]"} href="">About</a></div>
                <div className={"px-4 "}><a className={" text-sm transition hover:text-[#64FFDA]"} href="">Portfolio</a></div>
                <div className={"px-4 "}><a className={" text-sm transition hover:text-[#64FFDA]"} href="">Contact</a></div>

            </div>
        </header>
    );
}

export default Header;