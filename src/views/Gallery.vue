<script>
import LightBox from "../components/Lightbox.vue";

export default {
  components: {
    LightBox,
  },
};
</script>

<template>
  <div class="content">
  <LightBox/></div>
</template>

<style scoped>
.customSlide {
  display: grid;
  place-items: center;
  height: 100vh;
}
.content{
  padding:40px;
}
a{
  color:white;
}
</style>