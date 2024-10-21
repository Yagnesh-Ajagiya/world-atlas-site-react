import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function HeroSection() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">

    
          <h1 className="heading-xl">
            Explore the World, One country at a Time.
          </h1>

          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search and filter through countries to find the details you need.
          </p>

          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>



        <div className="hero-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/451/734/546/map-typography-colorful-dark-wallpaper-preview.jpg" alt="World Image" className="banner-image" />
        </div>
      </div>
    </main>
  )
}

export default HeroSection