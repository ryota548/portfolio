<template>
<div class="top">
  <div class="title">
    <h2>ryota koshiba</h2>
  </div>
  <div class="contents">
    <ul>
      <li><router-link to="/aboutme">about me</router-link></li>
      <li><router-link to="/job">job</router-link></li>
      <li><router-link to="/output">output</router-link></li>
    </ul>
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
  min-width: 0px;
  margin: auto;

  background-color: black;
  color: white;

  font-family: 'Courier New', Courier, Monaco;
}

.title {
  position: relative;
  display: block;
  width: 100%;
  height: 40%;
}

h2 {
  position: absolute;
  text-align: center;
  vertical-align: middle;
  bottom: 0px;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  color: white;

  background-color: red;
}

.contents {
  display: block;
  width: auto;
  height: 100%;
  margin: 0 auto;
}

ul {
  margin: 0 auto;
  text-align: left;
  width: 200px;
}

li {
  list-style-type: none;
}

a {
  color: white;

}

</style>
