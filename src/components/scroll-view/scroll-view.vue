<template>
  <div class="view-wrapper">
    <div
      v-if="showLeft"
      class="control left"
      @click="handleControlClick(false)"
    >
      <leftArrow />
    </div>

    <div
      v-if="showRight"
      class="control right"
      @click="handleControlClick(true)"
    >
      <rightArrow />
    </div>

    <div class="scroll">
      <div
        class="scroll-content"
        ref="scrollContent"
        :style="{ transform: `translateX(-${currentOffset}px)` }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated } from "vue";
import rightArrow from "@/assets/svg/right-arrow.vue";
import leftArrow from "@/assets/svg/left-arrow.vue";

const showLeft = ref(false);
const showRight = ref(false);
const currentOffset = ref(0);
const totalDistance = ref(0);
const scrollContent = ref(null);
const posIndex = ref(0);

const updateButtonVisibility = () => {
  if (!scrollContent.value) return;

  const scrollWidth = scrollContent.value.scrollWidth;
  const clientWidth = scrollContent.value.clientWidth;
  totalDistance.value = scrollWidth - clientWidth;

  showRight.value = totalDistance.value > currentOffset.value;
  showLeft.value = currentOffset.value > 0;
};

const handleControlClick = (isRight) => {
  const newIndex = isRight ? posIndex.value + 1 : posIndex.value - 1;
  const newEl = scrollContent.value.children[newIndex];
  if (!newEl) return;

  const newOffsetLeft = newEl.offsetLeft;
  currentOffset.value = newOffsetLeft;
  posIndex.value = newIndex;

  updateButtonVisibility();
};

onUpdated(updateButtonVisibility);
</script>

<style  lang="less" scoped>
.view-wrapper {
  position: relative;
}

.scroll {
  overflow: hidden;
}

.scroll-content {
  display: flex;
  flex-shrink: 0;
  box-sizing: content-box;
  transition: transform 0.3s ease;
}
.control {
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-color: #fff;
  background: #fff;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
  cursor: pointer;
}

.left {
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
}

.right {
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
}
</style>