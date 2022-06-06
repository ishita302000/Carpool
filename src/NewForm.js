import React,{Component} from "react";
import SignForm from "./SignForm";
import {Link} from 'react-router-dom';
class NewForm extends Component{
       render(){
           return(
               <div>
                  <SignForm/>
               </div>
           );
       }
}
export default NewForm;