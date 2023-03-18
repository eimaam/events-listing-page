import React, { PropsWithChildren } from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri"
import { BsFillCalendar2DateFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { RiTimeFill } from "react-icons/ri"
import { AiFillEdit } from "react-icons/ai"
import { Event } from '@/pages/create'

interface EventCardProps extends Event {
    handleDelete: () => void;
    handleEdit: () => void;
}

const EventCard:React.FC<EventCardProps> = ({ title, description, time, date, venue, handleDelete, handleEdit }) => {
    
  return (
    <div className='w-[350px] bg-extras flex flex-col gap-3 p-4 shadow-lg rounded-md relative'>
        <div className='flex gap-4 absolute right-4 top-2'>
            <RiDeleteBin2Fill onClick={handleDelete} className='text-red-600 text-lg cursor-pointer'/>
            <AiFillEdit onClick={handleEdit} className='text-red-600 text-lg cursor-pointer'/>
        </div>
        <h2 className='text-2xl text-bold mt-4'>{title}</h2>
        <hr />
        <i>{description}</i>
        <h3 className='text-secondary flex items-center gap-2'>
            <span className='text-dark text-xl'>
                <BsFillCalendar2DateFill />
            </span> 
            {date}
        </h3>
        <h3 className='text-secondary flex items-center gap-2'>
            <span className='text-dark text-xl'>
                <MdLocationOn />
            </span> 
            {venue}
        </h3>
        <h3 className='text-secondary flex items-center gap-2'>
            <span className='text-dark text-xl'>
                <RiTimeFill />
            </span> 
            {time}
            </h3>
    </div>
  )
}

export default EventCard