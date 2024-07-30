import React, { useContext } from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';
const ContactCards = () => {
  const [theme,setTheme] = useContext(ThemeContext)
  return (
    <div className={`dark-div ${theme === "light" ? "light" : "dark"}`}>
      <div className='contactcards'>
      <div className="container">
        <div className="city-img">
        <div className="row">
           <div className="col-12 col-sm-6 col-md-3">
 <div className="card">
  <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/contact-image-1.webp" className="card-img-top" alt="..." />

</div>

           </div>

           <div className="col-12 col-sm-6 col-md-3">
 <div className="card">
  <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/contact-image-2.webp" className="card-img-top" alt="..." />

</div>

           </div>

           <div className="col-12 col-sm-6 col-md-3">
 <div className="card">
  <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/contact-image-3.webp" className="card-img-top" alt="..." />

</div>

           </div>

           <div className="col-12 col-sm-6 col-md-3">
 <div className="card">
  <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/contact-image-4.webp" className="card-img-top" alt="..." />

</div>

           </div>
        </div>
        </div>

        <div className="address-card">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
   <div className="card">
  <div className="card-body">
    <h2 className="card-title">Canbeera</h2>
    <p className="card-text">No: 49 C, East Lawrance<br></br> Street, Canberra, MD, Australia<br></br> 1021</p>
    <div className="contact-telephone">
    <BsFillTelephoneFill className='telephone'/>
    <p className='telephone-number'>000-123-456789</p>
    </div>
    <div className="contact-email">
    <MdEmail className='email'/>
    <p className='email-address'>info@example.com</p>
    </div>
    <div className="contact-watch">
    <MdWatchLater className='watch'/>
    <p className='watch-time'>Mon-Fri: 8 AM - 5 PM</p>
    </div>
  </div>
</div>

                </div>

                <div className="col-12 col-sm-6 col-md-3">
   <div className="card">
  <div className="card-body">
    <h2 className="card-title">Mumbai</h2>
    <p className="card-text">No: 39 B, East Coast Street,<br></br> Mumbai, MD, India 2301</p>
    <div className="contact-telephone">
    <BsFillTelephoneFill className='telephone'/>
    <p className='telephone-number'>+000-123-456789</p>
    </div>
    <div className="contact-email">
    <MdEmail className='email'/>
    <p className='email-address'>contact@example.com</p>
    </div>
    <div className="contact-watch">
    <MdWatchLater className='watch'/>
    <p className='watch-time'>Mon-Fri: 8 AM - 6 PM</p>
    </div>
  </div>
</div>

                </div>

                <div className="col-12 col-sm-6 col-md-3">
   <div className="card">
  <div className="card-body">
    <h2 className="card-title">Kansas City</h2>
    <p className="card-text">No: 27 A, East Madison Street,<br></br> Baltimore, MD, USA 3023</p>
    <div className="contact-telephone">
    <BsFillTelephoneFill className='telephone'/>
    <p className='telephone-number'>000-123-456789</p>
    </div>
    <div className="contact-email">
    <MdEmail className='email'/>
    <p className='email-address'>support@example</p>
    </div>
    <div className="contact-watch">
    <MdWatchLater className='watch'/>
    <p className='watch-time'>Mon-Fri: 8 AM - 5 PM</p>
    </div>
  </div>
</div>

                </div>

                <div className="col-12 col-sm-6 col-md-3">
   <div className="card">
  <div className="card-body">
    <h2 className="card-title">Birmingham</h2>
    <p className="card-text">No: 45 B, East George Street,<br></br> Birmingham MD, UK 4304</p>
    <div className="contact-telephone">
    <BsFillTelephoneFill className='telephone'/>
    <p className='telephone-number'>000-123-456789</p>
    </div>
    <div className="contact-email">
    <MdEmail className='email'/>
    <p className='email-address'>info@example</p>
    </div>
    <div className="contact-watch">
    <MdWatchLater className='watch'/>
    <p className='watch-time'>Mon-Fri: 8 AM - 5 PM</p>
    </div>
  </div>
</div>

                </div>
            </div>
        </div>


      </div>
    </div>
    </div>
  )
}

export default ContactCards