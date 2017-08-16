<template>
    <div class="home">
        <div class="swiper">
            <con-swiper :navShow="navShow" ref="swiper" :banners="banners"></con-swiper>
        </div>
    </div>
</template>

<script>

import conswiper from './swiper/swiper'
let banner1 = require('../../static/img/首页/swiper1.jpg')
let banner2 = require('../../static/img/首页/swiper2.jpg')
let banner3 = require('../../static/img/首页/swiper3.jpg')
let banner4 = require('../../static/img/首页/swiper4.jpg')
let banner5 = require('../../static/img/首页/swiper5.jpg')
let banner6 = require('../../static/img/首页/swiper6.jpg')

let left = require('../../static/img/首页/十字1.png')
let right = require('../../static/img/首页/十字2.png')
let about = require('../../static/img/首页/全球共享--------迎接未来.png')

let bossint = require('../../static/img/首页/bossint.png')
let ecoplace = require('../../static/img/首页/ecoplace.png')
export default {
    name: 'home',
    props: {
        navShow: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            banners: [
                {img: banner1, icon: bossint, msg: ['中国领先的数字化', '共享服务管理服务商']},
                {img: banner2, icon: ecoplace, msg: ['数字协作管理平台', '激活企业无限活力']},
                {img: banner3, icon: ecoplace, msg: ['数字财务共享管理平台', '新共享、新连接、新未来']},
                {img: banner4, icon: ecoplace, msg: ['数字HR共享管理平台', '新共享、新连接、新未来']},
                {img: banner5, icon: bossint, msg: ['成就客户、诚信负责、追求卓越']},
                {img: banner6, about: about, leftIcon: left, rightIcon: right}
            ]
        }
    },
    mounted () {
        this.$watch(() => this.$props.navShow, newValue => {
            if (newValue) {
                // 隐藏swiper的分页器防止样式错乱
                this.$refs.swiper.$el.getElementsByClassName('swiper-pagination')[0].style.display = 'none'
            } else {
                setTimeout(() => {
                    this.$refs.swiper.$el.getElementsByClassName('swiper-pagination')[0].style.display = 'block'
                }, 300)
            }
        })
    },
    components: {
        'con-swiper': conswiper
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
    transition: all .5s;
    .swiper
        height: 100%;
</style>
