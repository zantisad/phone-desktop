import { addListener } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'

export const Record = ({lastOperation}) => {


  return (
    <div className='text-white tracking-[4px] text-xl flex justify-center align-items'>
        {lastOperation ? lastOperation + "=" : ""}
   </div>
  )
}
