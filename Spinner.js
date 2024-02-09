import React, { Component } from 'react'
import spin from "./spin.gif"
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spin} alt="loading" />
      </div>
    )
  }
}

export default Spinner
