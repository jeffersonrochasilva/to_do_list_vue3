<template>
  <div class="login">
    <div class="boxImage">
      <img src="../assets/image.jpg" alt="image-logo" id="image" />
      <h1>Descomplique</h1>
    </div>
    <div class="boxForm">
      <FormLogin v-if="appStore.stepForm" />
      <FormRegister v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FormLogin from "../components/formLogin/index.vue";
import FormRegister from "../components/formRegister/index.vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: gray;
  display: flex;
}
.boxImage {
  width: 50%;
  height: 100vh;
  background: #1966c0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#image {
  width: 50%;
}
h1 {
  margin-top: 20px;
  color: white;
}

.boxForm {
  width: 50%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
