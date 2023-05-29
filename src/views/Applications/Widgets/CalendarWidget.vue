<template>
  <v-card class="card-shadow border-radius-xl">
    <div class="px-4 py-4">
      <full-calendar
        :options="calendarOptions"
        ref="fullCalendar"
      ></full-calendar>
    </div>
  </v-card>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        contentHeight: "auto",
        initialView: "dayGridMonth",
        selectable: true,
        initialDate: "2021-11-08",
        editable: true,
        headerToolbar: {
          start: "title", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        },
        events: [
          {
            title: "Call with Dave",
            start: "2021-11-18",
            end: "2021-11-18",
            className: "bg-gradient-danger",
          },

          {
            title: "Lunch meeting",
            start: "2021-11-21",
            end: "2021-11-22",
            className: "bg-gradient-warning",
          },

          {
            title: "All day conference",
            start: "2021-11-29",
            end: "2021-11-29",
            className: "bg-gradient-success",
          },

          {
            title: "Meeting with Mary",
            start: "2021-12-01",
            end: "2021-12-01",
            className: "bg-gradient-info",
          },

          {
            title: "Winter Hackaton",
            start: "2021-12-03",
            end: "2021-12-03",
            className: "bg-gradient-danger",
          },

          {
            title: "Digital event",
            start: "2021-12-07",
            end: "2021-12-09",
            className: "bg-gradient-warning",
          },

          {
            title: "Marketing event",
            start: "2021-12-10",
            end: "2021-12-10",
            className: "bg-gradient-primary",
          },

          {
            title: "Dinner with Family",
            start: "2021-12-19",
            end: "2021-12-19",
            className: "bg-gradient-danger",
          },

          {
            title: "Black Friday",
            start: "2021-12-23",
            end: "2021-12-23",
            className: "bg-gradient-info",
          },

          {
            title: "Cyber Week",
            start: "2021-12-02",
            end: "2021-12-02",
            className: "bg-gradient-warning",
          },
        ],
      },
    };
  },
};
</script>
