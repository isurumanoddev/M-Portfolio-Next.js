'use client'

import {motion} from "framer-motion"
import {LocationCity, Mail, Map, Phone} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";

function Contact() {

    const {register, handleSubmit} = useForm();
    const onSubmit = (formData) => {
        window.location.href = `mailto:isurumanod99@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`
    }


    return (
        <motion.div
            initial={{y: 50, opacity: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: false}}

            className={"h-screen   mx-auto items-center relative flex flex-col text-center md:text-left  max-w-5xl px-10 justify-evenly"}>
            <h3 className={"absolute top-16 text-2xl uppercase text-center tracking-[20px]"}>Contact Me</h3>

            <motion.div
                initial={{y: 50, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                viewport={{once: false}}


                className={"flex flex-col space-y-8 lg:w-[500px]  "}>
                <h4 className={'text-xl font-semibold text-center'}>I have got just what you need <span
                    className="decoration-[#E76161]/50 underline">Lets Talk.</span></h4>

                <div className={"space-y-10 "}>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Phone className={"text-[#E76161]"}/>
                        <p className={"text-[16px]"}>+94766668809</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Mail className={"text-[#E76161]"}/>
                        <p className={"text-[16px]"}>isurumanod99@gmail.com</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Map className={"text-[#E76161]"}/>
                        <p className={"text-[16px]"}>Colombo</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col  space-y-3  "}>
                    <div className={"flex space-x-2 w-full"}>
                        <input {...register('name')} placeholder={"Name"} className={"contactInput"} type="text"/>
                        <input {...register('email')} placeholder={"Email"} className={"contactInput"} type="text"/>
                    </div>
                    <input {...register('subject')} placeholder={"Subject"} className={"contactInput"} type="text"/>
                    <textarea {...register('message')} placeholder={"Message"} className={"contactInput"}/>
                    <Button type={"submit"} className={"button2"}>Submit</Button>
                </form>
            </motion.div>


        </motion.div>
    );
}

export default Contact;