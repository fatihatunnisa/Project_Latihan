import React, {Component} from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from '../pages/Register';
import Grid from './Grid';
import '../component/style/style.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
        return(
            <Router>
            <div className="header">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-ligth warna">
                <Link className="navbar-brand" to="">
                    <img className="logo" src={require('../logo/logo.svg')} alt="logo" /></Link>
                    <button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportContent" aria-aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <Link class="nav-a dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Promo</Link>
                        <div class="dropdown-menu" aria-aria-aria-labelledby="navbarDropdown">
                        <Link class="dropdown-item" to="/">Promo</Link>
                        <Link class="dropdown-item" to="/Grid">Patrnership</Link>
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-a dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Paket & Add on</Link>
                            <div class="dropdown-menu" aria-aria-aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="/">Action</Link>
                            <Link class="dropdown-item" to="/Grid">Another Action</Link>
                            <div a class="dropdown-divider"></div>
                
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-a text-white">Pusat bantuan</Link>
                        </li>
                    </ul>
            </div>
            </nav>
            </div>
            <div className="">
            <Route path="/" exact component={Home}/>
            <Route path="/grid" exact component={Grid}/>
            </div>
            </div>
            </Router>
        )
    }
}
export default App;