import React from 'react';

function Portfolio() {
    const projects = [1, 2, 3, 4, 5]
    return (
        <div
            className={"h-screen mx-auto items-center relative flex flex-col text-center md:text-left md:flex-row max-w-6xl px-0 md:px-10 justify-evenly"}>
            <h3 className={"absolute uppercase top-24 text-2xl text-center tracking-[20px]"}>Projects</h3>

            <div className={"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#64FFDA] scrollbar-thin"}>
                {
                    projects.map((projects) => (
                        <div
                            className={"p-10 md:p-40  w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center"}>
                            <img
                                className={"w-full max-w-md"}
                                src="https://user-images.githubusercontent.com/61585443/185205338-c20bb089-618f-49e2-b740-1c02838030a4.png"
                                alt=""/>
                            <div className={"space-y-10 px-0 md:px-10 max-w-2xl"}>
                                <h4 className={"text-3xl font-semibold text-center"}>Netflix Clone</h4>
                                <p className={"text-lg text-center "}>
                                    Highly motivated, open-mined and detail-oriented
                                    undergraduate software engineer. An adaptable quick learner,
                                    a strong communicator and team player with a strong foundation in
                                    computer science principles and passion for problem-solving to make a meaningful
                                    contribution at a forward-thinking company. Skilled in developing
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );

}

export default Portfolio;