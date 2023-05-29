<template>
  <v-card class="card-shadow border-radius-xl">
    <div class="px-4 pt-4">
      <h6
        class="text-h6 font-weight-bold text-typo"
        v-if="$route.name != 'RTL'"
      >
        Categories
      </h6>
      <h6 class="text-h6 font-weight-bold text-typo" v-else>فئات</h6>
    </div>
    <div class="px-4 pt-4">
      <v-list>
        <v-list-item-group class="border-radius-sm">
          <v-list-item
            class="px-0 border-radius-sm mb-3"
            :class="i != categories.length - 1 ? ' mb-3' : ''"
            v-for="(item, i) in categories"
            :key="item.icon"
          >
            <v-avatar
              size="32"
              class="
                text-white
                bg-gradient-default
                border-radius-lg
                shadow
                px-2
                py-2
                me-4
              "
            >
              <v-icon class="material-icons-round text-white">{{
                item.icon
              }}</v-icon>
            </v-avatar>
            <v-list-item-content class="py-0">
              <div class="d-flex flex-column w-70">
                <h6 class="mb-1 text-typo text-sm font-weight-bold">
                  {{ item.title }}
                </h6>
                <span class="text-xs text-body">
                  {{ item.description }}
                </span>
              </div>
            </v-list-item-content>
            <v-list-item-content class="py-0">
              <div class="d-flex">
                <v-btn
                  small
                  icon
                  rounded
                  color="#344767"
                  width="45px"
                  height="45px"
                  class="icon-move-right ms-auto"
                >
                  <v-icon size="8">ni ni-bold-right</v-icon>
                </v-btn>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "categories-card-dashboard",
  data: function () {
    return {
      categories: [
        {
          icon: "launch",
          title: "أسبوع الإنترنت",
          description: "01 يونيو 2021, ي 12:30 PM",
        },
        {
          icon: "book_online",
          title: "لقاء مع ماري",
          description: "24 مايو 2021, ي 10:00 PM",
        },
        {
          icon: "priority_high",
          title: "تخطيط المهمة",
          description: "25 مايو 2021, ي 10:00 PM",
        },
        {
          icon: "insert_emoticon",
          title: "تخطيط المهمة",
          description: "25 مايو 2021, ي 10:00 PM",
        },
      ],
    };
  },
};
</script>
