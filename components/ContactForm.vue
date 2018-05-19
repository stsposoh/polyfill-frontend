<template>
    <div class="Contact-form">
        <form action="https://formspree.io/stsposoh@gmail.com" method="post" target="_blank">
            <input type="text" name="Имя:" placeholder="* Ваше имя" required>
            <input type="email" name="E-mail:" placeholder="* Ваш email" required>
            <textarea name="Содержание_письма:" cols="30" rows="4" placeholder="* Ваше сообщение" required></textarea>
            <input type="submit" class="Contact-form__btn-send" value="Отправить">
        </form>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus">
    @import '~assets/styles/variables.styl'

    .Contact-form

        input
            min-height 35px

        textarea
            min-height 100px

        input
        textarea
        .btn-send
            display block
            width 100%
            margin-bottom 5px
            border 1px solid #ccc
            line-height 40px
            text-indent 12px
            font-size 12px
            letter-spacing 2px
            outline-color bg_black

        &__btn-send
            background-color bg_black
            color white
            text-align center
            transition all 1s ease
            cursor pointer

            @media mq_desktop

                &:hover
                    color white !important
                    background-color #5a5e60

</style>