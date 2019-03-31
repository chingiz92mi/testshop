import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectGen } from '../actions/actions'


class Filter extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const woman = 'woman'
    const man = 'man'
    return (
      <div style={{width: '35%', height: '300px', background: '#333', color: '#fff', marginRight: '40px', padding: '20px'}}>
        <h1>Filter</h1>
        <button className="btn btn-secondary" style={{marginBottom: '20px'}} onClick={this.props.filer.bind(this, '')}>All</button><br />
        <button className="btn btn-secondary" style={{marginBottom: '20px'}} onClick={this.props.filer.bind(this, man)}>Man</button><br />
        <button className="btn btn-secondary" onClick={this.props.filer.bind(this, woman)}>Woman</button>
      </div>
    )
  }
}

function filterFisputch(dispatch) {
  return {
    filer: (gender) => dispatch(selectGen(gender))
  }
}

export default connect(null , filterFisputch)(Filter)