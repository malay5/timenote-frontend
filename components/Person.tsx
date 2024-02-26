import React from 'react'
import { AiOutlineClockCircle, AiOutlineVideoCamera } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import Image from 'next/image'

export default function Person() {
    return (
        <div className="max-w-md">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <Image src="https://source.unsplash.com/100x100/?portrait?1" alt="" width={24} height={24} className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>
            <div className="flex flex-col space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                    <span className="text-sm dark:text-gray-400">General manager</span>
                </div>
                <div className="space-y-2">
                    <span className="flex items-center space-x-2">
                        <AiOutlineClockCircle  size={12} color={'gray'} />
                        <span className="dark:text-gray-400 text-xs">60 minutes appointment</span>
                    </span>
                    <span className="flex items-center space-x-2">
                        <AiOutlineVideoCamera size={12} color={'gray'} />
                        <span className="dark:text-gray-400 text-xs">Video call</span>
                    </span>
                    <span className="flex items-center space-x-2">
                        <BsGlobe  size={12} color={'gray'}/>
                        <span className="dark:text-gray-400 text-xs">Indochina Time(15:34)</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
