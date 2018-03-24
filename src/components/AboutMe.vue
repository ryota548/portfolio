<template>
<div class="aboutme">
  <item-info v-for="item in linkJson" :key=item.id :thumbnail=item.thumbnail :title=item.title :tag=item.tag></item-info>
</div>
</template>

<script>
import ItemInfo from '@/components/ItemInfo.vue'
import aboutme from '@/data/aboutme.json'
export default {
  name: 'AboutMe',
  components: {
    'item-info': ItemInfo
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
  grid: auto-flow minmax(320px, 100%) / repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1px;
}

.item-info {
  background-color: white;
}

</style>
