import './products.css'

import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Products = ({ ...props }) => {
  const items = props.items
  const navigate=useNavigate()
  return (
    <div className="productsItems">
      {items.map(item => 
        <div className="pItem" key={item._id}>
          <img src={item.img} alt="" className="pImg" />
          
          <div className='pBg'>
            {/* white background */}
          </div>

          <div className="background">

          </div>

          <div className="pItemBtn">
            <button className="pcShopBtn pcBtn"><AiOutlineShoppingCart /></button>
            <button className="pcSearchBtn pcBtn" onClick={()=>navigate(`/product/${item._id}`)}><AiOutlineSearch /></button>
            <button className="pcAddCartBtn pcBtn"><AiOutlineHeart /></button>
          </div>
        </div>
      )}


    </div>
  )
}

export default Products