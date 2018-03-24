<template>
  <router-link 
    :to="toLink" 
    class="item-link"
  >
    <h1 class="item-link__text">{{ title }}</h1>
  </router-link>
</template>

<script>
export default {
  name: 'ItemLink',
  props: {
    toLink: {
      required: true,
      type: String,
      default: '/'
    },
    title: {
      required: true,
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.item-link {

  text-decoration: none;
  color: black;

  &__text {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>
