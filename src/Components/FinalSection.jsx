import React from 'react'
import { Container } from 'react-bootstrap'

function FinalSection() {
  return (
   <div>
        <Container>
            <div className='d-flex justify-content-center align-items-center' style={{height:'100%',width:'100%'}}>
                <div className='d-flex justify-content-center align-items-center flex-column lastparagraph' >
                    <div><h1 className='heading2'>Interested in delving deeper into the project?</h1></div>
                    <div className='p-5'>
                        <p className='lastpara'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
                    </div>
        
                </div>
        
                
        
            </div>
        </Container>


        <div className='d-flex justify-content-center align-items-center'>
                <button className='button' style={{backgroundColor:'black',color:'white'}}>Ring Us On Skype</button>
            <button className='button ms-3'>Contact Us</button>


            

        </div>
        <div className='mt-5'>
            <p className='text-center rights'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>
   </div>
  )
}

export default FinalSection