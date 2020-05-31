import React from 'react'
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <nav>
            <h1>React-Router-hooks</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="#">Cart <span>{props.basketNumber}</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
