<template>
  <div class="footer">
    <span>Paginas</span>
    <div class="boxs">
      <v-btn flat @click="pagination.goBackPage()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <span>{{ pagination.numPagination }}</span>
      <v-btn flat @click="pagination.toGoPage()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePagination } from "../../store/pagination";
const pagination = usePagination();
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  margin-top: 20px;
}
.boxs {
  width: 160px;
  /* border: 1px solid; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
