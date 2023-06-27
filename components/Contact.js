'use client'

import React from "react";
import {LocationCity, Mail, Map, Phone} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";

function Contact() {

    const {register, handleSubmit} = useForm();
    const onSubmit = (formData) => console.log(formData)


    return (
        <div
            className={"h-screen   mx-auto items-center relative flex flex-col text-center md:text-left  max-w-5xl px-10 justify-evenly"}>
            <h3 className={"absolute top-16 text-2xl uppercase text-center tracking-[20px]"}>Contact Me</h3>

            <div className={"flex flex-col space-y-8 lg:w-[500px]  "}>
                <h4 className={'text-xl font-semibold text-center'}>I have got just what you need <span
                    className="decoration-[#64FFDA]/50 underline">Lets Talk.</span></h4>

                <div className={"space-y-10 "}>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Phone className={"text-[#64FFDA]"}/>
                        <p className={"text-[16px]"}>+94766668809</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Mail className={"text-[#64FFDA]"}/>
                        <p className={"text-[16px]"}>isurmanod99@gmail.com</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Map className={"text-[#64FFDA]"}/>
                        <p className={"text-[16px]"}>Colombo</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col  space-y-3  "}>
                    <div className={"flex space-x-2 w-full"}>
                        <input {...register('name')}  placeholder={"Name"} className={"contactInput"} type="text"/>
                        <input {...register('email')} placeholder={"Email"} className={"contactInput"} type="text"/>
                    </div>
                    <input {...register('subject')} placeholder={"Subject"} className={"contactInput"} type="text"/>
                    <textarea {...register('message')} placeholder={"Message"} className={"contactInput"}/>
                    <Button className={"button2"}>Submit</Button>
                </form>
            </div>


        </div>
    );
}

export default Contact;