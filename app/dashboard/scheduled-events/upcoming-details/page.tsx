import AppBar from '@/components/AppBar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { AiOutlineClockCircle, AiOutlineDelete, AiOutlineSync, AiOutlineVideoCamera } from 'react-icons/ai'
import { BsArrowLeft, BsGlobe } from 'react-icons/bs'
import { SiGooglemeet } from 'react-icons/si'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea'


export default function page() {
    return (
        <div className='flex-1 relative'>
            <AppBar />

            <div className='flex justify-between items-center p-4'>
                <b className='flex justify-start items-center text-2xl gap-3'><Button variant="outline" size="icon">
                    <BsArrowLeft size={24} />
                </Button>Name here</b>


                <div className='flex justify-center items-center gap-2'>






                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className='flex items-center justify-center gap-2 border-red-500 text-red-500'> <AiOutlineDelete size={24} />  Cancel</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Cancel Event</DialogTitle>
                                <DialogDescription>
                                    Please confirm that you would like to cancel this event. A cancellation email will also go out to the invitee.
                                </DialogDescription>
                            </DialogHeader>


                            <div className='my-4'>

                                <h1 className='font-semibold text-2xl '>Meeting name</h1>
                                <h1 className='text-gray-500'>Event type here</h1>

                            </div>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-slate-500 gap-1 flex text-xs justify-start items-center'><AiOutlineClockCircle size={18} /> 60 min appointment</h1>
                                <h1 className='text-slate-500 gap-1 flex text-xs justify-start items-center'><AiOutlineVideoCamera size={18} /> Video call</h1>
                                <h1 className='text-slate-500 gap-1 flex text-xs justify-start items-center'><BsGlobe size={16} /> Indochina Time (15:34)</h1>
                            </div>

                            <Textarea placeholder="Type your message here." />

                            <div className='w-full flex gap-2 justify-center items-center'>

                            <Button variant="outline" className='flex-1'>No, don’t cancel</Button>

                            <Button variant="destructive" className='flex-1'>Yes, cancek</Button>

                            </div>

                        </DialogContent>
                    </Dialog>




                    <Button>
                        <AiOutlineSync className="mr-2 h-4 w-4" /> New event type
                    </Button>
                </div>

            </div>
            <Card className='flex-1 flex flex-col h-full mx-4 mb-4'>
                <CardContent className='py-4 space-y-6 h-full'>

                    <div>
                        <p className='text-slate-500 text-sm'>    Event type  </p>
                        <p >   Testing meet </p>

                    </div>
                    <div>
                        <p className='text-slate-500 text-sm'>    Full Name  </p>
                        <p >   Name heere </p>

                    </div>
                    <div>
                        <p className='text-slate-500 text-sm'> Email </p>
                        <p >   asitdixit@outlook.com </p>

                    </div>
                    <div>
                        <p className='text-slate-500 text-sm'>App used </p>
                        <p className='flex justify-start items-center gap-2' > <SiGooglemeet size={20} /> Goole meet <span className='text-sm text-violet-600'>Join now</span> </p>

                    </div>

                    <div>
                        <p className='text-slate-500 text-sm'>Schedule event </p>
                        <p >   Thursday, 10 August 2023, 09:30 - 10:00  </p>

                    </div>

                    <div>
                        <p className='text-slate-500 text-sm'>Time zone</p>
                        <p className='flex justify-start items-center gap-2' > <BsGlobe size={20} /> Indochina Time (15:34) </p>

                    </div>

                    <div>
                        <p className='text-slate-500 text-sm'>Note </p>
                        <p >   Sed consectetur ultricies fames sodales massa tristique ultricies id. Feugiat sit id ullamcorper facilisi rutrum faucibus. Lectus interdum vitae a iaculis ut justo at fusce. Quam mattis tempor urna molestie purus eget urna aliquam. Tempor ullamcorper egestas varius blandit condimentum ac. Id amet in bibendum imperdiet sapien gravida molestie sed arcu. Magna feugiat bibendum Sibendum morbi Suspendisse aliquam. </p>


                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside ">
                            <li>
                                Magna feugiat bibendum Sibendum morbi.
                            </li>
                            <li>
                                Quam mattis tempor urna molestie purus eget.
                            </li>
                            <li>
                                Sed consectetur ultricies fames sodales massa.
                            </li>
                        </ul>

                    </div>


                    <div>
                        <p className='text-slate-500 text-sm'>Create date </p>
                        <p >   Sunday, 6 August 2023 </p>

                    </div>




                </CardContent>

            </Card>

        </div>
    )
}
