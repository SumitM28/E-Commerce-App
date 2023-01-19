import './navbar.css'
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart= useSelector(state=> state.cart.totalQuantity);
    // console.log(cart.totalQuantity);
    const [menu, setmenu] = useState(true);
    const [menuBtn,setMenuBtn]=useState(true);


    const handleClsoeBtn=()=>{
        setMenuBtn(false)
        setmenu(false)
    }
    const handleOpenBtn=()=>{
        setMenuBtn(true);
        setmenu(true)
    }
    return (
        <>
        <div className='navbar' id='navbar'>

            {menu && <div className="navContainer">
                <a href="/" className='navLogo'>Sumit.</a>

                <div className="navRight">
                    <Link to={'/register'}>Register</Link>
                    <Link to={'/login'}>login</Link>
                    <Link to={'/cart'} className='navShop'>
                        <div>
                            <AiOutlineShoppingCart className='navShopIcon' />
                            {cart ?
                            <span className='navShopItems'>{cart}</span>:null
                         }
                        </div>
                    </Link>
                </div>

            </div>}

            <div className='menuOpen'>
                {menuBtn ? 
                    <RxCross1 onClick={handleClsoeBtn} />:
                    <AiOutlineMenu onClick={handleOpenBtn} />

                    }
            </div>

        </div>
        </>
    )
}

export default Navbar