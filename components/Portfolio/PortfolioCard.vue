<template>
    <li class="slab">
        <div class="slab__wrap">
            <div class="slab__back">
                <a class="slab__back-zoom" :href="imgSrcBig" @click.prevent="imageZoom">Увеличить</a>
                <p>{{desc}}</p>
            </div>
            <a class="slab__works" :class="{'--not-link': !linkTo}" :href="linkTo" target="_blank" @click="preventDefaultIfNotLinked" :style="{ background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imgSrcSmall}')` }">
                <span>{{siteName}}</span>
            </a>
        </div>
    </li>
</template>

<script>
    export default {
        props: {
            imgSrcBig: {
                type: String
            },
            imgSrcSmall: {
                type: String
            },
            linkTo: {
                type: String
            },
            siteName: {
                type: String
            },
            desc: {
                type: String,
                default: ''
            }
        },

        methods: {
            imageZoom(e) {
                let largeImgSrc = e.target.getAttribute('href');
                let modal = document.querySelector('.image-zoom');
                let modalImg = modal.querySelector('.image-zoom__img');
                
                modalImg.setAttribute('src',largeImgSrc);

                document.body.style.overflow = 'hidden';
                modal.classList.toggle("image-zoom--active");
            },

            preventDefaultIfNotLinked(e) {
                if(!this.linkTo) {
                    e.preventDefault();
                }
            }
        }
    }
</script>

<style lang="stylus">

    @import '~assets/styles/variables'

    .slab
        width: 290px;

        @media mq_tablet
            margin 0 10px

            @media mq_desktop
                margin 0 15px

        &__wrap
            margin-bottom 110px
            height 139px
            perspective 1000px

            @media mq_desktop
                &:hover
                    .slab__works
                        transform rotateX(80deg)
                        transform-origin bottom

                        &:before
                            opacity: 1
                            box-shadow: 0 0 25px 25px rgba(0, 0, 0, 0.5)
                            transform: rotateX(0) translateZ(-60px) scale(0.85)

        &__back
            position absolute
            width 255px
            height 100%
            margin: 0 17px;
            padding 25px 15px
            text-align left
            background #f4f4f4
            overflow hidden
            border: 1px solid #dbdbdb;
            border-radius: 0 104px 0 0

            &-zoom
                color accent-color
                text-decoration: none;
                font-weight: bold;

            p
                font-size: 14px;
                margin: 0;

        &__works
            position relative
            z-index 20
            display block
            width 100%
            height 100%
            background-size: 0, contain !important
            transform-style preserve-3d
            transition all 0.5s
            transform rotateX(80deg)
            transform-origin bottom
            outline: 1px solid color_icon_light_grey

            @media mq_desktop
                transform rotateX(0deg)
                transform-origin bottom

            &:before
                content: '';
                position: absolute; top: 0; left: 0
                width: 100%;
                height: 100%
                background: rgba(0, 0, 0, 0.5)
                transition: all 0.5s
                transform-origin: bottom
                opacity: 1
                box-shadow: 0 0 25px 25px rgba(0, 0, 0, 0.5)
                transform: rotateX(0) translateZ(-60px) scale(0.85)

                @media mq_desktop
                    opacity: 0.15
                    transform: rotateX(95deg) translateZ(-80px) scale(0.75)
                    box-shadow: 0 0 100px 50px rgba(0, 0, 0, 0.5)

            &:after
                content: ''
                position: absolute
                left: 0
                bottom: 0
                width: 100%
                height: 36px
                background: inherit
                background-size: cover, cover
                background-position: bottom
                transform: rotateX(90deg)
                transform-origin: bottom

            &.--not-link
                cursor default

            span
                color: white
                text-transform: uppercase
                position: absolute
                top: 100%
                left: 0
                width: 100%
                text-align: center
                font-size: 13px;
                letter-spacing: 1px;
                line-height: 35px;
                vertical-align: middle;
                font-weight: bold;
                transform: rotateX(-89.99deg)
                transform-origin: top
                z-index: 1

</style>