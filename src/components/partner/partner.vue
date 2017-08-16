<template>
    <div class="partner">
        <div class="banner"><img src="../../../static/img/伙伴/伙伴.jpg" alt=""></div>
        <div class="main">
            <div class="desc">博信诚公司期待更多的产业伙伴加入，共同为客户提供更多、更完善的服务，创造价值、实现共赢。</div>
        </div>
        <div class="company">
            <img src="../../../static/img/伙伴/logo.png" alt="">
            <h4>我们的合作伙伴</h4>
        </div>
        <ul class="partners">
            <li v-for="(item, index) in partners" class="clearfix">
                <img :src="item.img" alt="" v-if="index % 2 === 0" style="margin-left: 15px;">
                <div :style="{'margin-left': index % 2 === 0 ? .25 + 'rem' : .15 + 'rem'}">{{item.msg}}</div>
                <img :src="item.img" alt="" v-if="index % 2 === 1" style="margin-left: 15px;" :style="{'margin-left': index === 1 || index === 5 ? 40 + 'px' : 15 + 'px'}">
            </li>
        </ul>
        <ul class="aboutUs">
            <li v-for="(item, index) in aboutUs">
                <img :src="item.img" alt="">
                <p class="p1">{{item.p1}}</p>
                <p class="p2">{{item.p2}}</p>
            </li>
        </ul>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
let img1 = require('../../../static/img/伙伴/图层-22.png')
let img2 = require('../../../static/img/伙伴/图层-23.png')
let img3 = require('../../../static/img/伙伴/图层-24.png')
let img4 = require('../../../static/img/伙伴/图层-25.png')
let img5 = require('../../../static/img/伙伴/图层-26.png')
let img6 = require('../../../static/img/伙伴/图层-27.png')

let icon1 = require('../../../static/img/伙伴/icon1.png')
let icon2 = require('../../../static/img/伙伴/icon2.png')
let icon3 = require('../../../static/img/伙伴/icon3.png')
export default {
    name: 'partner',
	data () {
		return {
			partners: [
                {img: img1, msg: '230万开发者选择的专业云服务'},
                {img: img2, msg: '亚太地区领先的软件、云服务、金融服务提供商'},
                {img: img3, msg: '面向企业级市场的第三方综合性互联网金融支付服务平台'},
                {img: img4, msg: '中国领先的互联网技术公司'},
                {img: img5, msg: '国内领先的企业服务和税控盘唯一在线服务平台'},
                {img: img6, msg: '中国信息服务行业的主要推动者'}
            ],
            aboutUs: [
                {img: icon1, p1: '联系方式', p2: '（86-10）84466910'},
                {img: icon2, p1: '官方微信', p2: 'Bossint云上事'},
                {img: icon3, p1: '企业邮箱', p2: 'Company@bossint.com.cn'}
            ]
		}
	},
	components: {
		'con-footer': conFooter
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.partner
    transition: all .5s;
    .banner
        img
            width: 100%;
    .desc
        font-size: 16px;
        margin-top: 25px;
        margin-bottom: 30px;
        line-height: 22px;
    .company
        img
            display: block;
            margin: 0 auto;
        h4
            text-align: center;
            line-height: 45px;
            font-size: 18px;
    .partners
        width: 90%;
        margin: 0 auto;
        li
            height: .7rem;
            border-radius: 3px;
            margin-bottom: 20px;
            border: 1px solid #b5b5b5;
            &:last-child
                margin-bottom: 80px;
            &:first-child
                margin-top: 20px;
            img
                margin-top: .20rem;
                float: left;
                height: .25rem;
            div
                float: left;
                font-size: 12px;
                height: .25rem;
                width: 2rem;
                margin-top: .15rem;
    .aboutUs
        background-color: #f6f7f7;
        margin-bottom: 60px;
        li
            border-bottom: 1px solid #c9c9c9;
            padding-top: 20px;
            &:last-child
                border: 0;
            img
                width: .7rem;
                margin: 0 auto 10px;
                display: block;
            p
                text-align: center;
                font-size: 16px;
                line-height: 40px;
</style>
