<template>
    <scrollactive>
        <ul class="NavList">
            <li class="NavList__item">
                <a href="#header" class="NavList__link scrollactive-item">
                    <img class="NavList__image" src="/nav-img/pic-1-small.jpg" alt="Наверх">
                    <span class="NavList__text">Наверх</span>
                </a>
            </li>
            <li class="NavList__item">
                <a href="#aboutme" class="NavList__link scrollactive-item">
                    <img class="NavList__image" src="/nav-img/pic-2-small.jpg" alt="Обо мне">
                    <span class="NavList__text">Обо мне</span>
                </a>
            </li>
            <li class="NavList__item">
                <a href="#skills" class="NavList__link scrollactive-item">
                    <img class="NavList__image" src="/nav-img/pic-3-small.jpg" alt="Навыки">
                    <span class="NavList__text">Навыки</span>
                </a>
            </li>
            <li class="NavList__item">
                <a href="#education" class="NavList__link scrollactive-item">
                    <img class="NavList__image" src="/nav-img/pic-4-small.jpg" alt="Образование">
                    <span class="NavList__text">Образование</span>
                </a>
            </li>
            <li class="NavList__item">
                <a href="#portfolio" class="NavList__link scrollactive-item">
                    <img class="NavList__image" src="/nav-img/pic-5-small.jpg" alt="Портфолио">
                    <span class="NavList__text">Портфолио</span>
                </a>
            </li>
            <li class="NavList__item">
                <a href="#certificates" class="NavList__link scrollactive-item">
                    <img class="NavList__image" src="/nav-img/pic-6-small.jpg" alt="Сертификаты">
                    <span class="NavList__text">Сертификаты</span>
                </a>
            </li>
            <li class="NavList__item">
                <a href="#contacts" class="NavList__link scrollactive-item">
                    <img class="NavList__image" src="/nav-img/pic-7-small.jpg" alt="Контакты">
                    <span class="NavList__text">Контакты</span>
                </a>
            </li>
        </ul>
    </scrollactive>
</template>

<script>
    export default {}
</script>

<style lang="stylus">

    @import '~assets/styles/variables' 
    @import '~assets/styles/mixins' 

    .NavList
        position absolute
        bottom 0
        right 0
        left: 0;
        overflow-y: auto;
        overflow-x hidden
        text-align right 
        normalize_list()
        font-size 0
        padding 5px 0 

        @media only screen and (max-height: 570px)
            top: 75px

        @media mq_desktop
            overflow-y: hidden;

        &__item
            padding: 5px 10px;

            @media mq_desktop
                &:hover
                    .NavList__text
                        width: 150px;
                        font-size: 13px;
                        left: -140px;
                        transition all .3s ease

        &__link
            position relative
            width 40px
            height 40px
            display inline-block
            text-align center
            border-radius 50%
            font-size 12px
            letter-spacing 4px
            color white
            text-transform uppercase
            text-decoration none
            box-shadow: 3px 3px 13px -2px #919191;
            transition all .3s ease

            @media mq_desktop
                width 60px
                height 60px

                &:hover
                    .NavList__image
                        transform rotate(50deg)
                        transition all .3s ease

            &.is-active
                box-shadow: 3px 3px 13px -2px accent-color;

                .NavList__image
                    transform rotate(50deg)
                    transition all .3s ease

        &__text
            position absolute
            background: rgba(0, 0, 0, 0.49);
            width: 120px;
            font-size: 10px;
            left: -115px;
            line-height: 23px;
            height: 23px;
            top: 10px;
            z-index 21
            text-transform: none;
            transition all .3s ease

            @media mq_desktop
                background: bg_grey_opacity;
                width: 0;
                font-size: 0;
                left: 0;
                line-height: 28px;
                height 28px
                top 18px
                cursor pointer

        &__image
            transition all .3s ease
            border-radius: 50%;
            position relative
            z-index 22

            @media mq_desktop
                cursor pointer

</style>