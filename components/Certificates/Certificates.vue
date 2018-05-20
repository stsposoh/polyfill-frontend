<template>
    <div class="certificates">
        <ul class="certificates__nav-list">
            <li 
                class="certificates__nav-item"
                :class="{'--active': i === active}"
                @click="changeTab(i)" 
                v-for="(label, i) in Tabs.labels"
                :key="i"
            >{{label}}</li>
        </ul>
        <div class="certificates__cont" ref="container">
            <div class="certificates__wrapper" ref="wrapper">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        computed: {
            active() {
                return this.Tabs.active
            }
        },

        data() {
            return {
                Tabs: {
                    labels: [],
                    items: [],
                    active: 0
                }
            }
        },

        methods: {
            setHeight() {
                const el = this.Tabs.items[this.active]
                const height = el.scrollHeight
                this.$refs.container.style.height = height + 'px'
            },
            scrollWrapper() {
                const {wrapper} = this.$refs
                const offset = 100 * this.active
                wrapper.style.transform = `translate3d(-${offset}%, 0, 0)`
            },
            changeTab(i) {
                this.Tabs.active = i
                this.setHeight()
                this.scrollWrapper()
            }
        },

        provide() {
            return {
                Tabs: this.Tabs
            }
        },

        mounted() {
            window.onload = () => {
                this.setHeight()
                this.scrollWrapper()
                this.debounce = _.debounce(this.setHeight, 500)
                window.addEventListener('resize', this.debounce)
            };
        },
        
        beforeDestroy() {
            window.removeEventListener('resize', this.debounce)
        }
    }

</script>

<style lang="stylus">
    
    @import '~assets/styles/variables.styl'
    @import '~assets/styles/mixins'

    .certificates

        &__nav-list
            normalize_list()
            clear_display_inlines()

        &__nav-item
            margin 0 20px 30px
            text-transform uppercase
            font-size 14px
            cursor pointer
            
            &.--active
                color accent-color
        
        &__list
            text-align center
            normalize_list()
            clear_display_inlines()
            flex: 1 0 100%;
            width: 100%;

        &__cont
            position: relative;
            overflow: hidden;
            will-change: height;
            transition: height 0.4s cubic-bezier(0.86, 0, 0.07, 1);

        &__wrapper
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            will-change: transform;
            transition: -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1), 
            -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);

</style>


    

    