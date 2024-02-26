import React from 'react'
import { AiOutlineCopy, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai'
import { BsCodeSlash, BsStripe } from 'react-icons/bs'
import { GoLinkExternal } from 'react-icons/go'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { IoQrCode } from 'react-icons/io5'
import { SiGoogleanalytics } from 'react-icons/si'
import { ChevronRightIcon } from 'lucide-react'
import { PiDotsThreeVerticalBold } from 'react-icons/pi'
import {GiTestTubes} from 'react-icons/gi'
import { BiTestTube } from 'react-icons/bi'
export default function Workflows() {
  return (
    <div className='flex-1 flex flex-col'>
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
            <BiTestTube size={32}/>
            <p>Testing <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
          </div>

          <Button variant="outline" size="icon">
      <PiDotsThreeVerticalBold className="h-4 w-4" />
    </Button>
        </div>
      </CardContent>
    </Card>

    <Card className='w-full mt-4'>

      <CardContent className='py-4'>
        <div className='flex justify-between w-full items-center gap-2'>

          <div className='flex gap-2 justify-center items-center'>
            <BiTestTube size={32}/>
            <p>Testing <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
          </div>

          <Button variant="outline" size="icon">
      <PiDotsThreeVerticalBold className="h-4 w-4" />
    </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
