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

  display: grid;
  grid: auto-flow minmax(25%, 50%) / repeat(3, 1fr);
  
  box-sizing: border-box;

  &__block {  
    border-left: 1px solid black;
    border-bottom: 1px solid black;
  }
}

</style>
