<template>
<div class="item-page">
  <item-info 
    v-for="item in itemJson" 
    :key=item.id 
    :thumbnail=item.thumbnail 
    :title=item.title 
    :tag=item.tag
  >
  </item-info>
</div>
</template>

<script>
import ItemInfo from '@/components/ItemInfo.vue'
export default {
  name: 'ItemPage',
  components: {
    'item-info': ItemInfo
  },
  props: {
    itemJson: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.item-page {
  height: 100%;
  display: grid;
  grid: auto-flow minmax(320px, 100%) / repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1px;
}

.item-info {
  background-color: white;
}

</style>
