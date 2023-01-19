import Navbar from '../../components/common/navbar/Navbar'
import {useNavigate} from 'react-router-dom';
// import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
const Login = () => {
  // const [user,setUser]=useState({});
  const navigate=useNavigate();

  // const userInfo={
  //   "name": "sumit Mahour",
  //   "password": "12345678"
  // }
  useEffect(()=>{

    const getUser=async ()=>{
      const item= await axios.post('http://localhost:8080/api/auth/login')
      console.log(item)
    }
    getUser()
  },[])


  return (
    <>
      <Navbar/>
      <div className='form'>
        <div className="formContainer">

          <h1 className="fTitle">Login</h1>
          
          <input type="text" className="fInput" placeholder='Enter your username' name='username' />
          <input type="password" className="fInput" placeholder='Enter your password' name='password' />

          <button className="fBTN" onClick={() => navigate('/')}>Login</button>

          <p className='formLink' >Forgot password?</p>
          <p className='formLink' onClick={() => navigate('/register')}>Create a  new account</p>

        </div>
      </div>
    </>
  )
}

export default Login