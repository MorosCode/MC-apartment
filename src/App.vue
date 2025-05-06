<template>
  <div class="home">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script setup>
import Header from './components/header/header.vue';
import Footer from './components/footer/footer.vue';
 
</script>

<style lang="less" scoped>
</style>