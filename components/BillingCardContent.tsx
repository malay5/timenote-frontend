"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

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

});


type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    first_name: "Your",
    // dob: new Date("2023-01-23"),
};

export default function BillingCardContent() {

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



        <div className="flex justify-end items-center md:flex-row w-full gap-5">

            <Button variant="outline" className="text-red-500 border-red-500">Outline</Button>
            <Button type="submit">Save changes</Button>
        </div>
    </form>
</Form>
  )
}
