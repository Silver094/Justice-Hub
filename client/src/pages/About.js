import React from 'react'

const About = () => {

  return (
    <>
      <div className="container-fluid about-hero-section mt-2 text-center pt-5">
        <h1 className='text-white display-2 mt-5'>About Us</h1>
      </div>
      <div className="container-fluid mt-6">
        <p className='para'>Justice-Hub focuses on the need for accessible legal services. We provide guidance and legal support to those who need it. Our goal is to ensure that everyone has access to justice and is able to fight for their rights.</p>
      </div>
      <div className="container-fluid mt-5">
        <h1 className='text-center display-4 fw-normal'>OUR MISSION</h1>
        <div className="container-fluid my-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-sm-10 me-5">
              <h3 className=' fw-light'>
              Our commitment is  to empower individuals to fight for their rights and ensure that everyone has access to justice, regardless of their financial situation.</h3>
            </div>
            <div className="col-lg-5 col-sm-10">
              <img src="https://www.hbfuller.com/-/media/images/careers/teamwork-diverstiy-mission-and-culture.jpg"
                class="card-img" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 pt-5">
        <h1 className='text-center display-4 fw-normal'>OUR VISION</h1>
        <div className="container-fluid my-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 order-1 col-sm-10">
              <h3 className=' fw-light'>
              Justice-Hub envisions a future that respects and honors every person's inherent rights and dynamic cultures, deeply and richly interwoven in lands, languages, spiritual traditions, and artistic expression, rooted in self-determination and self-governance.</h3>
            </div>
            <div className="col-lg-5 order-0 col-sm-10 me-5">
              <img src="https://images.unsplash.com/photo-1542647879-d84f68115c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
                class="card-img" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About