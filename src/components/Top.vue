<template>
<div class="top">
    <router-link to="/" class="top-block top__logo">
      <h1 class="top-block__text top__logo__text">RYOTA KOSHIBA</h1>
    </router-link>
    <router-link to="/job" class="top-block top__job">
      <h1 class="top-block__text">JOB</h1>
    </router-link>
    <router-link to="/aboutme" class="top-block top__aboutme">
      <h1 class="top-block__text">ABOUT ME</h1>
    </router-link>
    <router-link to="/output" class="top-block top__output">
      <h1 class="top-block__text">OUTPUT</h1>
    </router-link>
</div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@font-face {
  font-family: 'zurich';
  src: url(../assets/zurich.ttf);
}
$header-height: 45px;

.top {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: $header-height 1fr; 
  grid-template-columns: 33% 1fr 33%;
  box-sizing: border-box;

  text-align: center;
  font-size: 12px;
  font-family: Arial,Helvetica,sans-serif;
  letter-spacing: .05em;
  
  &-block {
    color: black;
    text-decoration: none;
    box-sizing: border-box;

    &__text {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__logo {
    grid-row: 1;
    grid-column: 2;
    border-left: 1px solid black;
    border-right: 1px solid black;  
    
    &__text {
      font-size: 22px;
      font-family: zurich;
      font-weight: bold;
    }
  }

  &__job {
    grid-row: 2;
    grid-column: 1;
    border-top: 1px solid black;
  }

  &__aboutme {
    grid-row: 2;
    grid-column: 2;
    border-top: 1px solid black;    
    border-right: 1px solid black;
    border-left: 1px solid black;
  }

  &__output {
    grid-row: 2;
    grid-column: 3;
    border-top: 1px solid black;
  }
}

</style>
