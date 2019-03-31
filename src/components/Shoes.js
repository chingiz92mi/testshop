import React from 'react'
import Shoe from './Shoe'
import Products from '../api/Products'

export default function Shoes() {
    const allProd = Products.map(item => <Shoe key={item.id} prodUrl={item.avimg} prodPrice={item.price} prodName={item.name} />)
  return (
    <div style={{   display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    maxWidth: '1080px',
    margin: 'auto',
    justifyContent: 'space-between',
    alignItems: 'flex-end'}}>{allProd}</div>
  )
}
