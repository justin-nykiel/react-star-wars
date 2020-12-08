import React from 'react'
import {Link} from 'react-router-dom'

const Layout = (props) => {
    return(
        <>
        <div>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>blog</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        <main>
            {props.children}
        </main>
        
        </>
    )
}

export default Layout