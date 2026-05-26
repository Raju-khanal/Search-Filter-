import { useState } from "react";
import Data from "../Data";
function Table() {
    const [users, setUser] = useState([]);
    const [query, setQuery] = useState("");
    const handleSet = (data) => {
        setUser(data);
    };
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            gap: "15px",
            paddingTop: "20px",

        }}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} className="border-black border-2" />
            <Data setUser={handleSet} />

            <table border="2">
                <thead>
                    <tr>
                        <th style={{ borderRight: "1px solid black", padding: "8px" }}>Name</th>
                        <th style={{ borderRight: "1px solid black", padding: "8px" }}>Email</th>
                        <th style={{ padding: "8px" }}>Username</th>
                    </tr>
                </thead>
                <tbody className="bg-red-500">
                    {filteredUsers.map((user, index) => (
                        <tr style={{ border: "1px solid black", borderCollapse: "collapse" }} key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;