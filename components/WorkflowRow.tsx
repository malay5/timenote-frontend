
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
  import {TbMailFast} from 'react-icons/tb'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { MdOutlinePreview } from 'react-icons/md'
import { BsCodeSlash, BsGlobe } from 'react-icons/bs'
export default function WorkflowRow() {
  return (
    <div className='flex justify-between items-center my-2'>

    <div className='flex-col flex items-start justify-start gap-1'>

        <div className='flex justify-start text-center align-middle items-center gap-2'>
        <b>30 Minute Meeting</b>
        <h1 className='text-sm text-slate-500'>(ID : 10195662)</h1>

        <h1 className='text-violet-800 dark:text-violet-500 bg-violet-200/[.4] dark:bg-violet-200/[.1] rounded-sm text-xs px-2 py-1'>Active on 1 event type</h1>
        </div>
        <div className='flex justify-start items-start gap-2'>
       <TbMailFast/>
        <h1 className='text-sm text-slate-500'>Triggers 24 hours before event starts</h1>
        </div>

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
