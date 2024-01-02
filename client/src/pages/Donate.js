import React from 'react'
import { useNavigate } from 'react-router-dom';

const Donate = () => {

    const navigate = useNavigate();

    return (
        <div className="donate-section text-center py-5">
            <div className='texxt_donate'>DONATE</div>
            <div className='texxt_doante2 my-5'>Support Our Programs</div>
            <div className='texxt_doante3 my-5'>With your support, we are fighting for justice and equity in courts and combating white supremacists who are emboldened and energized. <br/>And we are helping teachers across the country create inclusive school communities where children are respected, valued, and welcome participants.</div>
            <div>
                <button className="button-59 mt-4 p-4 px-5" style={{ 'borderRadius': '5px' }} onClick={() => { navigate('/test') }}>Donate Now</button>
                {/* <button className='button_donate my-5 py-3 px-3' >DONATE NOW</button> */}
            </div>
        </div>
    )
}

export default Donate