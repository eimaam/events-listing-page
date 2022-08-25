import React, { useState } from 'react'
import { eventData } from './eventsData'


export default function Modal(props) {
    const [data, setData] = useState({
        listingName:"",
        aboutListing:"",
        venue:"",
        startingDate:"",
        endingDate:"",
        startingTime:"",
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
            if(data.listingName == ""){
                return alert("Event Name can not be empty.")
            }else{
                console.log(data)
                return eventData.push(data)
            }
        }
  return (
    <div className='modal'>
        <form>
            <input 
            type="text" 
            name='listingName'
            value={data.listingName}
            placeholder="Event Name"
            maxLength={30}
            onChange={handleChange}
            />
            <textarea
            rows={4} 
            type="text" 
            name='aboutEvent'
            value={data.aboutEvent}
            placeholder="Event detail"
            maxLength={150}
            onChange={handleChange}
            />
            <input 
            type="text" 
            name='venue'
            value={data.venue}
            placeholder="Event Venue (Physical or Online)"
            onChange={handleChange}
            />
            <input 
            type="date" 
            name='startingDate'
            value={data.startingDate}
            onChange={handleChange}
            />
            <input 
            type="date" 
            name='endingDate'
            value={data.endingDate}
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
