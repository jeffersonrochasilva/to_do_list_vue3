<template>
  <v-card color="primary" class="secund">
    <div class="content">
      <span>{{ activity ? activity : "Hello word" }}</span>
    </div>
    <div class="iconBox">
      <span
        id="icon"
        @click="appStore.pushInActivitiesCheck(item)"
        class="material-symbols-outlined"
      >
        check
      </span>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
defineProps<{
  activity?: String;
  setData?: Function;
  item?: any;
}>();
</script>

<style lang="scss" scoped>
.secund {
  width: 100%;
  margin: 5px 0;
  height: 40px;
  /* border: 1px solid blue; */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}
.content {
  width: 50%;
  display: flex;
  align-items: flex-start;
}
.iconBox {
  width: 50%;
  display: flex;
  align-items: flex-end;
}
#icon {
  margin-left: 90%;

  color: blue;
}
</style>
