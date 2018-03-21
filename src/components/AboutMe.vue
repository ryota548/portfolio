<template>
<div class="aboutme">
  <item-link v-for="item in linkJson" :key=item.id :toLink=item.toLink :title=item.title></item-link>
</div>
</template>

<script>
import ItemLink from '@/components/ItemLink.vue'
export default {
  name: 'AboutMe',
  components: {
    'item-link': ItemLink
  },
  data: function () {
    return {
      linkJson:
      [
        {
          'toLink': '/aboutme',
          'title': 'DMM.com'
        },
        {
          'toLink': '/aboutme',
          'title': 'Doshisha'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.aboutme {
  width: 100%;

  display: grid;
  grid: auto-flow minmax(25%, 100%) / repeat(3, 1fr);
  
  box-sizing: border-box;

  &__block {  
    border-left: 1px solid black;
    border-bottom: 1px solid black;
  }
}

</style>
