

function RideTile(props) {
    const item = props.info;
    return (
        <div className="container match" onClick={props.onClick}>
         
            <div className="split-in-two">
                <div>
                    <label>From</label><br />
                    {item.from}
                </div>
                <div>
                    <label>To</label><br />
                    {item.to}
                </div>
                <div>
                    <label>Date</label><br />
                    {item.date}
                </div>
                <div>
                    <label>Time</label><br />
                    {item.time}
                </div>
                <div>
                    <label>Price</label><br />
                    {item.price};
                </div>
                <div>
                <label>Seats</label><br />
                {item.seats};
                </div>
               
            </div>
        </div>
    );
}

export default RideTile;