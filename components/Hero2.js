'use client'
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";


import BackgroundCircles from "./BackgroundCircles";


export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's `,
            "Guy-who-loves-Biryani.tsx",

        ],
        loop: true,
        delaySpeed: 1000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={"https://media.licdn.com/dms/image/D5603AQGjRU9HcYVkWg/profile-displayphoto-shrink_800_800/0/1686567442630?e=1693440000&v=beta&t=rE5BJeXkVoZZNG08r8mrLKcNYBQy3ljYqUZry52XLwQ"}
                alt=""
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    {"software"}
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>

                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>

                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}