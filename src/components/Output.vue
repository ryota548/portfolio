<template>
<div class="output">
  <item-page :itemJson=itemJson></item-page>
</div>
</template>

<script>
import ItemPage from '@/components/ItemPage.vue'
import output from '@/data/output.json'
export default {
  name: 'Output',
  components: {
    'item-page': ItemPage
  },
  data: function () {
    return {
      itemJson: output
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
