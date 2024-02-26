"use client"
import React, { useState } from 'react'
import AppBar from '@/components/AppBar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { AiFillBank, AiFillCreditCard, AiOutlineClockCircle, AiOutlineDelete, AiOutlineInfoCircle, AiOutlinePlus, AiOutlineSync, AiOutlineVideoCamera } from 'react-icons/ai'
import { BsArrowLeft, BsGlobe, BsPaypal } from 'react-icons/bs'
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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BillingCardContent from '@/components/BillingCardContent'
import PaypalCardContent from '@/components/PaypalCardContent'
import BankCardContent from '@/components/BankCardContent'

type selcted = {
    currentSelect: 'card' | 'bank' | 'paypal'
}

export default function AddPayment() {


    const [selectedTab, setselectedTab] = useState<selcted>({ currentSelect: 'card' })
    return (
        <div className='flex-1 relative'>
            <AppBar />

            <div className='flex justify-between items-center p-4'>
                <b className='flex justify-start items-center text-2xl gap-3'><Button variant="outline" size="icon">
                    <BsArrowLeft size={24} />
                </Button>Add payment method</b>
            </div>

            <Card className='mx-4'>
                <CardContent className='py-4 space-y-8'>

                    <div className='grid grid-cols-3 gap-4'>

                        <Card className={`${selectedTab.currentSelect === 'card' ? 'bg-violet-600/[0.1] border-violet-950/[0.1] dark:border-violet-100/[0.1]' : 'bg-inherit'} cursor-pointer`} onClick={() => setselectedTab({ currentSelect: 'card' })}>
                            <CardContent className={`py-8 flex flex-col justify-center items-center gap-4 `}>

                                <AiFillCreditCard size={32} />
                                <p className='hidden md:flex'>Credit or debit card</p>

                            </CardContent>
                        </Card>
                        <Card className={`${selectedTab.currentSelect === 'bank' ? 'bg-violet-600/[0.1] border-violet-950/[0.1] dark:border-violet-100/[0.1]' : 'bg-inherit'} cursor-pointer`} onClick={() => setselectedTab({ currentSelect: 'bank' })}>
                            <CardContent className={`py-8 flex flex-col justify-center items-center gap-4 `}>
                                <AiFillBank size={32} />
                                <p className='hidden md:flex'>US bank account</p>

                            </CardContent>
                        </Card>
                        <Card className={`${selectedTab.currentSelect === 'paypal' ? 'bg-violet-600/[0.1] border-violet-950/[0.1] dark:border-violet-100/[0.1]' : 'bg-inherit'} cursor-pointer`} onClick={() => setselectedTab({ currentSelect: 'paypal' })}>
                            <CardContent className={`py-8 flex flex-col justify-center items-center gap-4 `}>
                                <BsPaypal size={32} />

                                <p className='hidden md:flex'>Paypal</p>
                            </CardContent>
                        </Card>

                    </div>


                    <div>
                        {
                            selectedTab.currentSelect==='card'?   <BillingCardContent/> :  selectedTab.currentSelect==='paypal'? <PaypalCardContent/> : <BankCardContent/>
                        }
                      
                    </div>



                </CardContent>
            </Card>
        </div>
    )
}
