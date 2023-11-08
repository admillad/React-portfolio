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
                            <li><a href="https://github.com/admillad" target='_blank'>Projekt</a></li>
                            <li><a href="https://www.canva.com/design/DAFzkkjgaUQ/Nq9KLDqd3oATxh7x43uvJg/view?utm_content=DAFzkkjgaUQ&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='_blank'>Arbetslivserfarenheter</a></li>
                            <li><a href="https://www.canva.com/design/DAFxnHcsjNw/PYg2r-CtEGRJw8fSAEVInA/view?utm_content=DAFxnHcsjNw&utm_campaign=designshare&utm_medium=link&utm_source=editor"target='_blank'>Utbildning</a></li>
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