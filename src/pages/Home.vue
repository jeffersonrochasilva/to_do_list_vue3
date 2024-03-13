<template>
  <div class="home">
    <div class="left">
      <Navigationbarr />
    </div>
    <div class="right">
      <div class="container">
        <div style="width: 100%; margin-bottom: 40px; margin-top: 20px">
          <span class="title"
            >Planilha de atividades com ordem de prioridades</span
          >
        </div>

        <Form />
        <div class="content">
          <RouterView />
        </div>
      </div>

      <v-snackbar v-model="valueSnackbar" :color="colorSnackbar">
        {{ textSnackbar }}
      </v-snackbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Form from "../components/Form/index.vue";
import Navigationbarr from "../components/NavigationBar/index.vue";
import { computed, ComputedRef, onMounted } from "vue";
import { useAppStore } from "../store/app";

const appStore = useAppStore();

onMounted(async () => {
  await appStore.getAllApis();
});

const colorSnackbar: ComputedRef<string> = computed(() => {
  return appStore.color;
});

const textSnackbar: ComputedRef<string> = computed(() => {
  return appStore.text;
});
const valueSnackbar: ComputedRef<boolean> = computed(() => {
  return appStore.snackbar;
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  background: rgba(128, 128, 128, 0.106);
}
.left {
  width: 300px;
}

.right {
  width: calc(100% - 250px);
  padding: 20px;
}
@media (max-width: 768px) {
  .left {
    width: 0px;
  }

  .right {
    width: 100%;
    padding: 20px;
  }
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: black;
}
.content {
  width: 100%;
  /* padding-top: 164px; */
  /* background: red;   */
}
.container {
  width: 100%;
  padding-top: 64px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
