import './newsletter.css'
import { BiSend } from 'react-icons/bi'
const Newsletter = () => {
  return (
    <section className='newletter section'>
        <div className="newsletterContainer">
            <h1 className="nlHeading">NewsLetter</h1>
            <p className='nldecs'>Get timely update from your favorite products.</p>
            <div className="nlInputInfo">
                <input type="email" className='nlInput' placeholder='your email'/>
                <span className='nlBtn'><BiSend className='nlBtnIcon'/></span>
            </div>
        </div>
    </section>
  )
}

export default Newsletter