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
        @click="back">
        <
      </span>
      <div class="item-info--carousel">
        <transition :name="transition_name">
          <div
            v-for="(sentens, index) in description"
            v-if="index==page"
            :key="index"
            class="item-info__description__body"
            @touchstart="onTouchStart"
            @mousedown="onTouchStart">
            {{ sentens }}
          </div>
        </transition>
      </div>
      <span 
        v-if="this.page!=this.description.length-1"
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
      page: '0',
      startPosition: 'null',
      transition_name: 'show-next'
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
      this.setTransrate(this.startPosition + this.delta)
      console.log(this.delta)
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
    setTransrate (value) {
      this['translateX'] = value
    },
    back () {
      if (this.page > 0) {
        this.transition_name = 'show-prev'
        this.page--
      }
    },
    next () {
      if (this.page < this.description.length - 1) {
        this.transition_name = 'show-next'
        this.page++
      }
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

    &__body {
      display: flex;
      justify-content:center; 
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  &--hidden {
    visibility: hidden;
  }

  &--carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
}

.show-next-enter-active,
.show-next-leave-active,
.show-prev-enter-active, 
.show-prev-leave-active {
  transition: all .4s;
}
.show-next-enter, 
.show-prev-leave-to {
  transform: translateX(100%);
}
.show-next-leave-to, 
.show-prev-enter {
  transform: translateX(-100%);
}

</style>
