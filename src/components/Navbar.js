import React from 'react'

function Navbar() {
    return (
        <nav>
            <h1>React-Router-hooks</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
