import React from 'react'
import Route from 'react-router-dom/Route';
import AllProducts from './AllProducts';
import Link from 'react-router-dom/Link'
import Shoes from "./Shoes";
import CardList from './CardList';
import '../css/header.css';
import FirsPage from './FirsPage';
import Busget from './Busget';
import FullBusget from './FullBusget';
import BusgetPage from './BusgetPage';
import Filter from './Filter';


export default class Main extends React.Component {
    constructor(props){
        super(props)
            this.state ={
                countProd: 0
            }
        }

        addToCart(){
            console.log(this.props.userName)
        }
        
    render() {
        console.log(window.location.href)
    return (
        <React.Fragment>
            <header className="header">
                <div className="header-wrap">
                    <span style={{color: '#333', fontSize: '22px'}}><Link to="/" >SuperShop</Link></span>
                    <ul className="main-menu">
                        <li>
                            <Link to="./Shoes">Shoes</Link>
                        </li>
                        <li>
                            <Link to="./CardList">Tshirts</Link>
                        </li>
                        <li>
                            <Link to="./AllProducts">AllProducts</Link>
                        </li>
                        <Busget />
                        <FullBusget />
                    </ul>
                </div>
            </header>
            <main style={{width: '90%', maxWidth: '1080px', margin: 'auto', display: 'flex'}}>
            {window.location.href === 'http://localhost:3000/' ? null : <Filter /> }
                <Route exact path="/" component={FirsPage} />
                <Route path="/AllProducts" component={AllProducts} />
                <Route path="/Shoes" component={Shoes} />
                <Route path="/CardList" component={CardList} />
                <Route path="/BusgetPage" component={BusgetPage} />
            </main>
        </React.Fragment>
    )
  }
}
