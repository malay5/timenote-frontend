"use client"
import AppBar from '@/components/AppBar'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import React from 'react'
import { AiOutlineDelete, AiOutlinePlus, AiOutlineSync } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { ImWarning } from 'react-icons/im'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar";
import { FiCopy } from 'react-icons/fi'
import { dayElements } from '@/components/dayElements'
import { Separator } from '@/components/ui/separator'
import { PiDotsThreeVerticalBold } from 'react-icons/pi'


export default function Edit() {

    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const maxDate = new Date();
    maxDate.setFullYear(new Date().getFullYear() + 20);

    const minDate = new Date();

    minDate.setDate(minDate.getDate() - 5);

    // Render dayElements in your component

    return (
        <div className='flex-1 flex flex-col relative'>
            <AppBar />

            <div className='flex justify-between items-center p-4'>
                <b className='flex justify-start items-center text-2xl gap-3'><Button variant="outline" size="icon">
                    <BsArrowLeft size={24} />
                </Button>Name here</b>


                <div className='flex justify-center items-center gap-2'>

                    <div className='flex justify-center items-center gap-2'> Set to default <Switch defaultChecked /></div>
                    <Button>
                        <AiOutlineSync className="mr-2 h-4 w-4" /> New event type
                    </Button>
                </div>
            </div>


            <Card className='flex-1 flex flex-col m-4'>


                <CardContent className='py-4 space-y-4 px-14'>
                    {dayElements}

                </CardContent>

                <CardFooter className='flex-col flex gap-2 justify-start items-start'>
                    <Separator />
                    <p>Time zone</p>
                    <Select defaultValue='apple'>
                        <SelectTrigger className="w-[180px]">
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

                </CardFooter>

            </Card>



            <Card className='flex-1 flex flex-col m-4'>
                <CardHeader className='flex justify-between items-center flex-row'>
                    <div>
                        <CardTitle>Date overrides</CardTitle>
                        <CardDescription>Add dates when your availability changes from your daily hours.</CardDescription>
                    </div>


                    <Dialog >
                        <DialogTrigger asChild>
                            <Button variant="outline" className='flex items-center justify-center gap-2'><AiOutlinePlus />Add overrides</Button>
                        </DialogTrigger>
                        <DialogContent className={"md:max-w-screen-md py-12 max-h-screen"}>


                            <div className='flex-row flex justify-between'>
                                <div className='flex flex-col gap-4'>

                                    <p className='font-semibold'>Select the dates to override</p>
                                    <Calendar
                                        mode="single"
                                        onSelect={setDate}
                                        disabled={(date) => date < minDate}
                                        selected={date}
                                    />

                                </div>


                                <Separator orientation='vertical' />

                                <div className='flex-col flex justify-between items-center'>

                                    <div className='flex flex-col justify-start isolate gap-4'>
                                        <p className='text-sm'>Which hour are you free?</p>
                                        <div className='flex justify-between items-center w-full gap-6'>
                                            <Select defaultValue='apple'>
                                                <SelectTrigger className={` w-fit gap-4`}>
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

                                            <p className={``}> -</p>

                                            <Select defaultValue='apple'>
                                                <SelectTrigger className={` w-fit gap-4`}>
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

                                            <AiOutlinePlus className={``} />

                                        </div>
                                        <p className='flex justify-start text-sm items-center gap-2'><Switch /> Mark unavailable all day</p>

                                    </div>

                                    <div className='flex justify-end items-center gap-2 w-full'>
                                        <Button variant="outline">Outline</Button>
                                        <Button>Button</Button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>



                </CardHeader>

                <CardContent className='py-4 space-y-4'>


                    <Card className='flex-1 flex flex-col m-4'>
                        <CardContent className='py-4 space-y-4'>

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="text-xl font-medium leading-[30px]">Monday, 14 August 2023</div>
                                    <div className="flex-col justify-start items-start gap-2 flex">
                                        <div className="text-slate-600 text-sm font-normal leading-[21px]">9:00 AM - 5:00 PM</div>
                                        <div className="text-slate-600 text-sm font-normal leading-[21px]">9:00 AM - 5:00 PM</div>
                                        <div className="text-slate-600 text-sm font-normal leading-[21px]">9:00 AM - 5:00 PM</div>
                                    </div>
                                </div>

                                <Dialog >
                                    <DialogTrigger asChild>

                                        <Button variant="outline" size="icon">
                                            <PiDotsThreeVerticalBold />
                                        </Button>

                                    </DialogTrigger>
                                    <DialogContent className='flex flex-col justify-center items-center gap-4'>
                                        <ImWarning size={52} />

                                        <b>Delete schedule</b>
                                        <h1 className='text-sm'>Deleting a schedule will remove it from all event <br /> types. This action cannot be undone.</h1>

                                        <div className='flex justify-center items-center gap-2 w-full'>
                                            <Button variant="outline" className='flex-1'>Outline</Button>
                                            <Button variant={'destructive'} className='flex-1'>Button</Button>
                                        </div>


                                    </DialogContent>
                                </Dialog>

                            </div>

                        </CardContent>
                    </Card>
                    <Card className='flex-1 flex flex-col m-4'>
                        <CardContent className='py-4 space-y-4'>

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="text-xl font-medium leading-[30px]">Monday, 14 August 2023</div>
                                    <div className="flex-col justify-start items-start gap-2 flex">
                                        <div className="text-slate-600 text-sm font-normal leading-[21px]">9:00 AM - 5:00 PM</div>

                                    </div>
                                </div>

                                <Button variant="outline" size="icon">
                                    <PiDotsThreeVerticalBold />
                                </Button>

                            </div>

                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}
