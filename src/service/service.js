export const getUser = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const data = await res.json();
    return data;
}