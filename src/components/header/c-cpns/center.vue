<template>
  <div class="center">
    <div class="text">
      <span class="first">任何地方</span>
      <span class="first">任意一周</span>
      <span class="last">添加人数</span>
    </div>

    <div class="search-logo">
      <SearchBar/>
    </div>
    
  </div>
</template>

<script setup>
import SearchBar from "@/assets/svg/search_bar.vue";
</script>

<style lang="less" scoped>
  .center{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 320px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    //实现淡入淡出出
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.4s ease-in-out;

    .text{
      display: flex;
      justify-self: center;
      align-items: center;

      .first{
        border-right: 1px solid #ccc;
        line-height: 30px;
        height: 30px;
        padding-left: 16px;
        padding-right: 16px;
      }

      .last{
        padding: 0 16px;
        font-weight: 300 ;
      }
    }

    .search-logo{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      border-radius: 50%;
      background: #fd1717;
      width: 32px;
      height: 32px;
    }

    &:hover{
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }

  }
</style>