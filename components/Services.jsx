import React, { useState } from 'react'

// icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// imgs
import Fun from './Assets/imgs/services/fun.jpg'
import Sleep from './Assets/imgs/services/sleep.jpg'
import Safe from './Assets/imgs/services/safe.jpg'

function Box({ topic, content, imgUrl }) {
    return(
        <div className='box'>
            <div className='img-container'><img src={imgUrl} alt="" /></div>
            <h3>{topic}</h3>
            <p>{content}</p>
            <div className='button'>Learn More<MdOutlineKeyboardArrowRight/></div>
        </div>
    )
}

function Services() {
    const [datas] = useState({
        fir: {
            topic: 'Easy and freedom',
            content: "User-friendly design seamlessly integrates with limitless flexibility, granting unparalleled autonomy.",
            imgUrl: Fun,
        },
        sec: {
            topic: 'Post anywhere when you want',
            content: 'Share content effortlessly across platforms, unrestricted by time or location.',
            imgUrl: Sleep,
        },
        thr: {
            topic: 'security',
            content: 'Providing robust security measures to safeguard user information and ensure peace of mind.',
            imgUrl: Safe,
        },
    })

    return (
        <div className='services'>
            <h1>Create, simply.</h1>
            <div className='box-section'>
                <Box topic={datas.fir.topic} content={datas.fir.content} imgUrl={datas.fir.imgUrl}/>
                <Box topic={datas.sec.topic} content={datas.sec.content} imgUrl={datas.sec.imgUrl}/>
                <Box topic={datas.thr.topic} content={datas.thr.content} imgUrl={datas.thr.imgUrl}/>
            </div>
        </div>
    )
}

export default Services