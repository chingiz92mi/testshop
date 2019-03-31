import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { doubleAdd } from '../actions/actions'
import { connect } from 'react-redux'

class Card extends Component {
    constructor(props) {
        super(props)
    }

    
  render() {
    const product = {
      name: this.props.userName,
      cost: this.props.userLike
    }
    return (
      <div className={'card'} style={{width: '12rem', alignSelf: 'flex-start', marginBottom: '10px', marginRight: '33px'}}>
        <div className={'card-img'} style={{width: '100%', minHeight: '134px', background: `url(${this.props.userUrl})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        </div>
        <div className="card-body">
            <span className="card-title">{this.props.userName.substr(0,15) + '...'}</span><br />
            <span>{this.props.userLike} - руб.</span>{console.log('dirix', product)}
            <button className="btn btn-primary btn-sm" onClick={this.props.countup.bind(this, product)}>add to cart</button>
        </div>
      </div>
    )
  }
}

function mapDispatcher(dispatch) {

  return {
    countup: (prodname) => dispatch(doubleAdd(prodname))
}
}
export default connect(null, mapDispatcher)(Card)