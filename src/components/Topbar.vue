<script setup>
import { RouterLink, RouterView } from 'vue-router'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
 <header>
  <h2>PEERAPAT KUNKID</h2>
  <nav>
    
       <RouterLink class="Category" to="/">ABOUT ME </RouterLink>| 
       <RouterLink class="Category" to="/gallery"> GALLERY</RouterLink> |
       <RouterLink class="Category" to="/test">BUTTON TEST</RouterLink>
      </nav>
</header>
</template>

<style scoped>
header {
  background-color: #222222;
  padding: 3rem;
  text-align: center;
  font-size: 35px;
  color: white;
  font-family: 'IBM Plex Sans Thai', sans-serif;
}
nav{
  font-size:20px;
  color:white;
}
.Category{
  color:white;
  text-decoration:none;  
}
.Category:hover{
  color:gray;
  text-decoration:none; 
}
</style>
