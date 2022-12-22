import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
            <div className="navbar__component">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar__brand" href="#" >Art Shop</a>
                </nav>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <div className="navbar__signIn">Hello,Sign In</div>
                <div className="navbar__returns">Orders</div>
                <div className="navbar__cart">
                    Cart
                </div>

            </div>
            <div className="navbar__footer">
                <div className="navbar__footer__canvas">Canvas Paintings</div>
                <div className="navbar__footer__canvas">Art Prints</div>
                <div className="navbar__footer__canvas">Stickers</div>
                <div className="navbar__footer__canvas">DIY's</div>

            </div>
            </div>
        );
    }
}

export default NavBar;
