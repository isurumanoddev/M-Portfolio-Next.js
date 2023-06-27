'use client'
import {motion} from "framer-motion"

function About() {
    return (
        <div
            className={"h-screen   mx-auto items-center relative flex flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly"}>
            <h3 className={"absolute top-24 text-2xl uppercase text-center tracking-[20px]"}>About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,


                }}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 1.2}}
                className={"mt-20 md:mt-0 -mb-20 md:mb-0 flex-shrink-0 w-[130px] h-[130px] md:w-60 md:h-60 rounded-full "}
                src="https://media.licdn.com/dms/image/D5603AQGjRU9HcYVkWg/profile-displayphoto-shrink_800_800/0/1686567442630?e=1693440000&v=beta&t=rE5BJeXkVoZZNG08r8mrLKcNYBQy3ljYqUZry52XLwQ"
                alt=""/>

            <motion.div
                initial={{
                    x: +200,
                    opacity: 0,


                }}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 1.2}}
                className={"scroll-py-10 px-0 md:px-10 backdrop-blur-md"}
            >
                <h4 className={"text-2xl font-semibold pb-3 md:pb-4"}>Here is a little background</h4>
                <p className={'text-sm max-w-md '}>
                    Highly motivated, open-mined and detail-oriented
                    undergraduate software engineer. An adaptable quick learner,
                    a strong communicator and team player with a strong foundation in
                    computer science principles and passion for problem-solving to make a meaningful
                    contribution at a forward-thinking company. Skilled in developing efficient and intuitive solutions
                    to complex problems, with experience in a variety of programming languages such as Python , Javascript
                    , Java and technologies such as Django, NoSQL databases. Seeking to leverage my skills and knowledge to
                    contribute to the success of a dynamic software development team
                </p>

            </motion.div>

        </div>
    );
}

export default About;