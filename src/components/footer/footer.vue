<template>
  <div class="out-wrapper">
    <div class="footer-wrapper">
      <div class="footer" v-for="item in footerData" :key="item.name">
        <div class="item">
          <div class="title">{{ item.name }}</div>
          <div class="list" v-for="(item_2, index) in item.list" :key="index">
            {{ item_2 }}
          </div>
        </div>
      </div>
    </div>
    <div className='statement'>© 2025 MC-APARTMENT, All right reserved.条款 · 隐私政策 · 随便填点什么 · 凑点字数 ·</div>
  </div>
</template>

<script setup>
import footerData from "@/assets/data/footer.json";
</script>

<style lang="less" scoped>
.out-wrapper {
  border-top: 1px solid #EBEBEB;
  // background-color: #f5f5f5;

  .footer-wrapper {
    width: 1024px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 48px 24px;
    display: flex;
    justify-content: space-between;
    align-items: top;
    border-bottom: 1px solid #EBEBEB;
    .title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px 0;
    }

    .list {
      margin-top: 6px;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .statement{
    // margin-top: 30px;
    padding: 20px;
    color: #767676;
    text-align: center;
  }
}
</style>