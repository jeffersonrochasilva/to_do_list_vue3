import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import axios from "axios";
import { HTTP } from "../http";
import { usePagination } from "./pagination";
// Interface para representar um item de tarefa
interface TaskItem {
  text: string;
  type: string;
  id: number;
}
interface ActivitiesFace {
  name: string;
}

// Interface para representar o estado do store
interface AppState {
  nome: Ref<string>;
  teste: Ref<string>;
  text: Ref<string>;
  color: Ref<string>;
  setTeste: Ref<any>;
  idEdite: Ref<string>;
  getAllApis: Ref<any>;
  setSnackbar: Ref<any>;
  stepForm: Ref<boolean>;
  stepEdit: Ref<boolean>;
  snackbar: Ref<boolean>;
  typeEdite: Ref<string>;
  stepRouter: Ref<number>;
  stepCircle: Ref<boolean>;
  reloadinInPage: Ref<any>;
  editValueInJson: Ref<any>;
  setUrgentemente: Ref<any>;
  setoQuantoAntes: Ref<any>;
  setSeSobrarTempo: Ref<any>;
  deleteValueInJson: Ref<any>;
  concluidas: Ref<TaskItem[]>;
  typeOfRegister: Ref<string>;
  deleteoQuantoAntes: Ref<any>;
  editarUrgentemente: Ref<any>;
  deleteUrgentemente: Ref<any>;
  editaroQuantoAntes: Ref<any>;
  getActivitiesCheck: Ref<any>;
  deleteseSobrarTempo: Ref<any>;
  dateFormated: Ref<TaskItem[]>;
  urgentemente: Ref<TaskItem[]>;
  oQuantoAntes: Ref<TaskItem[]>;
  getDateUrgentemente: Ref<any>;
  registerNewactivity: Ref<any>;
  getDateoQuantoAntes: Ref<any>;
  editarseSobrarTempo: Ref<any>;
  seSobrarTempo: Ref<TaskItem[]>;
  getDateseSobrarTempo: Ref<any>;
  pushInActivitiesCheck: Ref<any>;
  reloadingUrgentemente: Ref<any>;
  realoadingOQuantoAntes: Ref<any>;
  reloadingSeSobrarTempo: Ref<any>;
  reloadingactivitesCheck: Ref<any>;
  deleteItemActivitiesCheck: Ref<any>;
  activitiesCheck: Ref<ActivitiesFace[]>;
}

export const useAppStore = defineStore("app", () => {
  const pagination = usePagination();
  const nome = ref("");
  const teste = ref("");
  const typeOfRegister = ref("");
  const urgentemente = ref([]);
  const oQuantoAntes = ref([]);
  const seSobrarTempo = ref([]);
  const concluidas = ref([]);
  const dateFormated = ref([]);
  const stepForm = ref(true);
  const stepCircle = ref(false);
  const stepRouter = ref(0);
  const stepEdit = ref(false);
  const idEdite = ref("");
  const typeEdite = ref("");

  const activitiesCheck = ref([{ name: "colocar o lixa pra fora" }]);
  const color = ref("");
  const text = ref("");
  const snackbar = ref(false);

  const setUrgentemente = (item: string) => {
    const arr = urgentemente.value.filter(
      (params: TaskItem) => params.text != item
    );
    urgentemente.value = arr;
  };
  const setoQuantoAntes = (item: string) => {
    const arr = oQuantoAntes.value.filter(
      (params: TaskItem) => params.text != item
    );
    oQuantoAntes.value = arr;
  };
  const setSeSobrarTempo = (item: string) => {
    const arr = seSobrarTempo.value.filter(
      (params: TaskItem) => params.text != item
    );
    seSobrarTempo.value = arr;
  };

  const pushInActivitiesCheck = async (item: TaskItem) => {
    console.log("item do check", item);
    const obj = {
      text: item.text,
      type: item.type,
      id: (Math.floor(Math.random() * 900) + 100).toString(),
    };

    try {
      await axios.post(`${HTTP.development}concluidas`, obj);
      await deleteValueInJson(item);
      await reloadinInPage();
    } catch (error: any) {
      console.log(error, "error");
    }
  };

  const getDateUrgentemente = async () => {
    try {
      const response = await axios.get(`${HTTP.development}urgentemente`);
      urgentemente.value = response.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getDateoQuantoAntes = async () => {
    try {
      const response = await axios.get(`${HTTP.development}oQuantoAntes`);
      oQuantoAntes.value = response.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getActivitiesCheck = async () => {
    try {
      const response = await axios.get(`${HTTP.development}concluidas`);
      concluidas.value = response.data;
      // console.log("concluidas", conslcu)
    } catch (error: any) {
      console.log(error, "error");
    }
  };

  const getDateseSobrarTempo = async () => {
    try {
      const response = await axios.get(`${HTTP.development}seSobrarTempo`);
      seSobrarTempo.value = response.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const registerNewactivity = async (itemOne?: string, itemTwo?: string) => {
    const newId = Math.floor(Math.random() * 900) + 100;
    const newType = (function () {
      if (typeOfRegister.value === "urgentemente") {
        return "b";
      } else if (typeOfRegister.value === "seSobrarTempo") {
        return "d";
      } else if (typeOfRegister.value === "oQuantoAntes") {
        return "c";
      }
    })();
    const obj = {
      text: itemTwo,
      id: newId.toString(),
      type: newType,
    };
    try {
      await axios.post(`${HTTP.development}${typeOfRegister.value}`, obj);
      reloadinInPage();
    } catch (error) {
      console.log(error, "error");
    }
  };

  const setSnackbar = (item: string, params: string) => {
    text.value = item;
    color.value = params;
    snackbar.value = true;
    setTimeout(() => {
      snackbar.value = false;
    }, 3000);
  };
  const deleteItemActivitiesCheck = async (item: any) => {
    try {
      await axios.delete(`${HTTP.development}concluidas/${item}`);
      getActivitiesCheck();
    } catch (error: any) {
      console.log(error, "error");
    }
  };

  const getAllApis = async () => {
    try {
      await getDateUrgentemente();
      await getDateoQuantoAntes();
      await getDateseSobrarTempo();
      await getActivitiesCheck();
    } catch (error: any) {
      console.log(error, "error");
    }
  };
  const editValueInJson = async (item: any) => {
    if (item.type === "b") {
      await editarUrgentemente(item);
    }
    if (item.type === "c") {
      await editaroQuantoAntes(item);
    }
    if (item.type === "d") {
      await editarseSobrarTempo(item);
    }
  };
  const deleteValueInJson = async (item: any) => {
    console.log("item", item.type);
    if (item.type === "b") {
      await deleteUrgentemente(item.id);
    } else if (item.type === "c") {
      await deleteoQuantoAntes(item.id);
    } else if (item.type === "d") {
      await deleteseSobrarTempo(item.id);
    } else {
      console.log("ERROR");
    }
    await reloadinInPage();
  };

  const editarUrgentemente = async (item: any) => {
    try {
      await axios.put(`${HTTP.development}urgentemente/${item.id}`, item);
      await getDateUrgentemente();
      pagination.toGoPage();
    } catch (error: any) {
      console.log(error);
    }
  };
  const editaroQuantoAntes = async (item: any) => {
    try {
      await axios.put(`${HTTP.development}oQuantoAntes/${item.id}`, item);
      await getDateoQuantoAntes();
    } catch (error: any) {
      console.log(error);
    }
  };
  const editarseSobrarTempo = async (item: any) => {
    try {
      await axios.put(`${HTTP.development}seSobrarTempo/${item.id}`, item);
      await getDateseSobrarTempo();
    } catch (error: any) {
      console.log(error, "errorrr");
    }
  };

  const deleteoQuantoAntes = async (item: any) => {
    try {
      await axios.delete(`${HTTP.development}oQuantoAntes/${item}`);
      await getDateoQuantoAntes();
    } catch (error: any) {
      console.log(error, "errorrrrrrr");
    }
  };
  const deleteUrgentemente = async (item: any) => {
    try {
      await axios.delete(`${HTTP.development}urgentemente/${item}`);
      await getDateUrgentemente();
    } catch (error: any) {
      console.log(error, "errorrrrrrr");
    }
  };
  const deleteseSobrarTempo = async (item: any) => {
    try {
      await axios.delete(`${HTTP.development}seSobrarTempo/${item}`);
      await getDateseSobrarTempo();
    } catch (error: any) {
      console.log(error, "errorrrrrrr");
    }
  };
  const setTeste = (item: any) => {
    teste.value = item.text;
    idEdite.value = item.id;
    typeEdite.value = item.type;
  };
  const reloadingUrgentemente = async () => {
    await getAllApis();
    stepCircle.value = true;
    setTimeout(() => {
      pagination.setValuePage();
      pagination.data = urgentemente.value;
      pagination.toGoPage();
      stepCircle.value = false;
      stepRouter.value = 1;
    }, 300);
  };
  const realoadingOQuantoAntes = async () => {
    pagination.setValuePage();
    await getAllApis();
    stepCircle.value = true;
    setTimeout(() => {
      pagination.data = oQuantoAntes.value;
      pagination.toGoPage();
      stepCircle.value = false;
      stepRouter.value = 3;
    }, 300);
  };
  const reloadingSeSobrarTempo = async () => {
    await getAllApis();
    stepCircle.value = true;
    setTimeout(() => {
      pagination.setValuePage();
      pagination.data = seSobrarTempo.value;
      pagination.toGoPage();
      stepCircle.value = false;
      stepRouter.value = 2;
    }, 300);
  };

  const reloadingactivitesCheck = async () => {
    await getAllApis();
    stepCircle.value = true;
    setTimeout(() => {
      pagination.setValuePage();
      pagination.data = concluidas.value;
      pagination.toGoPage();
      stepCircle.value = false;
      stepRouter.value = 4;
    }, 300);
  };
  getActivitiesCheck();
  const reloadinInPage = async () => {
    if (stepRouter.value === 1) {
      await reloadingUrgentemente();
    } else if (stepRouter.value === 2) {
      await reloadingSeSobrarTempo();
    } else if (stepRouter.value === 3) {
      await realoadingOQuantoAntes();
    } else if (stepRouter.value === 4) {
      await reloadingactivitesCheck();
    }
  };
  return {
    nome,
    text,
    teste,
    color,
    idEdite,
    snackbar,
    stepForm,
    stepEdit,
    typeEdite,
    stepCircle,
    stepRouter,
    concluidas,
    urgentemente,
    dateFormated,
    oQuantoAntes,
    seSobrarTempo,
    typeOfRegister,
    activitiesCheck,
    setTeste,
    getAllApis,
    setSnackbar,
    reloadinInPage,
    editValueInJson,
    setoQuantoAntes,
    setUrgentemente,
    setSeSobrarTempo,
    deleteValueInJson,
    deleteoQuantoAntes,
    deleteUrgentemente,
    editarUrgentemente,
    editaroQuantoAntes,
    getActivitiesCheck,
    deleteseSobrarTempo,
    editarseSobrarTempo,
    registerNewactivity,
    getDateUrgentemente,
    getDateoQuantoAntes,
    getDateseSobrarTempo,
    pushInActivitiesCheck,
    reloadingUrgentemente,
    realoadingOQuantoAntes,
    reloadingSeSobrarTempo,
    reloadingactivitesCheck,
    deleteItemActivitiesCheck,
  } as unknown as AppState;
});
