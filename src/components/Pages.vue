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

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: greenyellow;
}

title, .contents {
  width: 100%;
}

.title {
  width: 200px;
  height: 40px;

  display: table-cell;
  text-align: center;
  vertical-align: middle;
  background-color: red;
}

span {
  color: white;
}

.contents {
}

</style>
