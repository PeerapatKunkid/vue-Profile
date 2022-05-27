<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Topbar from '@/components/Topbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Topbar/>
    </div>
  </header>
 
  <RouterView />
  <Footer/>
</template>

<style>
nav{
  text-align:center;
  padding-top:1%;
  /* background-color: #222222; */
  color:black;
}


</style>
