import React, { useState } from "react";
import { Glowna } from "./Glowna";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Logowanie</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="twojmail@twojapoczta.pl" id="email" name="email" />
                <label htmlFor="password">Hasło</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={() => props.onFormSwitch('Login')}>Zaloguj się</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Nie masz konta? Zajerestruj się tutaj.</button>
            <button className="link-btn" onClick={() => props.onFormSwitch('Haslo')}>Zapomniałeś hasła? Kliknij tutaj!</button>
        </div>
    )
}