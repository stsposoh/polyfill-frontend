<template>
  <nav class="nav animation fade-in">
    <ul class="nav__list">
      <header-nav href="#header" src="/nav-img/pic-1-small.jpg" title="Наверх" />
      <header-nav href="#aboutme" src="/nav-img/pic-2-small.jpg" title="Обо мне" />
      <header-nav href="#skills" src="/nav-img/pic-3-small.jpg" title="Навыки" />
      <header-nav href="#education" src="/nav-img/pic-4-small.jpg" title="Образование" />
      <header-nav href="#portfolio" src="/nav-img/pic-5-small.jpg" title="Портфолио" />
      <header-nav href="#certificates" src="/nav-img/pic-6-small.jpg" title="Сертификаты" />
      <header-nav href="#contacts" src="/nav-img/pic-7-small.jpg" title="Контакты" />
    </ul>
  </nav>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    'header-nav': Nav
  }
}
</script>

<style lang="stylus">

@import '~assets/styles/variables' 
@import '~assets/styles/mixins' 

.nav
  *display none
  width 54px
  position fixed
  z-index 998
  height: 300px;
  padding-top: 10px;
  bottom 0
  right 0
  background-color bg_grey_opacity

  @media mq_desktop
    width 80px
    height: 510px;

  &__list
    normalize_list()
    font-size 0

  &--visible
    display block

</style>
