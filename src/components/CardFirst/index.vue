<template>
  <div class="first">
    <span class="title">{{ title ? title : "Card de teste" }}</span>
    <div v-for="item in data" :key="item.id">
      <CardSecund :activity="item.text" :setData="setData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardSecund from "../../components/CardSecundario/index.vue";

defineProps<{
  title?: string | undefined;
  data?: any;
  setData: Function;
}>();
</script>

<style lang="scss" scoped>
.first {
  width: 400px;
  border-radius: 4px;
  border: 1px solid red;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 20px;
  color: #303030;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
