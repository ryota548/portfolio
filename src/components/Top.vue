<template>
<div class="top">
    <h2 class="top__header">ryota koshiba</h2>
    <router-link class="top__contents__aboutme" to="/aboutme">about me</router-link>
    <router-link class="top__contents__job" to="/job">job</router-link>
    <router-link class="top__contents__output" to="/output">output</router-link>
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
  width: 80%;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 50% 1fr;
  grid-template-columns: 33% 33% 1fr;
  grid-gap: 10px;

  &__header {
    grid-row: 1;
    grid-column: 1 / 4;
    background-color: lightpink;
  }

  &__contents {

    border-radius: 5px;
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
}

</style>
