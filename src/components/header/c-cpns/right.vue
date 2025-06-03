<template>
  <div class="right">
    <div class="btn">
      <Global/>
    </div>
    <div class="menu-user">
        <Menu/>  
        <User/>
    </div>
  </div>
</template>

<script setup>
import Global from "@/assets/svg/global.vue";
import Menu from "@/assets/svg/menu.vue";
import User from "@/assets/svg/user.vue";
</script>

<style lang="less" scoped>
.right {
  display: flex;
  align-items: center;
  .btn {
    padding: 15px;
    margin-right: 5px;
  }
  .btn:hover{
    border-radius: 50%;
    background: #f1f1f1;
  }
  .menu-user {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;

    &:hover{
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2) ;
      transition: box-shadow 300ms ease ;
    }
  }
}
</style>