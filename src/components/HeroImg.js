import React, { Component } from 'react'
import './HeroImg.scss'

export class HeroImg extends Component {
  render() {
    return (
      <div>
        <div className="hero-img">
          <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroImg
