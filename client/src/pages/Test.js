import React from 'react'
import PayPal from './PayPal';

const Test = () => {
    return (
        <>
            {/* <div className="empty-div" style={{ 'height': '250px' }}>
            </div> */}
            <div className='d-flex justify-content-center mt-3'>

            <div className='container' style={{'width':'60vw'}}>

            <div className='text-center mt-2 p-4 h6'>With your support, we are fighting for justice and equity in courts and combating white supremacists who are emboldened and energized. And we’re helping teachers across the country create inclusive school communities where children are respected, valued, and welcome participants.
                <br/><br/><br/><br/>

</div>

            <div className='text-center' >
                <PayPal />
            </div>
            </div>
            </div>
        </>
    )
}

export default Test