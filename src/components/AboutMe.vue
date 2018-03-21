<template>
<div class="aboutme">
  <item-link v-for="item in linkJson" :key=item.id :toLink=item.toLink :title=item.title></item-link>
</div>
</template>

<script>
import ItemLink from '@/components/ItemLink.vue'
import aboutme from '@/data/aboutme.json'
export default {
  name: 'AboutMe',
  components: {
    'item-link': ItemLink
  },
  data: function () {
    return {
      linkJson: aboutme
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
}

</style>
