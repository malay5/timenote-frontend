"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { VscLink } from 'react-icons/vsc'
import { Button, buttonVariants } from './ui/button'
import { usePathname } from "next/navigation"
import { AiOutlineAppstoreAdd, AiOutlineCaretRight } from 'react-icons/ai'
import { GoClock, GoWorkflow } from 'react-icons/go'
import { FiPieChart } from 'react-icons/fi'
import { BsArrowLeft, BsPatchQuestion, BsCheck2Square } from 'react-icons/bs'
export default function EditSideBar() {
  const pathname = usePathname()
  const items = [
    {
      title: "Event setup",
      icon: (<BsCheck2Square size={22} />),
      href: "/dashboard/event-types/edit/event-setup",
      desc: "15 min"
    },
    {
      title: "Avaliability",
      href: "/dashboard/event-types/edit/avaliability",
      desc: 'Working hours',
      icon: (<GoClock size={22} />)
    },
    {
      title: "Limit",
      href: "/dashboard/event-types/edit/limit",
      desc: 'How often you can be booked',
      icon: (<FiPieChart size={22} />)
    },
    {
      title: "Booking Questions",
      desc: '6 Questions',
      href: "/dashboard/event-types/edit/booking-questions",
      icon: (<BsPatchQuestion size={22} />)
    },
    {
      title: "Apps",
      desc: '0 apps, 0 active',
      href: "/dashboard/event-types/edit/apps",
      icon: (<AiOutlineAppstoreAdd size={22} />)
    },
    {
      title: "Workflows",
      desc: '0 workflow active',
      href: "/dashboard/event-types/edit/workflows",
      icon: (<GoWorkflow size={22} />)
    },

  ]
  return (
    <div className='flex md:w-[30%] flex-col gap-4'>



      <b className='flex justify-center md:justify-start items-center gap-3'>
        <Button variant="outline" size="icon"><BsArrowLeft size={24} /></Button>
      <span className='text-ellipsis whitespace-nowrap overflow-hidden absolute text-base lg:text-2xl'>Meeting Name</span>
      </b>

      <nav
        className={"flex flex-col w-full"}

      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline"} justify-start rounded-md px-2 md:px-4`}>
            <div className='flex py-4 justify-center md:justify-between px-2 items-center '>
              <div className='flex justify-center md:justify-start items-start gap-2'>
                
                  {item.icon}
              

                <div className='md:flex md:flex-col hidden'>
                  <b className='md:font-semibold flex-1 font-normal md:flex hidden truncate'>{item.title}</b>
                  <h1 className='font-normal text-xs text-slate-500 lg:flex hidden'>{item.desc}</h1>
                </div>
              </div>

              <div className={`${pathname === item.href ? 'visible' : 'invisible'} hidden sm:flex`} >
                <AiOutlineCaretRight />
              </div>

            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}
