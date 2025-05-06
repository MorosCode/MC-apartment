<template>
  <div class="wrapper">
    <div class="title">
      <h2>热门目的地</h2>
      <div class="subtitle">品质房源，低至&nbsp;5&nbsp;折扣</div>
    </div>
    <ScrollView>
      <button
        v-for="(items, key) in HomeDiscountData?.dest_list"
        :key="key"
        @click="changeCity(key)"
        class="button-style"
        :class="{ 'active': selectedCity === key }"
      >
        {{ key }}
      </button>   
    </ScrollView>

    <div class="item-house-picture">
      <item-home
        v-for="(item, index) in currentCityData"
        :key="index"
        :itemData="item"
        width="33.3%"
      />
    </div>
    <router-link to="/morePage" class="more-house">显示更多{{ selectedCity }}房源 ></router-link>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/home";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import itemHome from "@/components/item/item-home.vue";
import ScrollView from "@/components/scroll-view/scroll-view.vue";
//动态获取数据
const homeStore = useHomeStore();
homeStore.fetchHomeDiscountData();
const { HomeDiscountData } = storeToRefs(homeStore);
0;
const selectedCity = ref("佛山");
const currentCityData = computed(() => {
  return HomeDiscountData.value?.dest_list?.[selectedCity.value];
});
//按钮切换
function changeCity(city) {
  selectedCity.value = city;
  console.log(selectedCity.value);
}
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
    .button-style {
      box-sizing: border-box;
      flex-basis: 120px;
      flex-shrink: 0;
      padding: 14px 16px;
      margin-right: 30px;
      border-radius: 3px;
      font-size: 17px;
      text-align: center;
      border: 0.5px solid #d8d8d8;
      white-space: nowrap;
      cursor: pointer;
      overflow: hidden;
    }

    .active{
        background-color: #b4983bf6;
        color: #fff;
        font-weight: 600;
      }

  .item-house-picture {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .more-house {
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