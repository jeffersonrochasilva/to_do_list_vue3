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
  border: 1px solid green;
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
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
}
#icon {
  color: green;
}
</style>
