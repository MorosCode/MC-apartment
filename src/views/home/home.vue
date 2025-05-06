<template>
  <div class="home">
    <div class="banner"></div>
    <div class="content">
      <div class="section4">
        <layoutV4/>
      </div>
      <div class="section5">
        <layoutV5/>
      </div>
      <div class="section3">
        <layoutV3 />
      </div>
      <div class="section1">
        <layoutV1 />
      </div>
      <div class="section2">
        <layoutV2 />
      </div>
      <div class="section6">
        <layoutV6/>
      </div>
    </div>
  </div>
</template>

<script setup>
import layoutV1 from "./cps/layout-v1.vue";
import layoutV2 from "./cps/layout-v2.vue";
import layoutV3 from "./cps/layout-v3.vue";
import layoutV4 from "./cps/layout-v4.vue";
import layoutV5 from "./cps/layout-v5.vue";
import layoutV6 from "./cps/layout-v6.vue";
</script>

<style lang="less" scoped>
.banner {
  height: 529px;
  background: url("@/assets/img/banner.jpeg") center/cover;
}

.content{
  width: 1080px;
  margin: 0 auto;

  .section1 {
    margin: 20px 0px;
  }

  .section2 {
    margin: 20px 0px;
  }
  .section3 {
    margin: 20px 0px;
  }
  .section4 {
    margin: 20px 0px;
  }
  .section5 {
    margin: 20px 0px;
  }
  .section6 {
    margin: 20px 0px;
  }


}
</style>