<template>
<div class="top">
    <router-link to="/" class="top__logo">ryota koshiba</router-link>
    <router-link to="/aboutme" class="top__aboutme">about me</router-link>
    <router-link to="/job" class="top__job">job</router-link>
    <router-link to="/output" class="top__output">output</router-link>
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
  box-sizing: border-box;
  grid-gap:5px;

  text-align: center;
  vertical-align: middle;

  &__logo {
    grid-row: 1;
    grid-column: 2;    
    background-color: lightpink;
  }

  &__aboutme {
    grid-row: 2;
    grid-column: 1;
    background-color: lightblue;
  }

  &__job {
    grid-row: 2;
    grid-column: 2;
    background-color: lightgoldenrodyellow;
  }

  &__output {
    grid-row: 2;
    grid-column: 3;
    background-color: lightcoral;
  }
}

</style>
