import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div>          
                <img src="../../images/logo.png" className="logo" />
                <span className ="title">Sendar</span> Route Tracker
            </div>
        );
    }
}

export default Header;