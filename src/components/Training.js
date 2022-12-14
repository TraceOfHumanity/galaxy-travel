import './Training.scss'
import React from 'react'
import Pod from '../assets/1.jpg'
import Moon from '../assets/2.jpg'
import { Link } from 'react-router-dom'

const Training = () => {
  return (
    <div>
      <div className="training">
        <div className="left">
          <h1>Training</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dignissimos eos dicta voluptates laboriosam in laborum sapiente. Facilis architecto obcaecati, illum veritatis quod eaque laboriosam? Ipsa veritatis aliquid ab tenetur?</p>
          <Link to='/contacts'> <button className='btn'>Contact</button> </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className='image-stack top'>
              <img src={Moon} className="img" alt='' />
            </div>
            <div className="image-stack bottom">
              <img src={Pod} className="img" alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Training
