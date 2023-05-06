import React, { useState } from 'react';

import './scss/header.scss';

export default function Header() {

    const [ activePage, setActivePage ] = useState("home");

    let handleClick = (value) => {
        setActivePage(value);
    }

    return <>
        <header>
            <nav>
                {/* BRAND */}
                <div id="brand">
                    <span>REMINE</span>
                </div>

                {/* LINKS */}
                <ul>
                    <li className={activePage === "home" ? "active" : ""}>
                        <a onClick={() => handleClick('home')} href="#">Home</a>
                    </li>
                    <li className={activePage === "features" ? "active" : ""}>
                        <a onClick={() => handleClick('features')} href="#features">Features</a>
                    </li>
                    <li>Services</li>
                    <li>Products</li>
                </ul>

                {/* CTA form */}
                <div id="user-login">
                    <a className="primary-button" href="/login">Login</a>
                    <a className="secondary-button" href="#onboarding">Register</a>
                </div>
            </nav>
        </header>
    </>
};