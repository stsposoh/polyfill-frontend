<template>
    <div class="portfolio">
        <ul class="portfolio__list">
            <portfolio-card v-for="item in portfolio" 
                :key="item.id" 
                :imgSrcBig="item.imgSrcBig" 
                :imgSrcSmall="item.imgSrcSmall" 
                :linkTo="item.linkTo" 
                :siteName="item.siteName" 
                :desc="item.desc" />
        </ul>
    </div>
</template>

<script>
    import PortfolioCard from '~/components/Portfolio/PortfolioCard.vue'

    export default {
        components: {
            PortfolioCard
        },

        data() {
            return {
                portfolio: [
                    {siteName: 'tutor', linkTo: 'http://tutor.ru/', imgSrcSmall: '/portfolio/tutor_small.png', imgSrcBig: '/portfolio/tutor_big.png', desc: 'Командная разработка образовательного портала'},
                    {siteName: 'mam4.ru', linkTo: 'http://www.mam4.ru', imgSrcSmall: '/portfolio/mam4_small.png', imgSrcBig: '/portfolio/mam4_big.png', desc: 'Работал в команде над созданием социальной сети. Разрабатывал фронт на Vue.js'},
                    {siteName: 'vostokvk', linkTo: 'http://vostokvk.ru/', imgSrcSmall: '/portfolio/vostokvk_small.png', imgSrcBig: '/portfolio/vostokvk_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'agrosoyuz', linkTo: 'http://grey-fox.ru/clients/agrosoyuz/', imgSrcSmall: '/portfolio/agro_small.png', imgSrcBig: '/portfolio/agro_big.jpg', desc: 'Сайт на WordPress'},
                    {siteName: 'tk-bessarabka', linkTo: 'http://tk-bessarabka.ru/', imgSrcSmall: '/portfolio/bessarabka_small.png', imgSrcBig: '/portfolio/bessarabka_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'fortuna', linkTo: 'http://fortuna-design.com/', imgSrcSmall: '/portfolio/fortuna_small.png', imgSrcBig: '/portfolio/fortuna_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'arbowork.com', linkTo: 'https://arbowork.com/', imgSrcSmall: '/portfolio/arbo_small.png', imgSrcBig: '/portfolio/arbo_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'temple', linkTo: 'http://temple.polyfill.ru', imgSrcSmall: '/portfolio/temple_small.png', imgSrcBig: '/portfolio/temple_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'do-dom.ru', linkTo: 'https://do-dom.ru/', imgSrcSmall: '/portfolio/dd_small.png', imgSrcBig: '/portfolio/dd_big.png', desc: 'Сайт на WordPress с приемом пожертвований через плагин Лейка'},
                    {siteName: 'savethelife.ru', linkTo: 'http://savethelife.ru/', imgSrcSmall: '/portfolio/podari_small.png', imgSrcBig: '/portfolio/podari_big.png', desc: 'Сайт на WordPress с приемом пожертвований через плагин Лейка'},
                    {siteName: 'maps.me', linkTo: 'http://maps.me/', imgSrcSmall: '/portfolio/maps_me_small.png', imgSrcBig: '/portfolio/maps_me_big.png', desc: 'Новогодняя страничка для maps.me'},
                    {siteName: 'maps.me', linkTo: 'http://maps.me/', imgSrcSmall: '/portfolio/routes_maps_me_small.png', imgSrcBig: '/portfolio/routes_maps_me_big.png', desc: 'Туристические маршруты для maps.me'},
                    {siteName: 'ingoma.ru', linkTo: 'http://ingoma.ru/', imgSrcSmall: '/portfolio/Ingoma_small.png', imgSrcBig: '/portfolio/Ingoma_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'dostavkaoptom.ru', linkTo: 'http://dostavkaoptom.ru/', imgSrcSmall: '/portfolio/dostavkaoptom_small.png', imgSrcBig: '/portfolio/dostavkaoptom_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'стройдворпетровский.pф', linkTo: 'http://xn--b1aaefqbfg4adbkhfcgmfj.xn--p1ai/', imgSrcSmall: '/portfolio/stroydvor_small.png', imgSrcBig: '/portfolio/stroydvor_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'iknagrevateli.ru', linkTo: 'http://iknagrevateli.ru/', imgSrcSmall: '/portfolio/iknagrevateli_small.png', imgSrcBig: '/portfolio/iknagrevateli_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'detalno.com.ua', linkTo: 'http://detalno.com.ua/', imgSrcSmall: '/portfolio/detalno_small.png', imgSrcBig: '/portfolio/detalno_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'strekoza.design', linkTo: 'http://strekoza.design/', imgSrcSmall: '/portfolio/strekoza_small.png', imgSrcBig: '/portfolio/strekoza_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'm.zubiki.ru', linkTo: 'http://m.zubiki.ru/', imgSrcSmall: '/portfolio/zubi_small.png', imgSrcBig: '/portfolio/zubi_big.png', desc: 'Мобильная версия сайта'},
                    {siteName: 'mundep.gudkov.ru', linkTo: 'https://mundep.gudkov.ru/', imgSrcSmall: '/portfolio/gudkov_small.png', imgSrcBig: '/portfolio/gudkov_big.png', desc: 'Принимал участие в командной работе над сайтом'},
                    {siteName: 'beautyfit.ru', linkTo: 'http://beautyfit.ru/', imgSrcSmall: '/portfolio/tverskaya_small.png', imgSrcBig: '/portfolio/tverskaya_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'mauthausen', linkTo: 'http://camps.polyfill.ru/', imgSrcSmall: '/portfolio/mauthausen_small.png', imgSrcBig: '/portfolio/mauthausen_big.png', desc: 'Сайт на WordPress'},
                    {siteName: 'funportret', linkTo: 'http://funportret.ru/', imgSrcSmall: '/portfolio/funportrait_small.png', imgSrcBig: '/portfolio/funportrait_big.png', desc: 'Сайт на WordPress'}
                ]
            }
        },
        
        props: {
            src: {
                type: String
            },
            title: {
                type: String
            }
        }
    }
</script>

<style lang="stylus">
    @import '~assets/styles/mixins'

    .portfolio

        &__list
            normalize_list()
            clear_display_inlines()
</style>