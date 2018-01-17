import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div>
                <img src="../../images/logo.png" className="logo" />
                <span>Sendar</span><hr />
            </div>
        );
    }
}

export default Header;