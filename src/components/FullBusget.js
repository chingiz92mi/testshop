import React from 'react'
import { connect } from 'react-redux'
import '../css/fullbusget.css'

function FullBusget(props) {
  return (
    <div className="fullbusget" style={{display: `${props.isopen ? 'block' : 'none'}`}}>
      {}
    </div>
  )
}

function mapReduxInit(state) {
    console.log('daramduk', state)
    return {
      prodList: state.proListReduc.prodname
    }
  
  }



export default connect(mapReduxInit)(FullBusget)