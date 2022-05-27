<script>
import { Thumbs } from 'swiper'
 import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper, 
    SwiperSlide
  },
  props: {
    currentSlide: Number
  },
  emits: ['thumbs', 'update:currentSlide'],
  setup(props, { emit }) {
    const onSwiper = (swiper) => {
      emit('thumbs', swiper)
    }

    return {
      onSwiper,
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
  <Swiper @swiper="onSwiper" :slides-per-view="10" :space-between="50" :modules="[Thumbs]" watch-slides-progress>
    <SwiperSlide v-for="n in 12" :key="n" @click.stop="$emit('update:currentSlide', Number(n) - 1)">
    <img :src="returnsrc(n)" class="lazyload" style="height: 100px" />

    </SwiperSlide>
  </Swiper>
</template>