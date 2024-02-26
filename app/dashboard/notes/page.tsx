import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import AppBar from '@/components/AppBar'

export default function Notes() {
  return (
    <div className='flex-1 flex h-full flex-col relative'>
    <AppBar />

    <Card className='flex-1 flex flex-col  border-none h-full'>
        <CardHeader>
            <CardTitle>Integration</CardTitle>
            <CardDescription>Configure times when you are available for bookings.</CardDescription>
        </CardHeader>

        <CardContent className='py-4 h-full space-y-4'>

        </CardContent>

</Card>



</div>
  )
}
