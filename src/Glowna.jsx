import React, { useState } from "react";

export const Glowna = (props) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div className="auth-form-container">
            <h2>Dodaj zdarzenie</h2>
        <form className="glowna-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Rodzaj zdarzenia:</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Miejsce zdarzenia" />
        <label htmlFor="name">Miejsce zdarzenia:</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Rodzaj zdarzenia" />
        <label htmlFor="name">Lokalizacja:</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Lokalizacja" />
            <button onClick={() => alert('Zdarzenie zostało dodane')}> Dodaj zdarzenie </button>

        </form>
    </div>
    )
}
