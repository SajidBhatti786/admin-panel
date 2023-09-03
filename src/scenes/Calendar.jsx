import React from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate as formateDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
// import "@fullcalendar/core/main.css"; // FullCalendar core styles
// import "@fullcalendar/daygrid/main.css"; // FullCalendar dayGrid styles

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected) => {
    const title = prompt("Kindly Enter Event Title:");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    console.log("handle Event Click here");
    if (
      window.confirm(
        `Are you sure you want to delete this event '${selected.event.title}'?`
      )
    ) {
      selected.event.remove();
    }
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
              currentEvents.map((event) => {
                return (
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
                          {formateDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })
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
            eventsSet={(events) => setCurrentEvents(events)}
          />
        </Box>
      </Box>
    </Box>
  );
}
