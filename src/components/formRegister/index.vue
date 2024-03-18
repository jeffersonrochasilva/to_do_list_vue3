<template>
  <div class="content">
    <span color="black">Cadastro</span>
    <div class="camp">
      <p v-if="!isValidEmail">E-mail invalido</p>

      <v-text-field
        v-model="email"
        class="campLogin"
        variant="outlined"
        placeholder="Insira seu E-mail"
        :counter="10"
        @blur="validateEmail"
      />
    </div>
    <div class="camp">
      <v-text-field
        v-model="password"
        class="campLogin"
        variant="outlined"
        placeholder="Insira sua senha"
        :counter="10"
      />
    </div>
    <div class="camp">
      <v-text-field
        v-model="secundpassword"
        class="campLogin"
        variant="outlined"
        placeholder="Confirme sua senha"
        :counter="10"
      />
    </div>

    <v-btn class="enter" @click="register">cadastrar</v-btn>
    <v-btn class="register" @click="toGoLogin">login</v-btn>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import axios from "axios";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
const router = useRouter();
const appStore = useAppStore();
const email: Ref<string> = ref("");
const isValidEmail: Ref<boolean> = ref(true);
const password: Ref<string> = ref("");
const secundpassword: Ref<string> = ref("");

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isValidEmail.value = emailRegex.test(email.value);
};
const register = async () => {
  appStore.stepCircle = true;
  setTimeout(async () => {
    appStore.stepCircle = false;

    if (!email.value) {
      return appStore.setSnackbar("Preencha seu E-mail", "warning");
    } else if (!password.value) {
      return appStore.setSnackbar("Preencha sua senha", "warning");
    } else if (!secundpassword.value) {
      return appStore.setSnackbar("Confirme sua senha", "warning");
    } else if (!isValidEmail.value) {
      return appStore.setSnackbar("E-mail invalido", "warning");
    } else if (password.value != secundpassword.value) {
      return appStore.setSnackbar("Suas senhas não são iguais", "warning");
    }

    const obj = {
      email: email.value,
      password: password.value,
      id: (Math.floor(Math.random() * 900) + 100).toString(),
    };
    await axios.post("http://localhost:3000/users", obj);
    appStore.setSnackbar("Usuário cadastrdo com sucesso", "success");
    appStore.stepForm = true;
    clearDate();
  }, 1000);
};
const toGoLogin = () => {
  appStore.stepCircle = true;
  setTimeout(async () => {
    appStore.stepCircle = false;

    appStore.stepForm = true;
  }, 1000);
};
const clearDate = () => {
  email.value = "";
  password.value = "";
  secundpassword.value = "";
};
</script>
<style lang="scss" scoped>
.content {
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
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
}
p {
  color: red;
  font-size: 10px;
}
</style>
