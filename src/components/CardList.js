import React from 'react'
import user from '../api/user'
import Card from './Card';


export default function CardList() {
  const lsit = user.sort()
  const userList = lsit.map((item) => <Card key={item.id} userName={item.name} userId={item.id} userUrl={item.avimg} userLike={item.price} />)
  return (
    <div style={{display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    maxWidth: '1080px',
    justifyContent: 'space-between',
    margin: 'auto'}}>
      {userList}
    </div>
  )
}
