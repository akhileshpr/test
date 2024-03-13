import React from 'react'
import { Container } from 'react-bootstrap'

function FirstSection() {
  return (
   
    <>
    <div className='container mt-2' style={{textAlign:'right'}}>
    <i class="fa-solid fa-x fa-2xl text-white"></i>
    </div>
    

<Container>
    <div className='d-flex justify-content-center align-items-center flex-column '>
            <h1 className='heading'>Epic Games : An American video game and software developer <br />and publisher based in Cary, North Carolina.</h1>
      <img className='banner' src="https://i.postimg.cc/TYCxbQSM/image.png" alt="" />
      <p className='para'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
      <button className='button mt-3'>Visit Website</button>
    </div>  
</Container>

</>
  )
}

export default FirstSection