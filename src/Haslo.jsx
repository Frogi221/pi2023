import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Haslo = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        navigate("/");
    }

    return (
        <div className="auth-form-container">
            <h2>Przypomnij haslo</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="twojmail@twojapoczta.pl" id="email" name="email" />
                <label htmlFor="password">Hasło</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="password2">Hasło</label>
                <input value={pass2} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
                <button type="submit">Zmien haslo</button>
            </form>
        </div>
    )
}