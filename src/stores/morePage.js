import { defineStore } from "pinia";
import { getEntireRoomList } from "@/service";


const useMorePageStore = defineStore("morePage", {
  state: () => ({
    EntireRoomList: {}
  }),
  actions: {
    async fetchEntireRoomList(offset = 0, size = 20) {
      const res = await getEntireRoomList(offset, size)
      this.EntireRoomList = res
      console.log(this.EntireRoomList)
    }
  }
})

export default useMorePageStore