
import AppBar from '@/components/AppBar'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FiList } from 'react-icons/fi'
import { BsCalendar3Range, BsFillCalendarRangeFill, BsFillGrid1X2Fill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CiSearch } from 'react-icons/ci'
import EventRow from '@/components/EventRow'
import AvailablilityRow from '@/components/AvailablilityRow'
import WorkflowRow from '@/components/WorkflowRow'
import { Label } from '@/components/ui/label'
import { BiCalendarAlt } from 'react-icons/bi'
export default function page() {

    const times = 6;

    const repeatedCards = Array.from({ length: times }, (item, index) => (
        <Card key={index}>
            <CardContent className="pt-6 gap-4 flex flex-row">
           
             <div className='h-10 w-10  justify-center items-center flex rounded-full bg-slate-600/[0.2] dark:text-slate-200/[0.6] text-slate-800/[0.6]'>
             <BsFillCalendarRangeFill size={18} />
             </div>
                      
                
                    <div className='text-xs w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.</div>
          
            </CardContent>
        </Card>
    ));



    const v = false
    return (
        <div className='flex-1 flex h-full flex-col relative'>
            <AppBar />

            {!v ? (

                <Card className='flex-1 flex flex-col  border-none h-full'>
                    <CardHeader>
                        <CardTitle>Workflow</CardTitle>
                        <CardDescription>Configure times when you are available for bookings.</CardDescription>
                    </CardHeader>

                    <CardContent className='py-4 space-y-4'>
                        <div className='w-full flex flex-col justify-center items-center h-full gap-4'>
                            <div className='h-20 w-20 justify-center items-center flex rounded-full bg-slate-600/[0.2] dark:text-slate-200/[0.6] text-slate-800/[0.6]'>
                                <BsCalendar3Range size={32} />
                            </div>
                            <b>No upcoming bookings</b>

                            <p className='text-slate-700 text-center'>You have no upcoming bookings. As soon as someone books a <br /> time with you it will show up here.</p>

                            <Button>
                                <AiOutlinePlus className="mr-2 h-4 w-4" /> New event type
                            </Button>


                            <div className='grid grid-cols-1 md:grid-cols-3  gap-4'>

                                {repeatedCards}
                            </div>

                        </div>

                    </CardContent>

                </Card>


            ) :
                <Card className='flex-1 flex flex-col  border-none h-full'>
                    <CardHeader>
                        <CardTitle>Workflow</CardTitle>
                        <CardDescription>Configure times when you are available for bookings.</CardDescription>
                    </CardHeader>

                    <CardContent className='py-4 h-full space-y-4'>

                        <div className='flex justify-between items-center pb-4 '>

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

                        <Card className='w-full'>

                            <CardContent className='py-4'>

                                <WorkflowRow />

                            </CardContent>
                        </Card>
                        <Card className='w-full'>

                            <CardContent className='py-4'>

                                <WorkflowRow />

                            </CardContent>
                        </Card>

                    </CardContent>

                </Card>
            }





        </div>
    )
}
