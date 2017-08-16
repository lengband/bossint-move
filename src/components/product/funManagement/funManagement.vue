<template>
    <div class="payment">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/企业资金管理/企业资金管理.jpg')

let icon1 = require('../../../../static/img/产品/企业资金管理/icon1.png')
let icon2 = require('../../../../static/img/产品/企业资金管理/icon2.png')
let icon3 = require('../../../../static/img/产品/企业资金管理/icon3.png')
let icon4 = require('../../../../static/img/产品/企业资金管理/icon4.png')
export default {
	data () {
		return {
			product: {
                banner: banner1,
                title: '企业资金管理',
                desc: '依托互联网+移动应用模式，让企业HR管理与员工更加紧密无间，通过移动端及自助端应用查询，可以及时获取各类HR相关信息、政策制度及相关各类服务内容。',
                lis: [
                    {icon: icon1, msg: '将集团银行账户信息、结算信息、内部信贷信息、资金计划及执行信  息等纳入信息系统集中管理 ', tit: '实现集团资金集中监控'},
                    {icon: icon2, msg: '通过系统灵活设置，对集团各项支付行为进行事中有效监控。形成计划数与执行数的对比，为科学分析资金使用情况提供数据基础', tit: '强化资金计划监控作用'},
                    {icon: icon3, msg: '对于大量存在的集团内部信贷进行计息处理，提高各级管理人员资金意识，盘活集团整体资金流', tit: '提高集团内部资金使用效率'},
                    {icon: icon4, msg: '通过信息系统，对资金管理各项业务，实现纵向和横向的穿透查询，有效减少管理死角', tit: '提高集团资金管理的清晰度'}
                ]
            }
		}
	},
	components: {
		'con-footer': conFooter,
        productBody
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.payment
    transition: all .5s;
</style>
