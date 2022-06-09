import './Menu.css';
import React from 'react';
import Login from '../Crud_Login/Login';

export default function Menu(props) {
    return (
        <nav className='menu'>
            <a href="/">
                Home
            </a>
            <a href="/">
                Cardápio
            </a>
            <a href="/">
                Bebidas
            </a>
            <a href="/">
                Contato
            </a>
            <a href="/login" id="login">
                Login
            </a>
        </nav>
    )
}