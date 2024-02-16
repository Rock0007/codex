// Events.jsx
import React from "react";
import { Navbar } from "./index";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Events = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={[
            // Add your events here
            { title: "Event 1", date: "2024-02-20" },
            { title: "Event 2", date: "2024-02-25" },
          ]}
          height="650px"
          aspectRatio={2}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          buttonText={{
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day",
          }}
          selectable={true}
          views={{
            timeGridDay: {
              dayHeaderFormat: {
                weekday: "long",
                month: "numeric",
                day: "numeric",
              },
              slotDuration: "01:00:00",
              slotLabelInterval: { hours: 1 },
            },
          }}
          eventClick={(info) => {
            alert("Event clicked: " + info.event.title);
          }}
        />
      </div>
    </div>
  );
};

export default Events;
