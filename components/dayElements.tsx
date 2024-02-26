const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

import AppBar from '@/components/AppBar'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import React from 'react'
import { AiOutlineDelete, AiOutlinePlus, AiOutlineSync } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'

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
import { FiCopy } from 'react-icons/fi'

export const dayElements = daysOfWeek.map((day, index) => {
  // Determine whether to show the selector and other icons
  const showSelector = day !== 'Saturday' && day !== 'Sunday';
  const showIcons = day !== 'Saturday' && day !== 'Sunday';

  return (
    <div key={index} className='justify-between flex items-center'>
      <Switch defaultChecked={showSelector} />
      <p className={`w-[20%] `}>{day}</p>

        <Select defaultValue='apple'>
          <SelectTrigger className={`${showSelector? 'visible' :'invisible'} w-fit gap-4`}>
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
 
      <p className={`${showSelector? 'visible' :'invisible'}`}> -</p>
    
        <Select defaultValue='apple'>
          <SelectTrigger className={`${showSelector? 'visible' :'invisible'} w-fit gap-4`}>
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
 
     <AiOutlinePlus className={`${showSelector? 'visible' :'invisible'}`} />
       <FiCopy className={`${showSelector? 'visible' :'invisible'}`} />
    </div>
  );
});

// Render dayElements in your component
