<template>
  <div>
    <CardFirst title="Se sobrar tempo" :data="pagination.app" />
    <!-- <CardFirst title="Se sobrar tempo" :data="appStore.seSobrarTempo" /> -->
    <!-- <v-btn @click="pagination.setValuePage()">teste</v-btn>
    <p>{{ pagination.num }}</p>
    <p>{{ pagination.numb }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../../store/app";
import { usePagination } from "@/store/pagination";
import CardFirst from "../../components/CardFirst/index.vue";
const appStore = useAppStore();
const pagination = usePagination();

onMounted(async () => {
  console.log("funcionou");
  await appStore.getAllApis();
  appStore.stepCircle = true;
  setTimeout(() => {
    pagination.setValuePage();
    pagination.data = appStore.seSobrarTempo;
    pagination.toGoPage();
    appStore.stepCircle = false;
    appStore.stepRouter = 2;
  }, 300);
});
</script>
