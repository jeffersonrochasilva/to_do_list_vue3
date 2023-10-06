import { defineStore } from "pinia";
import { Ref, ref } from "vue";

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
  urgentemente: Ref<TaskItem[]>;
  oQuantoAntes: Ref<TaskItem[]>;
  seSobrarTempo: Ref<TaskItem[]>;
  pushInActivitiesCheck: Ref<any>;
  setUrgentemente: Ref<any>;
  setSeSobrarTempo: Ref<any>;
  setoQuantoAntes: Ref<any>;
  pushUrgentemente: Ref<any>;
  pushOQuantoAntes: Ref<any>;
  pushSeSobrarTempo: Ref<any>;
  activitiesCheck: Ref<ActivitiesFace[]>;
}

export const useAppStore = defineStore("app", () => {
  const nome: Ref<string> = ref("jefferson");

  const urgentemente: Ref<TaskItem[]> = ref([
    { text: "pagar a conta de luz", id: 1 },
    { text: "fazer compras", id: 2 },
    { text: "pagar a conta de gaz", id: 3 },
  ]);
  const oQuantoAntes: Ref<TaskItem[]> = ref([
    { text: "ir ao mercado", id: 1 },
    { text: "cortar o cabelo", id: 2 },
    { text: "fazer as unhas", id: 3 },
  ]);
  const seSobrarTempo: Ref<TaskItem[]> = ref([
    { text: "visitar os amigos", id: 1 },
    { text: "ir ao bar", id: 2 },
    { text: "comprar roupas", id: 3 },
  ]);

  const activitiesCheck = ref([{ name: "colocar o lixa pra fora" }]);

  const setUrgentemente = (item: string) => {
    const arr = urgentemente.value.filter((params) => params.text != item);
    urgentemente.value = arr;
    console.log(urgentemente.value, `arr`);
  };
  const setoQuantoAntes = (item: string) => {
    const arr = oQuantoAntes.value.filter((params) => params.text != item);
    oQuantoAntes.value = arr;
    console.log(oQuantoAntes.value, `arr`);
  };
  const setSeSobrarTempo = (item: string) => {
    const arr = seSobrarTempo.value.filter((params) => params.text != item);
    seSobrarTempo.value = arr;
    console.log(seSobrarTempo.value, `arr`);
  };

  const pushInActivitiesCheck = (item: string) => {
    activitiesCheck.value.push({ name: item });
    console.log(activitiesCheck.value, `value`);
  };

  const pushUrgentemente = (item: string) => {
    urgentemente.value.push({ text: item, id: oQuantoAntes.value.length + 2 });
    console.log(urgentemente.value, `ùrgentemente`);
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
  return {
    nome,
    urgentemente,
    oQuantoAntes,
    seSobrarTempo,
    activitiesCheck,
    setoQuantoAntes,
    setUrgentemente,
    setSeSobrarTempo,
    pushUrgentemente,
    pushOQuantoAntes,
    pushSeSobrarTempo,
    pushInActivitiesCheck,
  } as unknown as AppState;
});
