<template>
    <div class="Contacts-info">
        <p>Украина</p>
        <p><a href="tel:+38(099)270-76-15">+38(099) 270-76-15</a></p>
        <p><a href="mailto:stsposoh@gmail.com">stsposoh@gmail.com</a></p>
        <p>stas.posohov</p>
        <p><a href="https://t.me/posohov">@posohov</a></p>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus">
    @import '~assets/styles/variables.styl'

    .Contacts-info
        text-align left 

        a
            text-decoration none
            color inherit

            @media mq_desktop
                &:hover
                    color bg_black

        p
            position relative
            padding-left 40px
            margin-bottom 37px

            &:before
                content ''
                position absolute
                top -2px
                left 0
                width 30px
                height 30px
                background-repeat no-repeat
                background-size cover

            &:nth-child(1):before
                background-image url(/icons-cont/map.svg)
            &:nth-child(2):before
                background-image url(/icons-cont/phone.svg)
            &:nth-child(3):before
                background-image url(/icons-cont/gmail_mail.svg)
            &:nth-child(4):before
                background-image url(/icons-cont/skype.svg)
            &:nth-child(5):before
                background-image url(/icons-cont/telegram.svg)

</style>