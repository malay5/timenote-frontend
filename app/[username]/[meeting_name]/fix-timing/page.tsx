import CalendarWithTime from "@/components/CalendarWithTime";
import Error from "@/components/Error";
import Person2 from "@/components/Person2";
import React from "react";
interface paramsType {
  params: { meeting_name: string; username: string };
}

async function getData(username: string, meeting: string) {
  const requestBody = JSON.stringify({ username, meeting });
  const headers = {
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "POST",
    headers,
    body: requestBody,
  };

  try {
    const res = await fetch(
      "https://my-api-endpoint.com/get-booking-data",
      requestOptions
    );

    if (!res.ok) {
      return "USER_NOT_FOUND";
    }

    return res.json();
  } catch (error) {
    return "USER_NOT_FOUND";
  }
}

export default async function page({ params }: paramsType) {
  const data = await getData(params.username, params.meeting_name);
  console.log(data);

  console.log("hello");

  if (data === "USER_NOT_FOUND") {
    return (
      <Error
        error_code={"402"}
        message={
          "Sorry, we can not find that user. You will find lots to explore on the home page."
        }
      />
    );
  }

  return (
    <div className="flex h-[100dvh] justify-center items-center">
      <CalendarWithTime
        person={
          <Person2 name={params.username} meeting_name={params.meeting_name} />
        }
      />
    </div>
  );
}
