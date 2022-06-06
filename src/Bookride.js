import { useState } from "react";
import Bookrideform from './BookRiderForm';
import RideTile from "./RideTile";
import {UserBookRide}  from './RideDatabase';

 function Bookride()
     {
        const [showMatch, setShowMatch] = useState(false);
        const [formParameters, setFormParameters] = useState({ source: '',
        destination: '',
        date: '',
        timeslot: -1});

        const findRides = (e) =>
        {
            setFormParameters(e);
             // check available or not  if avaiable return list if not print no match found 

             let ride= UserBookRide.find( user=> (user.from === formParameters.source & user.to === formParameters.destination ))
             if(ride)
             {
                 setShowMatch(true);
                 console.log("ride matched");
             }
        }

         return(
             <div>
                  <div className="ride-form">
            <div className="form container">
               
                <form>
                    <Bookrideform filled={findRides} />
                </form>
            </div>
            {
                showMatch ?
                    <div className="ride-matches">
                        <h2 style={{ color: 'purple' }}>Your Matches</h2>
                        { 
                            UserBookRide.map((item, pos) => {
                            return (
                                <RideTile key={pos} info={item} onclick={() => Bookride(pos)} />
                            );
                        })}
                    </div> :null  //null
            }
             </div>
             </div>
         );
     }

export default Bookride;