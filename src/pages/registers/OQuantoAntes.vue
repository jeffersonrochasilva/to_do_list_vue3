<template>
  <div>
    <CardFirst
      title="O quanto antes"
      :data="appStore.oQuantoAntes"
      :setData="setDataTwo"
    />
  </div>
</template>

<script setup lang="ts">
import CardFirst from "../../components/CardFirst/index.vue";
import { useAppStore } from "../../store/app";
import { usePagination } from "@/store/pagination";
const appStore = useAppStore();
const pagination = usePagination();
const setDataTwo = (item: any) => {
  pagination.data = appStore.oQuantoAntes;
  appStore.setoQuantoAntes(item);
  appStore.pushInActivitiesCheck(item);
  appStore.setSnackbar("Parabéns, atividade concluida", "success");
};
</script>
