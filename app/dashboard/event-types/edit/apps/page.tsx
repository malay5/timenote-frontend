import React from 'react'
import { AiOutlineCopy, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai'
import { BsCodeSlash, BsStripe } from 'react-icons/bs'
import { GoLinkExternal } from 'react-icons/go'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { IoQrCode } from 'react-icons/io5'
import { SiGiphy, SiGoogleanalytics, SiGoogletagmanager, SiPlausibleanalytics } from 'react-icons/si'
export default function App() {
  return (
    <div className='flex-1 flex flex-col w-full'>
      <div className='w-full flex justify-end pb-4 items-center'>
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
      <Card className='w-full'>

        <CardContent className='py-4'>
          <div className='flex justify-between w-full items-center gap-2'>
            <div className='flex gap-2 justify-center items-center'>
              <IoQrCode size={32}/>
              <p>Limit total booking duration <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
            </div>

            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className='w-full mt-4'>

        <CardContent className='py-4'>
          <div className='flex justify-between w-full items-center gap-2'>

            <div className='flex gap-2 justify-center items-center'>
              <SiGoogleanalytics size={32}/>
              <p>Limit total booking duration <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
            </div>

            <Switch />
          </div>
        </CardContent>
      </Card>


      <Card className='flex-1 flex flex-col w-full mt-4'>
        <CardHeader>
          <CardTitle>Available apps</CardTitle>
          <CardDescription>View popular apps below and explore more in our App Store</CardDescription>
        </CardHeader>
        <CardContent className='py-4 space-y-6'>

          <div className='flex justify-between w-full items-center gap-2'>
<div className='flex gap-2 justify-center items-center'>
              <SiGoogletagmanager  size={32}/>
              <p>Google Tag Manager <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
            </div>

            <Button variant={"outline"} className=' border-violet-600 text-violet-600'>
      <AiOutlinePlus className="mr-2 h-4 w-4 border-violet-600"/>Add
    </Button>
          </div>
          <div className='flex justify-between w-full items-center gap-2'>

            <div className='flex gap-2 justify-center items-center'>
              <SiGiphy  size={32}/>
              <p>Giphy <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
            </div>

            <Button variant={"outline"} className=' border-violet-600 text-violet-600'>
      <AiOutlinePlus className="mr-2 h-4 w-4 border-violet-600"/>Add
    </Button>
          </div>
          <div className='flex justify-between w-full items-center gap-2'>

            <div className='flex gap-2 justify-center items-center'>
              < BsStripe size={32}/>
              <p>Stripe <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
            </div>

            <Button variant={"outline"} className=' border-violet-600 text-violet-600'>
      <AiOutlinePlus className="mr-2 h-4 w-4 border-violet-600"/>Add
    </Button>
          </div>
          <div className='flex justify-between w-full items-center gap-2'>

            <div className='flex gap-2 justify-center items-center'>
              <SiPlausibleanalytics  size={32}/>
              <p>Plausible <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
            </div>

            <Button variant={"outline"} className=' border-violet-600 text-violet-600'>
      <AiOutlinePlus className="mr-2 h-4 w-4 border-violet-600"/>Add
    </Button>
          </div>

        </CardContent>
      </Card>

    </div>
  )
}
