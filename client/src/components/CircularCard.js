import React from 'react'

const CircularCard = (props) => {
  return (
    <>
      <div className="card p-2 text-center" style={{ 'width': '18rem' }}>
        <div className="img-div">
          <img className="circular-img" src={props.c_img} alt="Card cap" />
        </div>
        <div className="card-body mt-4">
          <h5 className="card-title">{props.c_title}</h5>
          <div className="btn-container mt-4 d-flex justify-content-center flex-wrap">
            <button className="button-59">{props.c_button}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CircularCard