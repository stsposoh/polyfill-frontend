<template>
    <div class="Navigation" :class="{ '--is-open': menuOpen }" >
        <span class="Navigation__hamburger" :class="{ '--is-active': menuOpen }" @click="toggleMenu">
            <span class="Navigation__hamburger-line"></span>
            <span class="Navigation__hamburger-line"></span>
            <span class="Navigation__hamburger-line"></span>
        </span>
        <transition name="fade" appear>
            <nav-list v-show="menuOpen" />
        </transition>
    </div>
</template>

<script>
    import NavList from '~/components/Navigation/NavList.vue'

    export default {
        components: {
            NavList
        },

        data () {
            return { 
                menuOpen: ''
            }
        },

        mounted() {
            this.$nextTick( () => {
                this.openMenuOnDesktop();
            })
        },

        methods: {
            openMenuOnDesktop (event) {
                if ( document.documentElement.clientWidth < 1130 ) {
                    return this.menuOpen = false; 
                }
                return this.menuOpen = true;
            },

            toggleMenu () {
                this.menuOpen = (this.menuOpen == true) ? false : true
            }
        }
    }
</script>


<style lang="stylus">
    @import '~assets/styles/variables'
    @import '~assets/styles/keyframes'

    .Navigation
        position fixed
        right 0
        top 0
        bottom 0
        width 0
        z-index 20
        background-color: rgba(0, 0, 0, 0.64);
        transition opacity .3s, width .2s

        &.--is-open
            width 185px
            transition opacity .3s, width .2s

            @media mq_desktop
                width 80px
                background-color #0000004d
                opacity .4

                &:hover
                    opacity 1
                    width 220px

        &__hamburger
            position absolute
            top 20px
            right 15px
            z-index 25
            width 50px
            height 44px
            background-color color_icon_light_grey
            transition: all .3s

            &:hover
                @media mq_desktop
                    cursor pointer

            &-line
                width: 40px;
                height: 4px;
                background-color: #ecf0f1;
                display: block;
                margin: 8px auto;
                transition: all .3s

            &.--is-active
                animation: gamburger 0.6s forwards;

                .Navigation__hamburger-line
                    transition-delay: .2s;

                    &:nth-child(1)
                        transform: translateY(13px) rotate(45deg);

                    &:nth-child(2)
                        opacity: 0;

                    &:nth-child(3)
                        transform: translateY(-10px) rotate(-45deg);


    .fade-enter-active
    .fade-leave-active
        transition: opacity .5s

    .fade-enter 
    .fade-leave-to
        opacity: 0;

</style>