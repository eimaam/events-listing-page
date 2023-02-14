import React, { PropsWithChildren } from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri"
import { BsFillCalendar2DateFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { RiTimeFill } from "react-icons/ri"

const EventCard:React.FC<PropsWithChildren> = () => {
  return (
    <div className='w-[350px] bg-extras flex flex-col gap-3 p-4 shadow-lg rounded-md relative'>
        <RiDeleteBin2Fill className='text-red-600 text-lg absolute right-4 top-2 cursor-pointer'/>
        <h2 className='text-2xl text-bold mt-4'>Flutter Forward Maiduguri</h2>
        <hr />
        <i>Flutter forward extended Maiduguri event will feature a keynote, tech talks and live Q&A ession that shows how much Flutter is pushing UI development forward.</i>
        <h3 className='text-secondary flex items-center gap-2'>
            <span className='text-dark text-xl'>
                <BsFillCalendar2DateFill />
            </span> 
            4th March, 2023
        </h3>
        <h3 className='text-secondary flex items-center gap-2'>
            <span className='text-dark text-xl'>
                <MdLocationOn />
            </span> 
            Co-Development Hub, Maiduguri
        </h3>
        <h3 className='text-secondary flex items-center gap-2'>
            <span className='text-dark text-xl'>
                <RiTimeFill />
            </span> 
            10:00am
            </h3>
    </div>
  )
}

export default EventCard