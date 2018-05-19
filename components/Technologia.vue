<template>
    <li class="technologia">
        <div class="technologia__item-back">
            <img  :src="src" :alt="title">
        </div>
        <div class="technologia__item-front">
            <span class="technologia__item-front-text">{{title}}</span>
        </div>
    </li>
</template>

<script>
    export default {
        props: {
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

    .technologia
        height: 80px;
        width 80px
        margin 8px
        border: 1px solid color_icon_light_grey
        border-radius: 50%;
        transform-style: preserve-3d;

        &:hover
            .technologia__item-back
                transform: rotate3d(0,1,0, 180deg);

            .technologia__item-front
                transform: rotate3d(0,1,0, 0deg);

        &__item-back
        &__item-front
            position: absolute;
            width: 80px;
            height: 80px;
            transition: all .8s;
            backface-visibility: hidden

        &__item-back
            padding 15px

        &__item-front
            position relative
            transform: rotate3d(0,1,0, 180deg);

            &-text
                margin: 0;
                transform: translate(-50%, -50%);
                position: absolute;
                top: 50%;
                left: 50%;
                font-size: 14px;
                line-height: 15px;
                color accent-color

        img
            max-height 100%
            max-width 100%
            vertical-align: middle;
            height: 100%;

</style>
