<template>
<div class="aboutme">
    <p class="aboutme__block">DMM.com</p>
    <p class="aboutme__block">NAIST</p>
    <p class="aboutme__block">DOSHISHA</p>
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
  grid-template-columns: 33% 1fr 33%;
  box-sizing: border-box;

  text-align: center;
  vertical-align: middle;

  &__block {  
    border-left: 1px solid black;
  }
}

</style>
