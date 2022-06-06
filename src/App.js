
import './App.css';
import React , {Component} from 'react';
import {BrowserRouter as Router , Route , Switch , Link, withRouter } from 'react-router-dom';
import Form from './Form';
import SignForm from './SignForm';
import LoginForm from './LoginForm';


class App extends Component {
  render() {
    return (     
       <Router>
         <div>    
            <Switch>
                <Route exact path='/' component={Form}/>
                <Route  path='/SignForm' component={(SignForm)}/>
                <Route path='/LoginForm' Component={(LoginForm)}/>
            </Switch>
         </div>
       </Router>
    );
  }
}

export default App;
