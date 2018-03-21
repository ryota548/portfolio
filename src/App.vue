<template>
  <div id="app">
  <div class="top">
    <router-link to="/" class="top__header">
      <h1 class="top__header__logo">RYOTA KOSHIBA</h1>
    </router-link>
    <router-view class="top__contents"></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

html, body, #app {
  height: 100%;
}

@font-face {
  font-family: 'zurich';
  src: url(./assets/zurich.ttf);
}
$header-height: 45px;

.top {
  width: 100%;
  height: 100%;
  display: grid;
  background-color: black;
  grid-template-rows: $header-height 1fr;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;

  text-align: center;
  font-size: 12px;
  font-family: Arial,Helvetica,sans-serif;
  letter-spacing: .05em;

  &__header {
    grid-row: 1;
    grid-column: 2;
    border-left: 1px solid black;
    border-right: 1px solid black;  
    text-decoration: none;
    background-color: white;
    color: black;
    
    &__logo {
      position: relative;
      top: 50%;
      transform: translateY(-50%);

      font-size: 22px;
      font-family: zurich;
      font-weight: bold;
      letter-spacing: .1em;
    }
  }

  &__contents {
    grid-row: 2;
    grid-column: 1 / 4;
    border-top: 1px solid black;
  }
}
</style>
