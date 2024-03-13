<template>
  <v-card color="primary" class="secund">
    <div class="content">
      <span>{{ activity ? activity : "Hello word" }}</span>
    </div>
    <div class="iconBox">
      <span
        id="icod"
        class="material-symbols-outlined"
        @click="appStore.deleteUrgentemente(item.id)"
      >
        delete
      </span>
      <span id="ico" class="material-symbols-outlined" @click="editDate(item)">
        edit
      </span>
      <span
        id="icon"
        @click="appStore.pushInActivitiesCheck(item)"
        class="material-symbols-outlined"
      >
        check
      </span>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
defineProps<{
  activity?: String;
  setData?: Function;
  item?: any;
}>();

const editDate = (item: any) => {
  console.log("testando mais uma", item);
  const obj = {
    text: item.text,
    id: item.id,
    type: item.type,
  };
  // appStore.editValueInJson(obj);
  appStore.setTeste(obj);
};
</script>

<style lang="scss" scoped>
.secund {
  width: 100%;
  margin: 5px 0;
  height: 40px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}
.content {
  width: 50%;
  display: flex;
  align-items: flex-start;
}
.iconBox {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
#icon {
  color: greenyellow;
  margin-left: 15px;
}
#ico {
  color: orange;
  margin-left: 15px;
}
#icod {
  color: orangered;
}
</style>
