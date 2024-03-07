import { defineStore } from "pinia";
import { Ref, ref } from "vue";
export const usePagination = defineStore("pagination", () => {
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
  const firstGo: Ref<boolean> = ref(false);
  const numc: Ref<number> = ref(urgentemente.value.length);
  const app: Ref<any> = ref([]);
  const dataOne: Ref<any> = ref([]);
  const dataTwo: Ref<any> = ref([]);
  // const data: Ref<any> = ref([]);

  const toGoPage = () => {
    firstGo.value = true;
    if (numc.value < 0) {
      return console.log("acabou");
    }
    if (numc.value <= 4) {
      dataOne.value = urgentemente.value.slice(
        num.value,
        urgentemente.value.length
      );
    } else {
      dataOne.value = urgentemente.value.slice(num.value, numb.value);
    }
    num.value = num.value + 4;
    // console.log("mudou aqui", num.value);
    numb.value = numb.value + 4;
    app.value = dataOne.value;
    numPagination.value = numPagination.value + 1;
    numc.value = numc.value - 4;
  };
  const goBackPage = () => {
    if (numPagination.value === 1) {
      return;
    }
    if (firstGo.value) {
      num.value = num.value - 4;
      console.log("mudou aqui 1", num.value);
      numb.value = numb.value - 4;
      app.value = dataOne.value;
      numc.value = numc.value + 4;
    }

    if (numPagination.value === 1) {
      return console.log("acabou");
    }
    num.value = num.value - 4;
    console.log("mudou aqui 2", num.value);
    numb.value = numb.value - 4;
    app.value = dataOne.value;
    numc.value = numc.value + 4;

    numPagination.value = numPagination.value - 1;

    if (numc.value <= 4) {
      dataOne.value = urgentemente.value.slice(
        num.value,
        urgentemente.value.length
      );
    } else {
      dataOne.value = urgentemente.value.slice(num.value, numb.value);
      app.value = dataOne.value;
    }
    firstGo.value = false;
    if (numPagination.value == 1) {
      num.value = 4;
      numb.value = 8;
      numc.value = urgentemente.value.length;
    }
  };
  toGoPage();
  return {
    i,
    num,
    app,
    numb,
    numc,
    dataTwo,
    firstGo,
    dataOne,
    urgentemente,
    numPagination,
    goBackPage,
    toGoPage,
  };
});
