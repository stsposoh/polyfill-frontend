<template>
    <div>
        <header class="header" id="header">
            <navigation />
            <div id="header-bg" class="header__bg">
                <canvas id="header-canvas"></canvas>
                <logo/>
            </div>
            <nav-list />
            <arrow-down />
        </header>

        <nuxt/>

        <div class="image-zoom">
            <div class="image-zoom__hider" @click="closeModal"></div>
            <div class="image-zoom__cont">
                <img  class="image-zoom__img" src="#" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    
    import Navigation from '~/components/Navigation/Navigation.vue'
    import Logo from '~/components/Logo.vue'
    import ArrowDown from '~/components/ArrowDown.vue'

    export default {
        components: {
            Navigation,
            Logo,
            ArrowDown
        },

        methods: {
            closeModal(e) {
                e.target.parentNode.classList.toggle("image-zoom--active");
                document.body.style.overflow = 'auto';
            }
        },

        mounted() {
            this.$nextTick( () => {


                //canvas bubble in header
                let width,
                    height,
                    largeHeader,
                    canvas,
                    ctx,
                    circles,
                    target,
                    animateHeader = true;

                initHeader();
                addListeners();

                function initHeader() {
                    width = window.innerWidth;
                    height = window.innerHeight;
                    target = {x: 0, y: height};

                    largeHeader = document.getElementById('header-bg');
                    largeHeader.style.height = height+'px';

                    canvas = document.getElementById('header-canvas');
                    canvas.width = width;
                    canvas.height = height;
                    ctx = canvas.getContext('2d');

                    // create particles
                    circles = [];
                    for(let x = 0; x < width*0.5; x++) {
                        let c = new Circle();
                        circles.push(c);
                    }
                    animate();
                }

                // Event handling
                function addListeners() {
                    window.addEventListener('scroll', scrollCheck);
                    window.addEventListener('resize', resize);
                }

                function scrollCheck() {
                    if(document.body.scrollTop > height) {
                        animateHeader = false;
                    } else {
                        animateHeader = true;
                    }
                }

                function resize() {
                    width = window.innerWidth;
                    height = window.innerHeight;
                    largeHeader.style.height = height+'px';
                    canvas.width = width;
                    canvas.height = height;
                }

                function animate() {
                    if(animateHeader) {
                        ctx.clearRect(0,0,width,height);
                        for(let i in circles) {
                            circles[i].draw();
                        }
                    }
                    requestAnimationFrame(animate);
                }

                // Canvas manipulation
                function Circle() {
                    let _this = this;

                    // constructor
                    (function() {
                        _this.pos = {};
                        init();
                    })();

                    function init() {
                        _this.pos.x = Math.random()*width;
                        _this.pos.y = height+Math.random()*100;
                        _this.alpha = 0.1+Math.random()*0.3;
                        _this.scale = 0.1+Math.random()*0.3;
                        _this.velocity = Math.random();
                    }

                    this.draw = function() {
                        if(_this.alpha <= 0) {
                            init();
                        }
                        _this.pos.y -= _this.velocity;
                        _this.alpha -= 0.0005;
                        ctx.beginPath();
                        ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
                        ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
                        ctx.fill();
                    };
                }


                //experience timer
                const myDate = '01.06.2015 00:00:00';

                let a = myDate.split(' '),
                    b = a[0].split('.'),
                    c = a[1].split(':'),
                    d = new Date(),
                    T = [],
                    C = [];

                T[0] = b[2],
                    C[0] = d.getFullYear(),
                    T[1] = b[1] - 1,
                    C[1] = d.getMonth(),
                    T[2] = parseInt(b[0]),
                    C[2] = d.getDate(),
                    T[3] = parseInt(c[0]),
                    C[3] = d.getHours(),
                    T[4] = parseInt(c[1]),
                    C[4] = d.getMinutes(),
                    T[5] = parseInt(c[2]),
                    C[5] = d.getSeconds();

                for (var D = [], j = 0; j < 6; j++) {
                    D[j] = C[j] - T[j];
                }if (D[5] < 0) D[5] += 60, D[4]--;
                if (D[4] < 0) D[4] += 60, D[3]--;
                if (D[3] < 0) D[3] += 24, D[2]--;
                if (D[2] < 0) D[2] = C[2] + new Date(C[0], C[1], 0).getDate() - T[2], D[1]--;
                if (D[1] < 0) D[1] = C[1] + 12 - T[1], D[0]--;

                for (j = 0; j < 3; j++) {
                    formTxt(D[j], j);
                }function formTxt(n, q) {
                    let w = [['год', 'года', 'лет'],
                            ['месяц', 'месяца', 'месяцев'],
                            ['день', 'дня', 'дней']],

                        k = n % 10,
                        l = !k || n > 5 && n < 21 || k > 4 ? 2 : k == 1 ? 0 : 1,
                        t = w[q][l];

                    let z = ',';

                    if ([q] == 2) z = '';

                    document.querySelector('.js-experience-timer').children[q].innerHTML = n + ' ' + t + z;
                }





    // //Zoom image
    // for(let i = 0; i < imageZoomItems.length; i++) {
    //     imageZoomItems[i].addEventListener('click', getImgAdress);
    // }

    // function getImgAdress(e) {
    //     e.preventDefault();

    //     let imgAdress = this.getAttribute('href');

    //     setImgAdress(imgAdress);
    //     showZoomedimage();
    // }

    // function setImgAdress(imgAdress) {
    //     let zoomedImage = document.querySelector('.js-image-zoomed-image');

    //     zoomedImage.setAttribute('src', imgAdress);
    // }

    // function showZoomedimage() {
    //     
    //     imageZoomed.style.display = 'block';
    // }

    // document.querySelector('.js-image-zoomed-hider').addEventListener('click', function () {
    //     document.body.style.overflow = 'auto';
    //     imageZoomed.style.display = '';
    // });


    //Make the node not clickable
    let notLinkElements = document.querySelectorAll('.not-link');

    for (let i = 0; i < notLinkElements.length; i++) {
        notLinkElements[i].addEventListener('click', function (e) {
            e.preventDefault();
        })
    }




    //Sertificates
    // mixitup('.js-portfolio', {
    //     load: {
    //         sort: 'order:asc'
    //     },
    //     animation: {
    //         effects: 'fade rotateZ(-180deg)',
    //         duration: 700
    //     },
    //     classNames: {
    //         block: '',
    //         elementFilter: 'certificates-nav__list-item',
    //     },
    //     selectors: {
    //         target: '.certificates-nav__images-item'
    //     }
    // });




                ////////////////

               
            })
        },
      
    }
</script>


<style lang="stylus">
    @import '~assets/styles/variables.styl'
    @import '~assets/styles/defaults.styl'

    .header
        min-height 100vh

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



</style>
