<template>
    <div class="industry">
        <div class="banner">
            <img src="../../../static/img/行业/环境工程/图片.png" alt="">
        </div>
        <div class="swiper">
            <con-swiper ref="swiper" :industries="industries" :navShow="navShow"></con-swiper>
        </div>
        <div class="ourService">
            <div class="Title">我们可为您提供的服务</div>
            <div class="main">
                <div class="partner">
                    <div class="title"><span style="font-size: 18px">•</span> 咨询设计</div>
                    <p>bossint按照全球最佳解决方案和行业实践，为大中型企业集团提供最佳、最适合的咨询设计方案，帮助众多集团企业进行管理变革和价值提升。</p>
                </div>
                <div class="partner">
                    <div class="title"><span style="font-size: 18px">•</span> 实施服务</div>
                    <p>通过共享服务创新方法论，帮助集团企业客户获得更广泛的、整体的服务，帮助客户拓宽自己的业务，延伸管理价值。</p>
                </div>
                <div class="partner">
                    <div class="title"><span style="font-size: 18px">•</span> 云平台服务</div>
                    <p>帮助企业建立公有云、私有云或者私有部署，实现客户使用系统的平滑升级、快速获得管理优化、业务变革调整、软件使用服务等，提升客户体验以及让管理价值创造过程更加简单、智能、紧密连接。</p>
                </div>
                <div class="nearUpdate">
                    <div class="near">最近更新</div>
                    <ul>
                        <li v-for="(item, index) in nearUpdates">
                            <img :src="item.img" alt="">
                            <div class="nearTitle">{{item.title}}</div>
                            <p>{{item.msg}}</p>
                            <div class="button"><router-link :to="buttons[index]">查看完整解决方案</router-link></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>

import conswiper from './../swiper/swiper'
import conFooter from '../conFooter/conFooter'
let img1 = require('../../../static/img/行业/环境工程/博天环境.jpg')
let img2 = require('../../../static/img/行业/建筑/中国恩菲.png')
let img3 = require('../../../static/img/行业/旅游/中国国旅.png')

let img4 = require('../../../static/img/行业/环境工程/图1.jpg')
let img5 = require('../../../static/img/行业/环境工程/图2.jpg')
let img6 = require('../../../static/img/行业/环境工程/图3.jpg')
export default {
    name: 'industry',
    props: ['navShow'],
    data () {
        return {
            industries: [
                {img: img1, title: '博天环境集团股份有限公司', msg: '博天环境致力于成为领先的水生态环境综合服务商。秉承“水业关联的多元化发展战略”，博天环境在工业与能源水系统、城市水环境、生态修复和土壤修复等领域，已经形成覆盖全产业链的一体化解决方案。'},
                {img: img2, title: '中国恩菲工程技术有限公司', msg: '中国有色工程有限公司暨中国恩菲工程技术有限公司 （简称“中国恩菲”），其前身是中国有色工程设计研究总院，即原北京有色冶金设计研究总院，成立于1953年。中国恩菲现隶属于世界500强企业——中国冶金科工集团有限公司。'},
                {img: img3, title: '中国国旅股份有限公司', msg: '中国国旅系中国最早获得特许经营出境旅游的旅行社。2007年荣膺北京市首批5A级旅行社；连年被评为“首都旅游紫禁杯最佳集体”。2008年第29届北京奥运会，作为唯一参与服务接待服务工作的旅行社企业，承接四个奥运官方服务项目，被北京市政府和北京奥组委评为“北京奥运会和残奥会先进集体”。'}
            ],
            nearUpdates: [
                {img: img4, title: '中国国旅财务共享中心解决方案', msg: '中国国旅系中国最早获得特许经营出境旅游的旅行社。2007年荣膺北京市首批5A级旅行社；连年被评为“首都旅游紫禁杯最佳集体”。2008年第29届北奥运会，作为唯一参与接待服务工作的旅行社企业，承接四个奥运官方服务项目，被北京市政府和北京奥组委评为“北京奥运会和残奥会先进集体”。'},
                {img: img5, title: 'Poten财务共享中心解决方案', msg: '博天环境致力于成为领先的水生态环境综合服务商。秉承“水业关联的多元化发展战略”，博天环境在工业与能源水系统、城市水环境、生态修复和土壤修复等领域，已经形成涵盖检测监测、咨询设计、系统集成、项目管理、核心设备制造、投资运营等覆盖全产业链的一体化解决方案，以深.......'},
                {img: img6, title: 'ENFI账表一体化解决方案', msg: '中国有色工程有限公司暨中国恩菲工程技术有限公司（简称“中国恩菲”），其前身是中国有色工程设计研究总院，即原北京有色冶金设计研究总院，成立于1953年。中国恩菲现隶属于世界500强企业——中国冶金科工集团有限公司'}
            ],
            buttons: ['tour', 'environment', 'architecture']
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
.industry
    transition: all .5s;
    .banner
        img
            width: 100%;
    .swiper
        height: 400px;
    .ourService
        background-color: #f6f7f7;
        padding-top: 33px;
        .Title
            font-size: 24px;
            text-align: center;
            line-height: 46px;
        .partner
            font-size: 14px;
            line-height: 30px;
            .title
                line-height: 40px;
        .nearUpdate
            margin-top: 32px;
            .near
                color: #1775c2;
                font-size: 16px;
                line-height: 60px;
            ul
                li
                    &:last-child
                        padding-bottom: 25px;
                        margin-bottom: 60px;
                    img
                        margin-top: 20px;
                        width: 100%;
                    .nearTitle
                        text-align: center;
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 46px;
                    p
                        font-size: 12px;
                        line-height: 18px;
                    .button
                        background-color: #2983c8;
                        text-align: center;
                        font-size: 12px;
                        height: 25px;
                        line-height: 25px;
                        width: 130px;
                        margin: 20px auto;
                        border-radius: 3px;
                        a
                            color: #fff;
</style>
