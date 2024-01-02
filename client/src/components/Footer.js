import React from 'react'

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ "backgroundColor": "#5C3D2E" }}>
        <div className="container=fluid p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Justice-Hub
                </h6>
                <p>
                Justice-Hub focuses on the need for accessible legal services.
                 We provide guidance and legal support to those who need it. 

                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-white" href='/'>MDBootstrap</a>
                </p>
                <p>
                  <a className="text-white" href='/'>MDWordPress</a>
                </p>
                <p>
                  <a className="text-white" href='/'>BrandFlow</a>
                </p>
                <p>
                  <a className="text-white" href='/'>Bootstrap Angular</a>
                </p>
              </div> */}

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Our Services
                </h6>
                <p>
                  <a className="text-white" href='/'>Hate & Extremism</a>
                </p>
                <p>
                  <a className="text-white" href='/'>Children's Rights</a>
                </p>
                <p>
                  <a className="text-white" href='/'>Economic Justice</a>
                </p>
                <p>
                  <a className="text-white" href='/'>Immigrant Justice</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Haryana, NIT KKR, IN</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2023 Copyright:
                  <a className="text-white" >  Justice-Hub</a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="m-1 text-white mx-2" href='/' >
                  <i className="fab fa-facebook-f"></i></a>

                <a
                  className="m-1 text-white mx-2"
                  href='/'
                ><i className="fab fa-twitter"></i></a>

                <a
                  className="m-1 text-white mx-2"
                  href='/'
                ><i className="fab fa-google"></i></a>

                <a
                  className="m-1 text-white mx-2"
                  href='/'><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Footer