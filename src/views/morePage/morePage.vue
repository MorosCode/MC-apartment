<template>
  <div class="morePage">
    <div class="room-section">
      <moreRooms :current-page="currentPage"/>
    </div>
    <div class="pagination-section">
      <van-pagination
        v-model="currentPage"
        :page-count="15"
        :show-page-size="5"
        force-ellipses
      />
    </div>
  </div>
</template>

<script setup>
import moreRooms from "./cps/more-rooms/moreRooms.vue";
import { Pagination } from "vant";
import { computed, ref } from "vue";
const currentPage = ref(1)

</script>

<style lang="less" scoped>
.room-section {
  display: flex;
  justify-content: center;
}
.pagination-section{
  margin: 10px 900px;
  --van-pagination-item-default-color: rgba(255, 174, 0, 0.562);
}
</style>