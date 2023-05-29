<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="notifications">
    <div class="px-6 pt-6">
      <h5 class="text-h5 font-weight-bold text-typo">Notifications</h5>
      <p class="text-sm text-body font-weight-light">
        Choose how you receive notifications. These notification settings apply
        to the things you’re watching.
      </p>
    </div>
    <div class="px-6 pb-6 pt-4">
      <v-simple-table class="table border-radius-xl">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="ps-1" colspan="4">
                <p
                  class="
                    mb-0
                    text-body text-capitalize text-md
                    font-weight-light
                  "
                >
                  Activity
                </p>
              </th>
              <th class="text-center">
                <p
                  class="
                    mb-0
                    text-body text-capitalize text-md
                    font-weight-light
                  "
                >
                  Email
                </p>
              </th>
              <th class="text-center">
                <p
                  class="
                    mb-0
                    text-body text-capitalize text-md
                    font-weight-light
                  "
                >
                  Push
                </p>
              </th>
              <th class="text-center">
                <p
                  class="
                    mb-0
                    text-body text-capitalize text-md
                    font-weight-light
                  "
                >
                  SMS
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in notifications" :key="item.title">
              <td
                class="text-sm text-secondary mb-0 py-3 ps-1"
                :class="{ 'border-bottom': i != notifications.length - 1 }"
                colspan="4"
              >
                <span class="text-dark d-block text-sm" :v-if="item.title">{{
                  item.title
                }}</span>
                <span
                  class="text-xs font-weight-light"
                  :v-if="item.description"
                  >{{ item.description }}</span
                >
                <p class="text-sm font-weight-light mb-0" :v-if="item.text">
                  {{ item.text }}
                </p>
              </td>
              <td>
                <v-switch
                  :ripple="false"
                  class="mt-0 pt-0 ms-8 switch"
                  v-model="item.switch1"
                  hide-details
                ></v-switch>
              </td>
              <td>
                <v-switch
                  :ripple="false"
                  class="mt-0 pt-0 ms-5 switch"
                  v-model="item.switch2"
                  hide-details
                ></v-switch>
              </td>
              <td>
                <v-switch
                  :ripple="false"
                  class="mt-0 pt-0 ms-5 switch"
                  v-model="item.switch3"
                  hide-details
                ></v-switch>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "notifications",
  data() {
    return {
      notifications: [
        {
          title: "Mentions",
          description: "Notify when another user mentions you in a comment",
          switch1: true,
          switch2: false,
          switch3: false,
        },
        {
          title: "Comments",
          description: "Notify when another user comments your item",
          switch1: true,
          switch2: true,
          switch3: false,
        },
        {
          title: "Follows",
          description: "Notify when another user follows you",
          switch1: false,
          switch2: true,
          switch3: false,
        },
        {
          text: "Log in from a new device",
          switch1: true,
          switch2: true,
          switch3: true,
        },
      ],
    };
  },
};
</script>
