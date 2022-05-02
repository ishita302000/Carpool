
import './App.css';
import React , {Component} from 'react';
import {BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Form from './Form';
import SignForm from './SignForm';
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      
       <Router>
         <div>
           <SignForm/>
           <Form/>
           <h2> welcome</h2>
             <ul>
               <li><Link to={'/Form'} className='nav-link'>Form</Link></li>
               <li><Link to={'/SignForm'} className='nav-link'>Signin</Link></li>
               <li><Link to={'/LoginForm'} className='nav-link '> Login</Link></li>
             </ul>
            <hr/>
           <Routes>
                <Route exact path='/Form' Component={Form}/>
                <Route  path='/SignForm' Component={SignForm}/>
                <Route path='/LoginForm' Component={LoginForm}/>
            </Routes>
         </div>
       </Router>
    );
  }
}

export default App;
