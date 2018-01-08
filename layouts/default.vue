<template>
  <div>
    <header class="header" id="header">

      <hamburger />

      <div id="header-bg" class="header__bg">
        <canvas id="header-canvas"></canvas>
        <logo/>
      </div>

      <nav-list />

      <arrow-down />

    </header>




    <nuxt/>
  </div>
</template>

<script>
import Hamburger from '~/components/Hamburger.vue'
import Logo from '~/components/Logo.vue'
import NavList from '~/components/NavList.vue'
import ArrowDown from '~/components/ArrowDown.vue'

export default {
  components: {
    Hamburger,
    Logo,
    NavList,
    ArrowDown
  }
}
</script>


<style lang="stylus">

@import '~assets/styles/variables.styl'
@import '~assets/styles/defaults.styl'

.header
  min-height 100vh

  &__bg
    min-height 100vh
    position: relative;
    width: 100%;
    background: #333;
    overflow: hidden;
    background-size: cover;
    z-index: 1;
    background-image: url(/static/base/header-bg.jpg);
    background-position: center bottom;
    background-repeat: no-repeat;






</style>
