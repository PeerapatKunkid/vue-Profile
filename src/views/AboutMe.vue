<template>
  <body>
    <div class="grid">
      <div class="item">
        <div class="content">
          <p><img src="../assets/myPic3.jpg" alt="Center image" /></p>
        </div>
      </div>
      <div class="item">
        <div class="about">
          <h1>A B O U T M E</h1>
          <div class="about-sub"><b>Name</b> : Peerapat Kunkid</div>
          <div class="about-sub"><b>Nickname</b> : Pee</div>
          <div class="about-sub"><b>Age</b> : 22</div>
          <div class="about-sub"><b>Gender</b> : Male</div>
          <div class="about-sub"><b>GPAX</b> : 3.39</div>
          <div class="about-sub"><b>Date of Birth</b> : 19 February 2000</div>
          <div class="about-sub"><b>Hobby</b> : Playing video game , Watching Tv</div>
          <div class="about-sub"><b>Email</b> : lastteleeflags69@gmail.com</div>  
          <div class="about-sub"><b>Skill</b>: HTML CSS Javascript VueJs React Python</div>
        </div>
        
      </div>
    </div>
  </body>
</template>

<style scoped>
:root {
  --bg-color: hsl(49 37% 94%);
  --typewriterSpeed: 6s;
  --typewriterCharacters: 24;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 20px;
  row-gap: 20px;
}

.content {
  color: #242424;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  font-family: 'IBM Plex Sans Thai', sans-serif;
}
img {
  height: 38rem;
  animation: fadeInUp 1s;
}
.about {
  font-size: 300px;
  color: black;
  padding-top:2%;
  font-family: 'IBM Plex Sans Thai', sans-serif;
  line-height: 1.4
}
.about-sub{
  color: hsl(0 0% 0% / 0.9);
  font-size: 1.8rem;
  font-weight: 400;
  font-size:23px;
  animation: fadeInUp 3s;
}
h1 {
  color: var(--main-color);
  font-size: 50px;
  width: 418px; /* You Can Use 28ch */
  overflow: hidden;
  white-space: nowrap;

  animation: control-width 1s steps(28) 1s both, blink 0.5s infinite;
}

@media screen and (max-width:779px){
.grid {
  display: grid;
  grid-template-columns: 1fr ;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 30px;
  row-gap: 30px;
  padding-bottom:4rem;
}
.about {
  font-size: 300px;
  color: black;
  text-align:center;
  padding-top:2%;
  font-family: 'IBM Plex Sans Thai', sans-serif;
  line-height: 1.4
  
  
}
.about-sub{
  color: hsl(0 0% 0% / 0.9);
  font-size: 1.8rem;
  font-weight: 400;
  font-size:23px;
  text-align:center;
  animation: fadeInUp 3s;
}
h1 {
  color: var(--main-color);
  font-size: 50px;
  width: 418px; /* You Can Use 28ch */
  overflow: hidden;
  white-space: nowrap;
  text-align:center;

  animation: control-width 1s steps(28) 1s both, blink 0.5s infinite;
}
}



@keyframes control-width {
  from {
    width: 0;
  }
  to {
    width: 400px;
  }
}

@keyframes fadeInUp {
  from {
    opacity:0;
  }
  to {
    opacity: 1;
    
  }
}
</style>

<script setup lang="ts">
import VueTyperPlugin from 'vue-typer'

import { RouterLink, RouterView } from "vue-router";
</script>
