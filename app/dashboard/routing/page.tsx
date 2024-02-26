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
          <CardTitle>Routing</CardTitle>
          <CardDescription>
            Configure times when you are available for bookings.
          </CardDescription>
        </CardHeader>

        <CardContent className="py-4 h-full space-y-4">
          <div className="flex justify-between items-center pb-4 ">
            <div className="flex items-center justify-center border rounded-md pl-2 w-[30%]">
              <CiSearch size={24} />
              <input
                className="ml-2 w-full border-0 outline-none bg-transparent py-2"
                placeholder="Search event type"
              />
            </div>

            <div className="flex gap-2">
              <div className="flex flex-row border gap-2 p-3 h-10 rounded-sm">
                <FiList />
                <Separator orientation="vertical" />
                <BsFillGrid1X2Fill />
              </div>

              <Button className="">
                <AiOutlinePlus className="mr-2 h-4 w-4" /> <span className="truncate w-20">New event type</span>
              </Button>
            </div>
          </div>

          <Card className="w-full">
            <CardContent className="py-4">
              <RoutingRow />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="py-4">
              <RoutingRow />
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="py-4">
              <RoutingRow />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
