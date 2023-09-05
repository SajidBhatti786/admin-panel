import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { tokens } from "../theme";
import { formatDate } from "@fullcalendar/core";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../components/Header";

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    // Load events from local storage initially
    const eventsFromLocalStorage =
      JSON.parse(localStorage.getItem("events")) || [];
    setCurrentEvents(eventsFromLocalStorage);
  }, []);

  const saveEventsToLocalStorage = (events) => {
    localStorage.setItem("events", JSON.stringify(events));
  };

  const handleDateClick = (selected) => {
    const title = prompt("Kindly Enter Event Title:");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };

      // Add the new event to the current events state
      setCurrentEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, newEvent];
        saveEventsToLocalStorage(updatedEvents);
        return updatedEvents;
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete this event '${selected.event.title}'?`
      )
    ) {
      // Remove the event from the current events state
      setCurrentEvents((prevEvents) => {
        const updatedEvents = prevEvents.filter(
          (event) => event.id !== selected.event.id
        );
        saveEventsToLocalStorage(updatedEvents);
        return updatedEvents;
      });
    }
  };
  const handleEventDrop = (info) => {
    // Find the event in the current events state
    const updatedEvents = currentEvents.map((event) => {
      if (event.id === info.event.id) {
        // Update the event's start and end dates
        return {
          ...event,
          start: info.event.startStr,
          end: info.event.endStr,
        };
      }
      return event;
    });

    // Update the state and local storage with the updated events
    setCurrentEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  };

  return (
    <Box m="0.5rem 1rem">
      <Header title="CALENDAR" subtitle="Manage and Organize your Events" />
      <Box display="flex" justifyContent="space-between">
        {/* calendar sidebar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          borderRadius="0.5rem"
          p="1rem"
          m="1rem 0rem"
        >
          <Typography variant="h6">Events</Typography>
          <List>
            {currentEvents.length === 0 ? (
              <Typography variant="h6" color="textSecondary">
                No Events
              </Typography>
            ) : (
              currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))
            )}
          </List>
        </Box>
        {/* calendar */}
        <Box flex="1 1 80%" borderRadius="0.5rem" p="1rem">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents} // events that are shown on calendar
            eventDrop={handleEventDrop} //when event is dragged from one date to another
          />
        </Box>
      </Box>
    </Box>
  );
}
