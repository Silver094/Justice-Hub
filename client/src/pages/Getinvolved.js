import React from 'react'
import lawyer1 from '../images/lawyer1.png'
import lawyer2 from '../images/lawyer2.png'

const Getinvolved = () => {
  return (
    <>
      <p className='text-center display-5 fw-normal mt-5'>OUR ADVOCATES</p>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-7 d-flex flex-column justify-content-center text-center">
            <div className="content-section py-5 px-5" style={{ 'backgroundColor': '#F3E9DA' }}>
              <h1>Advocate Sudershani</h1>
              <div className="diplay-6">Kurukshetra, Haryana, India</div>
              <div className="h-5 mt-4">Advocate Sudershani has since been practicing and handling cases independently with a result oriented approach, both professionally and ethically and has now acquired 8 years of professional experience in providing legal consultancy and advisory services. She has completed her BA.LLB(Hons) from Jamia Millia Islamia and has been practicing and handling cases independently and provides legal consultancy and advisory services.</div>
              <button className="button-59 mt-5" style={{ 'borderRadius': '5px' }}>Know More</button>
            </div>
          </div>
          <div className="col-5">
            <img src={lawyer1} alt="..." />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 text-end mb-3">
        <div className="row justify-content-end">
          <div className="col-7 order-1 d-flex flex-column justify-content-center text-center">
            <div className="content-section py-5 px-5" style={{ 'backgroundColor': '#F3E9DA' }}>
              <h1>Advocate Juliya</h1>
              <div className="diplay-6">Kurukshetra, Haryana, India</div>
              <div className="h-5 mt-4">Advocate Juliya provides services in various field of civil as well as corporate laws, inter-alia, Suits, Writs, Petitions, Appeals, Revisions, Complaints relating to debt recovery, dishonor of cheques, rent control act, property disputes, matrimonial disputes, consumer complaints, complaints pertaining to Food Adulteration Act and service matter,Children rights.</div>
              <button className="button-59 mt-5" style={{ 'borderRadius': '5px' }}>Know More</button>
            </div>
          </div>
          <div className="col-5 order-0">
            <img src={lawyer2} alt="..." />
          </div>
        </div>
      </div>
    </>
  )
}

export default Getinvolved