'use client'
import {useCallback} from "react";
import Particles from "react-particles";
import {Cursor, Typewriter, useTypewriter} from 'react-simple-typewriter'
import {loadFull} from "tsparticles";
import {Button, IconButton} from "@mui/material";
import {Download, Send, GitHub, LinkedIn, Twitter} from "@mui/icons-material";

function Hero() {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const [text, count] = useTypewriter({
        words:["< I'm a Full Stack Developer />","< I'm an Undergraduate Student />", "< I build things for Web />"],
        loop:true,
        delaySpeed: 2000,

    });



    return (
        <div className={"h-screen px-4 flex flex-col justify-center max-w-6xl md:mx-auto  "}>
            <div className="px-4 md:px-10 md:mx-auto mt-10 md:mt-0 flex flex-col justify-center items-start">
                <div className="flex flex-col gap-2 md:gap-1 relative">

                    <div className="text-[15px] md:text-[16px] lg:text-[17px] text-[#64FFDA] tracking-widest">hello, my name is</div>


                    <div className="pb-1 pt-1 text-[40px] md:text-[50px]  lg:text-[65px] tracking-widest ">Isuru Senanayake</div>


                    <div className="h-auto md:h-[60px] text-[24px] md:text-[35px] lg:text-[42px]">
                        <p>
                            <span>{text}</span>
                            <Cursor curorColor={"#F7AB0A"}/>
                        </p>

                   </div>

                    <p className="text-[14px] md:text-[16px] w-3/4  md:w-1/2 lg:w-2/5 pb-4">I am a highly motivated and
                        skilled<strong className="text-[#64FFDA]"> Fullstack Developer
                        </strong> currently pursuing <strong className="text-[#64FFDA]"> BSc in Software Engineering .</strong>I have
                        experience
                        working with a variety of programming languages and frameworks
                    </p>

                </div>


                <div className="mt-3 flex flex-row gap-3 md:pt-6">
                    <Button  className="button ">Reach out to me <Send
                        fontSize={"small"}/></Button>
                    {/*<Button id={"download__btn"} className="hidden lg:flex gap-3 text-xs bg-[#64FFDA] tracking-widest text-white border-none outline-none px-7 ">Download Cv <Download*/}
                    {/*    fontSize={"small"}/></Button>*/}
                </div>


                <div className="hidden lg:flex md:flex-col gap-4 absolute right-10 top-25 ">
                    <IconButton target="_blank" href={"https://github.com/isurumanoddev"}
                                className={"text-white"}>
                        <GitHub fontSize={"large"}/>
                    </IconButton>
                    <IconButton href={"https://github.com/isurumanoddev"} target="_blank"
                                  className={"text-white"}>
                        <LinkedIn fontSize={"large"}/>
                    </IconButton>
                    <IconButton href={"https://github.com/isurumanoddev"} target="_blank"
                                  className={"text-white"}>
                        <Twitter fontSize={"large"}/>
                    </IconButton>

                </div>


            </div>
        </div>

    );
}

export default Hero;

