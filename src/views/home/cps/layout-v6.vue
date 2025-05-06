<template>
  <div class="wrapper">
    <div class="title">
      <h2>也许你还想了解</h2>
    </div>
    <scrollView>
      <item-home
        v-for="(item, index) in HomePlusData?.list?.slice(0, 6)"
        :key="index"
        :itemData="item"
        width="25%"
      />
    </scrollView>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/home";
import { storeToRefs } from "pinia";
import itemHome from "@/components/item/item-home.vue";
import scrollView from "@/components/scroll-view/scroll-view.vue";
//动态获取数据
const homeStore = useHomeStore();
homeStore.fetchHomePlusData();
const { HomePlusData } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.wrapper {
  .title {
    h2 {
      margin-bottom: 16px;
      font-size: 22px;
    }
  }
  .more-house{
    font-size: 17px;
    color: rgba(190, 126, 29, 0.685);
    font-weight: 600;


    &:hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }
}
</style>