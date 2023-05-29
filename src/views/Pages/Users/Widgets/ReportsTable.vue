<template>
  <v-card class="card-shadow border-radius-xl">
    <v-card-text class="px-0 py-0">
      <v-simple-table class="table border-radius-xl">
        <template v-slot:default>
          <thead>
            <tr>
              <th
                class="
                  text-left text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Name
              </th>
              <th
                class="
                  text-left text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Function
              </th>
              <th
                class="
                  text-left text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Review
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Email
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Employed
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in users" :key="item.id">
              <td :class="{ 'border-bottom': i != users.length - 1 }">
                <v-list class="py-0">
                  <v-list-item class="px-0 py-1">
                    <v-list-item-avatar rounded :size="36" class="my-0 me-4">
                      <v-img
                        :alt="item.avatar"
                        :src="item.avatar"
                        class="rounded-circle"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        class="mb-0 text-sm text-typo font-weight-normal"
                        >{{ item.name }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </td>
              <td
                class="text-sm text-secondary mb-0"
                :class="{ 'border-bottom': i != users.length - 1 }"
              >
                {{ item.function }}
              </td>
              <td
                class="text-h5"
                :class="{ 'border-bottom': i != users.length - 1 }"
              >
                <div class="d-flex align-center">
                  <span
                    :class="`text-${item.reviewColor}`"
                    class="me-2 text-sm mt-n1"
                    >●</span
                  >
                  <span class="text-dark text-xs">{{ item.review }}</span>
                </div>
              </td>
              <td
                :class="{ 'border-bottom': i != users.length - 1 }"
                class="text-center"
              >
                <p class="text-secondary mb-0 text-sm">{{ item.email }}</p>
              </td>
              <td
                :class="{ 'border-bottom': i != users.length - 1 }"
                class="text-center"
              >
                <span class="text-secondary text-sm">{{ item.employed }}</span>
              </td>
              <td
                :class="{ 'border-bottom': i != users.length - 1 }"
                class="text-center"
              >
                <span class="text-secondary text-sm">{{ item.id }}</span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "light-table-transparent",
  data() {
    return {
      users: [
        {
          id: 43431,
          name: "John Michael",
          avatar: require("@/assets/img/team-2.jpg"),
          function: "Manager",
          review: "positive",
          reviewColor: "info",
          email: "john@user.com",
          employed: "23/04/18",
        },
        {
          id: 93021,
          name: "Alexa Liras",
          avatar: require("@/assets/img/team-3.jpg"),
          function: "Programator",
          review: "positive",
          reviewColor: "info",
          email: "alexa@user.com",
          employed: "11/01/19",
        },
        {
          id: 10392,
          name: "Laurent Perrier",
          avatar: require("@/assets/img/team-4.jpg"),
          function: "Executive",
          review: "netural",
          reviewColor: "default",
          email: "laurent@user.com",
          employed: "19/09/17",
        },
        {
          id: 34002,
          name: "Michael Levi",
          avatar: require("@/assets/img/team-4.jpg"),
          function: "Backend developer",
          review: "positive",
          reviewColor: "info",
          email: "michael@user.com",
          employed: "24/12/08",
        },
        {
          id: 91879,
          name: "Richard Gran",
          avatar: require("@/assets/img/team-2.jpg"),
          function: "Manager",
          review: "negative",
          reviewColor: "danger",
          email: "richard@user.com",
          employed: "04/10/21",
        },
        {
          id: 23042,
          name: "Miriam Eric",
          avatar: require("@/assets/img/team-4.jpg"),
          function: "Programator",
          review: "positive",
          reviewColor: "info",
          email: "miriam@user.com",
          employed: "14/09/20",
        },
      ],
    };
  },
};
</script>
