import React, { useState } from 'react'
import { eventData } from './eventsData'


export default function Modal(props) {
    const [data, setData] = useState({
        eventName:"",
        aboutEvent:"",
        venue:"",
        startDate:"",
        endDate:"",
        startTime:"",
        endingTime:"",
      })

      
      function handleChange(e){
          const {name, value} = e.target
          setData(prevData => ({
              ...prevData,
              [name]: value
            })
            )}

        function addCard(){
            if(data.eventName == ""){
                return alert("Event Name can not be empty.")
            }else{
                return eventData.push(data)
            }
        }
  return (
    <div className='modal'>
        <form>
            <input 
            type="text" 
            name='eventName'
            value={data.eventName}
            placeholder="Event Name"
            required
            onChange={handleChange}
            />
            <textarea
            rows={4} 
            type="text" 
            name='aboutEvent'
            value={data.aboutEvent}
            placeholder="Event detail"
            onChange={handleChange}
            />
            <input 
            type="text" 
            name='venue'
            value={data.venue}
            placeholder="Event Venue (Local or Online)"
            onChange={handleChange}
            />
            <input 
            type="date" 
            name='startDate'
            value={data.startDate}
            onChange={handleChange}
            />
            <input 
            type="date" 
            name='endDate'
            value={data.endDate}
            onChange={handleChange}
            />
            <input 
            type="time" 
            name='startTime'
            value={data.startTime}
            onChange={handleChange}
            />
            <input 
            type="time" 
            name='endingTime'
            value={data.endTime}
            onChange={handleChange}
            />
        </form>
        <button onClick={addCard}>
            ADD
        </button>
        <button onClick={props.onClick}>
            CLOSE
        </button>
        
    </div>
  )
}
