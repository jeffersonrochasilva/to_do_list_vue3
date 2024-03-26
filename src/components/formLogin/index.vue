<template>
  <div class="content">
    <span color="black">login</span>
    <div class="camp">
      <p v-if="!isValidEmail">E-mail invalido</p>

      <v-text-field
        v-model="email"
        class="campLogin"
        variant="outlined"
        placeholder="Insira seu E-mail"
        :counter="256"
        :maxLength="256"
        @blur="validateEmail"
      />
    </div>
    <div class="camp">
      <v-text-field
        v-model="password"
        class="campLogin"
        variant="outlined"
        placeholder="Insira sua senha"
        :counter="8"
        :maxLength="8"
      />
    </div>

    <v-btn class="enter" @click="checkUser">entrar</v-btn>
    <v-btn class="register" @click="setStep">cadastrar</v-btn>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const router = useRouter();
const user: Ref<any> = ref([]);
const email: Ref<string> = ref("");
const isValidEmail: Ref<boolean> = ref(true);
const password: Ref<string> = ref("");

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isValidEmail.value = emailRegex.test(email.value);
};

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    user.value = response.data;
  } catch (error: any) {
    console.log(error);
  }
});

const checkUser = () => {
  appStore.stepCircle = true;
  setTimeout(() => {
    appStore.stepCircle = false;

    if (!email.value || !password.value) {
      appStore.setSnackbar("Preencha todos os campos", "warning");
    }
    const arr = user.value.filter(
      (pessoa: { email: string }) => pessoa.email === email.value
    );
    const resEmail =
      user.value.filter(
        (pessoa: { email: string }) => pessoa.email === email.value
      ).length > 0;
    const resPassword =
      arr.filter(
        (pessoa: { password: string }) => pessoa.password === password.value
      ).length > 0;
    if (resEmail && resPassword) {
      router.push("/home");
      appStore.setSnackbar("Parabéns, você está logado", "warning");
    } else {
      appStore.setSnackbar("E-mail ou senha invalido", "success");
    }
  }, 1000);
};
const setStep = () => {
  appStore.stepCircle = true;
  setTimeout(async () => {
    appStore.stepCircle = false;

    appStore.stepForm = false;
  }, 1000);
};
</script>
<style lang="scss" scoped>
.content {
  width: 50%;
  height: 35%;
  display: flex;
  flex-direction: column;
  /* border: solid red; */
  justify-content: space-between;
}
.enter {
  height: 50px;
  background: #1966c0;
  font-weight: bolder;
  color: white;
}
.register {
  height: 40px;
  color: #1966c0;
  height: 50px;
  font-weight: bolder;
}
span {
  font-weight: bolder;
  margin-bottom: 10px;
}
p {
  color: red;
  font-size: 10px;
}
</style>
