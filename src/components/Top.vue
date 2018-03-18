<template>
<div class="top">
    <router-link to="/" class="top-block top__logo">
      <h1 class="top__logo__text">Ryota Koshiba</h1>
    </router-link>
    <router-link to="/aboutme" class="top-block top__aboutme">about me</router-link>
    <router-link to="/job" class="top-block top__job">job</router-link>
    <router-link to="/output" class="top-block top__output">output</router-link>
</div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.top {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 45px 1fr; 
  grid-template-columns: 33% 33% 1fr;
  
  &-block {
    color: black;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;

    text-align: center;
    vertical-align: middle;
    text-decoration: none;
  }

  &__logo {
    grid-row: 1;
    grid-column: 2;    
    background-color: red;

    &__text {
      font-size: 34px;
      font-style: italic;
      line-height: 45px;
      color: white;
    }
  }

  &__aboutme {
    grid-row: 2;
    grid-column: 1;
    background-color: lightgoldenrodyellow;
  }

  &__job {
    grid-row: 2;
    grid-column: 2;
    background-color: lightgreen;
  }

  &__output {
    grid-row: 2;
    grid-column: 3;
    background-color: lightcoral;
  }
}

</style>
