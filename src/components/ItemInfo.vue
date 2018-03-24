<template>
  <div class="item-info">
    <div>
      <h1 class="item-info__title">{{ title }}</h1>
    </div>
    <div>
      <img 
        class="item-info__image" 
        :src="thumbnail"
      >
    </div>
    <div>
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
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
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
  grid-template-rows: 10% 80% 10%;

  &__image {
    max-width: 70%; 
    max-height: 85%;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  &__title {
    font-size: 18px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  p {
    font-size: 18px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>
