<template>
  <div class="app-container home">
    <div style="width: 100%">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img :src="swiperImage1" class="bannerImage"/></swiper-slide>
        <swiper-slide><img :src="swiperImage2" class="bannerImage"/></swiper-slide>
        <swiper-slide><img :src="swiperImage3" class="bannerImage"/></swiper-slide>
      </swiper>
    </div>
    <div class="noticeWrapper">
    </div>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
// Import Swiper styles
import 'swiper/dist/css/swiper.css'
export default {
  name: "index",
  components: {swiper, swiperSlide},
  data() {
    return {
      swiperImage1: require('@/assets/images/swiper1.png'),
      swiperImage2: require('@/assets/images/swiper2.png'),
      swiperImage3: require('@/assets/images/swiper3.png'),
      swiperOption: {
        loop: true,
        activeIndex: 2,
        autoplay: {
          delay: 2000,    //秒
          stopOnLastSlide: false,
          disableOnInteraction: false,//滑动不会失效
        }
      },
      
    }
  },
  async created() {

  },
  mounted() {
    
  },
  methods: {
   
  }

}
</script>

<style scoped lang="scss">

.swiper {
  height: 350px;
  //width: 5000px;
}

.swiper-wrapper {
  width: 1000px;
}

.swiper-slide {
  width: 1000px;
  //margin-left: 30px;
}

.bannerImage {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  opacity: 1;
  border: 0;
}

.noticeWrapper{
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .notice_Item{
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 767px){
  // 调整外部边距
  .app-container{
    padding: 0;
  }
  // 轮播图尺寸
  .swiper{
    width: 100%;
    height: 140px;

    & >>> .swiper-wrapper{
      width: 100%;
    }
  }
  .swiper-slide{
    width: 100%;
  }
  .bannerImage{
    width: 100%;
    height: 140px;
  }

  .notice_Item{
    width: 100%;
  }
}
</style>

