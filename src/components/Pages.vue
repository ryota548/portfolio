<template>
<div class="top">
  <div class="title">
    <span>ryota koshiba</span>
  </div>
  <div class="contents">
    <router-link to="/aboutme">about me</router-link>
    <router-link to="/job">job</router-link>
    <router-link to="/output">output</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Pages'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top {
  height: 100%;
  max-width: 200px;
  margin: auto;
  background-color: greenyellow;
}

title, .contents {
  width: 100%;
}

.title {
  background-color: red;
}

span {
  width: 150px;
  color: white;
  margin: auto;
}

.contents {
}

</style>
