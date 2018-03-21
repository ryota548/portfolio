<template>
<div class="contents">
    <router-link to="/job" class="contents-block contents__job">
      <h1 class="contents-block__text">JOB</h1>
    </router-link>
    <router-link to="/aboutme" class="contents-block contents__aboutme">
      <h1 class="contents-block__text">ABOUT ME</h1>
    </router-link>
    <router-link to="/output" class="contents-block contents__output">
      <h1 class="contents-block__text">OUTPUT</h1>
    </router-link>
</div>
</template>

<script>
export default {
  name: 'Contents'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.contents {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  &-block {
    box-sizing: border-box;
    text-decoration: none;
    color: black;

    &__text {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__job {
    grid-column: 1;
  }

  &__aboutme {
    grid-column: 2;   
    border-right: 1px solid black;
    border-left: 1px solid black;
  }

  &__output {
    grid-column: 3;
  }
}

</style>
