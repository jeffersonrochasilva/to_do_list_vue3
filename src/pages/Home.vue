<template>
  <div class="home">
    <div class="top">
      <Tolbar />
    </div>
    <div class="botoom">
      <div class="left">
        <Navigationbarr />
      </div>
      <div class="right">
        <div class="container">
          <div style="width: 100%; margin-bottom: 40px">
            <span class="title"
              >Planilha de atividades com ordem de prioridades</span
            >
          </div>

          <Form />
          <div class="content">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Form from "../components/Form/index.vue";
import Navigationbarr from "../components/NavigationBar/index.vue";
import Tolbar from "../components/Tolbar/index.vue";
import { onMounted } from "vue";
import { useAppStore } from "../store/app";
import { usePagination } from "@/store/pagination";
const appStore = useAppStore();
const pagination = usePagination();

// onMounted(async () => {
//   await appStore.getAllApis();
// });

onMounted(async () => {
  pagination.setValuePage();
  await appStore.getAllApis();
  pagination.data = appStore.oQuantoAntes;
  pagination.toGoPage();
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background: rgba(128, 128, 128, 0.106);
}
.top {
  height: 64px;
}
.bottom {
  width: 100%;
  display: flex;
}
.left {
  width: 300px;
}

.right {
  width: calc(100% - 250px);
  padding: 20px;
  margin-left: 250px;
}
@media (max-width: 769px) {
  .left {
    width: 0px;
  }

  .right {
    width: 100%;
    padding: 20px;
    margin-left: 0;
  }
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: black;
}
.content {
  width: 100%;
}
.container {
  width: 100%;
  padding-top: 10px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
