import { useEffect } from "react";
function Data({ setData }) {

    const getData = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const res = await fetch(url);
        const data = await res.json();
        const filtered = data.map(({ name, email, username }) => ({
            name,
            email,
            username
        }))
        setData(filtered);
    }
    useEffect(() => {
        getData();

    },)
    return;
}
export default Data;