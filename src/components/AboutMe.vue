<template>
<div class="aboutme">
    <router-link to="/" class="top__logo">ryota koshiba</router-link>
    <p class="aboutme__block">dmm.com</p>
    <p class="aboutme__block">naist</p>
    <p class="aboutme__block">doshisha</p>
</div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.aboutme {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 45px 1fr; 
  grid-template-columns: 33% 33% 1fr;
  box-sizing: border-box;
  grid-gap:5px;

  text-align: center;
  vertical-align: middle;

  &__block {  
    background-color: lightpink;
  }
}

</style>
