import React, { useState } from "react";
import '../App.css';

const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [count, setCount] = useState(0);
    const handleClick = () => {
    console.log("button di click dengan function tambahan");
    };
    return (
    <div className="App">
        <div>ini adalah halaman Register</div>
        <div>
        <p>Username</p>
        <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />
        </div>
        <div>
        <p>Password</p>
        <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        </div>
        <div>
        <button
            onClick={() =>
            alert(
                `Halo ${name} Register anda berhasil dengan password ${password}`
            )
            }
        >
            Register
        </button>
        </div>
    </div>
    );
};    


export default Register;