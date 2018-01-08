<template>
  <li class="nav-item">
    <a class="nav-item__link js-smooth-to" :href="href">
      <img class="nav-item__image" :src="src" :alt="title">
      <span class="nav-item__title">{{title}}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: {
      type: String
    },
    src: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>


<style lang="stylus">

@import '~assets/styles/variables'

.nav-item
  padding: 5px 10px;
  position relative

  &:hover
    .nav-item__title
      width: 140px;
      font-size: 13px;
      left: -140px;
      transition all .3s ease

  &__link
    width 30px
    height 30px
    display block
    text-align center
    border-radius 50%
    font-size 12px
    letter-spacing 4px
    color white
    text-transform uppercase
    text-decoration none
    overflow hidden
    box-shadow: 3px 3px 13px -2px #919191;
    transition all .3s ease

    @media mq_desktop
      width 60px
      height 60px

    &:hover

      .nav-item__image
        transform rotate(50deg)
        transition all .3s ease

    &--active
      box-shadow: 3px 3px 13px -2px accent-color;

      .nav-item__image
        transform rotate(50deg)
        transition all .3s ease

  &__title
    position absolute
    background: bg_grey_opacity;
    width: 120px;
    font-size: 10px;
    left: -120px;
    line-height: 23px;
    height: 23px;
    z-index: 5;
    top: 10px;
    text-transform: none;
    transition all .3s ease

    @media mq_desktop
      width: 0;
      font-size: 0;
      left: 0;
      line-height: 28px;
      height 28px
      top 24px

  &__image
    transition all .3s ease

</style>
