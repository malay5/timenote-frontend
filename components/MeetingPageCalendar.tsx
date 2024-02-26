"use client";
import { useSelectedDateContext } from "@/contexts/SelectedDateContextProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Calendar } from "./ui/calendar";

export default function MeetingPageCalendar({
  meeting_name,
}: {
  meeting_name: string;
}) {
  const { selected_date, setSelectedDate } = useSelectedDateContext();

  const minDate = new Date();
  minDate.setDate(minDate.getDate() - 1);
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`${meeting_name}/fix-timing`);
    console.log('pre fetched');
    
  }, [router,meeting_name]);
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      onSelect={(e) => {
        setSelectedDate(e === undefined ? new Date() : e);
        router.push(`${meeting_name}/fix-timing`);
        
      }}
      disabled={(date) => date < minDate}
      selected={selected_date}
    />
  );
}
