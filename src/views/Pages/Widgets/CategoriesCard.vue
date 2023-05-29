<template>
  <v-card class="card-shadow border-radius-xl">
    <div class="px-4 pt-4">
      <h6 class="text-h6 font-weight-bold text-typo">الأحداث القادمة</h6>
      <p class="text-sm mb-0 text-capitalize font-weight-bold text-body">
        انضم
      </p>
    </div>
    <div class="px-4 pt-4 pb-3">
      <v-list>
        <v-list-item-group class="border-radius-sm">
          <v-list-item
            class="px-0 border-radius-sm"
            :class="i != categories.length - 1 ? ' mb-7' : ''"
            v-for="(item, i) in categories"
            :key="item.icon"
          >
            <v-avatar
              size="48"
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
              <v-icon class="material-icons-round text-white" size="18">{{
                item.icon
              }}</v-icon>
            </v-avatar>
            <v-list-item-content class="py-0 me-3">
              <div class="d-flex flex-column">
                <h6 class="mb-1 text-typo text-h6 font-weight-bold">
                  {{ item.title }}
                </h6>
                <span class="text-sm text-body">
                  {{ item.description }}
                </span>
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
  name: "categories-card",
  data: function () {
    return {
      categories: [
        {
          icon: "savings",
          title: "أسبوع الإنترنت",
          description: "01 يونيو 2021, ي 12:30 PM",
        },
        {
          icon: "notifications_active",
          title: "لقاء مع ماري",
          description: "24 مايو 2021, ي 10:00 PM",
        },
        {
          icon: "task",
          title: "تخطيط المهمة",
          description: "25 مايو 2021, ي 10:00 PM",
        },
      ],
    };
  },
};
</script>
