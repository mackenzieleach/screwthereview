import React from 'react';
import logo from './Images/ScrewtheReviewLogo.png';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand mr-l" href="/">
                <img src={logo} alt="logo" style={{ width: '150px' }} />
            </a>

            { /* Collapsable Button on Right */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" >
                    <li className="nav-item ml-4">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item ml-4" >
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    <li className="nav-item ml-4">
                        <a className="nav-link" href="/roulette">Roulette</a>
                    </li>
                    <li className="nav-item ml-4">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item ml-4">
                        <a className="nav-link" href="/account">Account</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
