<template>
  <div>
    <v-container class="mt-n16 px-6">
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="card-shadow mb-30">
            <div class="card-header-padding card-border-bottom">
              <p class="font-weight-600 text-h3 text-typo mb-0">Timeline</p>
            </div>
            <v-card-text class="card-padding">
              <v-timeline dense align-top class="timeline-line-color">
                <v-timeline-item
                  v-for="(item, i) in timeline"
                  :key="item.title + i"
                  small
                  class="timeline"
                >
                  <template v-slot:icon>
                    <v-avatar size="33" :color="item.color">
                      <v-icon :color="item.iconColor" size="16">{{
                        item.icon
                      }}</v-icon>
                    </v-avatar>
                  </template>

                  <v-card width="480">
                    <v-card-title class="px-0 pt-2 pb-1">
                      <span class="text-muted text-caption ls-0 font-weight-600"
                        >10:30 AM</span
                      >
                    </v-card-title>
                    <v-card-text class="px-0">
                      <h5 class="text-h5 text-typo font-weight-600 mt-3 mb-0">
                        {{ item.title }}
                      </h5>
                      <p class="mt-1 mb-0 text-body font-weight-thin">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <v-btn
                          elevation="0"
                          small
                          :ripple="false"
                          height="21"
                          class="
                            rounded-pill
                            me-1
                            font-weight-600
                            px-3
                            py-1
                            badge-font-size
                          "
                          :class="item.btn"
                          :color="item.color"
                          >Design</v-btn
                        >
                        <v-btn
                          elevation="0"
                          small
                          :ripple="false"
                          height="21"
                          class="
                            rounded-pill
                            me-1
                            font-weight-600
                            px-3
                            py-1
                            badge-font-size
                          "
                          :class="item.btn"
                          :color="item.color"
                          >System</v-btn
                        >
                        <v-btn
                          elevation="0"
                          small
                          :ripple="false"
                          height="21"
                          class="
                            rounded-pill
                            me-1
                            font-weight-600
                            px-3
                            py-1
                            badge-font-size
                          "
                          :class="item.btn"
                          :color="item.color"
                          >Creative</v-btn
                        >
                      </div>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="card-shadow mb-30 bg-default">
            <div class="card-header-padding">
              <p class="font-weight-600 text-h3 mb-0 text-white">
                Dark Timeline
              </p>
            </div>
            <v-card-text class="card-padding">
              <v-timeline dark dense align-top class="timeline-line-color">
                <v-timeline-item
                  v-for="(item, i) in timeline"
                  :key="item.title + i"
                  small
                  class="timeline"
                >
                  <template v-slot:icon>
                    <v-avatar size="33" :color="item.color">
                      <v-icon :color="item.iconColor" size="16">{{
                        item.icon
                      }}</v-icon>
                    </v-avatar>
                  </template>

                  <v-card width="480" class="bg-default">
                    <v-card-title class="px-0 pt-2 pb-1">
                      <span class="text-white text-caption ls-0 font-weight-600"
                        >10:30 AM</span
                      >
                    </v-card-title>
                    <v-card-text class="px-0">
                      <h5 class="text-h5 text-white font-weight-600 mt-3 mb-0">
                        {{ item.title }}
                      </h5>
                      <p class="mt-1 mb-0 text-white font-weight-thin">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <v-btn
                          elevation="0"
                          small
                          :ripple="false"
                          height="21"
                          class="
                            rounded-pill
                            me-1
                            font-weight-600
                            px-3
                            py-1
                            badge-font-size
                          "
                          :class="item.btn"
                          :color="item.color"
                          >Design</v-btn
                        >
                        <v-btn
                          elevation="0"
                          small
                          :ripple="false"
                          height="21"
                          class="
                            rounded-pill
                            me-1
                            font-weight-600
                            badge-font-size
                          "
                          :class="item.btn"
                          :color="item.color"
                          >System</v-btn
                        >
                        <v-btn
                          elevation="0"
                          small
                          :ripple="false"
                          height="21"
                          class="rounded-pill font-weight-600 badge-font-size"
                          :class="item.btn"
                          :color="item.color"
                          >Creative</v-btn
                        >
                      </div>
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
          title: "New message",
          color: "#b0eed3",
          iconColor: "#1aae6f",
          icon: "ni-bell-55",
          btn: "badge-success",
        },
        {
          title: "Product Issue",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "ni-html5",
          btn: "badge-danger",
        },
        {
          title: "New likes",
          color: "#aaedf9",
          iconColor: "#03acca",
          icon: "ni-like-2",
          btn: "badge-info",
        },
        {
          title: "New message",
          color: "#b0eed3",
          iconColor: "#1aae6f",
          icon: "ni-bell-55",
          btn: "badge-success",
        },
        {
          title: "Product Issue",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "ni-html5",
          btn: "badge-danger",
        },
      ],
    };
  },
};
</script>
