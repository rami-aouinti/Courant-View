<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col cols="12">
          <div class="d-flex mb-2">
            <div class="pe-6 mt-1 position-relative ms-auto">
              <p class="text-secondary text-xs font-weight-bold mb-2">
                Team members:
              </p>
              <div class="d-flex align-center justify-center">
                <span class="avatar-group d-flex">
                  <v-tooltip
                    top
                    color="#212529"
                    v-for="(avatar, index) in avatars"
                    :key="avatar.name"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar
                        v-bind="attrs"
                        v-on="on"
                        size="36"
                        class="border border-white"
                        :class="index != 0 ? 'ms-n3' : ''"
                      >
                        <img :src="avatar.image" alt="Avatar" />
                      </v-avatar>
                    </template>
                    <span>{{ avatar.name }}</span>
                  </v-tooltip>
                </span>
              </div>
              <hr class="vertical dark mt-0" />
            </div>
            <div class="ps-6">
              <v-btn
                icon
                color="#fff"
                width="40px"
                height="40px"
                class="ms-auto btn-info bg-gradient-info border-radius-md mt-4"
              >
                <v-icon size="18" class="material-icons-round">add</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <kanban-board :stages="stages" :blocks="blocks">
            <div
              v-for="block in blocks"
              :key="block.id"
              :slot="block.id"
              class="pa-1"
            >
              <div v-if="block.image">
                <v-img :src="block.image" class="border-radius-md mb-3"></v-img>
              </div>
              <div v-if="block.badge">
                <v-btn
                  elevation="0"
                  small
                  :ripple="false"
                  height="21"
                  class="
                    border-radius-md
                    font-weight-bolder
                    px-2
                    py-2
                    badge-font-size
                    ms-auto
                    text-white text-xxs
                    mb-2
                  "
                  :class="`bg-gradient-` + block.badgeColor"
                  >{{ block.badge }}</v-btn
                >
              </div>
              <div v-if="block.title">
                <p class="text text-body font-weight-light mb-0">
                  {{ block.title }}
                </p>
              </div>
              <div v-if="block.files">
                <div class="d-flex mt-3">
                  <div>
                    <i
                      class="fa fa-paperclip me-1 text-sm"
                      aria-hidden="true"
                    ></i>
                    <span class="text-sm">{{ block.files }}</span>
                  </div>
                  <span class="avatar-group ms-auto d-flex">
                    <v-tooltip
                      top
                      color="#212529"
                      v-for="avatar in block.avatars"
                      :key="avatar.name"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-avatar
                          v-bind="attrs"
                          v-on="on"
                          size="24"
                          class="border border-white"
                        >
                          <img :src="avatar.image" alt="Avatar" />
                        </v-avatar>
                      </template>
                      <span>{{ avatar.name }}</span>
                    </v-tooltip>
                  </span>
                </div>
              </div>
            </div>
          </kanban-board>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Vue from "vue";
import vueKanban from "vue-kanban";
import "vue-kanban/src/assets/kanban.scss";

Vue.use(vueKanban);

export default {
  name: "Kanban",
  data: function () {
    return {
      avatars: [
        {
          image: require("@/assets/img/team-1.jpg"),
          name: "Elena Morison",
        },
        {
          image: require("@/assets/img/team-2.jpg"),
          name: "Ryan Milly",
        },
        {
          image: require("@/assets/img/team-3.jpg"),
          name: "Nick Daniel",
        },
        {
          image: require("@/assets/img/team-4.jpg"),
          name: "Peterson",
        },
        {
          image: require("@/assets/img/team-5.jpg"),
          name: "Milla",
        },
      ],
      stages: ["Backlog", "Progress", "In review", "Done"],
      blocks: [
        {
          id: 1,
          status: "Backlog",
          title: "Write here your task",
        },
        {
          id: 2,
          status: "Backlog",
          title: 'Drag me to "In Progress" section',
        },
        {
          id: 3,
          image: require("@/assets/img/office-dark.jpg"),
          status: "Backlog",
          title:
            "Website Design: New cards for blog section and profile details",
          badge: "Pending",
          badgeColor: "primary",
          files: "3",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
        {
          id: 4,
          status: "Progress",
          title: "Fix Firefox errors",
          badge: "Errors",
          badgeColor: "warning",
          files: "11",
          avatars: [
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
        {
          id: 5,
          status: "Progress",
          title: "Fix Firefox errors",
          badge: "Updates",
          badgeColor: "info",
          files: "3",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
        {
          id: 6,
          image: require("@/assets/img/meeting.jpg"),
          status: "Progress",
          title: "Vue 3 Updates",
          badge: "Updates",
          badgeColor: "info",
          files: "9",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
        {
          id: 7,
          status: "In review",
          title: "Responsive changes",
          badge: "In testing",
          badgeColor: "warning",
          files: "11",
          avatars: [
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
        {
          id: 8,
          status: "In review",
          title: "Change images dimension",
          badge: "In review",
          badgeColor: "success",
          avatars: [
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
        {
          id: 9,
          status: "In review",
          title: "Update links",
          badge: "In review",
          badgeColor: "info",
          files: "6",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
        {
          id: 10,
          image: require("@/assets/img/home-decor-1.jpg"),
          status: "Done",
          title: "Redesign for the home page",
          badge: "Done",
          badgeColor: "success",
          files: "8",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
        {
          id: 11,
          status: "Done",
          title: "Schedule winter campaign",
          badge: "Done",
          badgeColor: "success",
          files: "2",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Nick Daniel",
            },
          ],
        },
      ],
    };
  },
};
</script>
