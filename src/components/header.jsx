import React from 'react'
import logo from '../assets/images/2.png'

function Header() {
    return (
        <>
            <header>
                <div className="left">
                    <h1>POP</h1>
                    <img src={logo} alt=""></img>
                </div>
                <div className="author">
                    <h3>PopPleasure</h3>
                    <div>
                        <p>Code By</p>
                        <p>Harsh</p>
                    </div>
                    <img src={logo} alt="" />
                </div>
            </header>

        </>
    )
}

export default Header