import React, { Component } from 'react'
import png from '../api/BHM_2_hd_1600.jpg'

export default class FirsPage extends Component {
  render() {
    return (
      <div style={{width: '100%', maxWidth: '1080px', margin: 'auto'}}>
        <h1>Best Shopping Site</h1>
        <img src={png} style={{width: '100%'}} />
      </div>
    )
  }
}
