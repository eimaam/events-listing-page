import React, { useState } from 'react'
import Card from './Card'
import { eventData } from './eventsData'
import Modal from './Modal'

export default function Container() {
  const [showModal, setShowModal] = useState(false);
  
  const Listing = eventData.map((item, index) => {
    return <Card
            key={index} 
            eventName = {item.listingName}
            eventDetail = {item.aboutListing}
            venue = {item.venue}
            startDate = {item.startDate}
            endingDate = {item.endingDate}
            startTime = {item.startTime}
            endingTime = {item.endingTime}
            />
  })
  return (
    <div className='container'>
      <div>
        <button onClick={() => setShowModal(!showModal)}>ADD AN EVENT</button>
      </div>
      {showModal && <Modal onClick={() => setShowModal(false)}/>}
      <div className='container--cards'>
        {Listing}
      </div>
    </div>
  )
}
