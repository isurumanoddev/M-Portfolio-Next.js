import {NextResponse} from "next/server";
import {sanityClient} from "@/sanityConfig";

import {groq} from 'next-sanity'

const query = groq`
*[_type == 'projects'] | order(createdTime asc)
`


export async function GET(req, res) {

    const projects = await sanityClient.fetch(query)


    return NextResponse.json({projects})
}