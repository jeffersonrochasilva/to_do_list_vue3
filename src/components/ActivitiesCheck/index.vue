<template>
  <div class="check">
    <div class="tesk" v-for="item in data" :key="item.name">
      <span>{{ item.name }}</span>
      <span id="icon" @click="teste()" class="material-symbols-outlined">
        check
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "../../store/app";
import { computed } from "vue";

const appStore = useAppStore();
const data = computed(() => {
  return appStore.activitiesCheck;
});

const teste = () => {
  appStore.pushInActivitiesCheck(`testando`);
};
</script>

<style lang="scss" scoped>
.check {
  width: 100%;
  background: rgba(0, 128, 0, 0.104);
  margin-top: 20px;
  border: 2px solid green;

  padding: 20px;
  border-radius: 4px;
  max-height: 300px;
  display: flex;
  justify-content: space-around;
  /* flex-direction: column; */
  flex-wrap: wrap;
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start; */
}
.tesk {
  border: 1px solid black;
  border-radius: 4px;
  width: 300px;
  padding: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  background: rgba(0, 128, 0, 0.158);
}
#icon {
  color: green;
}
</style>
