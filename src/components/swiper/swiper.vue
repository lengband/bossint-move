<template>
    <div class="swiper">
        <!-- Swiper -->
        <div class="swiper-container" :class="{'industriesWraper': industries, 'bannersWraper': banners, 'newsWraper': news}">
            <div class="swiper-wrapper banners" v-if="banners">
                <div class="swiper-slide" v-for="(item, index) in banners">
                    <img :src="item.img" alt="" ref="img">
                    <div class="layer">
                        <div class="center">
                            <div class="icon" v-if="item.icon"><img :src="item.icon"></div>
                            <p v-for="msg in item.msg">{{msg}}</p>
                            <div v-if="item.about" v-show="item.about" class="centerImg" :style="{'background-image': 'url('+item.about+')'}">
                                <img :src="item.rightIcon" class="rightIcon"><img :src="item.leftIcon" class="leftIcon">
                            </div>
                        </div>
                        <transition name="zoomOutaa"  enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                            <div class="start" ref="start" v-show="startShow" v-if="index === banners.length - 1"><router-link to="wochart" style="color: #fff;">立即体验</router-link></div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="swiper-wrapper industries">
                <div class="swiper-slide"  v-for="(item, index) in industries" v-if="industries">
                    <img :src="item.img">
                    <div class="title">{{item.title}}</div>
                    <div class="main">
                        <p>{{item.msg}}</p>
                    </div>
                </div>
            </div>
            <div class="swiper-wrapper news">
                <div class="swiper-slide"  v-for="(item, index) in news" v-if="news" @click="showNews(index)">
                    <div class="new">
                        <img :src="item.img">
                        <div class="title">{{item.title}}</div>
                        <div class="main">
                            <p v-for="ite in item.msg">{{ite}}</p>
                        </div>
                        <div class="foot">
                            <div class="main clearfix">
                                <span>新闻发布</span>
                                <span class="right">{{item.time}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import $ from 'jquery'
import router from '../../router/'
let obj
/* eslint-disable */
export default {
    name: 'hello',
    props: {
        navShow: {
            type: Boolean,
            default: false
        },
        banners: {
            type: Array
        },
        industries: {
            type: Array
        },
        news: {
            type: Array
        }
    },
    data () {
        return {
            startShow: false
        }
    },
    methods: {
        lunbo () {
            var me = this
            /* eslint-disable no-new */
            obj = {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplayDisableOnInteraction: false,
                effect: 'effect',
                onSlideChangeEnd: function (swiper) {
                    $('.layer').hide()
                    $('.swiper-slide-active .layer').fadeIn('slow', () => {
                        if (swiper.activeIndex === me.banners.length - 1) {
                            me.startShow = true
                        } else {
                            me.startShow = false
                        };
                    })
                }
            }
            var swiper1 = new Swiper('.swiper-container', obj)
            this.$root.eventHub.$on('logoHideNav', () => {
	            swiper1.slideTo(0, 500, () => {
	            	$('.layer').hide()
                    $('.swiper-slide-active .layer').fadeIn('slow', () => {
                        if (swiper.activeIndex === me.banners.length - 1) {
                            me.startShow = true
                        } else {
                            me.startShow = false
                        };
                    })
	            })
	        })
        },
        showNews (index) {
            var num = index + 1
            router.push('new' + num)
        }
    },
    mounted () {
        this.lunbo()
        if (this.banners) {
           this.$refs.img.forEach((val) => {
                val.style.height = window.innerHeight + "px";
            })
            window.addEventListener('resize', (event) => {
                this.$refs.img.forEach((val) => {
                    val.style.height = window.screen.height + "px";
                })
            }) 
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../../assets/lib/swiper/css/swiper-3.4.1.min.css';
@import 'https://unpkg.com/animate.css@3.5.1/animate.min.css';
.swiper-pagination{
    z-index: 1;
}
.swiper-pagination-bullet{
    background: #fff;
    opacity: 1;
}
.swiper-pagination-bullet-active{
    background: #03bde5;
}
.main
    width: 90%;
    margin: 0 auto;
.swiper-container
    height: 100%;
    &.industriesWraper
        .swiper-pagination
            .swiper-pagination-bullet
                background: #999;
                &.swiper-pagination-bullet-active
                    background: #03bde5;
    &.bannersWraper
        .swiper-wrapper 
            .swiper-slide
                position: relative;
                img
                    width: 100%;
                    height: 100%;
                    display: block;
                .layer
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    background-color: rgba(0,0,0,.4)
                    p
                        margin: 0;
                        line-height: .4rem;
                    .center
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        font-size: 22px;
                        line-height: 30px;
                        top: 27%;
                        text-align: center;
                        .icon
                            img
                                width: 1.03rem;
                                height: .26rem;
                                display: block;
                                margin: 0 auto;
                        .centerImg
                            width: 3.3rem;
                            height: 1.6rem;
                            margin: 0 auto;
                            background-size: 80% 80%;
                            background-repeat: no-repeat;
                            background-position: center center;
                            position: relative;
                            .rightIcon
                                position: absolute;
                                left: 0;
                                top: -15px;
                            .leftIcon
                                position: absolute;
                                right: 0;
                                bottom: -15px;
                            img
                                width: .88rem;
                                height: .76rem;
                    .start
                        width: 1.15rem;
                        height: .4rem;
                        border: 1px solid #fff;
                        border-radius: 3px;
                        line-height: .4rem;
                        text-align: center;
                        position: absolute;
                        font-size: 14px;
                        letter-spacing: 1px;
                        left: 34%;
                        bottom: 10%; 
        .swiper-pagination
            bottom: 20px;
    .industries
        .swiper-slide
            img
                width: 2.5rem;
                height: 1.5rem;
                margin: 54px auto 10px;
                display: block;
            .title
                font-size: 22px;
                font-weight: 500;
                text-align: center;
                line-height: 60px;
    &.newsWraper
        .news
            .swiper-slide 
                .new
                    width: 290px;
                    border-radius: 4px;
                    margin: 0 auto;
                    border: 1px solid #e5e5e5;
                    box-shadow: 0px 0px 3px #f7f7f7;
                    padding-top: 20px;
                    .title
                        font-size: 18px;
                        line-height: 20px;
                        width: 80%;
                        margin: 10px auto;
                        p
                            font-size: 14px;
                            line-height: 20px;
                    img
                        margin: 0 auto;
                        width: 80%;
                        height: 140px;
                        border-radius: 3px;
                        display: block;
                .foot
                    margin-top: 10px;
                    margin-bottom: 10px;
                    span
                        float: left;
                    .right
                        float: right;    
        .swiper-pagination
            z-index: 1;
            bottom: 0px;
            .swiper-pagination-bullet
                background: #999;
                opacity: 1;
                &.swiper-pagination-bullet-active
                    background: #03bde5;
    
</style>
