import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div><nav>
            <ul><div className='coolgames'>
                <li className='cool'>COOL</li>
                <li className='games'>GAMES</li>
            </div>
            <div className='home'>
                <li>HOME</li>
                <li>CREATORS</li>
                <li>STORES</li>
                <li>GAME</li>
                <li>RohanChange</li>
                <li>About</li>
                <li className='connect'>CONNECT</li>
                </div>
            </ul>
            <button>For check</button>
            </nav>
        </div>
    )
}
export default Navbar
