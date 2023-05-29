<template>
  <v-card class="card-shadow border-radius-xl">
    <div class="px-4 pt-4">
      <h6
        class="mb-0 text-h6 font-weight-bold text-typo"
        v-if="$route.name != 'RTL'"
      >
        Calendar
      </h6>
      <h6 class="mb-0 text-h6 font-weight-bold text-typo" v-else>تقويم</h6>

      <div class="d-flex">
        <div
          class="
            p
            text-sm text-capitalize
            font-weight-normal
            mb-0
            widget-calendar-day
            text-body
          "
        >
          {{ new Date().toLocaleString("default", { weekday: "long" }) }}
        </div>
        <span class="text-body">,</span>
        <div
          class="
            p
            text-sm
            font-weight-normal
            mb-1
            widget-calendar-year
            text-body
            ms-1
          "
        >
          {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
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
        initialDate: "2020-12-01",
        editable: true,
        headerToolbar: false,
        events: [
          {
            title: "Call with Dave",
            start: "2020-11-18",
            end: "2020-11-18",
            className: "bg-gradient-danger",
          },

          {
            title: "Lunch meeting",
            start: "2020-11-21",
            end: "2020-11-22",
            className: "bg-gradient-warning",
          },

          {
            title: "All day conference",
            start: "2020-11-29",
            end: "2020-11-29",
            className: "bg-gradient-success",
          },

          {
            title: "Meeting with Mary",
            start: "2020-12-01",
            end: "2020-12-01",
            className: "bg-gradient-info",
          },

          {
            title: "Winter Hackaton",
            start: "2020-12-03",
            end: "2020-12-03",
            className: "bg-gradient-danger",
          },

          {
            title: "Digital event",
            start: "2020-12-07",
            end: "2020-12-09",
            className: "bg-gradient-warning",
          },

          {
            title: "Marketing event",
            start: "2020-12-10",
            end: "2020-12-10",
            className: "bg-gradient-primary",
          },

          {
            title: "Dinner with Family",
            start: "2020-12-19",
            end: "2020-12-19",
            className: "bg-gradient-danger",
          },

          {
            title: "Black Friday",
            start: "2020-12-23",
            end: "2020-12-23",
            className: "bg-gradient-info",
          },

          {
            title: "Cyber Week",
            start: "2020-12-02",
            end: "2020-12-02",
            className: "bg-gradient-warning",
          },
        ],
      },
    };
  },
};
</script>
