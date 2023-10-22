<template>
  <div class="home">
    <div style="width: 100%; margin-bottom: 40px; margin-top: 20px">
      <span class="title">Planilha de atividades com order de prioridades</span>
    </div>

    <Header />
    <div class="content">
      <CardFirst title="Urgentemente" :data="dataOne" :setData="setDataOne" />
      <CardFirst title="O quanto antes" :data="dataTwo" :setData="setDataTwo" />
      <CardFirst
        title="Se sobrar tempo"
        :data="dataThree"
        :setData="setDataThree"
      />
    </div>
    <ActivitiesCheck />
    <v-snackbar v-model="valueSnackbar" :color="colorSnackbar">
      {{ textSnackbar }}
    </v-snackbar>
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header/index.vue";
import CardFirst from "../components/CardFirst/index.vue";
import ActivitiesCheck from "../components/ActivitiesCheck/index.vue";
import { ref, computed, ComputedRef } from "vue";

import { useAppStore } from "../store/app";

const appStore = useAppStore();
const colorSnackbar: ComputedRef<string> = computed(() => {
  return appStore.color;
});

const textSnackbar: ComputedRef<string> = computed(() => {
  return appStore.text;
});
const valueSnackbar: ComputedRef<boolean> = computed(() => {
  return appStore.snackbar;
});

const dataOne = computed(() => {
  return appStore.urgentemente;
});
const dataTwo = computed(() => {
  return appStore.oQuantoAntes;
});
const dataThree = computed(() => {
  return appStore.seSobrarTempo;
});

const setDataThree = (item: any) => {
  appStore.setSeSobrarTempo(item);
  appStore.pushInActivitiesCheck(item);
  appStore.setSnackbar("Parabéns, atividade concluida", "success");
};
const setDataTwo = (item: any) => {
  appStore.setoQuantoAntes(item);
  appStore.pushInActivitiesCheck(item);
  appStore.setSnackbar("Parabéns, atividade concluida", "success");
};

const setDataOne = (item: any) => {
  appStore.setUrgentemente(item);
  appStore.pushInActivitiesCheck(item);
  appStore.setSnackbar("Parabéns, atividade concluida", "success");
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 1000vh;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(128, 128, 128, 0.106);
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: gray;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
