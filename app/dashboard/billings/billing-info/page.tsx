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


import { Textarea } from '@/components/ui/textarea'


import 'react-quill/dist/quill.snow.css';
import BillingCardContent from '@/components/BillingCardContent'
import PaypalCardContent from '@/components/PaypalCardContent'
import BankCardContent from '@/components/BankCardContent'



import { FiList } from "react-icons/fi";
import { BsCalendar3Range, BsCodeSlash, BsFillGrid1X2Fill } from "react-icons/bs";
import {  AiOutlineLink, AiOutlineMail,  } from "react-icons/ai";

import { Separator } from "@/components/ui/separator";
import { CiCalendarDate, CiSearch } from "react-icons/ci";
import EventRow from "@/components/EventRow";
import AvailablilityRow from "@/components/AvailablilityRow";
import WorkflowRow from "@/components/WorkflowRow";
import { Label } from "@/components/ui/label";
import { BiCalendarAlt } from "react-icons/bi";
import RoutingRow from "@/components/RoutingRow";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command";
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { cn } from "@/lib/utils";


const companyRoles =[
    { label: "JP Morgan Chase", value: "jpmorgan" },
    { label: "Bank of America", value: "bofa" },
    { label: "Wells Fargo", value: "wellsfargo" },
    { label: "Citibank", value: "citibank" },
    { label: "HSBC", value: "hsbc" },
    { label: "Goldman Sachs", value: "goldmansachs" },
    { label: "Morgan Stanley", value: "morganstanley" },
    { label: "Barclays", value: "barclays" }
  ] as const;


  const countryList=[
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "United Kingdom", value: "uk" },
    { label: "Australia", value: "au" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
    { label: "Japan", value: "jp" },
    { label: "Italy", value: "it" },
    { label: "Spain", value: "es" },
    { label: "China", value: "cn" },
    { label: "South Korea", value: "kr" },
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
    { label: "India", value: "in" },
    { label: "Russia", value: "ru" },
    { label: "South Africa", value: "za" },
    { label: "Argentina", value: "ar" },
    { label: "New Zealand", value: "nz" },
    { label: "Singapore", value: "sg" },
    { label: "Malaysia", value: "my" }
  ] as const;

const accountFormSchema = z.object({
    full_name: z
        .string({ required_error: "Please select an email to display." })
        .min(2, { message: "First name must be at least 2 characters." })
        .max(30, { message: "First name must not be longer than 30 characters." }),

        email: z
        .string({ required_error: "Please select an email to display." })
        .email(),
    address_line_1: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),
    address: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),
    address_line_2: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),
    state: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),
    zip_cde: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),
    id_type: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),
    id_number: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),

    city: z
        .string()
        .min(2, { message: "Company name must be at least 2 characters." })
        .max(30, { message: "Company name must not be longer than 30 characters." }),

});
type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    // first_name: "Your",
    // dob: new Date("2023-01-23"),
};

export default function BillingInfo() {



    const { toast } = useToast();
    const form = useForm<AccountFormValues>({
        resolver: zodResolver(accountFormSchema),
        defaultValues,
    });

    function onSubmit(data: AccountFormValues) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }


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



        <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">




    <div className="flex flex-col md:flex-row w-full gap-5">
            <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                            This is the name that will be displayed on your profile and in
                            emails.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Your eamil" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                            This is the email that will be displayed on your profile and in
                            emails.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>


    <div className="flex flex-col md:flex-row w-full gap-5">
    <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-1">
                <FormLabel>Address</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? countryList.find(
                              (role) => role.value === field.value
                            )?.label
                          : "Select address"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search address..." />
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countryList.map((role) => (
                          <CommandItem
                            value={role.label}
                            key={role.value}
                            onSelect={() => {
                              form.setValue("address", role.value);
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
             <FormDescription className="text-xs">
                  This is the role that will be used in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input placeholder="Your city" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                            This is the city that will be displayed on your profile and in
                            emails.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>




        <div className="flex flex-col md:flex-row w-full gap-5">
            <FormField
                control={form.control}
                name="address_line_1"
                render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                        <FormLabel>Address line 1</FormLabel>
                        <FormControl>
                            <Input placeholder="Your  address" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                            This is the address that will be displayed on your profile and in
                            emails.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="address_line_2"
                render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                        <FormLabel>Address line 2</FormLabel>
                        <FormControl>
                            <Input placeholder="Your address" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                            This is the name that will be displayed on your profile and in
                            emails.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>








        <div className="flex flex-col md:flex-row w-full gap-5">
        <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-1">
                <FormLabel>State</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? companyRoles.find(
                              (role) => role.value === field.value
                            )?.label
                          : "Select state"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search state..." />
                      <CommandEmpty>No state found.</CommandEmpty>
                      <CommandGroup>
                        {companyRoles.map((role) => (
                          <CommandItem
                            value={role.label}
                            key={role.value}
                            onSelect={() => {
                              form.setValue("state", role.value);
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
             <FormDescription className="text-xs">
                  This is the role that will be used in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


<FormField
                control={form.control}
                name="zip_cde"
                render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                        <FormLabel>Zip code</FormLabel>
                        <FormControl>
                            <Input placeholder="Your zip code" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                            This is the name that will be displayed on your profile and in
                            emails.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />


        </div>
        <div className="flex flex-col md:flex-row w-full gap-5">
        <FormField
            control={form.control}
            name="id_type"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-1">
                <FormLabel>ID type</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? companyRoles.find(
                              (role) => role.value === field.value
                            )?.label
                          : "Select ID"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search id..." />
                      <CommandEmpty>No bank found.</CommandEmpty>
                      <CommandGroup>
                        {companyRoles.map((role) => (
                          <CommandItem
                            value={role.label}
                            key={role.value}
                            onSelect={() => {
                              form.setValue("id_type", role.value);
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
             <FormDescription className="text-xs">
                  This is the role that will be used in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


<FormField
                control={form.control}
                name="id_number"
                render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                        <FormLabel>ID number</FormLabel>
                        <FormControl>
                            <Input placeholder="Your id number" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                            This is the name that will be displayed on your profile and in
                            emails.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />


        </div>







        <div className="flex justify-end items-center md:flex-row w-full gap-5">

            <Button variant="outline" className="text-red-500 border-red-500">Outline</Button>
            <Button type="submit">Save changes</Button>
        </div>
    </form>
</Form>



        </CardContent>
            </Card>
        </div>
  )
}
