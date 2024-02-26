import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import { AiOutlineCopy, AiOutlineEdit } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { GoLinkExternal } from 'react-icons/go'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from '@/components/ui/separator'
export default function Availability() {

  const scheduleData = [
    { day: 'Monday', startTime: '09:00am', endTime: '05:00pm', available: true },
    { day: 'Tuesday', startTime: '09:00am', endTime: '05:00pm', available: true },
    { day: 'Wednesday', startTime: '09:00am', endTime: '05:00pm', available: true },
    { day: 'Thursday', startTime: '09:00am', endTime: '05:00pm', available: true },
    { day: 'Friday', startTime: '09:00am', endTime: '05:00pm', available: true },
    { day: 'Saturday', startTime: '', endTime: '', available: false },
    { day: 'Sunday', startTime: '', endTime: '', available: false },
    // Add more schedule data here
  ];

  return (

    <div className='flex-1 flex flex-col'>
      <div className=' flex justify-end pb-4 items-center'>
        <div className='flex gap-2'>


          <Button variant="outline" size="icon">
            <AiOutlineCopy size={18} />
          </Button>
          <Button variant="outline" size="icon">
            <GoLinkExternal size={18} />
          </Button>

          <Button variant="outline" size="icon">
            <BsCodeSlash size={18} />
          </Button>





          <Button >
            Save changes
          </Button>

        </div>
      </div>
      <Card className='flex-1 flex flex-col '>

        <CardContent className='py-2 px-2'>

          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>


          <Card className='flex flex-col  my-4'>

            <CardContent className='py-4'>

              {scheduleData.map((item, index) => (
                <div key={index} className={`py-2 flex justify-between items-center ${item.available ? '' : 'unavailable'}`}>
                  <p className='text-sm w-[25%] truncate'>{item.day}</p>
                  {item.available ? (
                    <>
                      <p className='text-sm'>{item.startTime}</p>
                      <p className='text-sm'>-</p>
                      <p className='text-sm'>{item.endTime}</p>
                    </>
                  ) : (
                    <p className='text-sm text-slate-500'>Unavailable</p>
                  )}
                </div>
              ))}


            </CardContent>
            <CardFooter className='flex flex-col'>
              <Separator />

              <div className='flex justify-between items-center w-full flex-1 gap-2 mt-4'>
                <p className='w-20 md:w-auto text-[10px] md:text-base'>Allow booker to select duration</p>
                <Button variant="outline" className='border-violet-600 text-violet-600 flex justify-center items-center gap-2'><AiOutlineEdit size={22} /><span className='truncate w-10'>Edit Avaliability</span></Button>
              </div>

            </CardFooter>
          </Card>

        </CardContent>
      </Card>
    </div>
  )
}
