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
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CiCalendarDate, CiSearch } from "react-icons/ci";
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
                    <CardTitle>Insights</CardTitle>
                    <CardDescription>
                        Configure times when you are available for bookings.
                    </CardDescription>
                </CardHeader>

                <CardContent className="py-4 grid gap-4 grid-cols-1 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Events created
                            </CardTitle>


                            <CiCalendarDate className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-2 py-2">
                            <div className="text-2xl font-bold">112</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Events created
                            </CardTitle>


                            <CiCalendarDate className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-2 py-2">
                            <div className="text-2xl font-bold">112</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Events created
                            </CardTitle>


                            <CiCalendarDate className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-2 py-2">
                            <div className="text-2xl font-bold">112</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Events created
                            </CardTitle>


                            <CiCalendarDate className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-2 py-2">
                            <div className="text-2xl font-bold">112</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>



                </CardContent>

            </Card>
        </div>
    )
}
