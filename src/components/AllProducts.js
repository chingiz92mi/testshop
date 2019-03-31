import React, { Component } from 'react'
import {Products, user} from '../api'
import Card from './Card'
import { connect } from 'react-redux'

class AllProducts extends Component {
  render() {
    const allProd = Products.concat(user)
    const filteredProd = allProd.filter(item => this.props.filterFocus === '' ? item: item.gender === this.props.filterFocus)
    const showProd = filteredProd.map( item => <Card key={item.id + item.price} userName={item.name} userId={item.id} userUrl={item.avimg} userLike={item.price} />)
    return (
      <div style={{display: 'flex',
        flexWrap: 'wrap',
        width: '65%',
        maxWidth: '1080px',
        margin: 'auto',
        alignItems: 'flex-end'}}>

          {showProd}

      </div>
    )
  }
}
const prodStore = (store) => {
  console.log('our gender: ', store.proListReduc.gender)
  return {
    filterFocus: store.proListReduc.gender
  }

} 




export default connect(prodStore)(AllProducts)