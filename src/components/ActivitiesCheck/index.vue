<template>
  <div class="check">
    <span class="title">atividades concluidas</span>

    <div>
      <v-card color="success" class="tesk" v-for="item in data" :key="item.id">
        <div class="item">
          <span>{{ item.text }}</span>
        </div>
        <div class="boxicon">
          <span
            id="icon"
            @click="appStore.deleteItemActivitiesCheck(item.id)"
            class="material-symbols-outlined"
          >
            check
          </span>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "../../store/app";
import { computed } from "vue";

const appStore = useAppStore();
const data = computed(() => {
  return appStore.concluidas;
});
</script>

<style lang="scss" scoped>
.check {
  width: 100%;
  background: #fff;
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  max-height: 300px;
}
.title {
  color: black;
  font-family: sans-serif;
  font-size: 18px;
}
.tesk {
  border-radius: 4px;
  padding: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
}
.item {
  width: 50%;
}
.boxicon {
  width: 50%;
}
#icon {
  color: green;
  margin-left: 90%;
}
</style>
