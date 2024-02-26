
import { Separator } from './ui/separator'
import { BiCopy } from 'react-icons/bi'
import {PiDotsThreeVerticalBold} from 'react-icons/pi'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { MdOutlinePreview } from 'react-icons/md'
import { BsCodeSlash, BsGlobe } from 'react-icons/bs'
export default function AvailablilityRow() {
  return (
    <div className='flex justify-between items-center my-2'>

    <div className='flex-col flex items-start justify-start gap-1 w-[60%]'>

        <div className='flex justify-start text-center align-middle items-center gap-2 w-full'>
        <b className='truncate w-full flex justify-start items-start md:w-auto'>30 Minute Meeting</b>
        <h1 className='text-sm text-slate-500 whitespace-nowrap overflow-hidden overflow-ellipsis'>(ID : 10195662)</h1>
        </div>

        <div className='flex justify-start items-start gap-2'>
        <p className='text-violet-800 dark:text-violet-500 bg-violet-200/[.4] dark:bg-violet-200/[.1] rounded-sm text-xs px-2 py-1'>30 Mins</p>
        <h1 className='text-sm text-slate-500'>One-on-one</h1>
        </div>

        <p className='flex justify-start text-sm items-center gap-2 truncate' > <BsGlobe size={16} /> Indochina Time (15:34) </p>
    </div>

    <div className='flex flex-row border gap-2 p-3 h-10 rounded-sm'>

    


    


        <DropdownMenu>
<DropdownMenuTrigger asChild className='cursor-pointer'>

<PiDotsThreeVerticalBold/>

</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuLabel>Action</DropdownMenuLabel>
<DropdownMenuSeparator />
<DropdownMenuItem className='flex justify-start items-center gap-2'> <AiOutlineEdit/>Edit</DropdownMenuItem>
<DropdownMenuItem className='flex justify-start items-center gap-2'><HiOutlineDocumentDuplicate/> Duplicatie</DropdownMenuItem>
<DropdownMenuItem className='flex justify-start items-center gap-2'><MdOutlinePreview/>Preview</DropdownMenuItem>
<DropdownMenuItem className='flex justify-start items-center gap-2'><BsCodeSlash/> Embedded</DropdownMenuItem>
<DropdownMenuItem className='text-red-500 flex justify-start items-center gap-2'> <AiOutlineDelete/> Remove</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

    </div>

</div>
  )
}
