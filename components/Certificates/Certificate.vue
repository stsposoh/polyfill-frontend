<template>
   <ul class="certificates__list">
       <slot />
    </ul>
</template>

<script>
    export default {
        props: {
            label: {
                type: String
            },
            active: {
                type: Boolean
            }
        },

        inject: ['Tabs'],

        created() {
            const length = this.Tabs.labels.push(this.label);
            if (this.active) {
                this.Tabs.active = length - 1
            }
        },

        mounted() {
            this.Tabs.items.push(this.$el)
        }
    }
</script>

<style lang="stylus">

    .certificate
        display block

        &__img
            width 200px
            margin 5px
            box-shadow 2px 2px 10px 1px black
            font-size 0

</style>