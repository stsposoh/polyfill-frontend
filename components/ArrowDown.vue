<template>
    <div class="arrow-down">
        <scrollactive>
            <a href="#aboutme" class="arrow-down__btn scrollactive-item"></a>
        </scrollactive>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus">

    @import '~assets/styles/variables.styl'
    @import '~assets/styles/keyframes'

    .arrow-down
        position absolute
        z-index 7
        bottom 60px
        width 100%
        text-align center
        line-height 0

        &__btn
            display inline-block
            width 73px
            height 47px
            background url('/static/base/arrow_down.png') no-repeat center
            cursor pointer
            border-radius 68%
            border 1px solid rgba(255, 255, 255, 0)
            animation: topDown 1.6s;
            animation-iteration-count: infinite;

            @media mq_desktop
                &:hover
                    border-color white

</style>
