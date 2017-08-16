<template>
    <div class="new3">
        <div class="Title">
            <div class="title">博信诚助力博天环境集团打造“世界级”环境专家</div>
            <div class="tip">2017年6月17日18:02<br>来自博信诚（北京）网络科技有限公司</div>
            <div class="main">
                <p>博天环境集团股份有限公司（以下简称“博天环境”）财务共享中心项目上线会隆重召开，从而开启了财务管理转型升级发展的新纪元。</p>
                <p>以“构铸天人合一的美好环境”为使命，历经二十余年的发展，已成长为国内跻身于世界一流的环境企业行列。通过共享服务中心旨在构建集业务管理服务、风险防控、效率提速的管理平台。</p>
            </div>
        </div>
        <div class="img_texts" v-for="(item, index) in msgs" :style="{'margin-bottom': index === msgs.length - 1 ? 80 + 'px' : 0 + 'px'}">
            <div class="main">
                <img :src="item.img" alt="">
                <div class="tit">{{item.title}}</div>
                <p v-for="(msg, idx) in item.msg" :style="{'margin-top': idx === 0 ? 30 + 'px' : 0 + 'px'}">{{msg}}</p>
            </div>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>
import industryCommon from '../industry/industryCommon'
import conFooter from '../conFooter/conFooter'
let img1 = require('../../../static/img/关于我们/新闻发布子页面3/1.png')
let img2 = require('../../../static/img/关于我们/新闻发布子页面3/2.png')
let img3 = require('../../../static/img/关于我们/新闻发布子页面3/3.png')
let img4 = require('../../../static/img/关于我们/新闻发布子页面3/4.png')
export default {
    name: 'new1',
    data () {
        return {
            msgs: [
                {
                    img: img1,
                    title: '一、北京、武汉“双”共享作业池引擎，全面辐射全集团各业务板块，加强管控力度，避免标准执行偏差和内部管理黑洞，重塑标准化财务管理流程，统一化财务制度标准。'
                },
                {
                    img: img2,
                    title: '二、战略财务、业务财务、共享财务“三轮驱动”，协同发展，共同推动财务管理转型，确保集团总部战略的有效贯彻和落地。',
                    msg: []
                },
                {
                    img: img3,
                    title: '三、共享、共建、共赢，员工可随时登录财务共享平台，进行日常业务处理，工作周期大大缩短，全面提升员工满意度。',
                    msg: []
                },
                {
                    img: img4,
                    title: '四、实现了财务共享与EPC项目管理一体化全面打通，并进行集中资金支付。',
                    msg: ['博天环境集团的王总和康总也纷纷致辞，阐述了财务共享转型管理的方向及共享信息化平台建设的战略意义。博信诚公司孙总也表示继今年初资金管理项目上线后，通过双方紧密合作，不断的设计和完善财务共享中心的整体运营管理模式，博天环境的财务共享中心步入了崭新的阶段。', '财务共享中心项目的成功上线，标志着博天环境财务管理已经迈向“财务共享、管理转型的新时代”，相信基于共享服务模式的财务管理平台将助力博天环境朝着"世界一流水环境企业"的目标稳步迈进。', '新共享、新连接、新未来，博信诚在建筑施工、环境生态、旅游服务、商品零售等领域持续领先，为更多的企业提供定制化的、最适合的财务共享中心解决方案，并让集团企业的价值创造过程更加简单、智能、紧密相连。']
                }
            ]
        }
    },
    components: {
        industryCommon,
        'con-footer': conFooter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.new3
    transition: all .5s;
    .Title
        background: url('../../../static/img/关于我们/新闻发布/aboutUs.png') no-repeat 0 0;
        .title
            padding-top: 70px;
            font-size: 18px;
            text-align: center;
            margin-bottom: 10px;
        .tip
            font-size: 12px;
            text-align: center;
            margin-bottom: 10px;
        .main
            p
                font-size: 14px;
                line-height: 22px;
                margin-bottom: 20px;
                &:first-child
                    margin-bottom: 5px;   
    img
        width: 100%;
        display: block;
    .img_texts
        img
            margin-top: 20px;
            margin-bottom: 20px;
        p
            margin-top: 10px;
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 20px;
        .tit
            font-size: 16px;
            font-weight: 500;
            line-height: 23px; 
</style>
