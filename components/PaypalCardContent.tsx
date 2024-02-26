"use client"
import AppBar from "@/components/AppBar";
import React from "react";


import { AiOutlineCheckCircle, AiOutlineDelete, AiOutlineLink, AiOutlineMail, AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
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

const accountFormSchema = z.object({
    email: z
        .string({ required_error: "Please select an email to display." })
        .email(),


});


type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    // first_name: "Your",
    // dob: new Date("2023-01-23"),
};

export default function PaypalCardContent() {

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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* FIRST BLOCK */}

                <div className="flex flex-col md:flex-row w-full gap-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-1 flex flex-col">
                                <FormLabel>PayPal account email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your paypal email"
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

                </div>





                <div className="flex justify-end items-center md:flex-row w-full gap-5">

                    <Button variant="outline" className="text-red-500 border-red-500">Outline</Button>


                    <Dialog>
                        <DialogTrigger asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Payment method added successfully!</DialogTitle>
                                <DialogDescription>
                                    You can change here if yoyu want in future.
                                </DialogDescription>
                            </DialogHeader>

                            <AiOutlineCheckCircle size={90} className='flex justify-center items-center w-full text-green-500' />
                            <div className="flex justify-center items-center mt-4"><b>Payment method added successfully!</b></div>
                            <div className="flex justify-center items-center"><p className="text-sm">Arcu suspendisse cras vulputate odio sed cursus habitant mi auctor.</p></div>
                        </DialogContent>
                    </Dialog>


                </div>
            </form>
        </Form>
    )
}
