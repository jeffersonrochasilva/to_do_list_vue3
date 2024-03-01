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
import CardFirst from "../../components/CardFirst/index";
import { useAppStore } from "../../store/app.ts";
const appStore = useAppStore();
const setDataTwo = (item: any) => {
  appStore.setoQuantoAntes(item);
  appStore.pushInActivitiesCheck(item);
  appStore.setSnackbar("Parabéns, atividade concluida", "success");
};
</script>
