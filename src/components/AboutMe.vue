<template>
<div class="aboutme">
  <item-page :itemJson=linkJson></item-page>
</div>
</template>

<script>
import ItemPage from '@/components/ItemPage.vue'
import aboutme from '@/data/aboutme.json'
export default {
  name: 'AboutMe',
  components: {
    'item-page': ItemPage
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

</style>
