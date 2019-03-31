import React, { Component } from 'react'

export default class Shoe extends Component {
    constructor(props){
        super(props)

    }
  render() {
      const { prodPrice, prodName } = this.props
    return (
      <div className={'card'} style={{width: '21rem', alignSelf: 'flex-start', marginBottom: '10px', marginRight: '10px'}}>
        <div className={'card-img'} style={{width: '100%', minHeight: '250px', background: `url(${this.props.prodUrl})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            {/* <img src={prodUrl} style={{width: '100%'}}/> */}
        </div>
        <span style={{color: '#0f0'}}>{prodName}</span><br />
        <span>{prodPrice} руб.</span>
      </div>
    )
  }
}
