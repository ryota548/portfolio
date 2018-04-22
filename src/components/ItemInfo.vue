<template>
  <div class="item-info">
    <div>
      <h1 class="item-info__title">{{ title }}</h1>
    </div>
    <img
      class="item-info__image" 
      :src="thumbnail">
    <div class="item-info__description">
      <span
        :class="[this.page==0 ? 'item-info--hidden' : '']"
        class="item-info--btn"
        @click="back">
        <
      </span>
      <div 
        :style="'width:' + description.length * 100 + '%; transform: translateX(' + translateX + 'px'"
        class="item-info--carousel">
        <div
          v-for="(sentens, index) in description"
          :key="index"
          ref="carousel"
          class="item-info__description__body"
          @touchstart="onTouchStart"
          @mousedown="onTouchStart">
          {{ sentens }}
        </div>
      </div>
      <span 
        v-if="this.page!=this.description.length-1"
        class="item-info--btn"
        @click="next">
        >
      </span>
    </div>
    <div class="item-info__tag">
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
      delta: 0,
      itemWidth: 0,
      page: 0,
      startPosition: 'null',
      transition_name: 'show-next'
    }
  },
  computed: {
    translateX: function () {
      return -this.itemWidth * this.page + this.delta
    }
  },
  methods: {
    onTouchStart (e) {
      this.startPosition = this.getTouchPos(e)
      document.addEventListener('touchmove', this.onTouchMove)
      document.addEventListener('touchend', this.onTouchEnd)
      document.addEventListener('mousemove', this.onTouchMove)
      document.addEventListener('mouseup', this.onTouchEnd)
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
      document.removeEventListener('mousemove', this.onTouchMove)
      document.removeEventListener('moouseup', this.onTouchEnd)
    },
    getTouchPos (e) {
      return e.changedTouches ? e.changedTouches[0]['pageX'] : e['pageX']
    },
    back () {
      if (this.page > 0) {
        this.delta = 0
        this.page -= 1
      }
    },
    next () {
      if (this.page < this.description.length - 1) {
        this.delta = 0
        this.page += 1
      }
    }
  },
  mounted () {
    this.itemWidth = this.$refs.carousel[0].clientWidth
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
    max-height: 50%;
  }

  &__title {
    font-size: 18px;
  }

  &__description {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 35px 1fr 35px;
    align-items: center;
    overflow: hidden;

    &__body {
      display: flex;
      justify-content:center; 
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }

  &--hidden {
    visibility: hidden;
  }

  &--carousel {
    display: flex;
    height: 100%;
  }

  &--btn {
    z-index: 1;
  }
}
</style>
