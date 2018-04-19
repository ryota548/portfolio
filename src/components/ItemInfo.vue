<template>
  <div class="item-info">
    <div>
      <h1 class="item-info__title">{{ title }}</h1>
    </div>
    <img
      class="item-info__image" 
      :src="thumbnail">
    <div class="item-info_description">
      <span @click="back"><</span>
      <p 
        v-for="(sentens, index) in description"
        v-if="index==page"
        :key="sentens.id"
        @touchstart="onTouchStart">
        {{ sentens }}
      </p>
      <span @click="next">></span>
    </div>
    <div class="item-info_tag">
      <p>{{ tag }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemLink',
  props: {
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    tag: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      page: '0',
      startPosition: 'null',
      delta: 0
    }
  },
  methods: {
    onTouchStart (e) {
      this.startPosition = this.getTouchPos(e)
      document.addEventListener('touchmove', this.onTouchMove)
      document.addEventListener('touchend', this.onTouchEnd)
    },
    onTouchMove (e) {
      this.delta = this.getTouchPos(e) - this.startPosition
    },
    onTouchEnd (e) {
      if (this.delta < -100) {
        this.next()
      } else if (this.delta > 100) {
        this.back()
      }
      document.removeEventListener('touchmove', this.onTouchMove)
      document.removeEventListener('touchend', this.onTouchEnd)
    },
    getTouchPos (e) {
      return e.changedTouches ? e.changedTouches[0]['pageX'] : e['pageX']
    },
    back () {
      this.page--
    },
    next () {
      this.page++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.item-info {

  text-decoration: none;
  color: black;

  display: grid;
  grid-template-rows: 15% 50% 20% 15%;
  justify-items: center;
  align-items: center;

  &__image {
    max-width: 70%; 
    max-height: 85%;
  }

  &__title {
    font-size: 18px;
  }

  &_description {
    display: grid;
    grid-template-columns: 35px 1fr 35px;
    align-items: center;
  }
}

</style>
