<template>
    <ul class="education__list">
        <li v-for="(item, key) in education" :key="key" class="education__item">
            <div class="education__item-left">{{item.course}}</div>
            <div class="education__item-right">
                <a :href="item.link" target="_blank">{{item.school}}</a>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                education: [
                    {course: 'Vue.js 2.5 Создаем сайт на Vue.JS с Firebase, Vuex и Router', link: 'https://www.udemy.com/vuejs_25/', school: 'udemy.com'},
                    {course: 'Курс JavaScript/DOM/интерфейсы', link: 'https://learn.javascript.ru/courses/js', school: 'learn.javascript.ru'},
                    {course: 'Основы веб-дизайна', link: 'https://geekbrains.ru/courses/80', school: 'GeekBrains.ru'},
                    {course: 'Git. Быстрый старт', link: 'https://geekbrains.ru/courses/66', school: 'GeekBrains.ru'},
                    {course: 'Объектно-ориентированное программирование', link: 'https://geekbrains.ru/courses/70', school: 'GeekBrains.ru'},
                    {course: 'Основы ООП', link: 'http://academy.hh.ru/courses/806', school: 'academy.hh.ru'},
                    {course: 'Курс JavaScript Essential', link: 'http://itvdn.com/ru/video/javascript-essential', school: 'ITVDN.COM'},
                    {course: 'Курс JavaScript Advanced', link: 'http://itvdn.com/ru/video/javascript-advanced', school: 'ITVDN.COM'},
                    {course: 'Курс JQuery', link: 'http://itvdn.com/ru/video/jquery', school: 'ITVDN.COM'},
                    {course: 'Twitter Bootstrap 3', link: 'http://itvdn.com/ru/video/bootstrap', school: 'ITVDN.COM'},
                    {course: 'Wordpress. Личный блог', link: 'https://geekbrains.ru/courses/74', school: 'GeekBrains.ru'},
                    {course: 'PHP. Быстрый старт', link: 'https://geekbrains.ru/courses/65', school: 'GeekBrains.ru'},
                    {course: 'HTML, CSS, PHP, MySQL', link: 'https://school-php.com/video', school: 'school-php.com'},
                    {course: 'Основы Web UI разработки', link: 'http://courses.prometheus.org.ua/courses/LITS/106/2016_T2/info', school: 'prometheus.org.ua'},
                    {course: 'Основы программирования', link: 'https://geekbrains.ru/courses/2', school: 'GeekBrains.ru'},
                    {course: 'Курс HTML5 & CSS3', link: 'http://itvdn.com/ru/video/html5-and-css3', school: 'ITVDN.COM'},
                    {course: 'Продвинутый курс по верстке', link: 'https://htmlacademy.ru/program', school: 'htmlacademy.ru'},
                    {course: 'Базовый курс по верстке', link: 'https://htmlacademy.ru/program', school: 'htmlacademy.ru'}
                ]
            }
        }
    }
</script>

<style lang="stylus">
    @import '~assets/styles/variables.styl'
    @import '~assets/styles/mixins'

    .education

        &__list
            normalize_list()

        &__item
            display block

            @media mq_tablet
                clearfix()

                @media mq_desktop
                    border-bottom 1px dotted transparent

                    &:hover
                        border-color white

            &-left
                text-align left

                @media mq_tablet
                    float left
                    width 50%

            &-right
                text-align left

                @media mq_tablet
                    width 50%
                    float right 
                    text-align right

            a
                color inherit
                text-decoration none

                @media mq_desktop

                    &:hover
                        text-decoration underline
</style>
