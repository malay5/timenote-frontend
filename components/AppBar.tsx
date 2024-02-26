import React from 'react'
import Image from 'next/image'
import { RiNotification2Line } from 'react-icons/ri'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiCaretDown, BiMenuAltRight } from 'react-icons/bi'
import { Separator } from './ui/separator'
import LogoSVG from './LogoSVG'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SideBar from './SideBar'
import MobileSidebar from './MobileSidebar'

export default function AppBar() {
  return (
    <div className='sticky right-0 top-0 left-0 z-40 backdrop-blur-md'>

      <div className='flex justify-between items-center px-2'>

        <div className='flex lg:justify-start justify-center lg:pl-9 items-center gap-[4px] visible md:invisible'>




              <Sheet key={'right'}>
  <SheetTrigger asChild>

  <Button variant="outline" size="icon" className='mr-2'>
                < BiMenuAltRight size={20}/>
              </Button>
  </SheetTrigger>
  <SheetContent className='absolute'>


    <MobileSidebar/>
  </SheetContent>
</Sheet>


          
          <LogoSVG height='28' width='28' />
          <p className='text-2xl font-semibold'> timenote</p>
        </div>


        <div className="flex w-full items-center justify-end space-x-4 py-2">
          <RiNotification2Line size={24} />
          <Image className="w-10 h-10 rounded-full object-cover" src="http://surl.li/krdiv" alt="" width={24} height={24} />
          <div className="font-medium dark:text-white hidden">
            <div>Jese Leos</div>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">Institution name here</div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>

              <Button variant="outline" size="icon">
                <BiCaretDown />
              </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>


      <Separator />
    </div>


  )
}
