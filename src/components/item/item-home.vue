<template>
  <div class="item-home">
    <div class="photo">
      <img :src="itemData.picture_url" alt="资源未加载" />
    </div>
    <div class="desc">{{ itemData.verify_info.messages.join(" · ") }}</div>
    <div class="name">{{ itemData.name }}</div>
    <div class="price">¥{{ itemData.price }} / 晚</div>
    <div class="rate">
      <van-rate
        v-model="rate"
        :size="10"
        color="#ffd21e"
        void-color="#eee"
        readonly
        allow-half
      />
      <span class="reviewCount"> {{ itemData.reviews_count }}人评价</span>
      <span class="content">{{
        itemData.bottom_info?.content ? "·" + itemData.bottom_info.content : ""
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
  width: {
    type: String,
    default: "33.3%",
  },
});

const rate = ref(props.itemData.star_rating ? props.itemData.star_rating : 5);
</script>

<style lang="less" scoped>
.item-home {
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
  cursor: default;
  width: v-bind(width);
  height: 350px;
  padding-right: 10px;
  display: flex;
  flex-direction:column;
  margin-bottom: 10px;

  .photo {
    flex:1;
    background-color: #999999;
    border-radius: 10px;
    overflow: hidden;
    img {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: #767676;
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.5em; 
    min-height: 3em;

    &:hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }

  .price {
    margin: 8px 0;
  }

  .rate {
    display: flex;
    align-items: center;

    .reviewCount {
      padding-left: 8px;
      font-weight: 700;
    }
    .content {
      font-weight: 700;
    }
  }
}
</style>