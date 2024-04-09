<template>
  <v-card color="primary" class="secund">
    <div class="content">
      <v-tooltip :text="activity">
        <template v-slot:activator="{ props }">
          <div class="limited">
            <span class="text" v-bind="props">
              {{ activity ? activity : "Hello word" }}</span
            >
          </div>
        </template>
      </v-tooltip>
    </div>
    <div class="iconBox">
      <span
        id="icod"
        class="material-symbols-outlined"
        @click="appStore.deleteValueInJson(item)"
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
  activity: string;
  setData?: Function;
  item?: any;
}>();

const editDate = (item: any) => {
  const obj = {
    text: item.text,
    id: item.id,
    type: item.type,
  };
  appStore.stepEdit = true;
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
  width: 80%;
  display: flex;
  align-items: flex-start;
}
.iconBox {
  width: 20%;
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
.limited {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
