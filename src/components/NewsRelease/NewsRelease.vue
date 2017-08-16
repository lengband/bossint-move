<template>
    <div class="NewsRelease" :style="{'background-image': 'url(' + bgimg +')'}">
        <div class="logo"><img src="../../../static/img/关于我们/新闻发布/logo.png" alt=""></div>
        <div class="title">最亲最密最懂你的工作伙伴</div>
        <div class="swiperWraper">
            <con-swiper ref="swiper" :news="news" :navShow="navShow"></con-swiper>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>

import conswiper from '../swiper/swiper'
import conFooter from '../conFooter/conFooter'
let img1 = require('../../../static/img/关于我们/新闻发布/新闻发布1.png')
let img2 = require('../../../static/img/关于我们/新闻发布/新闻发布2.png')
let img3 = require('../../../static/img/关于我们/新闻发布/新闻发布3.png')

let bgimg = require('../../../static/img/关于我们/新闻发布/aboutUs.png')
export default {
    name: 'NewsRelease',
    props: ['navShow'],
    data () {
        return {
            news: [
                {img: img1, time: '2016-05-16', msg: ['财务共享在国内才起步，需要国家大力支持和企业大力推进建设。根据报告显示，目前的财务共享基本都是费用共享为主，信息化程度和新技术的应用还有很长的路要走，离全业务共享，全流程，自动化共享的目标还有较大的差距。'], title: '2015中国财务共享服务中心调研报告发布'},
                {img: img2, time: '2016-05-16', msg: ['2016年4月13日，由用友网络科技有限公司主办的主题为《财务共享 服务转型》的大型企业迈入财务2.0十大高峰论坛北京站在帝都如期举行。', '在会上超过400位的政府官员、企业家、财务负责人和信息化负责人共同探讨企业财务管理的转型。'], title: '财务共享服务的实践者'},
                {img: img3, time: '2017-06-17', msg: ['博天环境集团股份有限公司（以下简称“博天环境”）财务共享中心项目上线会隆重召开，从而开启了财务管理转型升级发展的新纪元。', '以“构铸天人合一的美好环境”为使命，历经二十余年的发展，已成长为国内跻身于世界一流的环...'], title: '博信诚助力博天环境集团打造“世界...'}
            ],
            bgimg: bgimg
        }
    },
    components: {
        'con-swiper': conswiper,
        'con-footer': conFooter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.NewsRelease
    transition: all .5s;
    background-repeat: no-repeat;
    background-position: 0 0;
    .logo
        img
            width: 90px;
            height: 25px;
            display: block;
            margin: 0 auto;
            padding-top: 60px;
            padding-bottom: 20px;
    .title
        font-size: 20px;
        letter-spacing: 1px;
        text-align: center;
        margin-bottom: 30px;
    .swiperWraper
        margin-bottom: 60px;
</style>
