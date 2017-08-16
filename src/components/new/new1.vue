<template>
    <div class="new1">
        <div class="Title">
            <div class="title">2015中国财务共享服务中心调研报告发布</div>
            <div class="tip">2016年5月17日 13:02 <br>来自博信诚（北京）网络科技有限公司</div>
            <div class="main">
                <p>财务共享在国内才起步，需要国家大力支持和企业大力推进建设。根据报告显示，目前的财物共享基本都是费用共享为主，信息化程度和新技术的应用还有很长的路要走，离全业务共享，全流程，自动化共享的目标还有较大的差距。</p>
            </div>
        </div>
        <div class="img_texts">
            <div class="img_text" v-for="item in msgs">
                <div class="title" v-if="item.title">{{item.title}}</div>
                <div class="main" v-for="ite in item.msg" v-if="item.msg">
                    <p>{{ite}}</p>
                </div>
                <img :src="img" alt="" v-for="img in item.img">
            </div>
        </div>
        <div class="main"><h3>政策建议</h3></div>
        <industryCommon :content="dot1"></industryCommon>
        <con-footer></con-footer>
    </div>
</template>

<script>
import industryCommon from '../industry/industryCommon'
import conFooter from '../conFooter/conFooter'
let img1 = require('../../../static/img/关于我们/新闻发布子页面1/1.png')
let img2 = require('../../../static/img/关于我们/新闻发布子页面1/2.png')
let img3 = require('../../../static/img/关于我们/新闻发布子页面1/3.png')
let img4 = require('../../../static/img/关于我们/新闻发布子页面1/4.png')
let img5 = require('../../../static/img/关于我们/新闻发布子页面1/5.png')

let img6 = require('../../../static/img/关于我们/新闻发布子页面1/6.png')
let img7 = require('../../../static/img/关于我们/新闻发布子页面1/7.png')

let img8 = require('../../../static/img/关于我们/新闻发布子页面1/8.png')
let img9 = require('../../../static/img/关于我们/新闻发布子页面1/9.png')
let img10 = require('../../../static/img/关于我们/新闻发布子页面1/10.png')
export default {
    name: 'new1',
    data () {
        return {
            msgs: [
                {
                    img: [img1]
                },
                {
                    img: [img2],
                    title: '基本情况描述',
                    msg: ['为了全面了解我国企业财务共享服务中心的现状，张庆龙教授领衔的北京国家会计学院审计与风险管理研究所于2015年在全国和地方会计领军人才，总会计师素质提升工程培训班的基础上发放和回收了400余份调查问卷，经过调查数据整合分析后，形成以下调研报告。']
                },
                {
                    img: [img3],
                    title: '建立情况'
                },
                {
                    img: [img4, img5],
                    title: '运行实施'
                },
                {
                    img: [img6],
                    title: '人员管理',
                    msg: ['从问卷调查结果来看，高达87%的受访者认为财务共享服务中心缺少晋升机制和机会，76%的受访者认为缺少与集团公司财务部门的沟通的良好机制。', '财务共享服务中心在许多其他部门看来，就是一个支付工厂或者会计加工厂。人员素质不高，简单机械劳动是其人员的典型特征。正是由于这种认识上的不足，财务共享服务中心人员的晋升发展通道狭窄，职业发展规划不足又造成晋升机制存在不足，进而造成流失率较高。']
                },
                {
                    img: [img7],
                    title: '运营标准'
                },
                {
                    img: [img8],
                    title: '信息化程度'
                },
                {
                    img: [img9],
                    title: '新技术应用'
                },
                {
                    img: [img10],
                    title: '运行效果'
                }
            ],
            dot1: {
                dot: true,
                dotArr: ['明确财政部在推动财务共享服务建设中的作用', '开发建立通用的可比的服务水平量化指标体系', '探索和总结全球财务共享服务中心的实践经验']
            }
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
.new1
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
        p
            font-size: 14px;
    img
        width: 100%;
        display: block;
    .img_texts
        .title
            text-align: center;
            font-size: 18px;
            font-weight: 500;
            line-height: 38px;
        img
            margin-top: 12px;
            margin-bottom: 12px;
</style>
