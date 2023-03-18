import React from 'react'

interface Props{
    handleYes: (e:any) => void;
    handleNo: () => void;
}

const ConfirmationModal:React.FC<Props> = ({ handleYes, handleNo }) => {
    
  return (
    <div className='bg-[rgba(0,0,0,0.6)] h-screen w-full fixed top-0 left-0 flex flex-col gap-4 items-center justify-center backdrop-blur-sm z-50'>
        <div className='w-[30%] rounded-lg flex flex-col gap-4 items-center justify-center bg-dark text-white p-4'>
            <h4>Delete Event?</h4>
            <div className='flex flex-col gap-4 items-center justify-center w-full'>
                <button className='btn-primary' onClick={handleYes}>Yes</button>
                <button className='btn-primary' onClick={handleNo}>No</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal