<template>
<div class="contents">
  <item-link v-for="item in linkJson" :key=item.id :toLink=item.toLink :title=item.title></item-link>
</div>
</template>

<script>
import ItemLink from '@/components/ItemLink.vue'
export default {
  name: 'Contents',
  components: {
    'item-link': ItemLink
  },
  data: function () {
    return {
      linkJson:
      [
        {
          'toLink': '/job',
          'title': 'JOB'
        },
        {
          'toLink': '/aboutme',
          'title': 'ABOUT ME'
        },
        {
          'toLink': '/output',
          'title': 'OUTPUT'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.contents {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

</style>
