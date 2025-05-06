<template>
  <div class="moreRooms">
    <div class="items" v-for="(item, key) in EntireRoomList.list" :key="key">
      <itemSwipe :itemData="item" width="400px" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useMorePageStore from "@/stores/morePage";
import itemSwipe from "@/components/item/item-swipe.vue";
import { watch } from "vue";

const props = defineProps(['currentPage']);

const morePageStore = useMorePageStore();
// morePageStore.fetchEntireRoomList();
const { EntireRoomList } = storeToRefs(morePageStore);

// 封装数据加载方法
const loadRooms = () => {
  morePageStore.fetchEntireRoomList((props.currentPage - 1) * 20)
}

// 初始加载
loadRooms()

// 监听页码变化
watch(() => props.currentPage, () => {
  loadRooms()
})

</script>

<style lang="less" scoped>
.moreRooms {
  display: flex;
  flex-wrap: wrap;
  width: 2000px;
}
</style>