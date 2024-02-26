"use client"
import React, { useState } from 'react'
import AppBar from '@/components/AppBar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { AiOutlineClockCircle, AiOutlineDelete, AiOutlineInfoCircle, AiOutlinePlus, AiOutlineSync, AiOutlineVideoCamera } from 'react-icons/ai'
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

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
// import ReactQuill from 'react-quill'

import type ReactQuill from 'react-quill';
const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'
const freeTimes = [
    { label: "09:00 AM", value: "09:00 AM" },
    { label: "10:00 AM", value: "10:00 AM" },
    { label: "11:00 AM", value: "11:00 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "01:00 PM", value: "01:00 PM" },
    { label: "02:00 PM", value: "02:00 PM" },
    { label: "03:00 PM", value: "03:00 PM" },
    { label: "04:00 PM", value: "04:00 PM" },
    { label: "05:00 PM", value: "05:00 PM" },
    // Add more time slots as needed
] as const;
function Inside() {

    const [field, setfield] = useState({ value: "" })
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


                    <div className='flex justify-between items-center gap-4'>

                        <div className='flex-1 space-y-2'>
                            <p className='text-sm'>Workflow name</p>
                            <Input className='w-full' />
                        </div>
                        <div className='flex-1 space-y-2'>
                            <p className='text-sm'>Workflow name</p>
                            <Select defaultValue='apple'>
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

                    <Card >

                        <CardHeader>
                            <CardTitle>Trigger</CardTitle>
                            <CardDescription>When something happens</CardDescription>
                        </CardHeader>
                        <CardContent >




                            <div className='flex justify-between items-center gap-4'>

                                <div className='space-y-2 flex-1'>
                                    <p className='text-sm'>Workflow name</p>
                                    <Input className='w-full' />
                                </div>
                                <div className='space-y-2 flex-1'>
                                    <p className='text-sm'>Workflow name</p>
                                    <div className='flex'>
                                        <Popover>
                                            <PopoverTrigger asChild>

                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={`w-full justify-between ${!field.value && "text-muted-foreground"} bg-transparent rounded-r-none border-r-0`}

                                                >
                                                    {field.value
                                                        ? freeTimes.find(
                                                            (role) => role.value === field.value
                                                        )?.label
                                                        : "Select timing"}
                                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>

                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0">
                                                <Command>
                                                    <CommandInput placeholder="Search timing..." />
                                                    <CommandEmpty>No time found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {freeTimes.map((role) => (
                                                            <CommandItem
                                                                value={role.label}
                                                                key={role.value}
                                                                onSelect={() => {
                                                                    setfield({ value: role.value });

                                                                }}
                                                            >
                                                                <CheckIcon
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        role.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {role.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>


                                        <div className=' flex items-center justify-center px-2 text-sm bg-slate-600/[.3] rounded-r-md'>
                                            Minutes
                                        </div>

                                    </div>
                                </div>



                            </div>



                        </CardContent>

                        <CardFooter className='flex justify-start items-center gap-2'>

                            <AiOutlineInfoCircle />
                            When testing this workflow, be aware that Emails and SMS can only be scheduled at least 1 hour in advance
                        </CardFooter>
                    </Card>



                    <Card >

                        <CardHeader>
                            <CardTitle>Action 1</CardTitle>
                            <CardDescription>An action is performed</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-4' >


                            <div className='flex-1 space-y-2'>
                                <p className='text-sm'>Workflow name</p>
                                <Select defaultValue='apple'>
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


                            <Card >

                                <CardContent className='space-y-4 py-6 dark:bg-slate-900/[0.4] bg-slate-900/[0.1]' >

                                    <div className='flex-1 space-y-2'>
                                        <p className='text-sm'>Workflow name</p>
                                        <Input className='w-full' />
                                    </div>

                                </CardContent>
                            </Card>




                            <div className='flex-1 space-y-2'>
                                <p className='text-sm'>Workflow name</p>
                                <Select defaultValue='apple'>
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



                            <Card className='dark:bg-slate-900/[0.4] bg-slate-900/[0.1]'>

                                <CardContent className='space-y-4 py-6' >

                                    <div className='flex-1 space-y-2'>

                                        <div className='flex justify-between items-center'>
                                            <p className='text-sm'>Workflow name</p>

                                            <p className='text-sm text-violet-600'>Add variable</p>
                                        </div>

                                        <Input className='w-full' />
                                    </div>
                                    <div className='flex-1 space-y-2'>

                                        <div className='flex justify-between items-center'>
                                            <p className='text-sm'>Workflow name</p>

                                            <p className='text-sm text-violet-600'>Add variable</p>
                                        </div>

                                        <QuillWrapper theme="snow" {...field} className='ql-custom' placeholder="Content goes here..." />
                                    </div>

                                </CardContent>
                            </Card>


                        </CardContent>
                        <CardFooter className='flex justify-start items-center gap-2'>

                            <AiOutlineInfoCircle />
                            When testing this workflow, be aware that Emails and SMS can only be scheduled at least 1 hour in advance
                        </CardFooter>
                    </Card>

                    <div className='w-full flex-1 flex justify-center items-center'>
                        <Button variant="outline" className='flex border-violet-600 text-violet-600 justify-center items-center gap-2'><AiOutlinePlus /> Outline</Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Inside), { ssr: false });
