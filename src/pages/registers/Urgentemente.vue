<template>
  <div>
    <CardFirst title="Urgentemente" :data="appStore.urgentemente" />
  </div>
</template>

<script setup lang="ts">
import CardFirst from "../../components/CardFirst/index.vue";
import { useAppStore } from "../../store/app";
const appStore = useAppStore();
</script>
