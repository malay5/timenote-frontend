import AppBar from '@/components/AppBar'
import { Separator } from '@/components/ui/separator'
import { CiSearch } from 'react-icons/ci'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FiList } from 'react-icons/fi'

import EventRow from '@/components/EventRow'
import { BiCopy } from 'react-icons/bi'
import { PiDotsThreeVerticalBold } from 'react-icons/pi'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { Button } from '@/components/ui/button'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Default() {
  return (
    <div className='flex-1 relative'>
      <AppBar />


      <Card className='border-0'>
        <CardHeader>
          <CardTitle>Event types</CardTitle>
          <CardDescription>Create events to share for people to book on your calendar.</CardDescription>
        </CardHeader>
        <CardContent className='p-2'>

          <div className='flex justify-between items-center py-4 '>

            <div className='flex items-center justify-center border rounded-md pl-2 w-[30%]'>
              <CiSearch size={24} />
              <input className='ml-2 w-full border-0 outline-none bg-transparent py-2' placeholder='Search event type' />
            </div>

            <div className='flex gap-2'>
              <div className='flex flex-row border gap-2 p-3 h-10 rounded-sm'>
                <FiList />
                <Separator orientation='vertical' />
                <BsFillGrid1X2Fill />
              </div>

              <Button>
                <AiOutlinePlus className="mr-2 h-4 w-4" /> New event type
              </Button>

            </div>



          </div>
          <Card className='p-0'>
            <CardContent className='py-4'>
              <EventRow />
              <Separator />
              <EventRow />
              <Separator />
              <EventRow />
              <Separator />
              <EventRow />
              <Separator />
              <EventRow />
              <Separator />
              <EventRow />

            </CardContent>

          </Card>
        </CardContent>

      </Card>
    </div>
  )
}
