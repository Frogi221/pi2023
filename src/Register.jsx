import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Rejestracja</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Login:</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Login" />
            <label htmlFor="email">E-mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="twojmail@twojapoczta.pl" id="email" name="email" />
            <label htmlFor="password">Hasło</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" onClick={() => props.onFormSwitch('login')}>Zarejestruj się</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Masz konto? Zaloguj się tutaj.</button>
    </div>
    )
}
