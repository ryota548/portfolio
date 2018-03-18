<template>
<div class="top">
    <div class="top__header"></div>
    <div class="top__aboutme">
      <router-link to="/aboutme">about me</router-link>
    </div>
    <div class="top__job">
      <router-link to="/job">job</router-link>
    </div>
    <div class="top__output">
      <router-link to="/output">output</router-link>
    </div>
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
  margin: 0 auto;

  display: grid;
  grid-template-rows: 45px 1fr;
  grid-template-columns: 33% 33% 1fr;

  &__header {
    grid-row: 1;
    grid-column: 1 / 4;
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
