import React from 'react'
import countryData from '../api/countryData.json'

function About() {
  return (
    <section className="section-about container">
         <h2 className="container-title">
          Here are interesting Facts <br />
           We're proud of </h2> 

           <div className="gradient-cards">


{
  countryData.map((country)=>{

    const {id, countryName, capital, population, interestingFact} = country

    return(
      <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <p className="card-title">{countryName}</p>
                  <p>
                    <span className="card-description">
                      {capital}:
                    </span> Delhi  
                  </p>

                  <p>
                    <span className="card-description">
                      {population}:
                    </span> 12  
                  </p>

                  <p>
                    <span className="card-description">
                      {interestingFact}:
                    </span> Colorful Country  
                  </p>
                </div>
             </div>
    )
  })
}



             
           </div>
    </section>
  )
}

export default About