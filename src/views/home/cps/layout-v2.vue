<template>
  <div class="wrapper">
    <div class="title">
      <h2>高性价比租房</h2>
    </div>
    <div class="item-house-picture">
      <item-home
        v-for="(item, index) in HomeHighScoreData?.list?.slice(0, 8)"
        :key="index"
        :itemData="item"
        width="25%"
      />
    </div>
    <router-link to="/morePage" class="more-house">显示更多房源  ></router-link>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/home";
import { storeToRefs } from "pinia";
import itemHome from "@/components/item/item-home.vue";
//动态获取数据
const homeStore = useHomeStore();
homeStore.fetchHomeHighScoreData();
const { HomeHighScoreData } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.wrapper {
  .title {
    h2 {
      margin-bottom: 16px;
      font-size: 22px;
    }
    .subtitle {
      margin-bottom: 20px;
      font-size: 16px;
    }
  }

  .item-house-picture {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
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