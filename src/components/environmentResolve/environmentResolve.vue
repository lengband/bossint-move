<template>
    <div class="tourResolve">
        <div class="banner">
            <img src="../../../static/img/行业/建筑/组-1.jpg">
        </div>
        <div class="Title">环境工程行业案例故事</div>
        <industry :content="dot"></industry>
        <otherindustry :others="others"></otherindustry>
        <con-footer></con-footer>
    </div>
</template>

<script>

import conFooter from '../conFooter/conFooter'
import industry from '../industry/industryCommon.vue'
import industryCommonHead from '../industry/industryCommonHead.vue'
import otherindustry from '../industry/others.vue'
let img1 = require('../../../static/img/行业/环境工程/环境工程行业小图.jpg')
let img2 = require('../../../static/img/行业/环境工程/建筑行业小图.jpg')
export default {
    name: 'tour',
    data () {
        return {
            dot: {
                dot: true,
                bigLi: false,
                blueTitle: '[应用方案]',
                dotArr: ['财务共享服务，构建端到端的项目管理财务共享服务解决方案', '实时报表一键合并，实时账表一体化，做到全自动对账与抵消，实现一键合并', '结算中心管理，实现资金归集、调度、结算的资金管理', '一键报账', '数字化协作', '全业务移动审批']
            },
            others: [
                {title: '旅游服务行业', bgimg: img1, link: 'tour'},
                {title: '建筑工程行业', bgimg: img2, link: 'architecture'}
            ]
        }
    },
    components: {
        'con-footer': conFooter,
        industry,
        industryCommonHead,
        otherindustry
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.tourResolve
    transition: all .5s;
    .banner
        img
            width: 100%;
    .Title
        font-size: 22px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px;           
</style>
