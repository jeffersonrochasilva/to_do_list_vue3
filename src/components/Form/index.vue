<template>
  <div class="header">
    <div class="campBox">
      <div class="camp">
        <v-text-field
          v-model="activity"
          class="campActivities"
          variant="outlined"
          placeholder="Adicione sua atividade"
          :counter="10"
        />
      </div>
      <v-btn class="btn" @click="addActivity()">Adicionar</v-btn>
    </div>

    <div class="campSwitch">
      <v-switch
        v-model="model"
        hide-details
        true-value="Urgentemente"
        false-value="null"
        label="Urgentemente"
        color="black"
      ></v-switch>
      <v-switch
        v-model="model"
        hide-details
        true-value="O quanto antes"
        false-value="null"
        color="black"
        label="O quanto antes"
      ></v-switch>
      <v-switch
        v-model="model"
        hide-details
        true-value="Se sobrer tempo"
        false-value="null"
        color="black"
        label="Se sobrar tempo"
      ></v-switch>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import { useAppStore } from "../../store/app";

const appStopre = useAppStore();

const activity: Ref<string> = ref(``);
const model: Ref<string> = ref(``);

const addActivity = () => {
  if (!activity.value) {
    return appStopre.setSnackbar("Preencha o campo com sua atividade", "error");
  }
  if (!model.value) {
    return appStopre.setSnackbar(
      "Escolha a importancia da sua atividade",
      "warning"
    );
  }
  if (model.value === `Urgentemente`) {
    console.log(activity.value, "teste");
    appStopre.registerNewactivity(activity.value);
  }
  if (model.value === `O quanto antes`) {
    appStopre.pushOQuantoAntes(activity.value);
  }
  if (model.value === `Se sobrer tempo`) {
    appStopre.pushSeSobrarTempo(activity.value);
  }
  activity.value = "";
  model.value = "";
  return appStopre.setSnackbar("Atividade cadastrada com sucesso", "success");
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px;
  min-height: 160px;
  border-radius: 4px;
  /* border: 2px solid black; */
  width: 100%;
  background: #fff;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; */
}
.campBox {
  width: 100%;
  display: flex;
  align-items: center;
}
.camp {
  width: 90%;
}
.title {
  font-family: sans-serif;
}
.campActivities {
  border-radius: 4px;
  /* width: 350px; */
  height: 40px;
  padding: 0 7px;
  margin-bottom: 15px;
}
.campSwitch {
  width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
}
.btn {
  background: black;
  height: 55px;
  color: white;
}
</style>
