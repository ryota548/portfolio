<template>
  <div id="app">
  <div class="top">
    <div style="background: white"></div>
    <item-link 
      v-for="item in linkJson" 
      class="top__header" 
      :key=item.id 
      :toLink=item.toLink 
      :title=item.title
    >
    </item-link>
    <div style="background: white"></div>
    <router-view class="top__contents"></router-view>
  </div>
  </div>
</template>

<script>
import ItemLink from '@/components/ItemLink.vue'
import header from '@/data/header.json'
export default {
  name: 'app',
  components: {
    'item-link': ItemLink
  },
  data: function () {
    return {
      linkJson: header
    }
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'zurich';
  src: url(./assets/zurich.ttf);
}
$header-height: 45px;

.top {
  width: 100%;
  min-height: 100vh;
  display: grid;
  background-color: black;
  grid-template-rows: $header-height 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;

  text-align: center;
  font-size: 12px;
  font-family: Arial,Helvetica,sans-serif;
  letter-spacing: .05em;

  &__header.item-link { 
    text-decoration: none;
    background-color: white;
    color: black;
    
    .item-link__text {
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
  }
}
</style>
