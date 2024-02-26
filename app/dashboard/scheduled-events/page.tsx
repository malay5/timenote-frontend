import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AppBar from '@/components/AppBar'
import { CiSearch } from 'react-icons/ci'
import Upcoming from '@/components/schedule/Upcoming'
export default function page() {
    return (
        <div className='flex-1 flex h-full flex-col relative'>
            <AppBar />
            <Card className='flex-1 flex flex-col  border-none h-full'>
                <CardHeader>
                    <CardTitle>Scheduled Events</CardTitle>
                    <CardDescription>See upcoming and past events booked through your event type links.</CardDescription>
                </CardHeader>

                <CardContent className='py-4 h-full'>



                    <Tabs defaultValue="upcoming" className='h-full' >

                        <div className='flex justify-between items-center'>

                            <TabsList>
                                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                                <TabsTrigger value="pending">Pending</TabsTrigger>
                                <TabsTrigger value="past">Past</TabsTrigger>
                                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                            </TabsList>

                            <div className='flex items-center justify-center border rounded-md pl-2 w-[30%]'>
                                <CiSearch size={24} />
                                <input className='ml-2 w-full border-0 outline-none bg-transparent py-2' placeholder='Search event type' />
                            </div>

                        </div>


                        <TabsContent value="upcoming" className='h-full'>
                            <Upcoming/>
                        </TabsContent>
                        <TabsContent value="pending">Change your password here.</TabsContent>
                        <TabsContent value="past">Change your password here.</TabsContent>
                        <TabsContent value="cancelled">Change your password here.</TabsContent>
                    </Tabs>

                </CardContent>

            </Card>


        </div>
    )
}
