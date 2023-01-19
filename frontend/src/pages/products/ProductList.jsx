import Announcement from '../../components/announcement/Announcement'
import Footer from '../../components/common/footer/Footer'
import Navbar from '../../components/common/navbar/Navbar'
import Products from '../../components/productsItem/Products'
import './productList.css'
import Newsletter from '../../components/newsletter/Newsletter'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const ProductList = () => {
  const location = useLocation();
  const category = location.search.split('=')[1];
  const [filter, setFilter] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const items = await axios.get(
        category ? `http://localhost:8080/api/products?category=${category}` :
          `http://localhost:8080/api/products`
      )

      setData(items.data)

    }
    getProduct();
  }, [category])
  
  // useEffect(()=>{
  //   category && 
  //     data.filter(item=>{
  //       Object.entries(filter).every(([key],[value])=>{
  //         item[key].includes(value)
  //       })
  //     })
  // },[data,filter,category])
  const handleFilter = (e) => {
    const value = e.target.value;
    // console.log(value)
    setFilter({
      ...filter,
      [e.target.name]: value
    })
  }
  // console.log(filter, data)
  return (
    <>
      <Navbar />
      <Announcement />
      <section className='products section' id="products">
        <div className="pContainer">
          <h1 className="pTitle">Dresses</h1>

          <div className="pInfo">
            <div className="pFilter">
              <span>Filter Products:</span>
              <select id="optionSection" name='color' onChange={handleFilter}>
                <option value="">Color</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
              </select>
              <select id="optionSection" name='size' onChange={handleFilter}>
                <option value="">Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="pSort">
              <span>Sort Products:</span>
              <select id="optionSection" name='sort' onChange={handleFilter}>
                <option value="">Sort</option>
                <option value="newest">Newest</option>
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>

          <Products items={data} />

        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  )
}

export default ProductList