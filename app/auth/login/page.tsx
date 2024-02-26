
"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

import { useForm } from "react-hook-form";
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ThemeToggle from '@/components/ThemeToggle';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import LogoSVG from '@/components/LogoSVG';

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

const accountFormSchema = z.object({

    email: z
        .string({ required_error: "Please select an email to display." })
        .email(),
    password: z.string({ required_error: "Please enter your password." }).refine((value) => passwordRegex.test(value), {
        message:
            "Password must be at least 8 characters and include 1 uppercase letter, 1 special character, and 1 numeric character.",
    })
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    //   first_name: "Your",
    // dob: new Date("2023-01-23"),
};


export default function Login() {



    const { toast } = useToast();

    const form = useForm<AccountFormValues>({
        resolver: zodResolver(accountFormSchema),
        defaultValues,
    });

    async function onSubmit(data: AccountFormValues) {
        await fetch("http://localhost:8686")
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
        <div className='h-[100dvh] flex flex-col justify-center items-center gap-2'>


            <div className='mb-2 flex justify-center items-center gap-[4px]'>
                <LogoSVG height='28' width='28' />
                <p className='text-2xl font-semibold'> timenote</p>
            </div>


            <Card className='w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%]'>
                <CardHeader className='flex justify-between flex-row'>
                    <div>
                        <CardTitle>Log in</CardTitle>
                        <CardDescription>Enter your cradentials below</CardDescription>
                    </div>

                    <ThemeToggle />

                </CardHeader>
                <CardContent className='space-y-4'>


                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
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
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-xs'>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your password" type='password' {...field} />
                                        </FormControl>

                                        <FormMessage className='text-xs' />

                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">Submit</Button>
                        </form>
                    </Form>

                    <Button variant="outline" className='w-full flex gap-1'><FcGoogle size={18} />Sign in with Google</Button>
                    <Button variant="outline" className='w-full flex gap-1'><FaApple size={20} />Sign in with Apple</Button>
                    <Button variant="outline" className='w-full flex gap-1'><BiLogoFacebookSquare size={20} color='#1877F2' />Sign in with Facebook</Button>

                </CardContent>
                <CardFooter className='flex justify-center items-center'>
                    <p>Do not have an account? <span className='text-violet-600 cursor-pointer'>Signup</span></p>
                </CardFooter>
            </Card>




        </div>
    )
}
