import React, { Component } from 'react'
import Card from './Card';
import { user } from '../api/user'

export default class OneUser extends Component {
    constructor(props) {
        this.state = {
            userId: ''
        }
    }


    setUser () {
        
    }
  render() {
      const oneUser = user;
    return (
      <div>
        <Card userName={item.name} userId={item.id} userUrl={item.avimg} userLike={item.like} />
      </div>
    )
  }
}
