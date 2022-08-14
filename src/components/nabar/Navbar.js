import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../buttons/Button';
import './navbar.css';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const onCLickMenuLogo = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton);
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i className='fab fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={onCLickMenuLogo}>
                        <i class={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/services' className='nav-links'>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/products' className='nav-links'>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/sign-up' className='nav-links-mobile'>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}
export default Navbar;