<template>
    <div>
        <header class="header" id="header">
            <navigation />
            <div id="header-bg" class="header__bg">
                <canvas id="header-canvas"></canvas>
                <logo/>
            </div>
            <arrow-down />
        </header>

        <nuxt/>

        <div class="image-zoom">
            <div class="image-zoom__hider" @click="closeModal"></div>
            <div class="image-zoom__cont">
                <img  class="image-zoom__img" src="#" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    
    import Navigation from '~/components/Navigation/Navigation.vue'
    import Logo from '~/components/Logo.vue'
    import ArrowDown from '~/components/ArrowDown.vue'

    export default {
        components: {
            Navigation,
            Logo,
            ArrowDown
        },

        methods: {
            closeModal(e) {
                e.target.parentNode.classList.toggle("image-zoom--active");
                document.body.style.overflow = 'auto';
            }
        },

        mounted() {




            this.$nextTick( () => {


                


                



    //Make the node not clickable
    let notLinkElements = document.querySelectorAll('.not-link');

    for (let i = 0; i < notLinkElements.length; i++) {
        notLinkElements[i].addEventListener('click', function (e) {
            e.preventDefault();
        })
    }



               
            })
        },
      
    }
</script>


<style lang="stylus">
    @import '~assets/styles/variables.styl'

    .header
        min-height 100vh
        position relative

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

        &--dark
            background-color bg_dark



    .image-zoom
        display none
        position: fixed;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 21;
        padding-bottom: 69px;
        text-align: center;

        &--active
            display block

        &__hider
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.8);
            z-index: 8;
            cursor: pointer;

        &__cont
            position: relative;
            z-index: 9;
            margin: auto;
            top: 50px;
            height: 100%;
            overflow-x: hidden;
            width: auto;
            max-width: 65%;
            display: inline-block;

        &__img
            max-width: 100%;
            height: auto;

</style>
