<template>
    <div>
        <header class="header" id="header">
            <navigation />
            <div id="header-bg" class="header__bg">
                <canvas id="header-canvas"></canvas>
                <logo/>
            </div>
            <arrow-down />
        </header>

        <main>
            <section id="aboutme" class="card card--black">
                <div class="card__content">
                    <card-title white title="Обо мне" desc="Чистый код - чистая совесть!" />
                    <img v-img class="card__avatar-img" src="/base/me_big.jpg" alt="Я">
                    <div class="card__text">
                        <p>Веб разработкой занимаюсь с 2016 года (<span class="js-experience-timer"><span></span>
                        <span></span><span></span></span>)</p>
                        <p>English level: Pre-intermediate</p>
                        <p>Готов к командировакам/переезду</p>
                        <p>* * *</p>
                        <p>Специализируюсь на верстке лендингов и разработке сайтов на wordpress</p>
                        <p>* * *</p>
                        <p><b>Работа в команде:</b></p>
                        <p>
                            <a href="http://www.mam4.ru" target="_blank">mam4.ru</a>, <br>
                            <a href="https://mundep.gudkov.ru/" target="_blank">mundep.gudkov.ru</a> </p>
                    </div>
                </div>
            </section>

            <section id="skills" class="card">
                <div class="card__content">
                    <card-title dark title="Навыки" desc="Используемые мной технологии" /> 
                    <div class="stack-technologies">
                        <ul class="stack-technologies__list">  
                            <technologia src="/icons/1.svg" title="HTML5" />
                            <technologia src="/icons/2.svg" title="CSS3" />
                            <technologia src="/icons/3.svg" title="Less" />
                            <technologia src="/icons/4.svg" title="Stylus" />
                            <technologia src="/icons/5.svg" title="JavaScript" />
                            <technologia src="/icons/6.svg" title="ES6" />
                            <technologia src="/icons/7.svg" title="Jquery" />
                            <technologia src="/icons/8.svg" title="Bootstrap" />
                            <technologia src="/icons/9.svg" title="WordPress" />
                            <technologia src="/icons/10.svg" title="PHP основы" />
                            <technologia src="/icons/11.svg" title="MySQL основы" />
                            <technologia src="/icons/12.svg" title="Git" />
                            <technologia src="/icons/20.svg" title="Bitbucket" />
                            <technologia src="/icons/13.svg" title="Bower" />
                            <technologia src="/icons/14.svg" title="npm" />
                            <technologia src="/icons/24.svg" title="Yarn" />
                            <technologia src="/icons/15.svg" title="Gulp" />
                            <technologia src="/icons/22.svg" title="Webpack" />
                            <technologia src="/icons/25.svg" title="Parcel" />
                            <technologia src="/icons/16.svg" title="Mark Down" />
                            <technologia src="/icons/17.svg" title="OpenCart" />
                            <technologia src="/icons/18.svg" title="Svg" />
                            <technologia src="/icons/19.svg" title="BEM naming" />
                            <technologia src="/icons/23.svg" title="Unyson" />
                        </ul>
                    </div> 
                    <div class="skills">
                        <span class="skills__line"></span>
                        <span class="skills__text">В процессе изучения:</span>
                        <span class="skills__line"></span>
                        <div class="stack-technologies">
                            <ul class="stack-technologies__list">  
                                <technologia src="/icons/21.svg" title="Vue.js" />
                                <technologia src="/icons/26.svg" title="NuxtJS" />
                            </ul>
                        </div>
                        <span class="skills__line"></span>
                        <span class="skills__text">Запланировано:</span>
                        <span class="skills__line"></span>
                        <div class="stack-technologies">
                            <ul class="stack-technologies__list">  
                                <technologia src="/icons/27.svg" title="nodejs" />
                                <technologia src="/icons/28.svg" title="modx" />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education" class="card  card--dark">
                <div class="card__content">
                    <card-title white title="Образование" />    
                    <div class="education">
                        <p class="white-color">
                            <b><span>Открытый Международный Университет Развития Человека «УКРАИНА»</span></b>
                        </p>
                        <p>2004 - 2008</p>
                        <p>Факультет <span>«Право»</span></p>
                        <p>Специальность: <span>бакалавр права</span></p>
                        <p>Специализация: <span>административно-хозяйственная деятельность</span></p>
                        <p class="white-color"><span><b>Курсы</b></span></p>
                        <education-list />
                    </div>
                </div>
            </section>

            <section id="portfolio" class="card">
                <div class="card__content card__content--wide">
                    <card-title dark title="Портфолио" desc="Мои работы" /> 
                    <portfolio-list />  
                </div>
            </section>

            <section id="certificates" class="card card--dark">
                <div class="card__content card__content--wide">
                    <card-title white title="Сертификаты" desc="Мои сертификаты" /> 
                    <certificates>
                        <certificate label="Показать все" :active="true"> 
                            <li v-for="certificate in certificates" class="certificates__list-item">
                                <span class="certificate" :data-cat="certificate.category">
                                    <img v-img class="certificate__img" :src="certificate.src" :alt="certificate.alt">
                                </span>
                            </li>
                        </certificate>
                        <certificate label="Курсы">
                            <li v-for="certificate in certificates" class="certificates__list-item">
                                <span v-if="certificate.category == 'Курсы'" class="certificate" :data-cat="certificate.category">
                                    <img v-img class="certificate__img" :src="certificate.src" :alt="certificate.alt">
                                </span>
                            </li>
                        </certificate>
                        <certificate label="Тесты">
                            <li v-for="certificate in certificates" class="certificates__list-item">
                                <span v-if="certificate.category == 'Тесты'" class="certificate" :data-cat="certificate.category">
                                    <img v-img class="certificate__img" :src="certificate.src" :alt="certificate.alt">
                                </span>
                            </li>
                        </certificate>
                        <certificate label="Разное">
                            <li v-for="certificate in certificates" class="certificates__list-item">
                                <span v-if="certificate.category == 'Разное'" class="certificate" :data-cat="certificate.category">
                                    <img v-img class="certificate__img" :src="certificate.src" :alt="certificate.alt">
                                </span>
                            </li>
                        </certificate>
                    </certificates>
                </div>
            </section>

            <section id="contacts" class="card">
                <div class="card__content">
                    <card-title dark title="Контакты" desc="Всегда на связи" /> 
                    <div class="contacts cols">
                        <div class="contacts__left cols--2">
                            <contacts-info />
                        </div>
                        <div class="contacts__right cols--2">
                            <contact-form />
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <scrollactive>
                <a href="#header" class="footer__on-top scrollactive-item" title="На верх"></a>
            </scrollactive>
            <a class="footer__social" href="https://github.com/stsposoh" target="_blank" title="github">
                <img src="/icons-cont/GitHub circle.svg" alt="GitHub">
            </a>
            <a class="footer__social" href="https://ru.linkedin.com/in/sposokhov" target="_blank" title="linkedin">
                <img src="/icons-cont/Linked in.svg" alt="Linked in">
            </a>
            <a class="footer__social" href="https://www.facebook.com/posohovstas" target="_blank" title="facebook">
                <img src="/icons-cont/facebook.svg" alt="facebook">
            </a>
            <a class="footer__social" href="https://moikrug.ru/polyfill" target="_blank" title="moikrug">
                <img src="/icons-cont/MoiKrug.svg" alt="MoiKrug">
            </a>

            <p>&copy; <a href="http://polyfill.ru">Posokhov Stanislav</a></p>

            <div class="image-zoom">
                <div class="image-zoom__hider" @click="closeModal"></div>
                <div class="image-zoom__cont">
                    <img  class="image-zoom__img" src="#" alt="">
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueImg from 'v-img'
    import VueScrollactive from 'vue-scrollactive'
    import Navigation from '~/components/Navigation/Navigation.vue'
    import Logo from '~/components/Logo.vue'
    import ArrowDown from '~/components/ArrowDown.vue'
    import CardTitle from '~/components/CardTitle.vue'
    import EducationList from '~/components/EducationList.vue'
    import Technologia from '~/components/Technologia.vue'
    import PortfolioList from '~/components/Portfolio/PortfolioList.vue'
    import Certificates from '~/components/Certificates/Certificates.vue'
    import Certificate from '~/components/Certificates/Certificate.vue'
    import ContactsInfo from '~/components/ContactsInfo.vue'
    import ContactForm from '~/components/ContactForm.vue'

    Vue.use(VueImg)
    Vue.use(VueScrollactive)

    export default {
        components: {
            Navigation,
            Logo,
            ArrowDown,
            CardTitle,
            EducationList,
            Technologia,
            PortfolioList,
            Certificates,
            Certificate,
            ContactsInfo,
            ContactForm
        },
        data() {
            return {
                certificates: [
                    {src: '/cert/big/15.jpg', category: 'Курсы', alt: "Learn Java Script"},
                    {src: '/cert/big/3.jpg', category: 'Курсы', alt: "Prometheus"},
                    {src: '/cert/big/5.jpg', category: 'Курсы', alt: "GeekBrains"},
                    {src: '/cert/big/10.jpg', category: 'Курсы', alt: "GeekBrains"},
                    {src: '/cert/big/12.jpg', category: 'Курсы', alt: "GeekBrains"},
                    {src: '/cert/big/4.jpg', category: 'Курсы', alt: "GeekBrains"},
                    {src: '/cert/big/8.jpg', category: 'Курсы', alt: "GeekBrains"},
                    {src: '/cert/big/1.jpg', category: 'Курсы', alt: "Head Hunter"},
                    {src: '/cert/big/11.jpg', category: 'Курсы', alt: "GeekBrains"},
                    {src: '/cert/big/9.jpg', category: 'Курсы', alt: "Intuit"},
                    {src: '/cert/big/7.jpg', category: 'Тесты', alt: "ITVDN"},
                    {src: '/cert/big/13.jpg', category: 'Тесты', alt: "GeekBrains"},
                    {src: '/cert/big/14.jpg', category: 'Тесты', alt: "GeekBrains"},
                    {src: '/cert/big/6.jpg', category: 'Разное', alt: "English Olympiad"}
                ]
            }
        },
        methods: {
            closeModal(e) {
                e.target.parentNode.classList.toggle("image-zoom--active");
                document.body.style.overflow = 'auto';
            }
        }
    }
</script>

<style lang="stylus">

    @import '~assets/styles/variables.styl'
    @import '~assets/styles/mixins'

    .header
        min-height 100vh
        position relative

        &__bg
            min-height 100vh
            position: relative;
            width: 100%;
            background: #333;
            overflow: hidden;
            background-size: cover;
            z-index: 1;
            background-image: url(/static/base/header-bg.jpg);
            background-position: center bottom;
            background-repeat: no-repeat;


    .card
        padding 55px 15px
        background-color white
        text-align center

        &__content
            max-width 940px
            margin auto

            &--wide
                max-width 1290px

        &__avatar
            display inline-block

            &-img
                margin-bottom 25px
                width 50%
                max-width 225px
                min-width 200px
                border-radius 50%
                box-shadow 27px 38px 52px -23px color_text_dark

        &__text

            h3
                color color_text_dark
                font-size 14px
                letter-spacing 4px
                text-transform uppercase
                font-family 'RalewayBold'

            a
                color accent-color
                text-decoration none
                transition color .3s ease

                @media mq_desktop

                    &:hover
                        color white
                        transition color .3s ease

            p
                margin-bottom 10px
                letter-spacing 1px

        &--grey
            background-color bg_grey

        &--black
            background-color bg_black

        &--dark
            background-color bg_dark



    .image-zoom
        display none
        position: fixed;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 21;
        padding-bottom: 69px;
        text-align: center;

        &--active
            display block

        &__hider
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.8);
            z-index: 8;
            cursor: pointer;

        &__cont
            position: relative;
            z-index: 9;
            margin: auto;
            top: 50px;
            height: 100%;
            overflow-x: hidden;
            width: auto;
            max-width: 65%;
            display: inline-block;

        &__img
            max-width: 100%;
            height: auto;



    .footer
        padding 50px 0
        text-align center
        background-color: bg_black;

        &__on-top
            margin auto
            margin-bottom 15px
            margin-top 0
            width 60px
            height 34px
            background url(/base/top.png) no-repeat center
            cursor pointer

        &__social
            width 30px
            margin 0 10px
        p
            margin-bottom: 20px
            margin-top 15px
            font-size .9rem

        a
            display inline-block
            color #6d6d6d
            text-decoration none
            transition color .3s ease

            svg
                width 30px
                height 30px

                path
                    fill #6d6d6d
                    transition fill .3s ease

            &:hover
                path
                    fill white
                    transition fill .3s ease

            @media mq_desktop
                &:hover
                    color white
                    transition color .3s ease

        &__social
            margin 0 10px



    .stack-technologies
        &__list
            normalize_list()
            clear_display_inlines()


    .skills
        &__line
            height: 50px;
            width: 3px;
            background-color: #d2d2d2;
            display: block;
            margin: auto;

        &__text
            display block
            padding 2px 26px


    .cols
        clearfix()

        &--2
            float left
            width 100%

            @media mq_desktop
                width 50%

</style>