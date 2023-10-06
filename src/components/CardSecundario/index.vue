<template>
  <div class="secund">
    <span>{{ activity ? activity : "Hello word" }}</span>
    <span
      id="icon"
      @click="setData(activity)"
      class="material-symbols-outlined"
    >
      check
    </span>
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
  border-radius: 4px;
  background: rgba(255, 0, 0, 0.104);
}
#icon {
  color: red;
}
</style>
