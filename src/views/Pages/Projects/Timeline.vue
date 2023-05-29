<template>
  <div>
    <v-container fluid class="py-6">
      <v-row class="px-4">
        <v-col cols="12" md="6">
          <v-card class="card-shadow border-radius-xl mb-30">
            <div class="card-header-padding">
              <h6 class="font-weight-bold text-h6 text-typo mb-2">
                Timeline light
              </h6>
            </div>
            <v-card-text class="card-padding px-0 pt-0">
              <v-timeline dense align-top class="timeline-line-color pt-0">
                <v-timeline-item
                  v-for="(item, i) in timeline"
                  :key="item.title + i"
                  small
                  class="timeline"
                >
                  <template v-slot:icon>
                    <v-avatar size="30" color="#ffffff">
                      <v-icon
                        :class="
                          `material-icons-round text-white bg-` + item.btn
                        "
                        size="14"
                        >{{ item.icon }}</v-icon
                      >
                    </v-avatar>
                  </template>

                  <v-card width="480" class="mt-n1">
                    <v-card-title class="px-0 pt-0 pb-1 d-block">
                      <h6
                        class="text-dark text-sm font-weight-bold mb-0 d-block"
                      >
                        {{ item.title }}
                      </h6>
                      <p class="text-secondary font-weight-light text-xs mb-0">
                        {{ item.date }}
                      </p>
                    </v-card-title>
                    <v-card-text class="px-0 pb-1">
                      <p class="text-sm mt-3 mb-2 text-body font-weight-light">
                        People care about how you see the world, how you think,
                        what motivates you, what you’re struggling with or
                        afraid of.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card
            class="card-shadow border-radius-xl mb-30 bg-gradient-default"
          >
            <div class="card-header-padding">
              <h6 class="font-weight-bold text-h6 text-white mb-2">
                Timeline Dark
              </h6>
            </div>
            <v-card-text class="card-padding px-0 pt-0">
              <v-timeline dense align-top class="pt-0">
                <v-timeline-item
                  v-for="(item, i) in timeline"
                  :key="item.title + i"
                  small
                  class="timeline"
                >
                  <template v-slot:icon>
                    <v-avatar size="30" color="#344767">
                      <v-icon
                        :class="
                          `material-icons-round text-white bg-` + item.btn
                        "
                        size="14"
                        >{{ item.icon }}</v-icon
                      >
                    </v-avatar>
                  </template>

                  <v-card width="480" color="transparent" class="mt-n1">
                    <v-card-title class="px-0 pt-0 pb-1 d-block">
                      <h6
                        class="text-white text-sm font-weight-bold mb-0 d-block"
                      >
                        {{ item.title }}
                      </h6>
                      <p class="text-secondary font-weight-light text-xs mb-0">
                        {{ item.date }}
                      </p>
                    </v-card-title>
                    <v-card-text class="px-0 pb-1">
                      <p
                        class="
                          text-sm
                          mt-3
                          mb-2
                          text-white
                          opacity-8
                          font-weight-light
                        "
                      >
                        People care about how you see the world, how you think,
                        what motivates you, what you’re struggling with or
                        afraid of.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "timeline",
  data() {
    return {
      timeline: [
        {
          title: "$2400, Design changes",
          date: "22 DEC 7:20 PM",
          icon: "notifications",
          btn: "default",
        },
        {
          title: "New order #1832412",
          date: "21 DEC 11 PM",
          icon: "code",
          btn: "primary",
        },
        {
          title: "Server payments for April",
          date: "21 DEC 9:34 PM",
          icon: "shopping_cart",
          btn: "success",
        },
        {
          title: "New card added for order #4395133",
          date: "20 DEC 2:20 AM",
          icon: "credit_card",
          btn: "info",
        },
        {
          title: "Unlock packages for development",
          date: "18 DEC 4:54 AM",
          icon: "vpn_key",
          btn: "default",
        },
        {
          title: "New message unread",
          date: "16 DEC",
          iconColor: "#f80031",
          icon: "inventory_2",
          btn: "primary",
        },
        {
          title: "Notifications unread",
          date: "15 DEC",
          icon: "done",
          btn: "success",
        },
        {
          title: "New request",
          date: "14 DEC",
          icon: "mail",
          btn: "info",
        },
        {
          title: "Controller issues",
          date: "13 DEC",
          icon: "sports_esports",
          btn: "default",
        },
      ],
    };
  },
};
</script>
