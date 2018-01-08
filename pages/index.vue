<template>
    <section class="container">

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    nnn () {
      return console.log(6)
    }
  },
  data () {
    return {
      rrr: this.nnn()
    }
  }
}
</script>

<style lang="stylus">

@import '~assets/styles/variables.styl'

.preloader
    *display none
    margin: 0;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    text-align center

    &__text
        display: block;
        margin: 0 auto;
        color white

    &__dot-1
    &__dot-2
    &__dot-3
    &__dot-4
    &__dot-5
    &__dot-6
        height: 4px;
        width: 4px;
        background-color accent-color
        display: inline-block;
        margin: 12px 2px;
        border-radius: 100%;
        animation: loader 4s infinite;
        animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
        animation-fill-mode: both;

    &__dot-1
        animation-delay: 1s;

    &__dot-2
        animation-delay: .8s;

    &__dot-3
        animation-delay: .6s;

    &__dot-4
        animation-delay: .4s;

    &__dot-5
        animation-delay: .2s;

    &__dot-6
        animation-delay: 0s;




@keyframes loader {
    0% {
        transform: translateX(-30px); 
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    50% {
        transform: translateX(30px); 
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}












</style>
