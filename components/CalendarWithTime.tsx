"use client";
import { useCallback, useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useSelectedDateContext } from "@/contexts/SelectedDateContextProvider";
import BookPop from "./BookPop";
import { CgUnavailable } from "react-icons/cg";
type availabilityType = {
  day: "Sun" | "Mon" | "Tues" | "Wed" | "Thur" | "Fri" | "Sat" | undefined;
  availablity: { hour: string; isAvailable: boolean }[];
}[];
interface propsType {
  person: React.ReactNode;
}

export default function CalendarWithTime({ person }: propsType) {
  const { selected_date, setSelectedDate } = useSelectedDateContext();

  const maxDate = new Date();
  maxDate.setFullYear(new Date().getFullYear() + 20);

  const minDate = new Date();

  minDate.setDate(minDate.getDate() - 1);

  const [open, setopen] = useState(false);

  const handleDateChange = (value: number) => {
    if (selected_date) {
      const newDate = new Date(selected_date);
      newDate.setDate(selected_date.getDate() + value);
      setSelectedDate(newDate);
    }
  };

  const wholeDayTime = [
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "Noon",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
  ];

  const dateList: Date[] = [];
  const [loopLimit, setLoopLimit] = useState(0);

  const getCurrentDimension = useCallback(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    setSelectedDate(selected_date || new Date());
  }, [selected_date, setSelectedDate]);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    if (screenSize.width < 600) {
      setLoopLimit(3);
    } else if (screenSize.width < 900) {
      setLoopLimit(5);
    } else if (screenSize.width < 920) {
      setLoopLimit(4);
    } else if (screenSize.width < 1110) {
      setLoopLimit(5);
    } else {
      setLoopLimit(7);
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize, setLoopLimit, setScreenSize, getCurrentDimension]);

  for (let i = 0; i < loopLimit; i++) {
    if (selected_date) {
      const newDate = new Date(
        selected_date.getFullYear(),
        selected_date.getMonth(),
        selected_date.getDate() + i
      );
      dateList.push(newDate);
    }
  }
  let dayName: ("Sun" | "Mon" | "Tues" | "Wed" | "Thur" | "Fri" | "Sat")[] = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];

  const availability: availabilityType = [];
  for (let j = 0; j < dayName.length; j++) {
    let singleDayAvailable: { hour: string; isAvailable: boolean }[] = [];

    for (let i = 0; i < wholeDayTime.length; i++) {
      const hour = wholeDayTime[i];
      const isAvailable = i % 2 === 0;

      singleDayAvailable.push({
        hour,
        isAvailable,
      });
    }
    availability.push({
      day: dayName.at(j),
      availablity: singleDayAvailable,
    });
  }
  if (window === undefined) return <div>Loading</div>;
  return (
    <Card className="shadow-lg overflow-hidden">
      <CardContent className="flex p-0">
        <div className=" flex-col justify-around p-4 hidden min-[900px]:flex">
          <Calendar
            mode="single"
            onSelect={(e) => setSelectedDate(e === undefined ? new Date() : e)}
            disabled={(date) => date < minDate}
            selected={selected_date}
          />

          <div className="ml-8">{person}</div>
        </div>

        <div className="flex flex-col min-[900px]:border-l">
          <div className="   bg-violet-950/[0.1] py-2 px-2 items-center justify-between flex flex-col md:flex-row gap-2">
            <div className="flex gap-4 w-full md:w-auto justify-between items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleDateChange(-1)}
                disabled={
                  selected_date?.toDateString() === new Date().toDateString()
                }
              >
                <BiChevronLeft className="h-4 w-4" />
              </Button>
              <span className="truncate"> {selected_date?.toDateString()}</span>

              <Button
                variant="outline"
                onClick={() => handleDateChange(+1)}
                size="icon"
              >
                <BiChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex w-full md:w-auto justify-around gap-2 items-center">
              <Select value={loopLimit.toString()}>
                <SelectTrigger
                  defaultChecked
                  className="flex-1 space-x-2 md:w-fit py-2"
                  value={loopLimit.toString()}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7" disabled={loopLimit.toString() !== "7"}>
                    Week view
                  </SelectItem>
                  <SelectItem value="5" disabled={loopLimit.toString() !== "5"}>
                    5 days view
                  </SelectItem>
                  <SelectItem value="4" disabled={loopLimit.toString() !== "4"}>
                    4 days view
                  </SelectItem>
                  <SelectItem value="3" disabled={loopLimit.toString() !== "3"}>
                    3 days view
                  </SelectItem>
                </SelectContent>
              </Select>

              <Dialog open={open} onOpenChange={setopen}>
                <DialogTrigger asChild className="flex md:hidden">
                  <Button variant="outline" size="icon">
                    <BsCalendarEvent className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-md w-fit">
                  <Calendar
                    mode="single"
                    onSelect={(e) => {
                      setSelectedDate(e);
                      setopen((prev) => !prev);
                    }}
                    disabled={(date) => date < minDate}
                    selected={selected_date}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Separator className="w-full" />

          <div className="flex mr-[5px] md:mr-[10px]">
            <div className="h-8 w-20 border-r-[1px] border-b-[1px] flex justify-center items-center ">
              <AiOutlineClockCircle />
            </div>
            {dateList.map((date, index) => (
              <div
                key={index}
                className={`h-8 border-b-[1px] w-20 flex justify-center items-center ${
                  index === 0 ? "border-t-2 border-t-purple-600" : "border-t-0"
                } text-xs text-slate-500 border-r-[1px]`}
              >
                {dayName.at(date.getDay())}, {date.getDate()}
              </div>
            ))}
          </div>

          <div className=" h-[500px] overflow-scroll overflow-x-hidden flex-col flex">
            {wholeDayTime.map((time, index_time) => (
              <div
                key={index_time}
                className={`flex-1 justify-start items-start flex`}
              >
                <span className="w-20 h-20 justify-end flex items-start text-xs border-r">
                  {time}
                </span>

                {dateList.map((date, index_date) => (
                  <Dialog key={index_date}>
                    {availability
                      .at(date.getDay())
                      ?.availablity.find((item) => item.hour === time)
                      ?.isAvailable ? (
                      <DialogTrigger
                        className={`h-20 border-b-[1px] flex justify-center items-center w-20 overflow-hidden text-xs text-slate-500 border-r-[1px]`}
                      />
                    ) : (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className={`h-20 border-b-[1px] flex justify-center items-center w-20 overflow-hidden text-xs text-slate-500 bg-neutral-800/[0.2] border-r-[1px] cursor-not-allowed`}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="flex justify-center items-center gap-1">
                              <CgUnavailable size={20} /> This slot is
                              unavailable.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    <DialogContent className="max-w-[350px] sm:max-w-xl lg:max-w-screen-lg max-h-screen px-2 sm:px-8 py-4 sm:py-6 lg:py-10 rounded-md">
                      <DialogTitle>Enter your contact info</DialogTitle>
                      <DialogDescription>
                        Enter your info to schedule a meeting
                      </DialogDescription>
                      {date.toDateString()} {time}
                      <BookPop />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
