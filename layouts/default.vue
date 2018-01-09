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

    <main>
      <section id="aboutme" class="card card--black">
        <div class="card__content">
          <card-title white title="Обо мне" desc="Чистый код - чистая совесть!" />

            <a class="card__avatar js-image-zoom" href="/base/me_big.jpg" >
                <img class="card__avatar-img" src="/base/me.jpg" alt="Я">
            </a>

          <div class="card__text">
            <p>Веб разработкой занимаюсь с 2015 года (<span class="js-experience-timer"><span></span>
            <span></span><span></span></span>)</p>
            <p>English level: Pre-intermediate</p>
            <p>Готов к командировакам/переезду</p>
            <p>* * *</p>
            <p>Специализируюсь на верстке лендингов и разработке сайтов на wordpress</p>
            <p>* * *</p>
            <p>Работал в команде над созданием социальной сети <a href="http://www.mam4.ru" target="_blank">http
                ://www.mam4.ru</a> </p>
            <p>Принимал участие в командной разработке сайта <a href="https://mundep.gudkov.ru/"
                                                            target="_blank">https://mundep.gudkov.ru</a> </p>
          </div>
        </div>
      </section>





    </main>



    <nuxt/>
  </div>
</template>

<script>
import Hamburger from '~/components/Hamburger.vue'
import Logo from '~/components/Logo.vue'
import NavList from '~/components/NavList.vue'
import Title from '~/components/Title.vue'
import ArrowDown from '~/components/ArrowDown.vue'

export default {
  components: {
    Hamburger,
    Logo,
    NavList,
    ArrowDown,
    'card-title': Title
  },
  methods: {
    fff () {
      // console.log(VueScrollTo + Vue)
    }
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


.card
  padding 55px 15px
  background-color white
  text-align center

  &__content
    max-width 940px
    margin auto

    &--wide
      max-width 1290px

  &__avatar
    display inline-block

    &-img
      margin-bottom 25px
      width 50%
      max-width 225px
      min-width 200px
      border-radius 50%
      box-shadow 27px 38px 52px -23px color_text_dark

  &__text

    h3
      color color_text_dark
      font-size 14px
      letter-spacing 4px
      text-transform uppercase
      font-family 'RalewayBold'

    a
      color accent-color
      text-decoration none
      transition color .3s ease

      @media mq_desktop

        &:hover
          color white
          transition color .3s ease

    p
      margin-bottom 10px
      letter-spacing 1px

  &--grey
    background-color bg_grey

  &--black
    background-color bg_black







</style>
