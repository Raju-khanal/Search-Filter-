import { useState } from "react";
import Data from "./Data";

function App() {
    const [user, setUser] = useState([]);
    const [query, setQuery] = useState("");

    const handleSet = (data) => {
        setUser(data);
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search"
            />

            <Data setData={handleSet} />

            {user
                .filter((u) =>
                    u.name.toLowerCase().includes(query.toLowerCase()) ||
                    u.email.toLowerCase().includes(query.toLowerCase()) ||
                    u.username.toLowerCase().includes(query.toLowerCase())
                )
                .map((users, index) => (
                    <div key={index}>
                        <h3>{users.name}</h3>
                        <p>{users.username}</p>
                        <p>{users.email}</p>
                    </div>
                ))}
        </div>
    );
}

export default App;