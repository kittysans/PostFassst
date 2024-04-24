import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <img src="https://via.placeholder.com/300" alt="" />
      
      <div className="links">
        <div className='link'>Home</div>
        <div className='link'>About</div>
        <div className='link'>Posts</div>
      </div>
      <div className="about-contact">
        <div className="about">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam necessitatibus soluta veniam eveniet doloremque ullam obcaecati quaerat inventore. Eveniet, sunt.</p>
        </div>
        <div className='contact'>
            <h3>Contact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, numquam!</p>
            <div className='contact-icons'>
                <div className="icon"><img src="https://via.placeholder.com/300" alt="" /></div>
                <div className="icon"><img src="https://via.placeholder.com/300" alt="" /></div>
                <div className="icon"><img src="https://via.placeholder.com/300" alt="" /></div>
                <div className="icon"><img src="https://via.placeholder.com/300" alt="" /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer