import { getUser } from "../src/service/service"
import { useEffect } from "react"
function Data({ setUser }) {
    const getData = async () => {
        const data = await getUser();
        const filtered = data.map(({ name, email, username }) => ({
            name,
            email,
            username
        }))
        setUser(filtered);
    }
    useEffect(() => {
        getData();
    })
    return;
}
export default Data;