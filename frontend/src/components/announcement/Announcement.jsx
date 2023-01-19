import './announcement.css'
import { RxCross1 } from "react-icons/rx"
import { useState } from 'react'
const Announcement = () => {
    const [showAnnounce, setShowAnnounce] = useState(true);
    return (

        <>
            {   showAnnounce &&
                <div className='announcement'>
                    <div className="aContainer">
                        Super deal! Free Shopping on Orders Over $50.
                    </div>
                    <RxCross1 className='closeAnnounce' onClick={() => setShowAnnounce(false)} />
                </div>
            }
        </>

    )
}

export default Announcement