import { useEffect, useState } from 'react'

// icons
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
    useEffect(() => {
        const menuElement = document.querySelector('.menu-phone')
        const containerMenuElement = document.querySelector('.menu-phone .container')

        const handleToggleMenu = () => {
            containerMenuElement.classList.toggle('open')
        }

        if (getComputedStyle(menuElement).getPropertyValue('display') == 'block') menuElement.addEventListener('click', handleToggleMenu)
    }, [])

    return(
        <div className='navbar'>
            <div className='logo'>logo</div>
            <div className='menu'>
                <div className='link'>Lorem, ipsum.</div>
                <div className='link'>Lorem, ipsum.</div>
                <div className='link'>Lorem, ipsum.</div>
                <div className='button'><span>Create Profile</span></div>
            </div>

            <div className="menu-phone" onClick={null} open-menu='false'>
                <IoMenuOutline className='menu-icon'/>

                <div className='container'>
                    <div className='link'>Lorem, ipsum.</div>
                    <div className='link'>Lorem, ipsum.</div>
                    <div className='link'>Lorem, ipsum.</div>
                    <div className='button'><span>Create Profile</span></div>
                </div>
            </div>
        </div>
    )
}

function Header() {
    return(
        <div className='header'>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, optio!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est.</p>
            <div className='button-container'>
                <div className='button left'>Learn More</div>
                <div className='button right'>Create Profile</div>
            </div>
        </div>
    )
}

function Hero() {
    return (
        <div>
            <Navbar/>
            <Header/>
        </div>
    )
}

export default Hero