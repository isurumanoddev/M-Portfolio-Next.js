import 'server-only'
import getBasePath from "@/lib/getBasePath";
import axios from "axios";


export const fetchSkills = async () => {

    try {
        const res = await axios.get(`${getBasePath()}/api/skills`, {next: {revalidate: 10}});

        return res.data
    } catch (error) {
        console.error(error);
    }
}