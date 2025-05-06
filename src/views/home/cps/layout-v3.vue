<template>
  <div class="Long-picture-item">
    <div class="title">{{ HomeLongData.title }}</div>
    <div class="subtitle">{{ HomeLongData.subtitle }}</div>
    <ScrollView>
      <itemHomeSimple v-for="(item, index) in HomeLongData.list" :key="index" :itemData="item" class="simple-item"/>
    </ScrollView>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/home";
import { storeToRefs } from "pinia";
import itemHomeSimple from "@/components/item/item-home-simple.vue";
import ScrollView from "@/components/scroll-view/scroll-view.vue";

const homeStore = useHomeStore()
homeStore.fetchHomeLongData()
const { HomeLongData } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
  .Long-picture-item{
    width: 1080px;
    .title{
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .subtitle{
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
</style>