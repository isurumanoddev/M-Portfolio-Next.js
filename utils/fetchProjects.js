
import 'server-only'
import getBasePath from "@/lib/getBasePath";


export const fetchProjects = async () => {
    const res = await fetch(`${getBasePath()}/api/projects`);

    const data = await res.json()
    return data.projects;
}