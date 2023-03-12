import React, {ReactEventHandler, useState} from 'react'
import { prisma } from '@/lib/prisma'
import Router from 'next/router'

interface DataTypes {
  title: string,
  description: string,
  venue: string,
  date: string,
  time: string,
}

const CreateEvent:React.FC = () => {
  const [data, setData] = useState<DataTypes>({
    title: "",
    description: "",
    venue: "",
    date: "",
    time: "",
  })
  const { title, description, venue, date, time } = data
  
  const handleChange = (e:Event | any) => {
    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]:value
    }))
    console.log(data)
  }
console.log(JSON.stringify(data))
  const createEvent = async (e:React.SyntheticEvent) => {
    e.preventDefault()
    const content = data
    try{
      const response = await fetch('/api/create', {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(content)
      });
      if(response.ok){
        await Router.push('/events');
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <form className='m-auto flex flex-col w-1/2 gap-4' onSubmit={createEvent}>
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
        <button type="submit" className='btn-primary'>CREATE EVENT</button>
    </form>
  )
}

export default CreateEvent