import React from 'react'
import rock1 from '../assets/images/rock1.png'
import rock2 from '../assets/images/rock2.png'
import rock3 from '../assets/images/rock3.png'
import sodaBg1 from '../assets/images/soda-bg-1.png'
import sodaBg2 from '../assets/images/bgsoda2.png'

function Banner() {
    const soda1 = {
        '--url': `url(${sodaBg1})`
    };
    const soda2 = {
        '--url': `url(${sodaBg2})`
    };
    return (
        <>
            <div className="banner">
                <div className="product">
                    <div className="soda" style={soda1}>
                    </div>
                    <div className="soda" style={soda2}>
                    </div>
                </div>


                <div className="rock">
                    <img src={rock1} />
                    <img src={rock2} />
                    <img src={rock3} />
                </div>
            </div>
        </>
    )
}

export default Banner