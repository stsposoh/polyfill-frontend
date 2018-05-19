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

        <footer class="footer">
            <scrollactive>
                <a href="#header" class="footer__on-top scrollactive-item" title="На верх"></a>
            </scrollactive>
            <a class="footer__social" href="https://github.com/stsposoh" target="_blank" title="github">
                <img src="/icons-cont/GitHub circle.svg" alt="GitHub">
            </a>
            <a class="footer__social" href="https://ru.linkedin.com/in/sposokhov" target="_blank" title="linkedin">
                <img src="/icons-cont/Linked in.svg" alt="Linked in">
            </a>
            <a class="footer__social" href="https://www.facebook.com/posohovstas" target="_blank" title="facebook">
                <img src="/icons-cont/facebook.svg" alt="facebook">
            </a>
            <a class="footer__social" href="https://moikrug.ru/polyfill" target="_blank" title="moikrug">
                <img src="/icons-cont/MoiKrug.svg" alt="MoiKrug">
            </a>

            <p>&copy; <a href="http://polyfill.ru">Posokhov Stanislav</a></p>

            <div class="image-zoom">
                <div class="image-zoom__hider" @click="closeModal"></div>
                <div class="image-zoom__cont">
                    <img  class="image-zoom__img" src="#" alt="">
                </div>
            </div>

            

        </footer>
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
        }
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



    .footer
        padding 50px 0
        text-align center
        background-color: bg_black;

        &__on-top
            margin auto
            margin-bottom 15px
            margin-top 0
            width 60px
            height 34px
            background url(/base/top.png) no-repeat center
            cursor pointer

        &__social
            width 30px
            margin 0 10px
        p
            margin-bottom: 20px
            margin-top 15px
            font-size .9rem

        a
            display inline-block
            color #6d6d6d
            text-decoration none
            transition color .3s ease

            svg
                width 30px
                height 30px

                path
                    fill #6d6d6d
                    transition fill .3s ease

            &:hover
                path
                    fill white
                    transition fill .3s ease

            @media mq_desktop
                &:hover
                    color white
                    transition color .3s ease

        &__social
            margin 0 10px

</style>
