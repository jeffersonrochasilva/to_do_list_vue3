import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { useAppStore } from "./app";
export const usePagination = defineStore("pagination", () => {
  const appStore = useAppStore();

  const i: Ref<number> = ref(0);
  const num: Ref<number> = ref(0);
  const numb: Ref<any> = ref(0);
  const numPagination: Ref<number> = ref(0);
  const firstGo: Ref<number> = ref(0);
  const numc: Ref<number> = ref(0);
  const app: Ref<any> = ref([]);
  const teste: Ref<any> = ref(false);
  const dataOne: Ref<any> = ref([]);
  const dataTwo: Ref<any> = ref([]);
  const data: Ref<any> = ref([]);

  const toGoPage = () => {
    if (numb.value > data.value.length) {
      return;
    }
    if (data.value.length < 4) {
      numb.value = data.value.length;
    } else {
      numPagination.value === 0 ? (numb.value = 4) : null;
    }
    if (numPagination.value > 0) {
      num.value = num.value + 4;
      numb.value = numb.value + 4;
    }
    app.value = data.value.slice(num.value, numb.value);
    numPagination.value += 1;
  };
  const goBackPage = () => {
    if (numPagination.value === 1) {
      return console.log("Está na pagina 1");
    } else {
      num.value = num.value - 4;
      numb.value = numb.value - 4;
      numPagination.value--;
      app.value = data.value.slice(num.value, numb.value);
    }
    teste.value = false;
  };
  const setValuePage = () => {
    num.value = 0;
    numb.value = 4;
    numPagination.value = 1;
  };
  return {
    i,
    num,
    app,
    numb,
    numc,
    teste,
    data,
    dataTwo,
    firstGo,
    dataOne,
    numPagination,
    setValuePage,
    goBackPage,
    toGoPage,
  };
});
