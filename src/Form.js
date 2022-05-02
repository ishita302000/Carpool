import React,{Component} from "react";
import SignForm from "./SignForm";
import {Link} from 'react-router-dom';
class Form extends Component{
       render(){
           return(
               <div>
                   <h1>Form Page </h1>
                   <Link to={'/SignForm'}> 
     
         <button className="nextBtn">
         Submit
         </button>
         </Link>
                <button> button</button>
               </div>
           );
       }
}
export default Form;