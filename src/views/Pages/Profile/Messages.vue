<template>
  <v-container fluid class="py-6 px-0">
    <v-row>
      <v-col md="4">
        <v-card class="pt-8 px-3 shadow-blur">
          <h6 class="text-h6 text-typo mb-2">Friends</h6>
          <v-form
            @submit.prevent="submit"
            class="navbar-search navbar-search-light d-inline-block w-100 mb-4"
            id="navbar-search-main"
          >
            <v-text-field
              rounded-sm
              hide-details
              outlined
              dense
              background-color="transparent"
              color="#e91e63"
              label="Search contact"
              class="font-size-input input-style"
            >
            </v-text-field>
          </v-form>
          <a
            href="javascript:void(0)"
            class="
              card-shadow
              shadow-blur
              border-radius-xl
              mb-6
              text-decoration-none
            "
            v-for="(message, i) in messages"
            :key="message.name"
          >
            <div
              class="d-flex pa-4 bg-gradient-primary border-radius-xl"
              v-if="i == 0"
            >
              <v-avatar size="48">
                <img :src="message.image" alt="Avatar" />
              </v-avatar>
              <div class="ms-3">
                <h6 class="text-h6 text-white mb-0">{{ message.name }}</h6>
                <p
                  class="
                    mb-0
                    text-white
                    font-weight-light
                    text-truncate
                    d-block
                    text-sm
                  "
                >
                  {{ message.message }}
                </p>
              </div>
            </div>
            <div class="d-flex pa-4" v-else>
              <v-avatar size="48">
                <img :src="message.image" alt="Avatar" />
              </v-avatar>
              <div class="ms-3">
                <h6 class="text-h6 text-typo mb-0">{{ message.name }}</h6>
                <p
                  class="text-muted text-xs mb-2 font-weight-light"
                  v-if="message.time"
                >
                  {{ message.time }}
                </p>
                <p
                  class="
                    mb-0
                    text-body
                    font-weight-light
                    text-truncate
                    d-block
                    text-sm
                  "
                >
                  {{ message.message }}
                </p>
              </div>
            </div>
          </a>
        </v-card>
      </v-col>
      <v-col md="8">
        <v-card class="pt-8 px-1 shadow-blur">
          <div class="mt-n4">
            <div
              class="
                bg-gradient-primary
                shadow-primary
                border-radius-lg
                px-3
                py-2
                mx-3
              "
            >
              <v-container>
                <v-row>
                  <v-col md="10">
                    <div class="d-flex align-items-center">
                      <v-avatar size="48">
                        <img src="@/assets/img/team-2.jpg" alt="Avatar" />
                      </v-avatar>
                      <div class="ms-3">
                        <h6 class="mb-0 text-h6 d-block text-white">
                          Charlie Watson
                        </h6>
                        <span class="text-sm text-white opacity-8"
                          >last seen today at 1:53am</span
                        >
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="1" class="my-auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          v-bind="attrs"
                          v-on="on"
                          size="18"
                          class="material-icons-round text-white"
                        >
                          videocam
                        </v-icon>
                      </template>
                      <span>Video call</span>
                    </v-tooltip>
                  </v-col>
                  <v-col cols="1" class="my-auto">
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
                          class="text-secondary"
                          v-bind="attrs"
                          v-on="on"
                          small
                        >
                          <v-icon
                            size="18"
                            class="material-icons-round text-white"
                            >settings</v-icon
                          >
                        </v-btn>
                      </template>

                      <v-list class="pa-2">
                        <v-list-item
                          class="list-item-hover-active border-radius-md"
                        >
                          <v-list-item-content class="pa-0">
                            <v-list-item-title
                              class="
                                text-body
                                ls-0
                                text-typo
                                font-weight-600
                                mb-0
                              "
                            >
                              Profile
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                          class="list-item-hover-active border-radius-md"
                        >
                          <v-list-item-content class="pa-0">
                            <v-list-item-title
                              class="
                                text-body
                                ls-0
                                text-typo
                                font-weight-600
                                mb-0
                              "
                            >
                              Mute Conversation
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                          class="list-item-hover-active border-radius-md"
                        >
                          <v-list-item-content class="pa-0">
                            <v-list-item-title
                              class="
                                text-body
                                ls-0
                                text-typo
                                font-weight-600
                                mb-0
                              "
                            >
                              Block
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                          class="list-item-hover-active border-radius-md"
                        >
                          <v-list-item-content class="pa-0">
                            <v-list-item-title
                              class="
                                text-body
                                ls-0
                                text-typo
                                font-weight-600
                                mb-0
                              "
                            >
                              Clear Chat
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                          class="list-item-hover-active border-radius-md"
                        >
                          <v-list-item-content class="pa-0">
                            <v-list-item-title
                              class="text-danger ls-0 font-weight-600 mb-0"
                            >
                              Delete Chat
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
          <div class="max-vh-50 overflow-scroll pt-6 px-4">
            <v-row class="justify-start">
              <v-col cols="auto">
                <v-card class="py-2 px-3 shadow border-radius-xl">
                  <p class="mb-1 text-body font-weight-light">
                    It contains a lot of good lessons about effective practices
                  </p>
                  <div class="d-flex align-center text-sm text-body opacity-6">
                    <i class="ni ni-check-bold text-sm me-1"></i>
                    <small>3:14am</small>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="justify-end text-end">
              <v-col cols="auto">
                <v-card
                  class="py-2 px-3 shadow bg-gradient-primary border-radius-xl"
                >
                  <p class="mb-1 font-weight-light text-white">
                    Can it generate daily design links that include essays and
                    data visualizations ?
                  </p>
                  <div
                    class="
                      d-flex
                      align-center
                      justify-end
                      text-sm text-white
                      opacity-6
                    "
                  >
                    <i class="ni ni-check-bold text-sm me-1"></i>
                    <small>4:42pm</small>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="text-center">
                <span
                  class="
                    badge
                    text-dark text-uppercase text-xs
                    font-weight-bold
                  "
                  >Wed, 3:27pm</span
                >
              </v-col>
            </v-row>
            <div v-for="chat in chats" :key="chat.message">
              <v-row class="justify-start mb-3" v-if="chat.type == 'received'">
                <v-col cols="auto">
                  <v-card class="py-2 px-3 shadow border-radius-xl">
                    <p
                      class="mb-1 text-body font-weight-light"
                      v-if="chat.message"
                    >
                      {{ chat.message }}
                    </p>
                    <div class="w-100 position-relative" v-if="chat.image">
                      <v-img
                        class="img-fluid mb-2 border-radius-lg"
                        :src="chat.image"
                        max-width="200"
                      >
                      </v-img>
                    </div>
                    <div
                      class="d-flex align-center text-sm text-body opacity-6"
                      v-if="chat.time"
                    >
                      <i class="ni ni-check-bold text-sm me-1"></i>
                      <small>{{ chat.time }}</small>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class="justify-end text-end mb-3" v-else>
                <v-col cols="auto">
                  <v-card
                    class="
                      py-2
                      px-3
                      shadow
                      bg-gradient-primary
                      border-radius-xl
                    "
                  >
                    <p
                      class="mb-1 font-weight-light text-white"
                      v-if="chat.message"
                    >
                      {{ chat.message }}
                    </p>
                    <div
                      class="
                        d-flex
                        align-center
                        justify-end
                        text-sm text-white
                        opacity-6
                      "
                      v-if="chat.time"
                    >
                      <i class="ni ni-check-bold text-sm me-1"></i>
                      <small>{{ chat.time }}</small>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="py-4 px-4">
            <v-form
              @submit.prevent="submit"
              class="d-flex w-100"
              id="navbar-search-main"
            >
              <v-text-field
                rounded-sm
                outlined
                dense
                hide-details
                background-color="transparent"
                color="#e91e63"
                label="Type your message"
                class="font-size-input input-style"
              >
              </v-text-field>
              <v-btn elevation="0" class="bg-gradient-primary ms-2" height="40">
                <v-icon class="material-icons-round text-white">send</v-icon>
              </v-btn>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Teams",
  data: function () {
    return {
      messages: [
        {
          image: require("@/assets/img/team-2.jpg"),
          name: "Charlie Watson",
          message: "Typing...",
        },
        {
          image: require("@/assets/img/team-1.jpg"),
          name: "Jana Doe",
          time: "1 hour ago",
          message: "Computer users and program...",
        },
        {
          image: require("@/assets/img/team-3.jpg"),
          name: "Mila Skylar",
          time: "24 min ago",
          message: "You can subscribe to receive wee...",
        },
        {
          image: require("@/assets/img/team-5.jpg"),
          name: "Sofia Scarlett",
          time: "7 hours ago",
          message: "It’s an effective resource rega...",
        },
        {
          image: require("@/assets/img/team-4.jpg"),
          name: "Tom Klein",
          time: "1 day ago",
          message: "Be sure to check it out if your dev...",
        },
      ],
      chats: [
        {
          type: "received",
          message:
            "Yeah! Responsive Design is geared towards those trying to build web apps",
          time: "4:31pm",
        },
        {
          type: "sent",
          message: "Excellent, I want it now !",
          time: "4:42pm",
        },
        {
          type: "received",
          message: "You can easily get it; The content here is all free",
          time: "4:42pm",
        },
        {
          type: "sent",
          message:
            "Awesome, blog is important source material for anyone who creates apps? Beacause these blogs offer a lot of information about website development.",
          time: "4:42pm",
        },
        {
          type: "received",
          image:
            "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          time: "4:42pm",
        },
        {
          type: "sent",
          message:
            "At the end of the day … the native dev apps is where users are",
          time: "4:42pm",
        },
        {
          type: "received",
          message: "Charlie is Typing...",
        },
      ],
    };
  },
};
</script>
