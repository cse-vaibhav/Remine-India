import React, { useState } from 'react';

import "./scss/body.scss";
import features from "/public/data/features.json";
import poster from "/public/assets/home.png";

function Feature({ obj }) {

    return (
        <div className="feature">
            <img src={obj.image} alt="" />
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
        </div>
    );
}

function Register() {
    return (
        <>
            <form action="">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Name" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="primary-button">Register</button>
            </form>
        </>
    );
}

export default function Body() {

    const featureTags = features.map((featureObj, idx) => <li key={idx}><Feature obj={featureObj} /></li>);

    return <>
        <div id="body">
            <main>
                <section id="hero">
                    <div>
                        <h1>Welcome!</h1>
                        <p>
                            Transforming Waste into a Greener Future: Join the Recycling Revolution Today!
                        </p>
                        <a href="#features" className="primary-button">Learn More</a>
                    </div>
                    <img src={poster} alt="" />
                </section>

                <section id="features">
                    <h2>Our Features</h2>
                    <ul>
                        {featureTags}
                    </ul>
                </section>

                <section id="onboarding">
                    <h1>Ready to get started?</h1>
                    <Register />
                </section>
            </main>
        </div>
    </>
}