import React from 'react';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import './App.css';
import EntityListing from './components/EntityListing/EntityListing';
import Provider from './store/Provider';
import Entity from './components/Entity/Entity';
import { Container, Navbar, Nav } from 'react-bootstrap';
import BehaviorTree from './components/BehaviorTree/BehaviorTree';
import DataObjectListing from './components/DataObjectListing/DataObjectListing';
import DataObject from './components/DataObject/DataObject';

function App() {
  return (
      <Provider>
          <Router basename='/'>
              <Container>
                  <Navbar bg="dark" variant="dark" expand="lg">
                      <Navbar.Brand>UnderMine Data</Navbar.Brand>
                      <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                              <Nav.Link as={ NavLink } to="/entities">Entities</Nav.Link>
                              <Nav.Link as={ NavLink } to="/data-objects">Data Objects</Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Navbar>
              </Container>
              <Container style={{ padding: 10, paddingLeft: 'calc(100vw - 100%)' }}>
                  <Switch>
                      <Route path='/entities' exact>
                          <EntityListing/>
                      </Route>
                      <Route path={'/entities/:guid'} exact>
                          <Entity />
                      </Route>
                      <Route path={'/entities/:guid/:name'}>
                          <Entity />
                      </Route>
                      <Route path='/data-objects' exact>
                          <DataObjectListing/>
                      </Route>
                      <Route path={'/data-objects/:guid'} exact>
                          <DataObject />
                      </Route>
                      <Route path={'/behaviors/:id'}>
                          <BehaviorTree />
                      </Route>
                      <Route render={() => <Redirect to="/entities" />} />
                  </Switch>
              </Container>
          </Router>
      </Provider>
  );
}

export default App;
