<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="first">
    <span class="title">{{ title ? title : "Card de teste" }}</span>
    <div
      v-if="data.length > 0"
      v-for="item in data"
      :key="item.id"
      class="line"
    >
      <CardSecund :activity="item.text" :item="item" />
    </div>
    <span v-else>todas as atividades foram comcluidas!</span>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import CardSecund from "../../components/CardSecundario/index.vue";
import Footer from "../../components/Footer/index.vue";
defineProps<{
  title?: string | undefined;
  data?: any;
  setData?: Function;
}>();
</script>

<style lang="scss" scoped>
.first {
  border-radius: 4px;
  background: #fff;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.title {
  color: black;
  font-family: sans-serif;
  font-size: 18px;
  margin-bottom: 20px;
}
.line {
  width: 100%;
}
</style>
