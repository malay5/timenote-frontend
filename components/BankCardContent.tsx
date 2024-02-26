"use client"

import React from "react";


import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
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
    // first_name: "Your",
    // dob: new Date("2023-01-23"),
};
export default function BankCardContent() {

    
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
              <FormItem className="flex flex-col flex-1">
                <FormLabel>Bank</FormLabel>
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
                          : "Select bank"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search bank..." />
                      <CommandEmpty>No bank found.</CommandEmpty>
                      <CommandGroup>
                        {companyRoles.map((role) => (
                          <CommandItem
                            value={role.label}
                            key={role.value}
                            onSelect={() => {
                              form.setValue("first_name", role.value);
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
            name="last_name"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-1">
                <FormLabel>Country</FormLabel>
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
                          : "Select country"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search country..." />
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countryList.map((role) => (
                          <CommandItem
                            value={role.label}
                            key={role.value}
                            onSelect={() => {
                              form.setValue("last_name", role.value);
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
