import  './category.css'

import { useNavigate } from 'react-router-dom';
const Category = ({...props}) => {
  const items = props.items;
  const navigate=useNavigate();
  return (
   
    <div className='category' id='category'>
      
      {items.map(item=>
        <div className="cItems" key={item.id}>
          <img src={item.img} alt="" className="cItemImg" />
          <h1 className="cItemTitle">{item.title}</h1>
          <button className='cItemBtn' onClick={()=>navigate(`products?category=${item.cat}`)}>Shop now</button>
        </div>
      )}
    </div>
  )
}

export default Category