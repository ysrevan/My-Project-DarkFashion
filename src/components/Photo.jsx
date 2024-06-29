import React from 'react'
import { FaInstagram } from "react-icons/fa";
const Photo = () => {
    return (
        <div className="row g-0 p-0">
            <div className="col-12 col-sm-6 col-md-3">
                <div className="card photo-card">
                    <div className="photo-text">
                        <p>Sliquam ut porttitor leo a diam sollicitudin<br></br>
                        tempor id. Faucibus sceleris que eleifend<br></br>
                        donec.</p>
                        <FaInstagram className='instagram' />
                        <p>August 04 ,2022</p>
                    </div>
                    <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-3.jpg" className="card-img-top" alt="..." />
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className="card photo-card">
                    <div className="photo-text">
                        <p>Dolor sit amet consectetur adipiscing. Cras<br></br>
                        fermentum odio eu feugiat pretium. Intenger<br></br>
                        eget.</p>
                        <FaInstagram className='instagram' />
                        <p>August 04 ,2022</p>
                    </div>
                    <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-4.jpg" className="card-img-top" alt="..." />
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className="card photo-card">
                    <div className="photo-text">
                        <p>Venenatis tellus in metus vulputate eu<br></br>
                        scelerisque felis immperdiet. Scelerisque<br></br>
                        ultrices.</p>
                        <FaInstagram className='instagram' />
                        <p>August 04 ,2022</p>
                    </div>
                    <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-5.jpg" className="card-img-top" alt="..." />
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className="card photo-card">
                    <div className="photo-text">
                        <p>Massa sed elementum tempus egestas sed<br></br>
                        sed risus pretium tellus orci ac auctor augue.</p>
                        <FaInstagram className='instagram' />
                        <p>August 04 ,2022</p>
                    </div>
                    <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-1.jpg" className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    )
}
export default Photo