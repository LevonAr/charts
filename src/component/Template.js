import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import ColumnChart from "./column charts/Column Chart";



class Template extends Component {
  
  render() {    
    return (
		<div>
			<Navbar bg="dark" variant="dark">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">CanvasJS Examples</Navbar.Brand><span className="hidden-xs text-muted">React</span>
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
						
						<Nav to="/" className="flex-sm-column" id="sidebar">
							<ListGroup className="nav nav-sidebar flex-sm-column">
								<ListGroup.Item>
									<a href="#overview" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>OVERVIEW</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="overview">
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#lineCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>LINE CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="lineCharts">
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>

								<ListGroup.Item>
									<a href="#areaCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>AREA CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="areaCharts">
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#columnCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>COLUMN & BAR CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="columnCharts">
										<ListGroup.Item> <NavLink to="/column-chart">Column Chart</NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#pieCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>PIE & FUNNEL CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="pieCharts">
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#financialCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>FINANCIAL CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="financialCharts">
										<ListGroup.Item> <NavLink to="/candlestick-chart">Candlestick Chart</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to="/ohlc-chart">OHLC Chart</NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#scatterCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>SCATTER & BUBBLE CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="scatterCharts">
										<ListGroup.Item> <NavLink to="/scatter-chart">Statter Chart</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to="/scatter-chart-with-custom-marker">Scatter Chart with Custom Marker</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to="/bubble-chart">Bubble Chart</NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#boxAndWhiskerCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>BOX & WHISKER CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="boxAndWhiskerCharts">
										<ListGroup.Item> <NavLink to="/box-whisker-chart">Box & Whisker Chart</NavLink></ListGroup.Item>										
										<ListGroup.Item> <NavLink to="/box-whisker-chart-with-customization">Box & Whisker Chart with Customization</NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#combinationCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>COMBINATION CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="combinationCharts">
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#dynamicCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>DYNAMIC CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="dynamicCharts">
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
							</ListGroup>
						</Nav>
						
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
									<Route path="/column-chart" component={ColumnChart}/>
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;