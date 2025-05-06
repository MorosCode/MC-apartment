<template>
  <div class="detail">
    <div class="pictures">
      <div class="left">
        <div
          class="item"
          v-for="(item, key) in targetItem.picture_urls.slice(0, 1)"
          :key="key"
        >
          <img :src="item" alt="资源未加载" />
        </div>
      </div>
      <div class="right">
        <div
          class="item"
          v-for="(item, key) in targetItem.picture_urls.slice(1, 5)"
          :key="key"
        >
          <img :src="item" alt="资源未加载" />
        </div>
      </div>
      <div class="button">
        <div class="btn" @click="isShow = true">显示照片</div>
      </div>
    </div>
    <showPictures :pictures="pictures" v-if="isShow" @close="isShow = false"/>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import useMorePageStore from "@/stores/morePage";
import { ref } from "vue";
import showPictures from "./cps/showPictures/showPictures.vue";

//获取选择对象的id
const route = useRoute();
const id = route.params.id;
const isShow = ref(false)

//根据获取的id，在store中找到数据项。
const morePageStore = useMorePageStore();
const targetList = morePageStore.EntireRoomList.list;
const targetItem = targetList.find((item) => item.id === id);
const pictures = targetItem.picture_urls;
console.log(pictures)


</script>

<style lang="less" scoped>
.pictures {
  display: flex;
  height: 600px;
  position: relative;
}
.left,
.right {
  width: 50%;
  height: 100%;
  .item {
    position: relative;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      &:hover {
        transform: scale(1.08);
      }
    }
  }
}
.right {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    border: 1px solid black;
  }
}
.button {
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: 50px;
  padding-bottom: 50px;
  .btn {
    line-height: 22px;
    border-radius: 4px;
    padding: 6px 15px;
    background-color: #fff;
    cursor: pointer;
    transition: transform 200ms ease;

    &:hover {
      background-color: #f0f0f0;
    }
    &:active {
      transform: scale(0.9);
    }
  }
}

</style>