<template>
  <div>
    <v-container fluid class="pt-0 px-6 mt-n16">
      <v-row>
        <v-col>
          <v-card class="card-shadow card-calendar">
            <div class="card-header-padding">
              <span class="font-weight-600 text-h3 text-typo mb-0"
                >Calendar</span
              >
            </div>
            <v-card-text class="pa-0 card-calendar-body">
              <full-calendar
                :options="calendarOptions"
                ref="fullCalendar"
              ></full-calendar>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog width="538" v-model="showAddModal">
      <template v-slot:default="dialog">
        <v-card class="card-shadow bg-secondary">
          <span></span>
          <v-card-text class="card-padding pt-6">
            <v-form @submit="saveEvent">
              <label for="" class="label-color font-weight-600 mb-3 d-block"
                >Event Title</label
              >
              <v-text-field
                v-model="model.title"
                hide-details
                outlined
                background-color="rgba(255,255,255,.9)"
                color="rgba(0,0,0,.6)"
                light
                placeholder="Event Title"
                class="
                  font-size-input
                  placeholder-lighter
                  text-color-light
                  input-alternative input-focused-alternative input-icon
                  mb-6
                "
              ></v-text-field>

              <label class="label-color font-weight-600 mb-3 d-block"
                >Status color</label
              >
              <div
                class="btn-group btn-group-toggle btn-group-colors event-tag"
              >
                <label
                  v-for="color in eventColors"
                  :key="color"
                  :class="[
                    color,
                    { 'active focused': model.className === color },
                  ]"
                >
                  <input
                    v-model="model.className"
                    type="radio"
                    name="event-tag"
                    :value="color"
                    autocomplete="off"
                  />
                </label>
              </div>

              <input type="hidden" class="new-event--start" />
              <input type="hidden" class="new-event--end" />
            </v-form>
          </v-card-text>
          <div class="card-padding d-flex align-center justify-space-between">
            <v-btn
              @click="saveEvent"
              elevation="0"
              :ripple="false"
              height="43"
              class="
                font-weight-600
                text-capitalize
                btn-primary
                py-3
                px-6
                rounded-sm
              "
              color="#5e72e4"
              >Add Event</v-btn
            >
            <v-btn
              @click="dialog.value = false"
              elevation="0"
              :ripple="false"
              height="43"
              class="
                font-weight-600
                text-capitalize
                btn-neutral
                shadow-none
                py-3
                px-6
                rounded-sm
              "
              color="transparent"
              >Close</v-btn
            >
          </div>
        </v-card>
      </template>
    </v-dialog>

    <v-dialog width="538" v-model="showEditModal">
      <template v-slot:default="dialog2">
        <v-card class="card-shadow bg-secondary">
          <span></span>
          <v-card-text class="card-padding pt-6">
            <v-form @submit="saveEvent">
              <label for="" class="label-color font-weight-600 mb-3 d-block"
                >Event Title</label
              >
              <v-text-field
                v-model="model.title"
                hide-details
                outlined
                background-color="rgba(255,255,255,.9)"
                color="rgba(0,0,0,.6)"
                light
                placeholder="Event Title"
                class="
                  font-size-input
                  placeholder-lighter
                  text-color-light
                  input-alternative input-focused-alternative input-icon
                  mb-6
                "
              ></v-text-field>

              <label class="label-color font-weight-600 mb-3 d-block"
                >Status color</label
              >
              <div
                class="btn-group btn-group-toggle btn-group-colors event-tag"
              >
                <label
                  v-for="color in eventColors"
                  :key="color"
                  :class="[
                    color,
                    { 'active focused': model.className === color },
                  ]"
                >
                  <input
                    v-model="model.className"
                    type="radio"
                    name="event-tag"
                    :value="color"
                    autocomplete="off"
                  />
                </label>
              </div>

              <v-textarea
                hide-details
                class="
                  input-style
                  font-size-input
                  text-light-input
                  placeholder-light
                "
                dense
                flat
                filled
                solo
                v-model="model.description"
                height="43"
              ></v-textarea>

              <input type="hidden" class="new-event--start" />
              <input type="hidden" class="new-event--end" />
            </v-form>
          </v-card-text>
          <div class="card-padding d-flex align-center justify-space-between">
            <div>
              <v-btn
                @click="editEvent"
                elevation="0"
                :ripple="false"
                height="43"
                class="
                  font-weight-600
                  text-capitalize
                  btn-primary
                  py-3
                  px-6
                  rounded-sm
                  me-3
                "
                color="#5e72e4"
                >Update</v-btn
              >
              <v-btn
                @click="deleteEvent"
                elevation="0"
                :ripple="false"
                height="43"
                class="
                  font-weight-600
                  text-capitalize
                  btn-danger
                  py-3
                  px-6
                  rounded-sm
                "
                color="#f5365c"
                >Delete</v-btn
              >
            </div>

            <v-btn
              @click="dialog2.value = false"
              elevation="0"
              :ripple="false"
              height="43"
              class="
                font-weight-600
                text-capitalize
                btn-neutral
                shadow-none
                py-3
                px-6
                rounded-sm
              "
              color="transparent"
              >Close</v-btn
            >
          </div>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();

export default {
  name: "calendar",
  components: {
    FullCalendar,
  },
  data() {
    let monthText = m + 1 > 10 ? m + 1 : `0${m + 1}`;
    let yearAndMonth = `${y}-${monthText}`;
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        contentHeight: "auto",
        headerToolbar: false,
        selectable: true,
        selectHelper: true,
        dateClick: this.onDateClick,
        eventClick: this.onEventClick,
        editable: true,
        events: [
          {
            title: "Call with Dave",
            start: `${yearAndMonth}-18`,
            end: `${yearAndMonth}-18`,
            className: "bg-red",
            allDay: true,
          },
          {
            title: "Lunch meeting",
            start: `${yearAndMonth}-21`,
            end: `${yearAndMonth}-22`,
            className: "bg-orange",
            allDay: true,
          },
          {
            title: "All day conference",
            start: `${yearAndMonth}-29`,
            end: `${yearAndMonth}-29`,
            className: "bg-green",
            allDay: true,
          },
          {
            title: "Meeting with Mary",
            start: `${yearAndMonth}-01`,
            end: `${yearAndMonth}-01`,
            className: "bg-blue",
            allDay: true,
          },
          {
            title: "Winter Hackaton",
            start: `${yearAndMonth}-03`,
            end: `${yearAndMonth}-03`,
            className: "bg-red",
            allDay: true,
          },
          {
            title: "Digital event",
            start: `${yearAndMonth}-07`,
            end: `${yearAndMonth}-09`,
            className: "bg-orange",
            allDay: true,
          },
          {
            title: "Marketing event",
            start: `${yearAndMonth}-10`,
            end: `${yearAndMonth}-10`,
            className: "bg-purple",
            allDay: true,
          },
          {
            title: "Dinner with Family",
            start: `${yearAndMonth}-19`,
            end: `${yearAndMonth}-19`,
            className: "bg-red",
            allDay: true,
          },
          {
            title: "Black Friday",
            start: `${yearAndMonth}-23`,
            end: `${yearAndMonth}-23`,
            className: "bg-blue",
            allDay: true,
          },
          {
            title: "Cyber Week",
            start: `${yearAndMonth}-02`,
            end: `${yearAndMonth}-02`,
            className: "bg-yellow",
            allDay: true,
          },
        ],
      },
      defaultView: "",
      showAddModal: false,
      showEditModal: false,
      model: {
        title: "",
        className: "bg-default",
        description:
          "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        start: "",
        end: "",
      },
      eventColors: [
        "bg-info",
        "bg-orange",
        "bg-red",
        "bg-green",
        "bg-default",
        "bg-blue",
        "bg-purple",
        "bg-yellow",
      ],
    };
  },
  methods: {
    calendarApi() {
      return this.$refs.fullCalendar.getApi();
    },
    changeView(viewType) {
      this.defaultView = viewType;
      this.calendarApi().changeView(viewType);
    },
    next() {
      this.calendarApi().next();
    },
    prev() {
      this.calendarApi().prev();
    },
    onDateClick({ date }) {
      this.showAddModal = true;
      this.model.start = date;
      this.model.end = date;
    },
    onEventClick({ event }) {
      this.model = {
        title: event.title,
        className: event.classNames ? event.classNames.join(" ") : "",
        start: event.start,
        end: event.end,
        description:
          "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      };
      this.showEditModal = true;
    },
    saveEvent() {
      if (this.model.title) {
        let event = {
          ...this.model,
          allDay: true,
        };
        this.calendarOptions.events.push(JSON.parse(JSON.stringify(event)));
        this.model = {
          title: "",
          eventColor: "bg-danger",
          start: "",
          end: "",
        };
      }
      this.showAddModal = false;
    },
    editEvent() {
      let index = this.calendarOptions.events.findIndex(
        (e) => e.title === this.model.title
      );
      if (index !== 1) {
        this.calendarOptions.events.splice(index, 1, this.model);
      }
      this.showEditModal = false;
    },
    deleteEvent() {
      let index = this.calendarOptions.events.findIndex(
        (e) => e.title === this.model.title
      );
      if (index !== -1) {
        this.calendarOptions.events.splice(index, 1);
      }
      this.showEditModal = false;
    },
  },
};
</script>
