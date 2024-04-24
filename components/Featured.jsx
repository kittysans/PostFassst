import React, { useState } from 'react'

// imgs
import BG from './Assets/imgs/Featured/bg.jpg'
import Icon from './Assets/imgs/Featured/icon.jpg'

function Bar({ content }) {
  return(
    <div className='bar'>
      <div className='img-container'>
        <img src={Icon}/>
      </div>
      <span>{content}</span>
    </div>
  )
}

function Featured() {
  const [datas] = useState({
    fir: 'Seamless Posting',
    sec: 'Content Enhancement',
    thr: 'Enhanced Visibility:',
  })

  return (
    <div className='featured'>
      <div className="content">
        <h1>Get Featured.</h1>
        <p>While Posteezy offers seamless posting without logging in, users can enhance their content by featuring articles, stories, or reviews for increased visibility. This upgrade grants top sticky placement on the main page for 7 days, boosting exposure and engagement.</p>
        <Bar content={datas.fir}/>
        <Bar content={datas.sec}/>
        <Bar content={datas.thr}/>
      </div>
      <div className='image-aside-container'>
        <img src={BG}/>
      </div>
    </div>
  )
}

export default Featured