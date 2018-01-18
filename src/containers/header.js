import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div>         
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <img src="../../images/logo.png" className="logo" />
                            <span className ="title">Sendar</span>  Route Tracker
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;