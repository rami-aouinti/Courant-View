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
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              elevation="0"
              :ripple="false"
              height="43"
              class="
                font-weight-normal
                text-capitalize
                btn-primary
                bg-gradient-primary
                py-3
                px-6
                ms-3
              "
            >
              <v-icon class="material-icons-round me-3">add</v-icon>
              New Project</v-btn
            >
          </template>
          <v-card class="card-shadow border-radius-xl">
            <div class="card-header-padding card-border-bottom">
              <span class="font-weight-bold text-h5 text-typo mb-0"
                >New Project</span
              >
            </div>
            <v-card-text class="card-padding">
              <v-container class="px-0">
                <v-row>
                  <template v-for="(feld, index) in defaultItem">
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem[index]"
                        hide-details
                        class="
                          input-style
                          font-size-input
                          text-light-input
                          placeholder-light
                          input-icon
                        "
                        dense
                        flat
                        filled
                        solo
                        height="43"
                        :placeholder="
                          index.charAt(0).toUpperCase() + index.slice(1)
                        "
                      ></v-text-field>
                    </v-col>
                  </template>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions class="card-padding d-flex justify-end">
              <v-btn
                @click="close"
                elevation="0"
                :ripple="false"
                height="43"
                class="
                  font-weight-normal
                  text-capitalize
                  btn-ls btn-outline-secondary
                  bg-transparent
                  py-3
                  px-6
                "
                >Cancel</v-btn
              >

              <v-btn
                @click="save"
                elevation="0"
                :ripple="false"
                height="43"
                class="
                  font-weight-normal
                  text-capitalize
                  btn-ls btn-primary
                  bg-gradient-primary
                  py-3
                  px-6
                "
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        lg="4"
        md="6"
        cols="12"
        v-for="card in cards"
        :key="card.name"
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
                <v-list-item
                  :to="{ path: '/project/view/' + card.id}"
                >
                  <h6 class="text-h6 text-typo font-weight-bold mb-0">
                    {{ card.name }}
                  </h6>
                </v-list-item>
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
                  {{ card.participantsCount }}
                </h6>
                <p class="text-secondary text-sm font-weight-normal mb-0">
                  Participants
                </p>
              </v-col>
              <v-col cols="6" class="text-end">
                <h6 class="text-sm text-typo mb-0">{{ card.finishDate }}</h6>
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
import ProjectService from "@/services/project.service";
import AdminService from "@/services/admin.service";

export default {
  name: "Projects",
  data: function () {
    return {
      cards: [
        {
          image: require("@/assets/img/small-logos/logo-slack.svg"),
          name: "Slack Bot",
          description:
            "If everything I did failed - which it doesn't, I think that it actually succeeds.",
          participantsCount: "5",
          finishDate: "02.03.22",
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
          name: "Premium support",
          description:
            "Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you.",
          participantsCount: "3",
          finishDate: "22.11.21",
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
          name: "Design tools",
          description:
            "Constantly growing. We’re constantly making mistakes from which we learn and improve.",
          participantsCount: "4",
          finishDate: "06.03.20",
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
          name: "Looking great",
          description:
            "You have the opportunity to play this game of life you need to appreciate every moment.",
          participantsCount: "6",
          finishDate: "14.03.24",
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
          name: "Developer first",
          description:
            "For standing out. But the time is now to be okay to be the greatest you.",
          participantsCount: "4",
          finishDate: "16.01.22",
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
          name: "Product Development",
          description:
            "We strive to embrace and drive change in our industry. We are happy to work at such a project.",
          participantsCount: "4",
          finishDate: "24.01.22",
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
      projects: [],
      dialog: false,
      items: [],
      defaultItem: {
        name: "",
        description: "",
        finishDate: "",
      },
      editedItem: {},
    };
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      var index = this.editedIndex;
      AdminService.deleteItem(this.editedItem, this.formPath).then(
        (response) => {
          console.log(response);
          this.items.splice(index, 1);
          this.closeDelete();
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        console.log(this.editedIndex);
        var index = this.editedIndex;
        ProjectService.addProject(this.editedItem).then(
          (response) => {
            Object.assign(this.items[index], response);
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        ProjectService.addProject(this.editedItem).then(
          (response) => {
            Object.assign(this.items[index], response);
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
      this.close();
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  mounted() {
    ProjectService.getProjects().then(
      (response) => {
        this.projects = response.data;
        for (var i = 0; i < response.data.items.length; i++) {
          this.cards.push(response.data.items[i]);
        }
        console.log(this.cards);
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
