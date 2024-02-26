import AppBar from "@/components/AppBar";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FiList } from "react-icons/fi";
import { BsCalendar3Range, BsFillGrid1X2Fill } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineInfo, AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import EventRow from "@/components/EventRow";
import AvailablilityRow from "@/components/AvailablilityRow";
import WorkflowRow from "@/components/WorkflowRow";
import { Label } from "@/components/ui/label";
import { BiCalendarAlt } from "react-icons/bi";
import RoutingRow from "@/components/RoutingRow";

export default function page() {
    return (
        <div className="flex-1 flex h-full flex-col relative">
            <AppBar />

            <Card className="flex-1 flex flex-col  border-none h-full">
                <CardHeader>
                    <CardTitle>Billing</CardTitle>
                    <CardDescription>
                        Manage all things billing
                    </CardDescription>
                </CardHeader>

                <CardContent className="py-4 h-full space-y-4">

                    <Card>
                        <CardHeader>
                            <CardTitle>Payment method</CardTitle>
                            <CardDescription className="flex justify-start items-center gap-2">
                            <AiOutlineInfoCircle/>
                                No payment method
                            </CardDescription>
                        </CardHeader>
                        <CardContent>

                        <Button variant="outline" className="border-violet-600 text-violet-600 flex justify-center items-center gap-2"><AiOutlinePlus/>Add payment method</Button>

                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Billing and shipping information</CardTitle>
                   
                        </CardHeader>
                        <CardContent>

                        <Button variant="outline" className="border-violet-600 text-violet-600 flex justify-center items-center gap-2"><AiOutlineEdit/>Update information</Button>

                        </CardContent>
                    </Card>


                    <Card>
                        <CardHeader>
                            <CardTitle>Invoice history</CardTitle>
                            <CardDescription className="flex justify-start items-center gap-2">
                                <AiOutlineInfoCircle/>
                            No invoice history
                            </CardDescription>
                        </CardHeader>
              
                    </Card>




                </CardContent>
            </Card>
        </div>
    )
}
