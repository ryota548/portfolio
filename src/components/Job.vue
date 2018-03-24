<template>
<div class="job">
  <item-page :itemJson=linkJson></item-page>
</div>
</template>

<script>
import ItemPage from '@/components/ItemPage.vue'
import job from '@/data/job.json'
export default {
  name: 'Job',
  components: {
    'item-page': ItemPage
  },
  data: function () {
    return {
      linkJson: job
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
