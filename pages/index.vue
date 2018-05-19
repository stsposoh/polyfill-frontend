<template>
    <main>
        <section id="aboutme" class="card card--black">
            <div class="card__content">
                <card-title white title="Обо мне" desc="Чистый код - чистая совесть!" />
                <img v-img class="card__avatar-img" src="/base/me_big.jpg" alt="Я">
                <div class="card__text">
                    <p>Веб разработкой занимаюсь с 2015 года (<span class="js-experience-timer"><span></span>
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

        <section id="contacts" class="card"></section>









  </main>
</template>

<script>
    import Vue from 'vue'
    import VueImg from 'v-img'
    import VueScrollactive from 'vue-scrollactive'
    import CardTitle from '~/components/CardTitle.vue'
    import EducationList from '~/components/EducationList.vue'
    import Technologia from '~/components/Technologia.vue'
    import PortfolioList from '~/components/PortfolioList.vue'
    import Certificates from '~/components/Certificates/Certificates.vue'
    import Certificate from '~/components/Certificates/Certificate.vue'

    Vue.use(VueImg)
    Vue.use(VueScrollactive)

    export default {
        components: {
            CardTitle,
            EducationList,
            Technologia,
            PortfolioList,
            Certificates,
            Certificate
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
        }
    }
</script>

<style lang="stylus">

    @import '~assets/styles/variables.styl'
    @import '~assets/styles/mixins'

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






</style>