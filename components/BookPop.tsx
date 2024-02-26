import React from 'react'
import { Separator } from "@/components/ui/separator";
import Person from './Person';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from "@/components/ui/textarea"
import Person2 from './Person2';


const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const accountFormSchema = z.object({
    first_name: z
        .string({ required_error: "Please select an email to display." })
        .min(2, { message: "First name must be at least 2 characters." })
        .max(30, { message: "First name must not be longer than 30 characters." }),
    last_name: z
        .string({ required_error: "Please select an email to display." })
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),
    email: z
        .string({ required_error: "Please select an email to display." })
        .email(),

    phone: z.string({ required_error: "Please enter your password." }).refine((value) => phoneRegex.test(value), {
        message:
            "Password must be at least 8 characters and include 1 uppercase letter, 1 special character, and 1 numeric character.",
    }),
    note:z.string().optional()



});


type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    //   first_name: "Your",
    // dob: new Date("2023-01-23"),
};



export default function BookPop() {


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

    return (
        <div>
            <Separator />
            <div className='flex h-full'>
                <div className='lg:flex flex-col justify-center items-start hidden px-12'>
                    <Person2 name={'AsitDxit'} meeting_name={'Meeting name'} />
                </div>

                <Separator orientation='vertical' className='h-96 lg:flex hidden' />

                <div className='flex-1 lg:py-8 lg:pl-8'>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                            <div className='flex flex-col md:flex-row gap-4'>
                            <FormField
                                control={form.control}
                                name="first_name"
                                
                                render={({ field }) => (
                                    <FormItem className='flex-1'>
                                        <FormLabel className='text-xs'>First name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your first name" {...field} />
                                        </FormControl>
                                        <FormMessage className='text-xs' />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem className='flex-1'>
                                        <FormLabel className='text-xs'>Last name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your last name" {...field} />
                                        </FormControl>

                                        <FormMessage className='text-xs' />

                                    </FormItem>
                                )}
                            />
                            </div>

                            <div className='flex flex-col md:flex-row  gap-4'>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className='flex-1'>
                                        <FormLabel className='text-xs'>Email address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage className='text-xs' />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className='flex-1'>
                                        <FormLabel className='text-xs'>Phone number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your phone number" {...field} />
                                        </FormControl>
                                        <FormMessage className='text-xs' />

                                    </FormItem>
                                )}
                            />
                            </div>
      
                  
                            <FormField
                                control={form.control}
                                name="note"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-xs'>Enter note</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter your note(Optional)" {...field} />
                                        </FormControl>
                                        <FormMessage className='text-xs' />

                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end items-center">
                            <Button type="submit" >Submit</Button>
                            </div>
                        
                        </form>
                    </Form>

                </div>

            </div>
        </div>
    )
}
