<template>
<div class="item-list">
  <item-link
    v-if="isContents"
    v-for="item in itemJson" 
    :key=item.id 
    :toLink=item.toLink 
    :title=item.title>
  </item-link>
  <item-info
    v-if="!isContents"
    v-for="item in itemJson" 
    :key=item.id 
    :url=item.url
    :thumbnail=item.thumbnail 
    :title=item.title 
    :description=item.description
    :tag=item.tag>
  </item-info>
</div>
</template>

<script>
import ItemInfo from '@/components/molecules/ItemInfo.vue'
import ItemLink from '@/components/molecules/ItemLink.vue'
export default {
  name: 'ItemList',
  components: {
    'item-info': ItemInfo,
    'item-link': ItemLink
  },
  props: {
    itemJson: {
      type: Array,
      required: true
    },
    isContents: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.item-list {
  height: 100%;
  display: grid;
  grid: auto-flow minmax(300px, 100%) / repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1px;
}

.item-link,
.item-info {
  background-color: white;
}

</style>
