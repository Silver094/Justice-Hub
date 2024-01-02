import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card p-2" style={{ 'width': '18rem' }}>
        <img className="card-img-top" src={props.card_img} alt="Card cap" />
        <div className="card-body mt-4 text-center">
          <h5 className="card-title">{props.card_title}</h5>
          <p className="card-text" style={{ 'height': '100px' }}>{props.card_text}</p>
          <div className="btn-container mt-4 d-flex justify-content-center">
            <button className="button-59">{props.card_button}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card