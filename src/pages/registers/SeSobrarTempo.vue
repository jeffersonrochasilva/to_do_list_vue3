<template>
  <div>
    <CardFirst
      title="Se sobrar tempo"
      :data="appStore.seSobrarTempo"
      :setData="setDataThree"
    />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "../../store/app";
import CardFirst from "../../components/CardFirst/index.vue";
const appStore = useAppStore();
const setDataThree = (item: any) => {
  appStore.setSeSobrarTempo(item);
  appStore.pushInActivitiesCheck(item);
  appStore.setSnackbar("Parabéns, atividade concluida", "success");
};
</script>
