import React from "react";
import { useState } from "react";

const BookRiderForm =( props)=>
{
    let timings = [
        { start: 5, end: 9, beforeNoon: true },
        { start: 9, end: 12, beforeNoon: true },
        { start: 12, end: 3, beforeNoon: false },
        { start: 3, end: 6, beforeNoon: false },
        { start: 6, end: 9, beforeNoon: false }
    ];

    let [selectedTimeslot, setSelectedTimeslot] = useState(0);

    let formParameters = {
        source: '',
        destination: '',
        date: '',
        timeslot: -1
    };

    const fillDetails = (field, value) => {
        formParameters[field] = value;
    }
    
    const getValues = (event) => {
        let field = event.target.name;   // user input 
        let value = event.target.value;
        fillDetails(field, value);
    }

    const setTimeslot = (e) => {
        setSelectedTimeslot(e.target.value);
        fillDetails('timeslot', selectedTimeslot);
    }

    function checkAvailable()
    {
          // check available or not  if avaiable return list if not print no match found 


    }

    return(
        <div>
            <div className="inputs">
                <label>From</label><br />
                <input type="text" placeholder="Start Point" name="source" onChange={getValues.bind(this)} required />
            </div>
            <div className="inputs">
                <label>To</label><br />
                <input type="text" placeholder="End Point" name="destination" onChange={getValues.bind(this)} required />
            </div>
            <div className="inputs">
                <label>Date</label><br />
                <input type="date" placeholder="xx/mm/yyyy" name="date" onChange={getValues.bind(this)} required /><br />
            </div>
        
            {/* <div className="time-selection">
                <label>Time</label>
                <select onChange={setTimeslot}>
                {
                    timings.forEach((item) => {
                    <option key={timings.findIndex(t => t===item)} value={timings.findIndex(t => t===item)}>
                        {item.start}{item.beforeNoon ? 'am' : 'pm'} - {item.end}{item.beforeNoon ? item.end === 12 ? 'pm' : 'am' : item.end === 12 ? 'am' : 'pm'}
                    </option>
                    })
                }
                </select>
             </div> */}

             <div>
                 <button type='button' value='button' onClick={props.filled(formParameters)}>Submit</button>
             </div>
        </div>
    );
};

export default BookRiderForm;