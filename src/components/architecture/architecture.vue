<template>
    <div class="industry">
        <industryCommonHead :industryHead="industryHead"></industryCommonHead>
        <div class="case">
            <div class="title">建筑行业案例—中国恩菲账表<br />一体化及实时报表一键合并</div>
            <industry :content="nodot1"></industry>
            <industry :content="nodot2"></industry>
            <industry :content="nodot3"></industry>
            <productBody :product="product"></productBody>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>

import conswiper from './../swiper/swiper'
import conFooter from '../conFooter/conFooter'
import industry from '../industry/industryCommon.vue'
import industryCommonHead from '../industry/industryCommonHead'
import productBody from '../product/productBody/productBody'
let img1 = require('../../../static/img/行业/建筑/建筑工程banner.jpg')
let icon1 = require('../../../static/img/行业/建筑/图层-8.png')
let icon2 = require('../../../static/img/行业/建筑/图层-9.png')
let icon3 = require('../../../static/img/行业/建筑/图层-10.png')
export default {
    name: 'architecture',
    data () {
        return {
            industryHead: {
                layerBar: '建筑工程行业',
                img: img1,
                msg: '建筑行业解决方案覆盖建筑房建、路桥、公路、铁路、水利水电、工程设计、施工总承包、EPC/BT/BOT等多专业。基于多组织集团化应用，实现单组织经营向多组织协同经营转变，发挥集团企业的最大优势，实现利润最大化。',
                link: 'architectureResolve'
            },
            nodot1: {
                dot: false,
                blueTitle: '[中国恩菲情况介绍]',
                msg: '中国有色工程有限公司暨中国恩菲工程技术有限公司（简称“中国恩菲”），其前身是中国有色工程设计研究总院，即原北京有色冶金设计研究总院，成立于1953年。中国恩菲现隶属于世界500强企业——中国冶金科工集团有限公司。'
            },
            nodot2: {
                dot: false,
                blueTitle: '[建设历程]',
                msg: '中国恩菲的账表一体化及实时报表一键合并的建设经历了可行性论证、供应商考查选型、总体规划设计、业务咨询和实施、平稳运行、优化提升、财务转型等阶段。'
            },
            nodot3: {
                dot: false,
                blueTitle: '[应用价值]',
                msg: '通过整合企业财务数据最终支撑企业管理决策。从海量数据出发挖掘出有用信息，通过对信息的分析发现管理问题，形成解决方案。逐步将管理从事后事中的被动管理转变为主动的事前管理。 '
            },
            product: {
                lis: [
                    {icon: icon1, msg: '体系应用成熟且强大的报表组件，提供内部制作，定制本地个性化报表，满足本地报表需求，中国恩菲财务报表提供灵活性支持。', tit: '中国恩菲内部财务报告体系'},
                    {icon: icon2, msg: '该功能实现对财务系统中的各类数据（月报数据、预算数据等统计数据）进行的综合查询和分析表应用。该功能提供了组合条件查询方式快速查询用户需要的数据，并以表格和图标两种方式显示查询的结果。', tit: '财务查询与分析体系'},
                    {icon: icon3, msg: '实现账表一体化，减轻了填报工作量，提高报表编制效率与质量。', tit: '实现了与核算系统的无缝衔接，账表一体化'}
                ]
            }
        }
    },
    components: {
        'con-swiper': conswiper,
        'con-footer': conFooter,
        industry,
        industryCommonHead,
        productBody
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
</style>
