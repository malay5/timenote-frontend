import React from 'react'
import { BsCalendar3Range } from 'react-icons/bs'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BiTestTube } from 'react-icons/bi'
import { PiDotsThreeVerticalBold } from 'react-icons/pi'
import { Button } from '../ui/button'
import { GoClock } from 'react-icons/go'
export default function Upcoming() {
    const v = false
    return (
        <>
            {

                !v ? (<div className='w-full flex flex-col justify-center items-center h-full gap-4'>
                    <div className='h-20 w-20 justify-center items-center flex rounded-full bg-slate-600/[0.2] dark:text-slate-200/[0.6] text-slate-800/[0.6]'>
                        <BsCalendar3Range size={32} />
                    </div>
                    <b>No upcoming bookings</b>

                    <p className='text-slate-700 text-center'>You have no upcoming bookings. As soon as someone books a <br /> time with you it will show up here.</p>

                </div>) :

                    (
                        <div className='w-full'>
                            <Card className='flex-1 flex flex-col'>
                                <CardContent className='py-4 h-full space-y-4'>

                                    <p className='text-sm'>Thursday, 10 August 2023</p>

                                    <Card className='w-full'>

                                        <CardContent className='py-4'>
                                            <div className='flex justify-between w-full items-center gap-2'>
                                                <div className='flex-col flex items-start justify-start gap-1'>

                                                    <div className='flex justify-start text-center align-middle items-center gap-2'>
                                                        <b>Name here</b>
                                                        <h1 className='text-sm text-slate-500'>(youremail@email.com)</h1>
                                                    </div>
                                                    <div className='flex justify-start items-start gap-2'>
                                                        <p className='text-violet-800 flex gap-2 justify-center items-center dark:text-violet-500 bg-violet-200/[.4] dark:bg-violet-200/[.1] rounded-sm text-xs px-2 py-1'><GoClock />09:30 - 10:00</p>
                                                        <h1 className='text-sm text-slate-500 flex justify-center items-center gap-1'>Event type: <span className='font-semibold'>Event name here</span></h1>
                                                    </div>
                                                </div>

                                                <Button variant="outline" size="icon">
                                                    <PiDotsThreeVerticalBold className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>



                                    <Card className='w-full'>

                                        <CardContent className='py-4'>
                                            <div className='flex justify-between w-full items-center gap-2'>
                                                <div className='flex-col flex items-start justify-start gap-1'>

                                                    <div className='flex justify-start text-center align-middle items-center gap-2'>
                                                        <b>Name here</b>
                                                        <h1 className='text-sm text-slate-500'>(youremail@email.com)</h1>
                                                    </div>
                                                    <div className='flex justify-start items-start gap-2'>
                                                        <p className='text-violet-800 flex gap-2 justify-center items-center dark:text-violet-500 bg-violet-200/[.4] dark:bg-violet-200/[.1] rounded-sm text-xs px-2 py-1'><GoClock />09:30 - 10:00</p>
                                                        <h1 className='text-sm text-slate-500 flex justify-center items-center gap-1'>Event type: <span className='font-semibold'>Event name here</span></h1>
                                                    </div>
                                                </div>

                                                <Button variant="outline" size="icon">
                                                    <PiDotsThreeVerticalBold className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                        <CardFooter className='text-sm text-violet-600'>
                                            Rescheduled by Full name here “your reason in here”
                                        </CardFooter>
                                    </Card>


                                    <p className='text-sm'>Thursday, 10 August 2023</p>

                                    <Card className='w-full'>

                                        <CardContent className='py-4'>
                                            <div className='flex justify-between w-full items-center gap-2'>
                                                <div className='flex-col flex items-start justify-start gap-1'>

                                                    <div className='flex justify-start text-center align-middle items-center gap-2'>
                                                        <b>Name here</b>
                                                        <h1 className='text-sm text-slate-500'>(youremail@email.com)</h1>
                                                    </div>
                                                    <div className='flex justify-start items-start gap-2'>
                                                        <p className='text-violet-800 flex gap-2 justify-center items-center dark:text-violet-500 bg-violet-200/[.4] dark:bg-violet-200/[.1] rounded-sm text-xs px-2 py-1'><GoClock />09:30 - 10:00</p>
                                                        <h1 className='text-sm text-slate-500 flex justify-center items-center gap-1'>Event type: <span className='font-semibold'>Event name here</span></h1>
                                                    </div>
                                                </div>

                                                <Button variant="outline" size="icon">
                                                    <PiDotsThreeVerticalBold className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>




                                </CardContent>

                            </Card>
                        </div>
                    )
            }


        </>

    )
}
