<template>
  <div class="item-swipe">
    <div class="swiper-container">
      <!-- 图片 -->
      <div class="track" :style="elementOffset">
        <div
          class="swiper-item"
          v-for="(item, index) in itemData.picture_urls"
          :key="index"
          @click="turnToDetail()"
        >
          <img :src="item" alt="资源未加载" />
        </div>
      </div>
      <!-- 按钮 -->
      <button class="right" @click="switchPhoto(-1)">&lt;</button>
      <button class="left" @click="switchPhoto(+1)">&gt;</button>
    </div>
    <!-- 文本信息 -->
    <div class="desc">{{ itemData.verify_info.messages.join(" · ") }}</div>
    <div class="name" @click="turnToDetail()">{{ itemData.name }}</div>
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
  width: {
    type: String,
    default: "300px",
  },
});

const rate = ref(props.itemData.star_rating ? props.itemData.star_rating : 5);

const currentIndex = ref(0);
//偏移量计算
const elementOffset = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

//手动切换
const switchPhoto = (direction) => {
  //循环切换，记录图片数量取余处理
  const total = props.itemData.picture_urls.length;
  currentIndex.value = (currentIndex.value + direction + total) % total;
};
//跳转详情页面
function turnToDetail(){
  console.log("点击了")
  router.push({
    name: 'detail',
    params: {id: props.itemData.id,}
  })

}
</script>

<style lang="less" scoped>
.item-swipe {
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
  cursor: default;
  width: v-bind(width);
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  height: 450px;

  .swiper-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 12px;
    height: 60%;
    cursor: pointer;

    &:hover .right,
    &:hover .left {
      opacity: 1;
    }
    .track {
      display: flex;
      transition: transform 0.5s ease;
      height: 100%;
      .swiper-item {
        flex: 0 0 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(75, 74, 74, 0.5);
      border-radius: 50%;

      color: white;
      border: none;
      padding: 1rem;
      cursor: pointer;
      transition: background 0.3s;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .left {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(75, 74, 74, 0.5);
      border-radius: 50%;

      color: white;
      border: none;
      padding: 1rem;
      cursor: pointer;
      transition: background 0.3s;
      right: 0;
      opacity: 0;
      transition: opacity 0.3s;
    }
  }

  .photo {
    flex: 1;
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