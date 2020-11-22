import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars,FaTimes} from 'react-icons/fa';
import { Button } from '../components/Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
function Navbar() {
    //using hooks
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(() =>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton)
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
<div className="navbar">
        <div className="navbar-container container">
            <Link to='/' onClick={closeMobileMenu} className="navbar-logo">
            <MdFingerprint className='navbar-icon' />
                LAVISH
            </Link>
            <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" onClick={closeMobileMenu} className="nav-links">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" onClick={closeMobileMenu} className="nav-links">Services</Link>
                </li>
                <li className="nav-item">
                    <Link to="/product" onClick={closeMobileMenu} className="nav-links">Product</Link>
                </li>
                <li className="navbar-btn">
                    {button ? (
                        <Link to='/sign-up' className="btn-link">
                            <Button buttonStyle='btn--outline'>SIGN UP</Button>
                        </Link>
                    ) : (
                        <Link to='/sign-up' onClick={closeMobileMenu} className="btn-link">
                            <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    </div>
</IconContext.Provider>
        </>
)
}

export default Navbar
