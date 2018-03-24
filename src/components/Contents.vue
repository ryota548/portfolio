<template>
<div class="contents">
  <item-link 
    v-for="item in linkJson" 
    :key=item.id 
    :toLink=item.toLink 
    :title=item.title
  >
  </item-link>
</div>
</template>

<script>
import ItemLink from '@/components/ItemLink.vue'
import contents from '@/data/contents.json'
export default {
  name: 'Contents',
  components: {
    'item-link': ItemLink
  },
  data: function () {
    return {
      linkJson: contents
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.contents {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
}

.item-link {
  background-color: white;
}

</style>
