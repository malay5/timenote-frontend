
"use client"
import React, { useEffect, useState } from 'react'
import LogoSVG from './LogoSVG'
import { VscLink } from 'react-icons/vsc'
import { BsCalendarEvent } from 'react-icons/bs'
import { GoClock, GoLinkExternal } from 'react-icons/go'
import { LuNetwork } from 'react-icons/lu'
import { GrStackOverflow } from 'react-icons/gr'
import { RiRouteLine } from 'react-icons/ri'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { MdOutlineInsights } from 'react-icons/md'
import { Separator } from './ui/separator'
import { IoSettingsOutline } from 'react-icons/io5'
import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from 'next-themes'
import { AiOutlineCopy } from 'react-icons/ai'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileSidebar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    function handleToggle(checked: boolean): void {

        if (checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        setMounted(theme === 'dark')
    }, [theme])
  return (
    <div className='flex-col justify-between h-full pt-4 pb-4 px-4 flex'>

    <div className='flex flex-col'>
        <div className='flex justify-start items-center gap-[4px]'>
            <LogoSVG height='28' width='28' />
            <p className='text-2xl font-semibold flex flex-col'> timenote</p>
        </div>

        <div className='flex flex-col gap-[6px] my-6 lg:pl-9'>

            <p className='text-slate-500 flex'>MAIN MENU</p>

            <Link href={'/dashboard/event-types/default'} className={`${pathname.includes('/dashboard/event-types/default') || pathname.includes('/dashboard/event-types/edit') ? 'bg-violet-600/[0.4]' : 'bg-inherit'} py-2 px-2 rounded-md`}>
                <p className='text-sm flex gap-2 justify-start items-center'><VscLink size={20} /> <span className='flex'>Event type</span></p>
            </Link>

            <Link href={'/dashboard/scheduled-events'} className={`${pathname.includes('/dashboard/scheduled-events') ? 'bg-violet-600/[0.4]' : 'bg-inherit'} p-2 rounded-md`}>
                <p className='text-sm flex gap-2 justify-start items-center'><BsCalendarEvent size={16} /><span className='flex'>Schedule events</span></p>
            </Link>

            <Link href={'/dashboard/availability/default'} className={`${pathname.includes('/dashboard/availability/default') ? 'bg-violet-600/[0.4]' : 'bg-inherit'} p-2 rounded-md`}>
                <p className='text-sm flex gap-2 justify-start items-center'><GoClock size={18} /><span className='flex '>Availability</span></p>
            </Link>

            <Link href={'/dashboard/intergartion'} className={`${pathname.includes('/dashboard/intergartion') ? 'bg-violet-600/[0.4]' : 'bg-inherit'} p-2 rounded-md`}>
                <p className='text-sm flex gap-2 justify-start items-center'><LuNetwork size={18} /><span className='flex'>Intergartion</span></p>
            </Link>

            <Link href={'/dashboard/workflows'} className={`${pathname.includes('/dashboard/workflows') ? 'bg-violet-600/[0.4]' : 'bg-inherit'} p-2 rounded-md`}>
                <p className='text-sm flex gap-2 justify-start items-center'><GrStackOverflow size={18} /><span className='flex'>Workflow</span></p>
            </Link>

            <Link href={'/dashboard/routing'} className={`${pathname.includes('/dashboard/routing') ? 'bg-violet-600/[0.4]' : 'bg-inherit'} p-2 rounded-md`}>
                <p className='text-sm flex gap-2 justify-start items-center'><RiRouteLine size={18} /><span className='flex'>Routing</span></p>
            </Link>

            <Link href={'/dashboard/notes'} className={`${pathname.includes('/dashboard/notes') ? 'bg-violet-600/[0.4]' : 'bg-inherit'} p-2 rounded-md`}>
                <p className='text-sm flex gap-2 justify-start items-center'><HiOutlineDocumentDuplicate size={18} /><span className='flex'>Notes</span></p>
            </Link>

            <Link href={'/dashboard/insights'} className={`${pathname.includes('/dashboard/insights') ? 'bg-violet-600/[0.4]' : 'bg-inherit'} p-2 rounded-md`}>
                <p className='text-sm flex gap-2 justify-start items-center'><MdOutlineInsights size={18} /> <span className='flex'>Insights</span></p>
            </Link>

        </div>
        <Separator />

        <div className='space-y-[18px] my-6 lg:pl-9 lg:pr-16'>
            <p className='text-slate-500'><span className='flex'>SUPPORT</span></p>
            <p className='text-sm flex gap-2 justify-start items-center lg:pl-2'><IoSettingsOutline size={16} /> <span className='flex'>Settings</span></p>

            <p className='text-sm flex gap-2 justify-start items-center cursor-pointer lg:pl-2' onClick={() =>
                handleToggle(!(theme === 'dark') ? true : false)}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className='flex'>
                    Dark theme
                </span>

                <Switch
                    checked={mounted}
                    defaultChecked={mounted}
                    onCheckedChange={handleToggle}
                    className='flex'
                />
            </p>

        </div>


    </div>

    <div className='flex flex-col gap-[14px] lg:pl-9 lg:pr-12'>
        <p className='text-sm flex gap-2 justify-start items-center lg:pl-2'><GoLinkExternal size={18} /> <span >View public page</span> </p>
        <p className='text-sm flex gap-2 justify-start items-center lg:pl-2'><AiOutlineCopy size={18} /> <span >Achedule events</span> </p>
        <p className='text-[12px] text-slate-600'>© 2023 Timenote.io, Inc.</p>
    </div>


</div>
  )
}
