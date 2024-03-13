import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import axios from "axios";
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
  getAllApis: Ref<any>;
  setSnackbar: Ref<any>;
  snackbar: Ref<boolean>;
  setDateFormated: Ref<any>;
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
  deleteItemActivitiesCheck: Ref<any>;
  activitiesCheck: Ref<ActivitiesFace[]>;
}

export const useAppStore = defineStore("app", () => {
  const pagination = usePagination();
  const nome: Ref<string> = ref("jefferson");
  const teste: Ref<string> = ref("");
  const typeOfRegister: Ref<string> = ref("");
  const urgentemente: Ref<TaskItem[]> = ref([]);
  const oQuantoAntes: Ref<TaskItem[]> = ref([]);
  const seSobrarTempo: Ref<TaskItem[]> = ref([]);
  const concluidas: Ref<TaskItem[]> = ref([]);
  const dateFormated: Ref<TaskItem[]> = ref([]);

  const activitiesCheck = ref([{ name: "colocar o lixa pra fora" }]);
  const color: Ref<string> = ref("");
  const text: Ref<string> = ref("");
  const snackbar: Ref<boolean> = ref(false);

  const setUrgentemente = (item: string) => {
    const arr = urgentemente.value.filter((params) => params.text != item);
    urgentemente.value = arr;
  };
  const setoQuantoAntes = (item: string) => {
    const arr = oQuantoAntes.value.filter((params) => params.text != item);
    oQuantoAntes.value = arr;
  };
  const setSeSobrarTempo = (item: string) => {
    const arr = seSobrarTempo.value.filter((params) => params.text != item);
    seSobrarTempo.value = arr;
  };

  const pushInActivitiesCheck = async (item: TaskItem) => {
    const obj = {
      text: item.text,
      type: item.type,
      id: (Math.floor(Math.random() * 900) + 100).toString(),
    };
    console.log("item do inicio", item);
    console.log("objeto do inicio", obj);
    try {
      await axios.post("http://localhost:3000/concluidas", obj);
      await deleteValueInJson(item);
      getAllApis();
    } catch (error: any) {
      console.log(error, "error");
    }
  };

  const getDateUrgentemente = async () => {
    try {
      const response = await axios.get("http://localhost:3000/urgentemente");
      urgentemente.value = response.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getDateoQuantoAntes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/oQuantoAntes");
      oQuantoAntes.value = response.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getActivitiesCheck = async () => {
    try {
      const response = await axios.get("http://localhost:3000/concluidas");
      concluidas.value = response.data;
    } catch (e: any) {
      console.log(e, "error");
    }
  };

  const getDateseSobrarTempo = async () => {
    try {
      const response = await axios.get("http://localhost:3000/seSobrarTempo");
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
      await axios.post(`http://localhost:3000/${typeOfRegister.value}`, obj);
      getAllApis();
    } catch (e) {
      console.log("error", e);
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
      await axios.delete(`http://localhost:3000/concluidas/${item}`);
      getActivitiesCheck();
    } catch (error: any) {
      console.log("ërror", error);
    }
  };
  const setDateFormated = (array: any) => {
    console.log("testando mais uma ves");
  };
  const getAllApis = async () => {
    await getDateUrgentemente();
    await getDateoQuantoAntes();
    await getDateseSobrarTempo();
  };
  const editValueInJson = async (item: any) => {
    console.log("item do editar", item);
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
    console.log("funcao de selecionar a funcao de excluir", item);
    if (item.type === "b") {
      await deleteUrgentemente(item.id);
    }
    if (item.type === "c") {
      await deleteoQuantoAntes(item.id);
    }
    if (item.type === "d") {
      await deleteseSobrarTempo(item.id);
    } else {
      console.log("ERROR");
    }
  };

  const editarUrgentemente = async (item: any) => {
    try {
      await axios.put(`http://localhost:3000/urgentemente/${item.id}`, item);
      await getDateUrgentemente();
      pagination.toGoPage();
    } catch (error: any) {
      console.log(error);
    }
  };
  const editaroQuantoAntes = async (item: any) => {
    try {
      await axios.put(`http://localhost:3000/oQuantoAntes/${item.id}`, item);
      await getDateoQuantoAntes();
    } catch (error: any) {
      console.log(error);
    }
  };
  const editarseSobrarTempo = async (item: any) => {
    try {
      await axios.put(`http://localhost:3000/seSobrarTempo/${item.id}`, item);
      await getDateseSobrarTempo();
    } catch (error: any) {
      console.log(error);
    }
  };

  const deleteoQuantoAntes = async (item: any) => {
    console.log("testando", item);
    try {
      await axios.delete(`http://localhost:3000/oQuantoAntes/${item}`);
      await getDateoQuantoAntes();
    } catch (error: any) {
      console.log(error, "errorrrrrrr");
    }
  };
  const deleteUrgentemente = async (item: any) => {
    console.log("testando", item);
    try {
      await axios.delete(`http://localhost:3000/urgentemente/${item}`);
      await getDateUrgentemente();
    } catch (error: any) {
      console.log(error, "errorrrrrrr");
    }
  };
  const deleteseSobrarTempo = async (item: any) => {
    console.log("testando", item);
    try {
      await axios.delete(`http://localhost:3000/seSobrarTempo/${item}`);
      await getDateseSobrarTempo();
    } catch (error: any) {
      console.log(error, "errorrrrrrr");
    }
  };
  const setTeste = (item: any) => {
    teste.value = item.text;
  };
  getActivitiesCheck();
  return {
    nome,
    text,
    teste,
    color,
    snackbar,
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
    editValueInJson,
    setDateFormated,
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
    deleteItemActivitiesCheck,
  } as unknown as AppState;
});
