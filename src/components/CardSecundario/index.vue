<template>
  <div class="secund">
    <span>{{ activity ? activity : "Hello word" }}</span>
    <h1 @click="setData(activity)">X</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  activity?: String;
  setData: Function;
}>();
</script>

<style lang="scss" scoped>
.secund {
  width: 350px;
  margin: 5px 0;
  height: 40px;
  border: 1px solid red;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
