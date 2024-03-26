<template>
  <div class="check">
    <span class="title">Actividades concluídas</span>

    <div>
      <v-card
        color="success"
        class="tesk"
        v-for="item in pagination.app"
        :key="item.id"
      >
        <div class="item">
          <span>{{ item.text }}</span>
        </div>
        <div class="boxicon">
          <span
            id="icon"
            @click="appStore.deleteItemActivitiesCheck(item.id)"
            class="material-symbols-outlined"
          >
            delete
          </span>
        </div>
      </v-card>
      <div class="contentFooter">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Footer from "../Footer/index.vue";
import { useAppStore } from "../../store/app";
import { usePagination } from "@/store/pagination";
import { onMounted } from "vue";
const pagination = usePagination();
const appStore = useAppStore();

onMounted(async () => {
  await appStore.getAllApis();
  appStore.stepCircle = true;
  setTimeout(() => {
    console.log("chamou concluidas");
    pagination.data = appStore.concluidas;
    pagination.toGoPage();
    appStore.stepCircle = false;
  }, 300);
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
.contentFooter {
  height: 60px;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.title {
  color: black;
  font-family: sans-serif;
  font-size: 18px;
}
.tesk {
  border-radius: 4px;
  padding: 7px;
  height: 40px;
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
