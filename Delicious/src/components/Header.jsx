import logo from '../img/logo1.png'
import './Header.css'
import { FaSearch } from "react-icons/fa";
// using Link instead of <a> will not reload page upon routing to a diff url
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import myuserContext from '../utils/myuserContext'

function Header() {

    const {userName} = useContext(myuserContext);

    return (
        <>
            <div className='Header-container'>
                <img src={logo} alt="logo" width={"100px"} />
                <ul className='nav-bar'>
                    <div className='search'>
                        <li><FaSearch style={{ fontWeight: '400px' }} /> <Link to="/search">Search</Link> </li>
                    </div>
                    <li><Link to="/offers">Offer</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/cart">Signed as: {userName}</Link></li>
                </ul>

            </div>
        </>
    )
}

export default Header