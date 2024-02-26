import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import Person from '@/components/Person';
import Person2 from '@/components/Person2';
export default function Confirmed() {
  return (
    <div className='h-screen flex justify-center items-center'>
    <Card className='w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%]'>
    <CardContent >


      <div className=' flex flex-col justify-center items-center mt-4'>
      <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
   
   

          <p className='font-base text-2xl'>Confirmed</p>
          <h1 className='text-xs mt-2 mb-6'>You are scheduled with Nate Calson.</h1>

          <Separator/>
          <div className='flex flex-col my-10 justify-start'>
            <Person2 name={'AsitDixit'} meeting_name={'Meeting name'}/>
          </div>
          <Separator/>
      </div>
  
     


    </CardContent>
    <CardFooter className=' flex justify-center items-center'>
    <p className='text-xs'>A calendar invitation has been sent to your email address.</p>
  </CardFooter>

</Card>
    </div>

 
  )
}


