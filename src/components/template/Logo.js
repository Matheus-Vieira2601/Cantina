import './Logo.css';
import React from 'react';
import logo from 'C:/Users/u21252/Desktop/cantina/src/components/assets/imagens/logo_cantina.png';

export default function Logo(props) {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={ logo } alt="Logo" />
            </a>
        </aside>
    )
}
