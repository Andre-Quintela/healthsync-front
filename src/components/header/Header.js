// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import catIcon from '../../assets/cat_icon.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={catIcon} alt="Cat Icon"></img>
                <h1>HealthSync</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signin">Entrar</Link>
                    </li>
                    <li>
                        <Link to="/signup">Registrar-se</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
