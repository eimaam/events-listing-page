import { Event } from '@/pages/create'
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useState } from 'react'


interface Props{
    eventId: string;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const EditEventModal:React.FC<Props> = ({ eventId, setShowModal }) => {
  const router = useRouter()
    const [data, setData] = useState<Event>({
        title: "",
        description: "",
        venue: "",
        date: "",
        time: "",
      })
      const { title, description, venue, date, time } = data
      
      const handleChange = (e:any) => {
        const { name, value } = e.target
        setData((prevData:any) => ({
          ...prevData,
          [name]:value
        }))
      }

    const updateEvent = async (e:React.SyntheticEvent | any) => {
        console.log(eventId)
        e.preventDefault()
        try{
            const response = await fetch('api/update', {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({eventId, data})
            });

            const result = await response.json()
            
            if(response.ok){
                alert('Event Updated!')
                setShowModal(false)
                router.reload()
            }else if(!response.ok){
                throw new Error(result.message || "Event Creation Failed")
            }
        }catch(error:any){
            console.log(error.message)
        }
    }

  return (
    <div className='bg-[rgba(0,0,0,0.6)] h-screen w-full fixed top-0 left-0 flex flex-col gap-4 items-center justify-center backdrop-blur-sm z-50'>
        <form className='m-auto flex flex-col w-[30%] gap-4 bg-dark p-4 rounded-md' onSubmit={updateEvent}>
        <input 
          type="text"
          placeholder='event name'
          name="title"
          value={title}
          onChange={handleChange}
          />
        <input 
          type="text"
          placeholder='event description'
          name="description"
          value={description}
          onChange={handleChange}
          />
        <input 
          type="text"
          placeholder='event venue'
          name="venue"
          value={venue}
          onChange={handleChange}
          />
        <input 
          type="date"
          placeholder='event date'
          name="date"
          value={date}
          onChange={handleChange}
          />
        <input 
          type="time"
          name="time"
          value={time}
          onChange={handleChange}
          placeholder="event time"
          />
        <button type="submit" className='btn-primary'>Edit Event</button>
    </form>
    </div>
  )
}

export default EditEventModal