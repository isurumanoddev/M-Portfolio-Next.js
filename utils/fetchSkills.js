import 'server-only'
import getBasePath from "@/lib/getBasePath";


export const fetchSkills = async () => {
    const res = await fetch(`${getBasePath()}/api/skills`);

    const data = await res.json()

    return data.skills
}