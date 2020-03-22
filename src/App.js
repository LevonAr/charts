import React, { Component } from 'react';
import Template from './component/Template';
import Home from './component/Home'; 
import About from './component/About'; 
import Contact from './component/Contact';

import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom'; 


class App extends Component { 
    render() { 
        return ( 
            <Router> 
                <div className="App"> 
                    <ul className="App-header"> 
                        <li> 
                            <Link to="/">Home</Link> 
                        </li> 
                        <li> 
                            <Link to="/About">About Us</Link> 
                        </li> 
                        <li> 
                            <Link to="/Contact">Contact Us</Link> 
                        </li> 
                        <li>
                            <Link to="/Template">Template</Link>
                        </li>
                    </ul>  
                        <Route path='/' component={Home}></Route> 
                        <Route path='/About' component={About}></Route> 
                        <Route path='/Contact' component={Contact}></Route> 
                        <Route path='/Template' component={Template}></Route> 
                </div> 
            </Router> 
        ); 
    } 
  }

export default App;
