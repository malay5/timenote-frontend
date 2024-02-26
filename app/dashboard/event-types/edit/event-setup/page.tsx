"use client"
import AppBar from '@/components/AppBar'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "@/components/ui/toaster"
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

import { useState } from 'react';
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
import { Button } from '@/components/ui/button'
import { AiOutlineCopy, AiOutlinePlus } from 'react-icons/ai'
import { FiList } from 'react-icons/fi'
import { BsCodeSlash, BsFillGrid1X2Fill } from 'react-icons/bs'
import { GoLinkExternal } from 'react-icons/go'
import { Input } from '@/components/ui/input';
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
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
import { useForm } from "react-hook-form";
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic';

const accountFormSchema = z.object({

  title: z
    .string({ required_error: "You must enter a title" }),

  description: z
    .string({ required_error: "Description can not be empty." })
  ,
  url: z
    .string({ required_error: "URL should be a vaild URL." })
  ,
  duration: z
    .string({ required_error: "Duration can't be emmpty" }),

});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {

};
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
function EventSetUp() {


  const { toast } = useToast();

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  const [value, setValue] = useState('');

  const handleFormSubmit = () => {
    form.handleSubmit(onSubmit)();
  };
  return (

    <div className='flex-1 flex flex-col'>
      <div className='w-full flex justify-end py-4 items-center'>
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





          <Button onClick={handleFormSubmit}>
            Save changes
          </Button>

        </div>
      </div>
      <Card className='flex-1 flex flex-col w-full'>

        <CardContent className='py-4'>


          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs'>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage className='text-xs' />

                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs'>Description</FormLabel>
                    <FormControl>

                      <QuillWrapper theme="snow" {...field} className='ql-custom' placeholder="Content goes here..." />
                    </FormControl>
                    <FormMessage className='text-xs' />

                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs'>URL</FormLabel>
                    <FormControl>
                      <div className='flex'>
                        <div className=' flex items-center justify-center px-2 text-sm bg-slate-600/[.3] rounded-l-md truncate w-full'>
                          meetink.com/user---0e2-e0iwqd/
                        </div>
                        <input placeholder="Enter URL...." {...field} className='pl-2 border-r border-y rounded-r-md flex-1 bg-transparent py-2' />
                      </div>

                    </FormControl>
                    <FormMessage className='text-xs' />

                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs'>Duration</FormLabel>
                    <FormControl>
                      <div className='flex'>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
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
                            </FormControl>
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
                                      form.setValue("duration", role.value);
                                      form.clearErrors()
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
                    </FormControl>
                    <FormMessage className='text-xs' />

                  </FormItem>
                )}
              />


            </form>
          </Form>
          <div className='flex justify-start items-center gap-2 mt-4'>
            <Switch />

            <p>Allow booker to select duration</p>
          </div>



        </CardContent>

        <CardFooter className='flex flex-col'>
          <Separator />

          <div className='flex justify-between w-full items-center gap-2 mt-4'>
            <p>Allow booker to select duration</p>
            <Switch />
          </div>
        </CardFooter>

      </Card>


    </div>


  )
}
export default dynamic(() => Promise.resolve(EventSetUp), { ssr: false });