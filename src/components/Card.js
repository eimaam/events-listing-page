import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <h2>{props.eventName}</h2>
        <i>{props.eventDetail}</i>
        <div className='details'>
            <div>
                <h3>VENUE: </h3>
                <p>{props.venue}</p>
            </div>

            <div>
              <h3>Start Date: </h3>
              <p>{props.startDate}</p>
            </div>

            <div>
              <h3>End Date: </h3>
              <p>{props.endingDate}</p>
            </div>

            <div>
                <h3>Start Time: </h3>
                <p>{props.startTime}</p>
            </div>

            <div>
              <h3>End Time: </h3>
              <p>{props.endingTime}</p>
            </div>
        </div>
        <button>copy details</button>        
        {/* <h3>VENUE: <span>Unity Hall, Abuja.</span></h3>
        <h3>Start Time: <span>9:00am</span></h3>
        <h3>End Time: <span>1:00pm</span></h3>
        <h3>Start Date: <span>Unity Hall, Abuja.</span></h3>
        <h3>End Date: <span>Unity Hall, Abuja.</span></h3> */}
        {/* <button>copy details</button>         */}
    </div>
  )
}
