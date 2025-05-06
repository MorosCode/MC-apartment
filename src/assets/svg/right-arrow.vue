<template>
  <div class="left-arrow">
    <svg viewBox="0 0 18 18" role="img" aria-hidden="false" aria-label="next" focusable="false"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
  </div>
   
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "20px",
  },
  hight: {
    type: String,
    default: "20px",
  },
})

 
</script>

<style lang="less" scoped>
.left-arrow{
  height: v-bind(hight);
  width: v-bind(width);
  display: block;
  fill: currentcolor;
}
</style>