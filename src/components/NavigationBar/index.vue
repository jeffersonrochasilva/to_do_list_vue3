<template>
  <div class="navbar">
    <div>
      <!-- <div class="boxTitle">
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
      </div> -->
      <v-list-item v-for="item in items" :key="item.title" link>
        <div class="teste" @click="toGORoute(item.route)">
          <div class="boxIcon">
            <v-icon>{{ item.icon }}</v-icon>
          </div>

          <div>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </div>
        </div>
      </v-list-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const items: Ref<any> = ref([
  { title: "Urgentemente", icon: "mdi-view-dashboard", route: "/" },
  { title: "O quanto antes", icon: "mdi-image", route: "/oquantoantes" },
  { title: "Se sobrar tempo", icon: "mdi-help-box", route: "/sesobrartempo" },
  {
    title: "Atividades concluidas",
    icon: "mdi-help-box",
    route: "/activitiescheck",
  },
]);
const toGORoute = (item: string) => {
  router.push(item);
};
</script>
<style lang="scss" scoped>
.navbar {
  height: calc(100vh - 64px);
  width: 250px;
  border-right: 1px solid gray;
}
.boxTitle {
  height: 64px;
  display: flex;
  background: #1966c0;
  padding: 15px;
  align-items: center;
  /* margin-bottom: 40px; */
}
.teste {
  display: flex;
  width: 50%;
  height: 64px;
  display: flex;
  align-items: center;
}
.boxIcon {
  margin-right: 5px;
}
</style>
