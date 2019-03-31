import React, { Component } from 'react'
import '../css/header.css'
import { BrowserRouter as Link } from "react-router-dom";


export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrap">
          <span style={{color: 'purple', fontSize: '28px'}}>SuperShop</span>
          <ul>
            <li>
              <Link to="./Tshorts">Tshorts</Link>
            </li>
            <li>
              <Link to="./AllProducts">Tshorts</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
