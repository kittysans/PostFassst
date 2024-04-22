import React from 'react'

// icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Box() {
    return(
        <div className='box'>
            <img src="https://via.placeholder.com/300" alt="" />
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, error illo. Suscipit?</p>
            <div className='button'>something<MdOutlineKeyboardArrowRight/></div>
        </div>
    )
}

function Services() {
  return (
    <div className='services'>
        <h1>Create, simply. easy to use and make more experience.</h1>
        <div className='box-section'>
            <Box/>
            <Box/>
            <Box/>
        </div>
    </div>
  )
}

export default Services