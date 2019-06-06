import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import ListContent from './components/list/ListContent'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateList from './components/list/CreateList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Profile} />
          <Route exact path='/listitem/:id' component={ListContent} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/create' component={CreateList} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
