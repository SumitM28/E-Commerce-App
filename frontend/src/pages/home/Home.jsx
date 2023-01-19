import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Announcement from '../../components/announcement/Announcement'
import Category from '../../components/category/Category'
import Footer from '../../components/common/footer/Footer'
import Navbar from '../../components/common/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Products from '../../components/productsItem/Products'
import './home.css'
import { categories} from '../../data'
import { useEffect } from 'react'
import axios from 'axios'
const Home = () => {
  const [slideNum, setSlideNum] = useState(1)
  const sliderItems = [
    {
      id: 1,
      img: "https://i.ibb.co/XsdmR2c/1.png",
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: "https://i.ibb.co/DG69bQ4/2.png",
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: "https://i.ibb.co/cXFnLLV/3.png",
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
  ];

  const [popularProducts,setPopularProducts]=useState([]);

  useEffect(()=>{
    const getCategory= async()=>{
      const items=await axios.get('http://localhost:8080/api/products')
      setPopularProducts(items.data)
    }
    getCategory();
  },[])

  return (
    <div className='home' id='home'>
      <Announcement />
      <Navbar />

      <div className='slider' id='slider' style={{ "background": `#${sliderItems[slideNum].bg}` }}>
        <button className="sArrowBtn leftArrow" onClick={(slideNum > 0) ? () => setSlideNum(slideNum - 1) : () => setSlideNum(sliderItems.length - 1)}><AiOutlineArrowLeft /></button>

        <div className="sWrapper">
          <div className="sImageContainer">
            <img src={sliderItems[slideNum].img} alt="" />
          </div>
          <div className="sInfoContainer">
            <h1 className='sInfoContainerHeading'>{sliderItems[slideNum].title}</h1>
            <p className='sInfoContainerDes'>{sliderItems[slideNum].desc}</p>
            <button className='sInfoContainerBtn'>shop now</button>
          </div>

        </div>

        <button className="sArrowBtn rightArrow" onClick={(slideNum < sliderItems.length - 1) ? () => setSlideNum(slideNum + 1) : () => setSlideNum(0)}><AiOutlineArrowRight /></button>
      </div>

      <section className='categories section'>
        <h1 className='sectionTitle'>Categories</h1>
        <Category items={categories}/>
      </section>

      <section className='products section'>
        <h1 className='sectionTitle'>Our Products</h1>
        <Products items={popularProducts}/>
      </section>

      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

