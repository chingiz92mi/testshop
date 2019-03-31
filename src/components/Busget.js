import React, {Component} from 'react'
import Link from 'react-router-dom/Link'
import '../css/busget.css'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import '../css/cartanime.css'


class Busget extends Component {
  constructor(props){
    super(props)
    this.state = {
      buble: false
    }
  
  }

  changebuble(){
    console.log('oppa')
  }
  render(){
    return (
      <li>
        <Link style={{position: 'absolute'}} to="./BusgetPage">
          <i className="fas fa-cart-plus"></i>
          <CSSTransition in={this.props.isopen} classNames="fadi" timeout={1000}>
            <span className="busget-vidget">{this.props.countProd}</span>
            
          </CSSTransition>
        </Link>
      </li>
      
    )
  }
}

function mapReduxInit(state) {
  console.log('nadna', state)
  return {
    countProd: state.busgetReduc.busgetCount,
    isopen: state.proListReduc.isopen
  }

}




export default connect(mapReduxInit)(Busget)