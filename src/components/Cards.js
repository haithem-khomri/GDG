import React from 'react'
import Carditems from './Carditems'
import './cards.css'
import img1 from '../images/img-2.jpg'
import img2 from '../images/img-5.jpg'
import img3 from '../images/img-9.jpg'

function Cards() {
  return (
    <div className='cards'>
        <h1>
            check out all those ways
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditems 
                        src={img1}
                        text="this is one of the solutions"
                        label="ill see"
                        path="/services"
                    />
                    <Carditems 
                        src={img2}
                        text="this one is spcl too"
                        label="ill see"
                        path="/services"
                    />
                    <Carditems 
                        src={img3}
                        text="i think u like the economic solutions too"
                        label="ill see"
                        path="/services"
                    />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards