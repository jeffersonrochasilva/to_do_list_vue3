import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { useAppStore } from "./app";
export const usePagination = defineStore("pagination", () => {
  const appStore = useAppStore();

  const i: Ref<number> = ref(0);
  const num: Ref<number> = ref(0);
  const numb: Ref<any> = ref(0);
  const numPagination: Ref<number> = ref(0);
  const numPaginationUr: Ref<number> = ref(0);
  const numPaginationOq: Ref<number> = ref(0);
  const numPaginationSe: Ref<number> = ref(0);
  const firstGo: Ref<number> = ref(0);
  const numc: Ref<number> = ref(0);
  const app: Ref<any> = ref([]);
  const teste: Ref<any> = ref(false);
  const dataOne: Ref<any> = ref([]);
  const dataTwo: Ref<any> = ref([]);
  const data: Ref<any> = ref([]);
  const firstAccess: Ref<boolean> = ref(true);
  const urgentemente: Ref<any> = ref([]);
  const oQuantoAntes: Ref<any> = ref([]);
  const seSobrarTempo: Ref<any> = ref([]);

  const toGoPage = () => {
    if (numPagination.value > 0) {
      num.value = num.value + 4;
      numb.value = numb.value + 4;
    }
    seSobrarTempo.value = one(appStore.seSobrarTempo);
    oQuantoAntes.value = one(appStore.oQuantoAntes);
    urgentemente.value = one(appStore.urgentemente);
    numPagination.value++;
  };

  const goBackPage = () => {
    console.log("camou o back page");

    if (numPagination.value === 1) {
      return;
    } else {
      num.value = num.value - 4;
      numb.value = numb.value - 4;
      numPagination.value--;
      app.value = data.value.slice(num.value, numb.value);
    }
    teste.value = false;
  };

  const one = (item: any) => {
    if (numb.value > item.length) {
      console.log("chegou ao fim");
    }
    if (item.length < 4) {
      numb.value = item.length;
    } else {
      numPagination.value === 0 ? (numb.value = 4) : null;
    }

    const res = item.slice(num.value, numb.value);
    console.log(item, "item");
    console.log(numb.value, "numb");
    console.log(num.value, "num");
    console.log(item.length, "item.length");
    return res;
  };
  const setValuePage = () => {
    // numb.value = 0;
    // numPagination.value = 1;
    // num.value = 0;
  };

  return {
    i,
    one,
    num,
    app,
    numb,
    numc,
    teste,
    data,
    dataTwo,
    firstGo,
    dataOne,
    firstAccess,
    urgentemente,
    oQuantoAntes,
    seSobrarTempo,
    numPagination,
    numPaginationUr,
    numPaginationOq,
    numPaginationSe,
    setValuePage,
    goBackPage,
    toGoPage,
  };
});
