import {createClient} from 'next-sanity'
import createImageUrlBuilder from "@sanity/image-url";



export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config);

export const urlFor = (source) =>
    createImageUrlBuilder(config).image(source);
// https://cdn.sanity.io/image-4c57e9097204cd23b7c55f7eccdeb99434387b00-1440x821-png