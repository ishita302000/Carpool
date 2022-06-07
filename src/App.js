
import './App.css';
import React , {Component} from 'react';
import {BrowserRouter as Router , Route , Switch , Link, withRouter } from 'react-router-dom';
import Form from './Form';
import SignForm from './SignForm';
import LoginForm from './LoginForm';
import RiderOffer from './RiderOffer';
import Bookride from './Bookride';
import Offerride from './Offerride';
import FinalList from './FinalList';


class App extends Component {
  render() {
    return (     
       <Router>
         <div>  
           <Link to='/LoginForm'></Link>
           <Link to='/RiderOffer'></Link>
           <Link to='/Bookride'></Link>
           <Link to='/Offerride'></Link>
           <Link to='/FinalList'></Link>
         
            <Switch>
                <Route exact path='/' component={Form}/>
                <Route  path='/SignForm' component={(SignForm)}/>
                <Route path='/LoginForm' component={(LoginForm)}/>
                <Route path='/RiderOffer' component={(RiderOffer)}/>
                <Route path='/Bookride' component={(Bookride)}/>
                <Route path='/Offerride' component={(Offerride)} />
                <Route path='/FinalList' Component={(FinalList)} />
            </Switch>
         </div>
       </Router>
    );
  }
}

export default App;
