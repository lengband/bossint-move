<template>
    <div class="environment">
        <industryCommonHead :industryHead="industryHead"></industryCommonHead>
        <div class="case">
            <div class="title">环境工程案例—博天环境<br />财务共享服务中心</div>
            <industry :content="nodot1"></industry>
            <industry :content="nodot2"></industry>
            <industry :content="dot1"></industry>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>

import conswiper from './../swiper/swiper'
import conFooter from '../conFooter/conFooter'
import industry from '../industry/industryCommon.vue'
import industryCommonHead from '../industry/industryCommonHead.vue'
let banner1 = require('../../../static/img/行业/环境工程/banner.jpg')
export default {
    name: 'environment',
    data () {
        return {
            industryHead: {
                layerBar: '环境工程行业',
                img: banner1,
                msg: '环境工程解决方案覆盖环境治理、排污工程、水厂总承包、EPC/PPC等多专业，同时满足不同细分行业的不同应用。基于多组织集团化应用，实现单项目向项目群协同施工转变，加强集中管控，信息协同，实现集团资源共享。',
                link: 'environmentResolve'
            },
            nodot1: {
                dot: false,
                blueTitle: '[博天环境情况介绍]',
                msg: '博天环境集团股份有限公司（以下简称“博天环境”，股票代码：603603）以“构铸天人合一的美好环境”为使命，自1995年进入环境治理领域，以持续的技术升级和模式创新，不断为社会带来更有品质的环境服务。'
            },
            nodot2: {
                dot: false,
                blueTitle: '[建设动因及目标]',
                msg: '博天环境集团为更好的保证财务信息质量确定建设自己的财务共享服务中心，并设定了如下最初目标：'
            },
            dot1: {
                dot: true,
                dotArr: ['提高会计核算规范性及会计信息质量', '实现财务共享与业务一体化，提高信息生成与传递的时效性、唯一性、一致性', '推动财务管理转型，实现战略财务、共享财务、业务财务三轮驱动，支持企业转型发展']
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
.environment
    transition: all .5s;
    .case
        .title
            height: 100px;
            line-height: 40px;
            font-size: 24px;
            margin-top: 20px;
            text-align: center;
</style>
