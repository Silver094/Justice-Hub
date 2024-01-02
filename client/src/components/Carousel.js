import React from 'react'
import img1 from '../images/carousel-img1.jpg'

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade my-2" data-bs-ride="carousel" style={{ 'objectFit': 'contain !important' }}>
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-item active">
            <img src={img1} style={{ filter: "brightness(50%" }} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?momos" style={{ filter: "brightness(50%" }} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?pizza" style={{ filter: "brightness(50%" }} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel