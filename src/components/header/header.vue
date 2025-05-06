<template>
  <div class="header">
    <div class="left">
      <Left />
    </div>
    <div class="center">
      <div class="content">
        <Center />
      </div>
    </div>
    <div class="right">
      <Right />
    </div>
  </div>
</template>

<script setup>
import Right from "./c-cpns/right.vue";
import Left from "./c-cpns/left.vue";
import Center from "./c-cpns/center.vue";
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #f0f0f0;
  .left {
    padding: 10px;
  }
  .center {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .right {
  }
}
</style>