<template>
  <div class="check">
    <span class="title">Actividades concluídas</span>

    <div>
      <div
        color="success"
        class="tesk"
        v-for="item in pagination.app"
        :key="item.id"
      >
        <div class="item">
          <v-tooltip :text="item.text">
            <template v-slot:activator="{ props }">
              <div class="limited">
                <span class="text" v-bind="props">
                  {{ item.text ? item.text : "Sem informação" }}</span
                >
              </div>
            </template>
          </v-tooltip>
        </div>
        <div class="boxicon">
          <span
            id="icon"
            @click="deletItem(item.id)"
            class="material-symbols-outlined"
          >
            delete
          </span>
        </div>
      </div>
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
    pagination.data = appStore.concluidas;
    pagination.toGoPage();
    appStore.stepCircle = false;
  }, 300);
});
const deletItem = async (item: string) => {
  try {
    await appStore.deleteItemActivitiesCheck(item);
    appStore.reloadinInPage();
  } catch (error) {
    console.log(error, "error");
  }
};
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
  height: 40px;
  display: flex;
  align-items: center;
}
.title {
  color: black;
  font-family: sans-serif;
  font-size: 18px;
}
.tesk {
  width: 100%;
  background: #4daf4f;
  border-radius: 4px;
  padding: 7px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
}
.item {
  width: 95%;
}
.boxicon {
  width: 5%;
}
#icon {
  color: green;
}
.limited {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
}
.text {
  color: white;
}
</style>
