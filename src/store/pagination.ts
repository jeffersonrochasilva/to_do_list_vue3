import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { useAppStore } from "./app";
export const usePagination = defineStore("pagination", () => {
  const appStore = useAppStore();
  const urgentemente: Ref<any> = ref([
    {
      text: "pagar a conta de luz",
      id: "1",
    },
    {
      text: "fazer compras",
      id: "2",
    },
    {
      text: "pagar a conta de gaz",
      id: "3",
    },
    {
      id: "4",
      text: "ir ao mercado",
    },
    {
      id: "40",
      text: "fazer as unhas",
    },
    {
      id: "895",
      text: "limpar a geladeira",
    },
    {
      text: "pagar a conta de gaz",
      id: "50",
    },
    {
      id: "51",
      text: "ir ao mercado",
    },
    {
      id: "52",
      text: "dirmir mais cedo",
    },
    {
      id: "53",
      text: "tirar a roupa do vvaral",
    },
  ]);
  const i: Ref<number> = ref(0);
  const num: Ref<number> = ref(0);
  const numPagination: Ref<number> = ref(0);
  const numb: Ref<number> = ref(4);
  const firstGo: Ref<number> = ref(0);
  // const numc: Ref<number> = ref(urgentemente.value.length);
  const numc: Ref<number> = ref(0);
  const app: Ref<any> = ref([]);
  const teste: Ref<any> = ref(false);
  const dataOne: Ref<any> = ref([]);
  const dataTwo: Ref<any> = ref([]);
  const data: Ref<any> = ref([]);

  const toGoPage = () => {
    teste.value = true;
    data.value = appStore.urgentemente;
    if (firstGo.value === 0) {
      numc.value = data.value.length;
    }
    firstGo.value++;
    // console.log("numc", numc.value);

    if (numc.value <= 0) {
      return console.log("acabou");
    }
    if (numc.value <= 4) {
      dataOne.value = data.value.slice(num.value, data.value.length);
      console.log("nao tem mais");
    } else {
      dataOne.value = data.value.slice(num.value, numb.value);
      console.log("ainda tem");
      num.value = num.value + 4;
      numb.value = numb.value + 4;
      numc.value = numc.value - 4;
    }
    app.value = dataOne.value;
    numPagination.value = numPagination.value + 1;

    console.log("num", num.value);
    console.log("numb", numb.value);
    console.log("numc", numc.value);
    console.log("prieiro acesso", firstGo.value);
    // console.log("prieiro acesso", dataI.value);
  };
  const goBackPage = () => {
    if (numPagination.value === 1) {
      return;
    }
    if (firstGo.value > 0) {
      num.value = num.value - 4;
      console.log("num", num.value);
      numb.value = numb.value - 4;
      if (!teste.value) {
        numc.value = numc.value - 4;
      }
    }

    if (numPagination.value === 1) {
      return console.log("acabou");
    }
    // num.value = num.value - 4;
    console.log("num", num.value);
    // numb.value = numb.value - 4;
    app.value = dataOne.value;
    // numc.value = numc.value - 4;

    numPagination.value = numPagination.value - 1;

    if (teste.value) {
      console.log("caiu aqui", numc.value);
      dataOne.value = appStore.urgentemente.slice(
        num.value,
        appStore.urgentemente.length - numc.value
      );
      console.log("urgentemente.length", appStore.urgentemente.length);
      app.value = dataOne.value;
      numc.value = 0;
    } else {
      dataOne.value = appStore.urgentemente.slice(num.value, numb.value);
      app.value = dataOne.value;
      console.log("caius aqui agora");
    }
    firstGo.value--;
    if (numPagination.value == 1) {
      setValuePage();
    }
    teste.value = false;
    console.log("num", num.value);
    console.log("numb", numb.value);
    console.log("numc", numc.value);
    console.log("prieiro acesso", firstGo.value);
  };
  const setValuePage = () => {
    num.value = 4;
    numb.value = 8;
    numc.value = appStore.urgentemente.length;
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
    urgentemente,
    numPagination,
    setValuePage,
    goBackPage,
    toGoPage,
  };
});
