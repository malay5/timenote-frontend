import React from 'react'
import { Separator } from './ui/separator'
import { BiCopy } from 'react-icons/bi'
import {PiDotsThreeVerticalBold} from 'react-icons/pi'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { MdOutlinePreview } from 'react-icons/md'
import { BsCalendar2Date, BsCodeSlash, BsGlobe, BsPeople } from 'react-icons/bs'
export default function RoutingRow() {
  return (
    <div className='flex justify-between items-center my-2'>

        <div className='flex-col flex items-start justify-start gap-1 w-[60%]'>

            <div className='flex justify-start text-center align-middle items-center gap-2 w-full'>
            <b className='w-full truncate'>30 Minute Meeting</b>
            <h1 className='text-sm text-slate-500 truncate'>(ID : 10195662)</h1>
            <p className='text-green-800 dark:text-green-500 bg-violet-200/[.4] dark:bg-violet-200/[.1] rounded-sm text-xs px-2 py-1'>Published</p>
            </div>
            <div className='flex justify-start items-start gap-2 w-full'>
           <BsCalendar2Date/>
            <h1 className='text-sm text-slate-500 w-full truncate'>Last response : 3 August 2023</h1>
            
            </div>
            <p className='flex justify-start text-sm items-center gap-2' > <BsPeople size={16} /> Responses : 133</p>
        </div>

        <div className='flex flex-row border gap-2 p-3 h-10 rounded-sm'>

            <BiCopy/>
            <Separator orientation='vertical'/>


        


            <DropdownMenu>
  <DropdownMenuTrigger asChild className='cursor-pointer'>

  <PiDotsThreeVerticalBold/>

    </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Action</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className='flex justify-start items-center gap-2'> <AiOutlineEdit/>Edit</DropdownMenuItem>
    <DropdownMenuItem className='flex justify-start items-center gap-2'><HiOutlineDocumentDuplicate/> Duplicatie</DropdownMenuItem>
    <DropdownMenuItem className='flex justify-start items-center gap-2'><MdOutlinePreview/>Preview</DropdownMenuItem>
    <DropdownMenuItem className='flex justify-start items-center gap-2'><BsCodeSlash/> Embedded</DropdownMenuItem>
    <DropdownMenuItem className='text-red-500 flex justify-start items-center gap-2'> <AiOutlineDelete/> Remove</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div>

    </div>
  )
}
