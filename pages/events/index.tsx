import EventCard from '@/components/EventCard';
import React from 'react'

const Events:React.FC = () => {
  return (
    <div className='w-80 m-auto flex flex-wrap md:flex-col lg:flex-col justify-center gap-6 border'>
        <div className='flex justify-center gap-4 m-auto'>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
        <div className='flex justify-center gap-4 m-auto'>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    </div>
  )
}

export default Events;