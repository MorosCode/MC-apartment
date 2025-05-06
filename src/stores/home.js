import { defineStore } from "pinia";
import { getHomeGoodPriceData, getHomeLongData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomePlusData } from "@/service";


const useHomeStore = defineStore("home", {
  state: () => ({
    HomeGoodPriceData: {},
    HomeLongData: {},
    HomeHighScoreData: {},
    HomeDiscountData: {},
    HomeHotRecommendData: {},
    HomePlusData: {},
  }),
  actions: {
    async fetchHomeGoodPriceData() {
      const res = await getHomeGoodPriceData()
      this.HomeGoodPriceData = res
    },
    async fetchHomeLongData() {
      const res = await getHomeLongData()
      this.HomeLongData = res
    },
    async fetchHomeHighScoreData() {
      const res = await getHomeHighScoreData()
      this.HomeHighScoreData = res
    },
    async fetchHomeDiscountData() {
      const res = await getHomeDiscountData()
      this.HomeDiscountData = res
    },
    async fetchHomeHotRecommendData() {
      const res = await getHomeHotRecommendData()
      this.HomeHotRecommendData = res
    },
    async fetchHomePlusData() {
      const res = await getHomePlusData()
      this.HomePlusData = res
    },
  }
})

export default useHomeStore