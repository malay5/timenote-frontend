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
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CiSearch } from 'react-icons/ci'
import EventRow from '@/components/EventRow'
import AvailablilityRow from '@/components/AvailablilityRow'
export default function Default() {
    return (
        <div className='flex-1 flex h-full flex-col relative'>
            <AppBar />

            <Card className='flex-1 flex flex-col  border-none h-full'>
                <CardHeader>
                    <CardTitle>Availability</CardTitle>
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

                        <CardContent className='py-2 px-2'>

                            <AvailablilityRow/>

                        </CardContent>
                    </Card>

                    <Card className='w-full'>

                        <CardContent className='py-2 px-2'>

                            <AvailablilityRow/>

                        </CardContent>
                    </Card>



                </CardContent>

            </Card>



        </div>
    )
}
