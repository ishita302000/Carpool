import react, { Component } from "react";
import offerride from "./Offerride";
import bookride from "./Bookride";
class  RiderOffer extends Component{
    render()
    {
        return(
          <div>
              <h1>Choose One Rider Or Offer</h1>
              <div className="dashboard-body">
            <main className="service-menu">
                <h1><b>Hey Ishita !</b></h1>&nbsp;<br />
               {/* <div className="service-btn bg-purple" onClick={() => navigateTo('./bookride')}>Book a ride</div>
               <div className="service-btn bg-orange" onClick={() => navigateTo('./offerride')}>Offer a ride</div> */}
            </main>
        </div>
          </div>
        );
    }

}

export default RiderOffer;