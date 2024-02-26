"use client"
import React from 'react'
import {AiOutlineClockCircle, AiOutlineVideoCamera} from "react-icons/ai"
import {BsGlobe} from "react-icons/bs"
import Image from 'next/image'
export default function Person2(props: {name:string,meeting_name:string}) {
  return (
<React.Fragment>
    
<div className="flex items-center justify-start space-x-4">
    <Image className="w-14 h-14 rounded-full object-cover" src="http://surl.li/krdiv" alt="" width={24} height={24}/>
    <div className="font-medium dark:text-white">
        <div>{props.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Institution name here</div>
    </div>
</div>

<h1 className='font-semibold text-2xl my-4'>{props.meeting_name}</h1>
<div className='flex flex-col gap-2'>
<h1 className='text-gray-600 gap-1 flex text-xs justify-start items-center'><AiOutlineClockCircle size={18}/> 60 min appointment</h1>
<h1 className='text-gray-600 gap-1 flex text-xs justify-start items-center'><AiOutlineVideoCamera size={18}/> Video call</h1>
<h1 className='text-gray-600 gap-1 flex text-xs justify-start items-center'><BsGlobe size={16} /> Indochina Time (15:34)</h1>
</div>


</React.Fragment>
  )
}
