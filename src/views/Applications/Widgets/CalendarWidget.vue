<template>
  <v-card class="card-shadow border-radius-xl">
    <div class="px-4 py-4">
      <full-calendar
        :options="calendarOptions"
        ref="fullCalendar"
      ></full-calendar>
    </div>
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

              <label for="" class="label-color font-weight-600 mb-3 d-block"
                >Event Description</label
              >
              <v-textarea
                v-model="model.description"
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
              ></v-textarea>

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
              <input
                type="hidden"
                name="id"
                class="form-control"
                :value="model.id"
              />

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

              <v-textarea
                v-model="model.description"
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
                height="83"
              ></v-textarea>

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
    <v-snackbar
      top
      v-model="snackbar.visible"
      :color="snackbar.color"
      class="snackbar-shadow"
    >
      <div class="d-flex align-start alert-notify">
        <v-icon size="24" class="text-white me-3 mt-1 material-icons-round"
          >notifications</v-icon
        >
        <p class="mb-0">
          <span class="font-size-root font-weight-600">{{
            snackbar.title
          }}</span>
          <br />
          {{ snackbar.description }}
        </p>
      </div>

      <template v-slot:action="{ attrs }">
        <v-btn
          icon
          elevation="0"
          max-width="136"
          :ripple="false"
          height="43"
          class="font-weight-600 text-capitalize py-3 px-6 rounded-sm"
          color="rgba(255,255,255, .85)"
          @click="snackbar.visible = false"
          v-bind="attrs"
        >
          <v-icon size="13">fas fa-times</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import UserService from "@/services/user.service";

export default {
  components: {
    FullCalendar,
  },
  methods: {
    SnackbarShow(type) {
      if (!type) return;
      switch (type) {
        case "Info":
          this.snackbar = {
            color: "#1A73E8",
            visible: true,
          };
          break;
        case "Success":
          this.snackbar = {
            color: "#4CAF50",
            visible: true,
            title: "Created",
            description: "Event created",
          };
          break;
        case "Warning":
          this.snackbar = {
            color: "#fb8c00",
            visible: true,
            title: "Updated",
            description: "Event updated",
          };
          break;
        case "Danger":
          this.snackbar = {
            color: "#F44335",
            visible: true,
          };
          break;
      }
    },
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
        id: event.id,
        title: event.title,
        className: event.classNames ? event.classNames.join(" ") : "",
        start: event.start,
        end: event.end,
        description: event._def.extendedProps.description,
      };
      this.showEditModal = true;
    },
    saveEvent() {
      if (this.model.title) {
        let event = {
          ...this.model,
          allDays: true,
          backgroundColor: "red",
          borderColor: "black",
          textColor: "blue",
          description: this.model.description,
        };
        UserService.addEvent(event).then(
          (response) => {
            console.log(response.data);
            this.calendarOptions.events.push(JSON.parse(JSON.stringify(event)));
            this.SnackbarShow("Success");
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );

        this.model = {
          title: "",
          description: "",
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

      this.model.allDays = true;
      this.model.backgroundColor = "red";
      this.model.borderColor = "black";
      this.model.textColor = "blue";
      UserService.updateEvent(this.model).then(
        (response) => {
          console.log(response.data);
          if (index !== 1) {
            this.SnackbarShow("Warning");
            this.calendarOptions.events.splice(index, 1, this.model);
          }
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
      this.showEditModal = false;
    },
    deleteEvent() {
      let index = this.calendarOptions.events.findIndex(
        (e) => e.title === this.model.title,
        (e) => e.description === this.model.description
      );
      if (index !== -1) {
        this.calendarOptions.events.splice(index, 1);
      }
      this.showEditModal = false;
    },
  },
  data() {
    return {
      snackbar: {
        color: null,
        visible: false,
      },
      snackbars: [
        {
          color: "#2dce89",
          class: "success",
          name: "Success",
        },
        {
          color: "#11cdef",
          class: "info",
          name: "Info",
        },
        {
          color: "#fb6340",
          class: "warning",
          name: "Warning",
        },
        {
          color: "#f5365c",
          class: "danger",
          name: "Danger",
        },
      ],
      alerts: [
        {
          type: "primary",
        },
        {
          type: "secondary",
        },
        {
          type: "success",
        },
        {
          type: "danger",
        },
        {
          type: "warning",
        },
        {
          type: "info",
        },
        {
          type: "light",
        },
        {
          type: "dark",
        },
      ],
      userId: "",
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        contentHeight: "auto",
        initialView: "dayGridMonth",
        selectable: true,
        initialDate: new Date(),
        editable: true,
        headerToolbar: {
          start: "title", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        },
        events: [],
        selectHelper: true,
        dateClick: this.onDateClick,
        eventClick: this.onEventClick,
      },
      defaultView: "",
      showAddModal: false,
      showEditModal: false,
      model: {
        id: "",
        title: "",
        className: "bg-default",
        description: "",
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    UserService.getProfile().then(
      (response) => {
        this.calendarOptions.events = response.data.events;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
