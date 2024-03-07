import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import axios from "axios";
// Interface para representar um item de tarefa
interface TaskItem {
  text: string;
  id: number;
}
interface ActivitiesFace {
  name: string;
}

// Interface para representar o estado do store
interface AppState {
  nome: Ref<string>;
  color: Ref<string>;
  text: Ref<string>;
  snackbar: Ref<boolean>;
  dateFormated: Ref<TaskItem[]>;
  typeOfRegister: Ref<string>;
  urgentemente: Ref<TaskItem[]>;
  oQuantoAntes: Ref<TaskItem[]>;
  seSobrarTempo: Ref<TaskItem[]>;
  concluidas: Ref<TaskItem[]>;
  getAllApis: Ref<any>;
  pushInActivitiesCheck: Ref<any>;
  setSnackbar: Ref<any>;
  setDateFormated: Ref<any>;
  setUrgentemente: Ref<any>;
  setSeSobrarTempo: Ref<any>;
  setoQuantoAntes: Ref<any>;
  getActivitiesCheck: Ref<any>;
  pushOQuantoAntes: Ref<any>;
  pushSeSobrarTempo: Ref<any>;
  getDateUrgentemente: Ref<any>;
  deleteItemActivitiesCheck: Ref<any>;
  registerNewactivity: Ref<any>;
  getDateoQuantoAntes: Ref<any>;
  getDateseSobrarTempo: Ref<any>;
  activitiesCheck: Ref<ActivitiesFace[]>;
}

export const useAppStore = defineStore("app", () => {
  const nome: Ref<string> = ref("jefferson");
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
      id: (Math.floor(Math.random() * 900) + 100).toString(),
    };
    try {
      await axios.post("http://localhost:3000/concluidas", obj);
      getAllApis();
    } catch (error: any) {
      console.log(error, "error");
    }
  };

  const pushOQuantoAntes = (item: string) => {
    oQuantoAntes.value.push({ text: item, id: oQuantoAntes.value.length + 2 });
  };
  const pushSeSobrarTempo = (item: string) => {
    seSobrarTempo.value.push({
      text: item,
      id: seSobrarTempo.value.length + 2,
    });
  };

  const getDateUrgentemente = async () => {
    // console.log("chamou urgentemente");

    try {
      const response = await axios.get("http://localhost:3000/urgentemente");
      urgentemente.value = response.data;
      // setDateFormated(urgentemente.value);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getDateoQuantoAntes = async () => {
    // console.log("chamou o quanto antes");

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
    // console.log("chamou se sobrar tempo");
    try {
      const response = await axios.get("http://localhost:3000/seSobrarTempo");
      seSobrarTempo.value = response.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const registerNewactivity = async (itemOne?: string, itemTwo?: string) => {
    // console.log(`http://localhost:3000/${typeOfRegister.value}`, "sdfsasdsd");
    const newId = Math.floor(Math.random() * 900) + 100;
    const obj = {
      text: itemTwo,
      id: newId.toString(),
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
    // console.log("item4", item);
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
  getActivitiesCheck();
  return {
    color,
    nome,
    text,
    snackbar,
    concluidas,
    urgentemente,
    dateFormated,
    oQuantoAntes,
    seSobrarTempo,
    activitiesCheck,
    getAllApis,
    setSnackbar,
    setDateFormated,
    typeOfRegister,
    setoQuantoAntes,
    setUrgentemente,
    setSeSobrarTempo,
    pushOQuantoAntes,
    pushSeSobrarTempo,
    registerNewactivity,
    getDateUrgentemente,
    getDateoQuantoAntes,
    getDateseSobrarTempo,
    pushInActivitiesCheck,
    getActivitiesCheck,
    deleteItemActivitiesCheck,
  } as unknown as AppState;
});
