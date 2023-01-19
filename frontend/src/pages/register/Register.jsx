import Navbar from '../../components/common/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate=useNavigate();
  return (<>
  <Navbar/>
    <div className='form'>
      <div className="formContainer">

        <h1 className="fTitle">Register</h1>

        <input type="text" className="fInput" placeholder='Enter your name' name='name' />
        <input type="email" className="fInput" placeholder='Enter your email' name='email' />
        <input type="password" className="fInput" placeholder='Enter your password' name='password' />
        <input type="password" className="fInput" placeholder='Confirm your password' name='password' />
        <button className="fBTN" onClick={()=>navigate('/')}>Register</button>

        <p className='formLink' onClick={()=>navigate('/login')}>Are you already a user?</p>
        
      </div>
    </div>
  </>
  )
}

export default Register