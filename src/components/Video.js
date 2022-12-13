import './Video.scss'
import React from 'react'
import spaceVideo from '../assets/space.mp4'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video' src={spaceVideo} type='video.mp4' />
      <div className="content">
        <h1>Galaxy. travel</h1>
        <p>World's first civilian space trevel</p>
        <div>
          <Link to='/training' className='btn'>Training</Link>
          <Link to='/contact' className='btn btn-light'>Launch</Link>
        </div>
      </div>
    </div>
  )
}

export default Video
