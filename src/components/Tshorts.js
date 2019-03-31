import React, { Component } from 'react'
import CardList from './CardList';

export default class Tshorts extends Component {
  render() {
    return (
      <div style={{display: 'flex',
      flexWrap: 'wrap',
      width: '90%',
      maxWidth: '1080px',
      margin: 'auto',
      justifyContent: 'space-between'}}>
        <h1>Tshorts</h1>
        <CardList />
      </div>
    )
  }
}
