import React from 'react'
import { AiOutlineCopy, AiOutlineEdit } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { GoLinkExternal } from 'react-icons/go'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
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

export default function Limit() {
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
      <Card className='flex-1 flex flex-col w-full'>

        <CardContent className='py-4 space-y-6'>

          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-xs'>Before event</p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-xs'>After event</p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>


          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-xs'>Minimum notice</p>
              <div className='flex'>

                <Select>
                  <SelectTrigger className="w-[70%] rounded-r-none">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[30%] bg-slate-800/[.4] rounded-l-none">
                    <SelectValue placeholder="Hour" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

              </div>

            </div>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-xs'>Time-slot event</p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <div className='flex justify-between w-full items-center gap-2 mt-4'>
            <p>Limit book frequency <br /> <span className='text-sm text-slate-700'>Limit how many times it can be booked</span></p>
            <Switch />
          </div>

          <Separator />

          <div className='flex justify-between w-full items-center gap-2 mt-4'>
            <p>Limit total booking duration <br /> <span className='text-sm text-slate-700'>Limit total amount of time that this event can be booked</span></p>
            <Switch />
          </div>



        </CardContent>
      </Card>
    </div>
  )
}
