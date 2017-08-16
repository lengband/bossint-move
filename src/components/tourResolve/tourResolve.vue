<template>
    <div class="tourResolve">
        <div class="banner">
            <img src="../../../static/img/行业/旅游/旅游行业.jpg">
        </div>
        <div class="Title">旅游服务行业案例故事</div>
        <div class="story">
            <div class="main">
                <div class="blueTitle">[行业特点]</div>
                <p>1. 点多面广。法人单位特别是分公司和门店众多、地域分布广特别是很多地理偏僻；业务面广，主营业务有十几种业务及经营模式灵活多变。旅游及零售业务面临激烈的市场竞争，业务及经营模式灵活多样，因应市场变化快</p><br>
                <p>2. 人员流动大。近几年旅游行业高管及业务人员流动频繁，财务人员流动性更大，财务管控风险和难度显著增加</p><br>
                <p>3. 业务系统多。 核算细、数据量巨大。内部交易多、合并抵消多；月单据量及凭证量巨大</p><br>
            </div>
        </div>
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
let bgimg1 = require('../../../static/img/行业/环境工程/建筑行业小图.jpg')
let bgimg2 = require('../../../static/img/行业/环境工程/环境工程行业小图.jpg')
export default {
    name: 'tour',
    data () {
        return {
            dot: {
                dot: true,
                bigLi: false,
                blueTitle: '[应用方案]',
                dotArr: ['财务共享服务，旅游单图核算特色的财务共享服务，实现全财务共享', '多级结算中心管理，实现全渠道资金管理解决方案', '实时报表一键合并，实时账表一体化，做到全自动对账与抵消，实现一键合并', '全业务移动审批']
            },
            others: [
                {title: '建筑行业', bgimg: bgimg1, link: 'architecture'},
                {title: '环境工程行业', bgimg: bgimg2, link: 'environment'}
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
    .story
        .blueTitle
            color: #1775c2;
            font-size: 16px;
            line-height: 40px;
        p
            font-size: 14px;
            line-height: 22px;           
</style>
