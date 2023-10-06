<template>
  <div class="header">
    <v-text-field
      v-model="activity"
      class="campActivities"
      variant="outlined"
      placeholder="Adicione sua atividade"
    />
    <div class="campSwitch">
      <v-switch
        v-model="model"
        hide-details
        true-value="Urgentemente"
        false-value="null"
        label="Urgentemente"
      ></v-switch>
      <v-switch
        v-model="model"
        hide-details
        true-value="O quanto antes"
        false-value="null"
        label="O quanto antes"
      ></v-switch>
      <v-switch
        v-model="model"
        hide-details
        true-value="Se sobrer tempo"
        false-value="null"
        label="Se sobrar tempo"
      ></v-switch>
    </div>
    <v-btn @click="addActivity()">Adicionar</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import { useAppStore } from "../../store/app";

const appStopre = useAppStore();

const activity: Ref<string> = ref(``);
const model: Ref<string> = ref(``);

const addActivity = () => {
  if (model.value === `Urgentemente`) {
    appStopre.pushUrgentemente(activity.value);
  }
  if (model.value === `O quanto antes`) {
    appStopre.pushOQuantoAntes(activity.value);
  }
  if (model.value === `Se sobrer tempo`) {
    appStopre.pushSeSobrarTempo(activity.value);
  }
  activity.value = "";
  model.value = "";
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-family: sans-serif;
}
.campActivities {
  border-radius: 4px;
  width: 350px;
  height: 40px;
  padding: 0 7px;
}
.campSwitch {
  width: 40%;
  display: flex;
}
</style>
