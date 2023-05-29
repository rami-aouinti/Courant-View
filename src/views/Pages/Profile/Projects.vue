<template>
  <v-container fluid class="py-6 mt-3">
    <v-row>
      <v-col md="8" class="me-auto text-start">
        <h5 class="text-h5 text-typo font-weight-bold mb-2">
          Some of Our Awesome Projects
        </h5>
        <p class="text-body font-weight-light">
          This is the paragraph where you can write more details about your
          projects. Keep you user engaged <br />
          by providing meaningful information.
        </p>
      </v-col>
      <v-col md="4" class="my-auto text-end">
        <v-btn
          :elevation="0"
          color="#cb0c9f"
          class="
            font-weight-bold
            text-white
            bg-gradient-primary
            py-5
            px-5
            my-auto
            ms-auto
          "
          small
        >
          <v-icon class="material-icons-round me-3">add</v-icon>
          Add new
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        lg="4"
        md="6"
        cols="12"
        v-for="card in cards"
        :key="card.title"
        class="mb-3"
      >
        <v-card class="card-shadow border-radius-xl">
          <div class="px-4 py-3">
            <div class="d-flex">
              <v-avatar
                size="74"
                class="border-radius-xl bg-gradient-default pa-2 mt-n6"
              >
                <v-img :src="card.image" width="50" height="50"> </v-img>
              </v-avatar>
              <div class="ms-4 my-auto">
                <h6 class="text-h6 text-typo font-weight-bold mb-0">
                  {{ card.title }}
                </h6>
                <span class="avatar-group d-flex">
                  <v-avatar
                    size="24"
                    class="border border-white"
                    v-for="(avatar, i) in card.avatars"
                    :key="avatar.image + i"
                  >
                    <img :src="avatar.image" alt="Avatar" />
                  </v-avatar>
                </span>
              </div>
              <v-menu
                transition="slide-y-transition"
                offset-y
                offset-x
                min-width="150"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    :ripple="false"
                    class="text-secondary ms-auto mt-3"
                    v-bind="attrs"
                    v-on="on"
                    small
                  >
                    <v-icon size="16">fas fa-ellipsis-v</v-icon>
                  </v-btn>
                </template>

                <v-list class="pa-2">
                  <v-list-item class="list-item-hover-active border-radius-lg">
                    <v-list-item-content class="pa-0">
                      <v-list-item-title
                        class="ls-0 text-body font-weight-600 mb-0"
                      >
                        Action
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="list-item-hover-active border-radius-lg">
                    <v-list-item-content class="pa-0">
                      <v-list-item-title
                        class="ls-0 text-body font-weight-600 mb-0"
                      >
                        Another Action
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="list-item-hover-active border-radius-lg">
                    <v-list-item-content class="pa-0">
                      <v-list-item-title
                        class="ls-0 text-body font-weight-600 mb-0"
                      >
                        Something else here
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <hr class="horizontal dark" />
                </v-list>
              </v-menu>
            </div>
            <p class="text-sm mt-4 text-body font-weight-light">
              {{ card.description }}
            </p>
            <hr class="horizontal dark mb-3" />
            <v-row>
              <v-col cols="6">
                <h6 class="text-sm font-weight-bold text-typo mb-0">
                  {{ card.participants }}
                </h6>
                <p class="text-secondary text-sm font-weight-normal mb-0">
                  Participants
                </p>
              </v-col>
              <v-col cols="6" class="text-end">
                <h6 class="text-sm text-typo mb-0">{{ card.date }}</h6>
                <p class="text-secondary text-sm font-weight-normal mb-0">
                  Due date
                </p>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Projects",
  data: function () {
    return {
      cards: [
        {
          image: require("@/assets/img/small-logos/logo-slack.svg"),
          title: "Slack Bot",
          description:
            "If everything I did failed - which it doesn't, I think that it actually succeeds.",
          participants: "5",
          date: "02.03.22",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-spotify.svg"),
          title: "Premium support",
          description:
            "Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you.",
          participants: "3",
          date: "22.11.21",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-xd.svg"),
          title: "Design tools",
          description:
            "Constantly growing. We’re constantly making mistakes from which we learn and improve.",
          participants: "4",
          date: "06.03.20",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-asana.svg"),
          title: "Looking great",
          description:
            "You have the opportunity to play this game of life you need to appreciate every moment.",
          participants: "6",
          date: "14.03.24",
          avatars: [
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
            {
              image: require("@/assets/img/team-3.jpg"),
            },
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-invision.svg"),
          title: "Developer first",
          description:
            "For standing out. But the time is now to be okay to be the greatest you.",
          participants: "4",
          date: "16.01.22",
          avatars: [
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-4.jpg"),
            },
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
          ],
        },
        {
          image: require("@/assets/img/small-logos/logo-atlassian.svg"),
          title: "Product Development",
          description:
            "We strive to embrace and drive change in our industry. We are happy to work at such a project.",
          participants: "4",
          date: "24.01.22",
          avatars: [
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-2.jpg"),
            },
            {
              image: require("@/assets/img/team-5.jpg"),
            },
            {
              image: require("@/assets/img/team-4.jpg"),
            },
          ],
        },
      ],
    };
  },
};
</script>
