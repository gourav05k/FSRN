import logo from '../img/logo1.png'
// import './Header.css'
import { FaSearch } from "react-icons/fa";
// using Link instead of <a> will not reload page upon routing to a diff url
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import myuserContext from '../utils/myuserContext'

function Header() {

    const {userName} = useContext(myuserContext);

    return (
        <>
            <div className='flex justify-between w-full items-center border-solid border-y-2' >
                <img src={logo} alt="logo" width={"100px"} />
                <ul className='flex list-none justify-around w-6/12 pr-12 '>
                    <div>
                        <li className='flex gap-2 items-center'><FaSearch style={{ fontWeight: '400px' }}/><Link to="/search">Search</Link></li>
                    </div>
                    <li><Link to="/offers">Offer</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                </ul>

            </div>
        </>
    )
}

export default Header