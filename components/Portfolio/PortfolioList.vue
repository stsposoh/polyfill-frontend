<template>
    <div class="portfolio">
        <ul class="portfolio__list">
            <portfolio-card v-for="item in portfolio" 
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
                    {siteName: 'fortuna', linkTo: '', imgSrcSmall: '/portfolio/fortuna_small.png', imgSrcBig: '/portfolio/fortuna_big.png', desc: ''},
                    {siteName: 'arbowork.com', linkTo: 'https://arbowork.com/', imgSrcSmall: '/portfolio/arbo_small.png', imgSrcBig: '/portfolio/arbo_big.png', desc: ''},
                    {siteName: 'temple', linkTo: '', imgSrcSmall: '/portfolio/temple_small.png', imgSrcBig: '/portfolio/temple_big.png', desc: ''},
                    {siteName: 'prostokuhni.com', linkTo: 'http://prostokuhni.com/', imgSrcSmall: '/portfolio/kuchni_small.png', imgSrcBig: '/portfolio/kuchni_big.png', desc: ''},
                    {siteName: 'do-dom.ru', linkTo: 'https://do-dom.ru/', imgSrcSmall: '/portfolio/dd_small.png', imgSrcBig: '/portfolio/dd_big.png', desc: 'Сайт благотворительной организации "Добрый дом"'},
                    {siteName: 'savethelife.ru', linkTo: 'http://savethelife.ru/', imgSrcSmall: '/portfolio/podari_small.png', imgSrcBig: '/portfolio/podari_big.png', desc: 'Сайт благотворительной организации "Спаси жизнь"'},
                    {siteName: 'maps.me', linkTo: 'http://maps.me/', imgSrcSmall: '/portfolio/maps_me_small.png', imgSrcBig: '/portfolio/maps_me_big.png', desc: 'Новогодняя страничка для maps.me'},
                    {siteName: 'maps.me', linkTo: 'http://maps.me/', imgSrcSmall: '/portfolio/routes_maps_me_small.png', imgSrcBig: '/portfolio/routes_maps_me_big.png', desc: 'Туристические маршруты для maps.me'},
                    {siteName: 'ingoma.ru', linkTo: 'http://ingoma.ru/', imgSrcSmall: '/portfolio/Ingoma_small.png', imgSrcBig: '/portfolio/Ingoma_big.png', desc: ''},
                    {siteName: 'dostavkaoptom.ru', linkTo: 'http://dostavkaoptom.ru/', imgSrcSmall: '/portfolio/dostavkaoptom_small.png', imgSrcBig: '/portfolio/dostavkaoptom_big.png', desc: ''},
                    {siteName: 'стройдворпетровский.pф', linkTo: 'vvvvvvvvhttp://xn--b1aaefqbfg4adbkhfcgmfj.xn--p1ai/vvv', imgSrcSmall: '/portfolio/stroydvor_small.png', imgSrcBig: '/portfolio/stroydvor_big.png', desc: 'Строительный двор «Петровский»'},
                    {siteName: 'iknagrevateli.ru', linkTo: 'http://iknagrevateli.ru/', imgSrcSmall: '/portfolio/iknagrevateli_small.png', imgSrcBig: '/portfolio/iknagrevateli_big.png', desc: ''},
                    {siteName: 'detalno.com.ua', linkTo: 'http://detalno.com.ua/', imgSrcSmall: '/portfolio/detalno_small.png', imgSrcBig: '/portfolio/detalno_big.png', desc: 'Сайт магазина автозапчастей'},
                    {siteName: 'strekoza.design', linkTo: 'http://strekoza.design/', imgSrcSmall: '/portfolio/strekoza_small.png', imgSrcBig: '/portfolio/strekoza_big.png', desc: 'Сайт студии дизайна'},
                    {siteName: 'topice.ru', linkTo: 'http://topice.ru/', imgSrcSmall: '/portfolio/topice_small.png', imgSrcBig: '/portfolio/topice_big.png', desc: 'Интернет магазин на wordpress'},
                    {siteName: 'm.zubiki.ru', linkTo: 'http://m.zubiki.ru/', imgSrcSmall: '/portfolio/zubi_small.png', imgSrcBig: '/portfolio/zubi_big.png', desc: 'Мобильная версия сайта'},
                    {siteName: 'mundep.gudkov.ru', linkTo: 'https://mundep.gudkov.ru/', imgSrcSmall: '/portfolio/gudkov_small.png', imgSrcBig: '/portfolio/gudkov_big.png', desc: 'Принимал участие в командной работе над сайтом'},
                    {siteName: 'mam4.ru', linkTo: 'http://www.mam4.ru', imgSrcSmall: '/portfolio/mam4_small.png', imgSrcBig: '/portfolio/mam4_big.png', desc: 'Работал в команде над созданием социальной сети'},
                    {siteName: 'beautyfit.ru', linkTo: 'http://beautyfit.ru/', imgSrcSmall: '/portfolio/tverskaya_small.png', imgSrcBig: '/portfolio/tverskaya_big.png', desc: 'Салон красоты'}
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