"use client"
import AppBar from "@/components/AppBar";
import React from "react";

import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import dynamic from "next/dynamic";

const accountFormSchema = z.object({
    first_name: z
        .string({ required_error: "Please select an email to display." })
        .min(2, { message: "First name must be at least 2 characters." })
        .max(30, { message: "First name must not be longer than 30 characters." }),
    last_name: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(30, { message: "Last name must not be longer than 30 characters." }),
    email: z
        .string({ required_error: "Please select an email to display." })
        .email(),
    company: z
        .string()
        .min(2, { message: "Company name must be at least 2 characters." })
        .max(30, { message: "Company name must not be longer than 30 characters." }),
    desc: z
        .string()
        .min(2, { message: "Description must be at least 2 characters." })
        .max(30, { message: "Description must not be longer than 30 characters." }),
});


type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    first_name: "Your",
    // dob: new Date("2023-01-23"),
};

function Account() {


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
        <div className="flex-1 flex h-full flex-col relative">
            <AppBar />

            <Card className="flex-1 flex flex-col  border-none h-full">
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>
                        Manage settings for your Timenote profile
                    </CardDescription>
                </CardHeader>

                <CardContent className="py-4  space-y-4">

                    <div className="flex justify-start items-center gap-4">
                        <Image src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'} alt={"profile"} width={20} height={20} className="rounded-full h-20 w-20 overflow-hidden object-cover" />
                        <Button variant="outline">Save changes</Button>


                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="flex justify-center items-center gap-2 border-red-500 text-red-500"><AiOutlineDelete size={24} />Remove</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Share my link</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="flex flex-col gap-4">
                                    <Button variant="outline" className="w-full flex justify-center items-center gap-2"><AiOutlineLink />Outline</Button>
                                    <Button variant="outline" className="w-full flex justify-center items-center gap-2"><AiOutlineMail />Outline</Button>
                                    <Button variant="outline" className="w-full flex justify-center items-center gap-2"><BsCodeSlash />Outline</Button>
                                </div>
                            </DialogContent>
                        </Dialog>


                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {/* FIRST BLOCK */}

                            <div className="flex flex-col md:flex-row w-full gap-5">
                                <FormField
                                    control={form.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 flex flex-col">
                                            <FormLabel>First name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your first name"
                                                    {...field}
                                                />
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
                                    name="last_name"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 flex flex-col">
                                            <FormLabel>Last name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your last name" {...field} />
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

                            {/* SECOND BLOCK */}

                            <div className="flex flex-col md:flex-row w-full gap-5">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col flex-1">
                                            <FormLabel>Email address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your work email address" {...field} />
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
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col flex-1">
                                            <FormLabel>Company</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your company" {...field} />
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
                                    name="desc"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col flex-1">
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <QuillWrapper theme="snow" {...field} className='ql-custom' placeholder="Content goes here..." />

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
export default dynamic(() => Promise.resolve(Account), { ssr: false });