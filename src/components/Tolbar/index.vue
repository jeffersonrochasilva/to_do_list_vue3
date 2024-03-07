<template>
  <v-toolbar color="primary">
    <div class="icon">
      <v-btn color="accent">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
              @click="goToRoute(item.route)"
            >
              <div class="itemsBox">
                <v-icon>{{ item.icon }}</v-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </div>
  </v-toolbar>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const items: Ref<any> = ref([
  { title: "Urgentemente", icon: "mdi-clock-outline", route: "/" },
  {
    title: "O quanto antes",
    icon: "mdi-clock-outline",
    route: "/oquantoantes",
  },
  {
    title: "Se sobrar tempo",
    icon: "mdi-clock-outline",
    route: "/sesobrartempo",
  },
  {
    title: "Atividades concluidas",
    icon: "mdi-check",
    route: "/activitiescheck",
  },
]);
const goToRoute = (item: string) => {
  router.push(item);
};
</script>
<style lang="scss" scoped>
.icon {
  margin-bottom: 5px;
}
.itemsBox {
  display: flex;
}
</style>
