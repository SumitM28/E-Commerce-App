import './footer.css'
import { ImLocation } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiEnvelope } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='footer '>

            <div className="fContainer">
                <div className="fcItem">
                    <a href="/" className='fLogo'>Sumit</a>
                    <p className='fDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis earum velit libero. Odit natus et maiores nulla soluta dolores exercitationem obcaecati culpa minima placeat. Doloremque voluptas animi numquam iste!</p>
                    <ul className="fSocialIcons">
                        <li ><a href="https://www.facebook.com/" target={'blank'}><img className='fSIcon' src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="" /></a></li>
                        <li ><a href="https://www.linkedin.com/in/sumit-mahour/" target={'blank'}><img className='fSIcon' src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" /></a></li>
                        <li ><a href="https://www.twitter.com" target={'blank'}><img className='fSIcon' src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="" /></a></li>

                    </ul>
                </div>
                <div className="fcItem">
                    <h1 className="fItemTitle">Useful Links</h1>

                    <div className="fcLinkContainer">
                        <ul className='fcLinks'>
                            <Link to={'/'} className="fcLink">Home</Link>
                            <Link to={'/'} className="fcLink">Man Fashion</Link>
                            <Link to={'/'} className="fcLink">Accessories</Link>
                            <Link to={'/'} className="fcLink">Order Tracking</Link>
                            <Link to={'/'} className="fcLink">Wishlist</Link>

                        </ul>
                        <ul className='fcLinks'>
                            <Link to={'/'} className="fcLink">Cart</Link>
                            <Link to={'/'} className="fcLink">Women Fashion</Link>
                            <Link to={'/'} className="fcLink">My Account</Link>
                            <Link to={'/'} className="fcLink">Wishlist</Link>
                            <Link to={'/'} className="fcLink">Terms</Link>

                        </ul>
                    </div>
                </div>
                <div className="fcItem">
                    <h1 className="fItemTitle">Contact</h1>
                    <p className="fcItemDesc"><ImLocation className='fcItemDescIcon' /> Plot No- 76B, Kh No- 11/21, Naveen Place, Road</p>

                    <p className="fcItemDesc"><BsFillTelephoneFill className='fcItemDescIcon' /> 7817980397 </p>

                    <p className="fcItemDesc"><BiEnvelope className='fcItemDescIcon' />sumimahour24@gmail.com </p>

                    <div className="fcpayment">
                        <img className='paymentIcons' src="https://cdn-icons-png.flaticon.com/512/4740/4740665.png" alt="" />

                        <img className='paymentIcons' src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="" />

                        <img className='paymentIcons' src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="" />

                        <img className='paymentIcons' src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="" />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer