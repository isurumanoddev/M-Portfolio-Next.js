import 'server-only'
import getBasePath from "@/lib/getBasePath";
import axios from "axios";


export const fetchProjects = async () => {


    try {
        const response = await axios.get(`${getBasePath()}/api/projects`, {next: {revalidate: 10}});

        return response.data
    } catch (error) {
        console.error(error);
    }
}


