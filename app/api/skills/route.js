import {NextResponse} from "next/server";
import {sanityClient} from "@/sanityConfig";

import {groq} from 'next-sanity'

const query = groq`
*[_type == 'skill'] 
`


export async function GET(req, res) {

    const skills = await sanityClient.fetch(query)


    return NextResponse.json({skills})
}