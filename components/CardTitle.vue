<template>
    <div :class="classes">
        <h3 class="title__text">{{title}}</h3>
        <span class="title__desc">{{desc}}</span>
        <hr class="title__divider">
    </div>
</template>

<script>
    export default {
        props: {
            desc: {
                type: String
            },
            title: {
                type: String
            },
            white: {
                type: Boolean,
                default: false
            },
            dark: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return {
                    title: true,
                    'title--white': this.white,
                    'title--dark': this.dark
                }
            }
        }
    }
</script>


<style lang="stylus">

    @import '~assets/styles/variables.styl'

    .title

        &__text
        &__desc
            display block
            margin 0 0 15px
            text-align center
            text-transform uppercase
            font-weight: bold;

        &__text
            font-size 21px
            letter-spacing 1px

        &__desc
            font-size 14px
            letter-spacing 4px

        &__divider
            width 140px
            height 1px
            margin-top 18px
            margin-bottom 40px
            background-color accent-color
            border 0

        &--white
            color white

        &--dark
            color color_text_dark

</style>