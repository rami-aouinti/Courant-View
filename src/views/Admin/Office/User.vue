<template>
  <v-card :loading="isUpdating" class="card-shadow border-radius-xl">
    <div class="card-header-padding card-border-bottom">
      <span class="font-weight-bold text-h5 text-typo mb-0">New Office</span>
    </div>
    <v-card-text class="card-padding">
      <v-container class="px-0">
        <template v-slot:progress>
          <v-progress-linear
            absolute
            color="green lighten-3"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-img
          height="200"
          src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
        >
          <v-row>
            <v-col class="text-right" cols="12">
              <v-menu bottom left transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="isUpdating = true">
                    <v-list-item-action>
                      <v-icon>mdi-cog</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Update</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-row class="pa-4" align="center" justify="center">
              <v-col class="text-center">
                <h3 class="text-h5">
                  {{ name }}
                </h3>
                <span class="grey--text text--lighten-1">{{ title }}</span>
              </v-col>
            </v-row>
          </v-row>
        </v-img>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  :disabled="isUpdating"
                  filled
                  color="blue-grey lighten-2"
                  label="Office Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="title"
                  :disabled="isUpdating"
                  filled
                  color="blue-grey lighten-2"
                  label="Office Description"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-autocomplete
                  v-model="friends"
                  :disabled="isUpdating"
                  :items="users"
                  filled
                  chips
                  color="blue-grey lighten-2"
                  label="Select"
                  item-text="name"
                  item-value="name"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      close
                      @click="data.select"
                      @click:close="remove(data.item)"
                    >
                      <v-avatar left>
                        <v-img :src="getPhoto(data.item.photo)"></v-img>
                      </v-avatar>
                      {{ data.item.username }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template v-if="typeof data.item !== 'object'">
                      <v-list-item-content
                        v-text="data.item"
                      ></v-list-item-content>
                    </template>
                    <template v-else>
                      <v-list-item-avatar>
                        <img :src="getPhoto(data.item.photo)" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title
                          v-html="data.item.username"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          v-html="data.item.locale"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-switch
            v-model="autoUpdate"
            :disabled="isUpdating"
            class="mt-0"
            color="green lighten-2"
            hide-details
            label="Auto Update"
          ></v-switch>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="autoUpdate"
            :loading="isUpdating"
            depressed
            elevation="0"
            :ripple="false"
            height="43"
            @click="save"
            class="
              font-weight-normal
              text-capitalize
              btn-ls btn-outline-secondary
              bg-transparent
              py-3
              px-6
            "
          >
            <v-icon right> mdi-update </v-icon>
            Update Now
          </v-btn>
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
        </v-card-actions>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import UserService from "@/services/user.service";
import { use } from "vee-validate/dist/vee-validate.minimal.esm";
import AdminService from "@/services/admin.service";

export default {
  data() {
    const srcs = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    };

    return {
      autoUpdate: true,
      friends: [],
      isUpdating: false,
      name: "",
      users: [
        { header: "Group 1" },
        { username: "Sandra Adams", locale: "Group 1", photo: srcs[1] },
        { username: "Ali Connors", locale: "Group 1", photo: srcs[2] },
        { username: "Trevor Hansen", locale: "Group 1", photo: srcs[3] },
        { username: "Tucker Smith", locale: "Group 1", photo: srcs[2] },
        { divider: true },
        { header: "Group 2" },
        { username: "Britta Holt", locale: "Group 2", photo: srcs[4] },
        { username: "Jane Smith ", locale: "Group 2", photo: srcs[5] },
        { username: "John Smith", locale: "Group 2", photo: srcs[1] },
        { username: "Sandra Williams", locale: "Group 2", photo: srcs[3] },
      ],
      title: "",
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  methods: {
    use,
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
    close() {
      this.dialog = false;
    },
    save() {
      console.log(this.friends);
      console.log(this.name);
      console.log(this.title);

      var data = {};
        data.users = {};
      data["officeName"] = this.name;
      data["officeDescription"] = this.title;
        data.users = this.friends;


      console.log(data);

      AdminService.addItem(data, "office/add").then(
        (response) => {
          console.log(response);
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    getUsers() {
      UserService.getUserBoard().then(
        (response) => {
          console.log(response.data);
          return response.data;
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    getPhoto(photo) {
      return "http://localhost/uploads/avatars/" + photo;
    },
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.users.push(response.data[i]);
        }

        console.log(this.users);
        return response.data;
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
