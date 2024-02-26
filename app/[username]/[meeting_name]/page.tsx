import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Person2 from "@/components/Person2";
import MeetingPageCalendar from "@/components/MeetingPageCalendar";

interface paramsType {
  params: { meeting_name: string; username: string };
}
export default function MeetingPage({ params }: paramsType) {
  return (
    <div className="flex h-[100dvh] justify-center items-center">
      <Card>
        <CardContent className=" flex flex-col justify-center items-center py-4 px-6 gap-8">
          <div className="py-2">
            <Person2
              name={params.username}
              meeting_name={params.meeting_name}
            />
          </div>
          <Separator orientation="horizontal" />
          <MeetingPageCalendar meeting_name={params.meeting_name} />
        </CardContent>
      </Card>


    </div>
  );
}
