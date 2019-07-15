import React from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-wrapper.red.darken-3">
            <div className="container">
                
                <ul className="col s12">
                    <li><Link to="/" className="breadcrumb">Home</Link></li>
                    <li><NavLink to="/mybooks" className="breadcrumb">My Books</NavLink></li>
                    <li><NavLink to="/login" className="breadcrumb">Login</NavLink></li>
                    {/* <li><NavLink to="/profile" className="breadcrumb">Profile</NavLink></li> */}
                    {/* <li><a className="brand-logo">Website Name</a></li> */}
                </ul>
                
                <span style={{right: "40px"}} className="brand-logo">  <i style={{padding: 20}} className="fas fa-robot"></i>readit</span>
                {/* <Link to="/login" className="right">Login</Link> */}
            </div>
          
        </nav>
    )
}

export default withRouter(NavBar);