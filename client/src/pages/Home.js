import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import CircularCard from '../components/CircularCard'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel />
      <div className="py-3 container-fluid text-center w-100 mt-4">
        <h1>What We Do</h1>
        <p>We employ a three-pronged strategy to battle racial and social injustice</p>
      </div>
      <div className="container-fluid d-flex justify-content-around px-5 mt-4">
        <Card card_img="https://www.splcenter.org/sites/default/files/bean_what_we_do_images/web_hate-and-extremism_2021.jpg" card_title="Fighting hate" card_text="The Southern Poverty Law Center tracks and exposes hate groups and extremists in the US for law enforcement." card_button="LEARN MORE" />
        <Card card_img="https://www.splcenter.org/sites/default/files/bean_what_we_do_images/SPLC-Teaching-Tolerance-670x370alt02.jpg" card_title=" Learning for Justice" card_text="We know we don't achieve equality and justice through the courts and investigative reporting alone." card_button="LEARN MORE" />
        <Card card_img="https://www.splcenter.org/sites/default/files/bean_what_we_do_images/cjr_lpa_lobby_day_leslie_gamboni_1.jpg" card_title=" Seeking Justice" card_text="We use the courts and other forms of advocacy to win systemic reforms on behalf of victims of bigotry and discrimination" card_button="LEARN MORE" />
      </div>
      <div className="py-5 container-fluid support-section text-center text-white w-100 mt-5">
        <h1>Support Our Work</h1>
        <p>Your gift will help win justice on behalf of those who have no other champion, expose and fight the hate that thrives in our <br />country, and provide tolerance education materials free of charge to schools across our nation.</p>
        <button className="button-59 mt-4" style={{ 'borderRadius': '5px' }} onClick={() => { navigate('/test') }}>Donate Now</button>
      </div>
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <h1 className='d-flex justify-content-center'>Our Services</h1>
        </div>
        <div className="container mt-5 mx-auto">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4"><CircularCard c_img="https://www.splcenter.org/sites/default/files/priority_bean_images/splc-hate-and-extremism-200.jpg" c_title="Hate & Extremism" c_button="Learn More" /></div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4"><CircularCard c_img="https://www.splcenter.org/sites/default/files/priority_bean_images/SPLC-childrens-rights-200.jpg" c_title="Children's Rights" c_button="Learn More" /></div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4"><CircularCard c_img="https://www.splcenter.org/sites/default/files/priority_bean_images/SPLC-Economic-Justice-200x200.jpg" c_title="Economic Justice" c_button="Learn More" /></div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4"><CircularCard c_img="https://www.splcenter.org/sites/default/files/priority_bean_images/SPLC-immigrant-justice-200_0.jpg" c_title="Immigrant Justice" c_button="Learn More" /></div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4"><CircularCard c_img="https://www.splcenter.org/sites/default/files/priority_bean_images/993edd94-e503-11e4-978f-50272f68e061.jpg" c_title="LGBTQ RIGHTS" c_button="Learn More" /></div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4"><CircularCard c_img="https://www.splcenter.org/sites/default/files/priority_bean_images/SPLC-mass-incarceration-200x200.jpg" c_title="Criminal Justice Reform" c_button="Learn More" /></div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4"><CircularCard c_img="https://www.splcenter.org/sites/default/files/priority_bean_images/priority_vr.jpg" c_title="Voting Rights" c_button="Learn More" /></div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4"><CircularCard c_img="https://www.splcenter.org/sites/default/files/bean_what_we_do_images/SPLC-Teaching-Tolerance-670x370alt02.jpg" c_title="Student Rights" c_button="Learn More" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home