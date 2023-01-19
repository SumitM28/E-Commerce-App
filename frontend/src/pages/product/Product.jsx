import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/common/footer/Footer';
import Navbar from '../../components/common/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import axios from 'axios';
import './product.css';
import { useDispatch } from 'react-redux';


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [items, setItems] = useState(1)
    const [productItem, setProductItem] = useState({});
    const [color, setColor] = useState('');
    const [size, setSize] = useState('S');
    useEffect(() => {
        const getProduct = async () => {
            const item = await axios.get(`http://localhost:8080/api/products/${id}`)
            setProductItem(item.data)
        }
        getProduct();
    }, [id])

    const handleColorBtn = (e) => {
        setColor(e.target.value);
        e.target.disabled=true

    }
    const handleSizeOption=(e)=>{
        setSize(e.target.value);
    }
    const dispatch = useDispatch();
    const handleAddToCart = (e) => {
        dispatch({
            "type": "cart/addProduct",
            "payload": { ...productItem, quantity: items,color:color,size:size },
        })

        e.target.value = "GO TO CART"
        e.target.disabled = true
    }
    return (
        <>
            <Navbar />
            <Announcement />

            <section className='product section'>
                <div className="productContainer">

                    <img src={productItem.img} alt="" className="ProductImg" />
                    <div className="productInfo">
                        <h1 className="productTitle">{productItem.title}</h1>
                        <p className="productDesc">{productItem.desc}</p>

                        <p className="productPrice">Rs.&nbsp;{productItem.price} </p>
                        <div className="productColorSize">
                            <div className='productColor'>
                                <span>Color</span>
                                <div>
                                    <button className='colorBtn' style={{ 'background': "#444141" }} onClick={handleColorBtn} value="black"></button>
                                    <button className='colorBtn' style={{ 'background': "#2768fa" }} onClick={handleColorBtn} value="blue"></button>
                                    <button className='colorBtn' style={{ 'background': "gray" }} onClick={handleColorBtn} value="gray"></button>
                                </div>

                            </div>
                            <div className='productSize'>
                                <span>Size</span>
                                <select name="" className="sizeOption" onChange={handleSizeOption}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>

                        </div>
                        <div className="productCartInfo">

                            <div className='productCartItems'>
                                <button className='pCIBtn' onClick={items > 1 ? () => setItems(items - 1) : null}>-</button>
                                <p className='pCItemNO'>{items}</p>
                                <button className='pCIBtn' onClick={() => setItems(items + 1)}>+</button>
                            </div>

                            <input type="submit" className='addToCart' value="add to cart" onClick={handleAddToCart} />

                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Product