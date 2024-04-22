import React from 'react'

function Bar() {
  return(
    <div className='bar'>
      <img src="https://via.placeholder.com/300" alt="" />
      <span>Lorem ipsum dolor sit amet.</span>
    </div>
  )
}

function Featured() {
  return (
    <div className='featured'>
      <div className="content">
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, sapiente?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus recusandae corporis illum optio, fugit tempore id ex? Ab, error.</p>
        <Bar/>
        <Bar/>
        <Bar/>
      </div>
      <div className='image-aside-container'>
        <img src="https://via.placeholder.com/300" alt="" />
      </div>
    </div>
  )
}

export default Featured