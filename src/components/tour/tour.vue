<template>
    <div class="industry">
        <industryCommonHead :industryHead="industryHead"></industryCommonHead>
        <div class="case">
            <div class="title">旅游服务客户案例—中国国旅<br />财务共享服务中心</div>
            <industry :content="nodot1"></industry>
            <industry :content="nodot2"></industry>
            <industry :content="dot1"></industry>
            <industry :content="nodot3"></industry>
            <img src="../../../static/img/行业/旅游/图层-12.jpg" alt="">
            <div class="share">
                <div class="main">
                    <div class="blueTitle">[共享中心架构]</div>
                    <div class="s-title">1 财务业务架构</div>
                    <p>针对国旅业务特点及人员现状，国旅财务共享服务中心采取了大集中部署，为保证快速上线及合理利用现有财务人员能力，共享建设阶段设了一个共享分中心三个作业池。</p>
                    <div class="s-title">2 财务组织架构</div>
                    <p>财务共享服务中心建立后，国旅财务组织架构将从之前以各个单位为主体的独立、分散、分级的财务管理体系转变为“战略财务-共享财务-业务财务”三位一体、扁平化的财务管理体系。</p>
                    <img src="../../../static/img/行业/旅游/图层-13.jpg" alt="">
                    <div class="s-title">3 信息系统架构</div>
                    <p>财务系统方面，由原来的4套管理系统、4套数据库、4套报表、4套硬件，实行集团一套统一的财务共享服务平台。通过财务共享平台自身的高度统一以及与各个板块业务系统集成如B2B、供应链等，极大地提高财务业务处理的自动化、标准化，真正实现财务共享与业务一体化端到端解决方案的全面落地。</p>
                </div>
            </div>
            <industry :content="dot2"></industry>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>

import conswiper from './../swiper/swiper'
import conFooter from '../conFooter/conFooter'
import industry from '../industry/industryCommon.vue'
import industryCommonHead from '../industry/industryCommonHead.vue'
let img1 = require('../../../static/img/行业/旅游/组-1.png')
export default {
    name: 'tour',
    data () {
        return {
            industryHead: {
                layerBar: '旅游服务行业',
                img: img1,
                msg: '移动互联网市场蓬勃发展与旅游市场的交易规模逐步扩大，消费者越来越倾向于旅游产品的关注和选择。面对旅游市场复杂的竞争环境，各旅游企业正在通过建立高效的财务共享中心，提升其运营平台、产品、用户等方面的竞争力。',
                link: 'tourResolve'
            },
            nodot1: {
                dot: false,
                blueTitle: '[国旅情况介绍]',
                msg: '中国国旅集团有限公司（以下简称国旅）是集旅游服务、有税及免税商品零售以及相关项目的投资与管理，旅游综合体及配套设施的开发、改造与经营，旅游产业研究与咨询服务为一体的国务院国资委直接管理的中央大型企业集团公司。'
            },
            nodot2: {
                dot: false,
                blueTitle: '[建设动因及目标]',
                msg: '针对国旅现状及上述财务管理难点，2014年，新的领导班子上任之初就提出了建立国旅强总部的要求，并将强总部要求及具体目标列入了未来一段时期及当年的重点工作。通过详细的调研分析，结合财政部、国资委的政策推动，国旅确定建设自己的财务共享服务中心，并设定了如下最初目标： '
            },
            nodot3: {
                dot: false,
                blueTitle: '[建设历程]',
                msg: '国旅共享服务中心的建设经历了可行性论证、供应商考查选型、总体规划设计、业务咨询和实施、平稳运行、优化提升、财务转型等阶段。'
            },
            dot1: {
                dot: true,
                dotArr: ['提高会计核算规范性及会计信息质量', '提高财务信息生成与传递的时效性', '推动财务管理转型，支持企业转型发展']
            },
            dot2: {
                dot: true,
                bigLi: false,
                blueTitle: '[应用价值]',
                dotArr: ['高效的服务功能', '有效的集团化管控', '经营终端的充分授权', '强大开放的平台化']
            }
        }
    },
    components: {
        'con-swiper': conswiper,
        'con-footer': conFooter,
        industry,
        industryCommonHead
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.industry
    transition: all .5s;
    .case
        .title
            height: 100px;
            line-height: 40px;
            font-size: 24px;
            margin-top: 20px;
            margin-bottom: 30px;
            text-align: center;
        img
            width: 70%;
            display: block;
            margin: 30px auto;
        .share
            .blueTitle
                color: #0973c5;
                font-size: 16px;
                font-weight: 500;
                line-height: 30px;
            .s-title
                font-size: 15px;
                margin-top: 20px;
                font-weight: 500;
            p
                line-height: 20px;
                margin-top: 10px;
                margin-bottom: 30px;
                
</style>
