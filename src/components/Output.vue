<template>
<div class="output">
  <item-link v-for="item in linkJson" :key=item.id :toLink=item.toLink :title=item.title></item-link>
</div>
</template>

<script>
import ItemLink from '@/components/ItemLink.vue'
import output from '@/data/output.json'
export default {
  name: 'Output',
  components: {
    'item-link': ItemLink
  },
  data: function () {
    return {
      linkJson: output
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.output {
  width: 100%;

  display: grid;
  grid: auto-flow minmax(25%, 100%) / repeat(3, 1fr);
}
</style>
