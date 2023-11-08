import React, { Component } from 'react';
import './NavbarStyles.css';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <>
                <nav>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "active" : ""}>
                            <li><a href="index.html">Projekt</a></li>
                            <li><a href="index.html">Arbetslivserfarenheter</a></li>
                            <li><a href="index.html">Utbildning</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        {this.state.clicked ? 'Close' : 'Menu'}
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;