import React from 'react'
import Carditems from './Carditems'
import './cards.css'
import img1 from '../images/user.png'
import img2 from '../images/brain.png'
import img3 from '../images/database.png'
import img4 from '../images/checkmark-.png'

function Cards() {
  return (
    <div className='cardsection'>
        <h1>
            Check out all those ways
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditems 
                        src={img1}
                        text="Project data"
                        label="In this topic user give his project data
for start the procces and pass this
to our machine learning model."
                    />
                    <Carditems 
                        src={img2}
                        text="Ai Operation"
                        label="In this topic user give his project data
for start the procces and pass this
to our machine learning model."
                    />
                     <Carditems 
                        src={img3}
                        text="Data-driven Insights"
                        label="AI empowers us to extract valuable
insights from diverse datasets, facilit-
ating evidence-based decision-making
improvement of CCUS implementation"
                    />
                    <Carditems 
                        src={img4}
                        text="Result!"
                        label="In this topic user give his project data
for start the procces and pass this
to our machine learning model."
                    />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards