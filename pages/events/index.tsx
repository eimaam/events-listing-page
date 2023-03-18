import ConfirmationModal from '@/components/ConfirmationModal';
import EditEventModal from '@/components/EditEventModal';
import EventCard from '@/components/EventCard';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { prisma } from "../../lib/prisma"
import { Event } from '../create';

export const getStaticProps: GetStaticProps = async () => {
  const events = await prisma.event.findMany({
    orderBy: {
      createdAt: 'desc',
    },

  })

  const formattedEvents = events.map(event => ({
    ...event,
    createdAt: event.createdAt.toISOString(),
    updatedAt: event.createdAt.toISOString(),
  }))

  return {
    props: { events: formattedEvents },
  }

}



interface Props extends Event {
  events: Props[],
  id: string,
  createdAt: string,
  updatedAt: string,
}

const Events:React.FC<Props> = ({ events }) => {
  const router = useRouter()

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [id, setId] = useState<any>(null)

  const handleShowDeleteModal = (id:string) => {
    console.log(id)
    setId(id)
    setShowDeleteModal(true)
  }

  const handleShowEditModal = (id:string) => {
    console.log(id)
    setId(id)
    setShowEditModal(true)
  }

  const handleDelete = async (e:React.SyntheticEvent | any) => {
    e.preventDefault()
    try{
      const response = await fetch(`/api/delete?id=${id?.toString()}`, {
        method: "DELETE"
      })
      const data = await response.json()
      console.log(data)
      
      if(!response.ok){
        throw new Error(data.message || "Event Creation Failed")
      }
      router.reload()
    }catch(error:any){
      console.error(error.message)
    }
  }

  return (
    <div className='w-80 m-auto flex flex-wrap md:flex-col lg:flex-col justify-center gap-6 border'>
        <div className='flex justify-center gap-4 m-auto'>
          {events?.map(event => {
            return <EventCard
            key={event.id}
            {...event} 
            handleDelete={() => handleShowDeleteModal(event.id)}
            handleEdit={() => handleShowEditModal(event.id)}
            />
          })}
        </div>
        {/* <div className='flex justify-center gap-4 m-auto'>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div> */}
        {showDeleteModal && <ConfirmationModal handleYes={handleDelete} handleNo={() => setShowDeleteModal(false)}/>}
        {showEditModal && <EditEventModal eventId={id} setShowModal={setShowEditModal}/>}
    </div>
  )
}

export default Events;