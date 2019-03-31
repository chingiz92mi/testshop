import React, { Component } from 'react'
import {connect} from 'react-redux'

class BusgetPage extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const costArr = this.props.prodList.map(items => items.cost)
    const reducer = (accumulator, currentValue) => +accumulator + +currentValue;
    console.log('castarr', costArr)
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <ul>
          {this.props.prodList.map(item => <li><span>Товар: {item.name}</span><span>Цена: {item.cost}</span></li>)}
        </ul>
        <span>Общая сумма: { costArr.length > 0 ? costArr.reduce(reducer) : false }</span>
      </div>
    )
  }
}

function matToStore(store) {
    console.log('bududa', store.proListReduc.prodname)
    return {
        prodList: store.proListReduc.prodname
    }
}







export default connect(matToStore)(BusgetPage)