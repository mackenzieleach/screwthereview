import React from 'react';
import logo from './ScrewtheReviewLogo.png'

function Navigation() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <a className="navbar-brand ml-2" href="/">
                <img src={logo} alt="logo" style = {{ width:'100px'}}/>
            </a>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link ml-2" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ml-2">
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    <li className="nav-item ml-2">
                        <a className="nav-link" href="/roulette">Roulette</a>
                    </li>
                    <li className="nav-item ml-2">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item ml-2">
                        <a className="nav-link" href="/account">Account</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
