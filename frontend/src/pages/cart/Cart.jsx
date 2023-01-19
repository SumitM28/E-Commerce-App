import Announcement from '../../components/announcement/Announcement'
import Footer from '../../components/common/footer/Footer'
import Navbar from '../../components/common/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import './cart.css'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'



const Cart = () => {
    const cartItemPrice = useSelector(state => state.cart.totalPrice);
    const cart = useSelector(state => state.cart.products)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(cart)
    }, [cart])

    const navigate=useNavigate()
    const dispatch= useDispatch();
    const handleDeleteItem=(product)=>{
        dispatch({
            "type": "cart/deleteProduct",
            "payload": product,
        })
    }

    return (
        <>
            <Navbar />
            <Announcement />
            <div className='cart section'>
                <h1 className="cTitle">Your bag</h1>
                <div className='cContainer'>

                    <div className='cartLinks'>

                        <button className='shoppingBtn' onClick={()=>navigate('/')}>Continue Shopping</button>
                        <div className='cartWishlist'>
                            <button >Shoping bag(2)</button>
                            <button onClick={() => navigate('/')} >Your wishlist(0)</button>
                        </div>
                    </div>

                    <div className="cartInfo">
                        <div className="cartItems">
                            {
                                products.map((item,i) => 
                                    <div className="cartItem" key={i}>
                                        <img src={item.img} alt="" className="cartproductImg" />

                                        <div className="cartProductDetails">
                                            <h1><b style={{ "color": "black" }}>Product:</b> {item.title}</h1>
                                            <h1><b style={{ "color": "black" }}>ID: </b>{item._id}</h1>
                                            <div style={{ 'background': `${item.color}` }}></div>
                                            <h1 style={{ "color": "black" }}><b>Size:</b> {item.size}</h1>
                                        </div>

                                        <div className="priceContainer">
                                            <div className='CartPrice'>
                                                <div className='productCartItems'>
                                                    <h3 className="productQuantity">Items: <span style={{"color":"gray"}}>{item.quantity}</span></h3>                    
                                                </div>
                                                <p className="productPrice">$&nbsp;{item.quantity * item.price}</p>
                                            </div>

                                            <AiFillDelete className='deleteItem' onClick={()=>handleDeleteItem(item)}/>
                                        </div>
                                    </div>

                                )
                            }

                        </div>
                        <div className="productsummary">
                            <h1 className="summaryTitle">Order summary</h1>
                            <div className="summaryPriceContainer">

                                <span className="summarySubtile">Subtotal</span>
                                <span className="summaryPrice">${cartItemPrice}</span>

                            </div>
                            {cartItemPrice ? <>
                                <div className="summaryPriceContainer">

                                    <span className="summarySubtile">Estimated Shipping</span>
                                    <span className="summaryPrice">$5.90</span>

                                </div>
                                <div className="summaryPriceContainer">

                                    <span className="summarySubtile">Estimated Discount</span>
                                    <span className="summaryPrice">$5.90</span>

                                </div>
                            </> : null}

                            <div className="totalPrice">
                                <span >Total</span>
                                <span >${cartItemPrice}</span>
                            </div>
                            <button className='summeryBtn' onClick={() => navigate('/checkout/payment')}>Checkout Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart