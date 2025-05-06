<template>
  <div class="wrapper">
    <div class="top">
      <div class="close-btn" @click="closeShow()">
        <close />
      </div>
    </div>
    <div class="slider">
      <div class="control">
        <div class="btn left" @click="change(-1)"><leftArrow /></div>
        <div class="btn right" @click="change(+1)"><rightArrow /></div>
      </div>
      <div class="picture">
        <transition name="fade" mode="out-in">
          <img :key="currentIndex" :src="pictures[currentIndex]" alt="" />
        </transition>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import close from "@/assets/svg/close.vue";
import leftArrow from "@/assets/svg/left-arrow.vue";
import rightArrow from "@/assets/svg/right-arrow.vue";

const currentIndex = ref(0);

const emit = defineEmits(['close']);

const props = defineProps({
  pictures: Object,
  default: () => {
    {
    }
  },
});

function change(direction) {
  const pic_length = Object.keys(props.pictures).length;
  console.log(pic_length);
  currentIndex.value =
    (currentIndex.value + direction + pic_length) % pic_length;
  console.log(currentIndex.value);
}

function closeShow(){
  emit('close');
}


</script>

<style lang="less" scoped>
.wrapper {
  position: fixed;
  z-index: 999; // -1 1 9 99 999
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    margin-bottom: 100px;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #ffffff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
  }

  /* 添加淡入淡出动画 */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>