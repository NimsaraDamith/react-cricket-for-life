import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png";


export default  class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navWrapper navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand logo"/>
                    {/*
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link ">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="cartButton">
                        <span className="mr-2">
                          <i className="fas fa-cart-plus"/>
                        </span>
                     My Cart
                    </button>
                </Link>
            </nav>
    );
    }
}

