import { useEffect, useState } from 'react'

// icons
import { IoMenuOutline } from "react-icons/io5";

// link
import { Link } from 'react-router-dom';

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
                <Link to={'/'} className='link'>Home</Link>
                <Link to={'/about'} className='link'>About</Link>
                <Link to={'post/'} className='link'>Posts</Link>
                <div className='button'><span>Create Post</span></div>
            </div>

            <div className="menu-phone" open-menu='false'>
                <IoMenuOutline className='menu-icon'/>

                <div className='container'>
                    <div className='link'>Home</div>
                    <div className='link'>About</div>
                    <div className='link'>Posts</div>
                    <div className='button'><span>Create Post</span></div>
                </div>
            </div>
        </div>
    )
}

function Header() {
    return(
        <div className='header'>
            <h1>Easy Sharing in Just 1 Click, Simplifying Your Online Experience!</h1>
            <p>Revolutionize your sharing experience with [name app] one-click ease. No accounts needed, just instant access to share photos, videos, and more effortlessly. Join us and redefine the way you share content online.</p>
            <div className='button-container'>
                <div className='button left'>Learn More</div>
                <div className='button right'>Create Post</div>
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