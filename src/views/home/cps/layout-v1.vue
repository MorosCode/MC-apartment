<template>
  <div class="wrapper">
    <div class="title">
      <h2>热门景点附近</h2>
      <div class="subtitle">品质房源，值得选择</div>
    </div>
    <div class="item-house-picture">
      <item-home
        v-for="(item, index) in HomeGoodPriceData?.list?.slice(0, 6)"
        :key="index"
        :itemData="item"
        width="33%"
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
homeStore.fetchHomeGoodPriceData();
const { HomeGoodPriceData } = storeToRefs(homeStore);
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