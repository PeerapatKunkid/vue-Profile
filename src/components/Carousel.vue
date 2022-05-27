<script>
import { ref, watch, toRefs } from 'vue'
import { Navigation, Pagination, A11y, Lazy, Thumbs } from 'swiper'
 import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';



export default {
  components: {
    Swiper, 
    SwiperSlide
  },
  props: {
    currentSlide: Number,
    thumbs: Object
  },
  setup(props) {
    const swiperRef = ref(null)

    const { currentSlide } = toRefs(props)

    watch(currentSlide, () => {
      if(swiperRef.value !== null) {
        swiperRef.value.slideTo(props.currentSlide)
      }
    })

    const onSwiper = (swiper) => {
      swiperRef.value = swiper
    }

    return {
      swiperRef,
      onSwiper,
      Navigation, 
      Pagination, 
      A11y, 
      Lazy, 
      Thumbs
    }
  },
 methods: {
    returnsrc(item) {
      return `src\\assets\\img\\fruit-${item}.jpg`
    }
  },

}
</script>

<template>
  <Swiper @swiper="onSwiper" :slides-per-view="1" :space-between="50" :modules="[Navigation, Pagination, A11y, Lazy, Thumbs]" navigation :pagination="{ clickable: true, dynamicBullets: true }" grab-cursor :preload-images="false" lazy :thumbs="{ swiper: thumbs }">
    <SwiperSlide v-for="n in 12" :key="n" class="customSlide">
     
      <img :src="returnsrc(n)" class="swiper-lazy" style="width: 640px; max-width: 100%" />
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.customSlide {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>