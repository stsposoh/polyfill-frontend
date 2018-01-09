<template>
  <div class="arrow-down">
    <a class="arrow-down__btn animation float" href="#" v-scroll-to="'#aboutme'"></a>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default {}
</script>

<style lang="stylus">

@import '~assets/styles/variables.styl'

.arrow-down
  position absolute
  z-index 7
  bottom 60px
  width 100%
  text-align center
  line-height 0

  &__btn
    display inline-block
    width 73px
    height 47px
    background url('/static/base/arrow_down.png') no-repeat center
    cursor pointer
    border-radius 68%
    border 1px solid rgba(255, 255, 255, 0)

    @media mq_desktop
      &:hover
        border-color white

</style>
