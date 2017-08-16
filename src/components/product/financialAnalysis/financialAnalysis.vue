<template>
    <div class="financialAnalysis">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/企业财务分析与诊断/企业财务分析与诊断.jpg')
let icon1 = require('../../../../static/img/产品/企业全渠道支付/icon1.png')
let icon2 = require('../../../../static/img/产品/企业全渠道支付/icon2.png')
let icon3 = require('../../../../static/img/产品/企业全渠道支付/icon3.png')
let icon4 = require('../../../../static/img/产品/企业全渠道支付/icon4.png')
export default {
    name: 'financialShared',
	data () {
		return {
			product: {
                banner: banner1,
                title: '企业财务分析与诊断',
                desc: '建立财务管理分析指标库，实现单位个性化的财务诊断与分析需求与总部高管层的财务管理需求，主要包括收入、盈利、成本费用、资产效率、资金、重点产品、项目等分析内容。',
                lis: [
                    {icon: icon1, msg: '建立风险预警流程，形成企业风险预警指标体系', tit: '财务预警机制'},
                    {icon: icon2, msg: '对单位进行深度、全面风险预警，对末级单位的风险进行预警应对', tit: '深度全面预警'},
                    {icon: icon3, msg: '整合合并预算、核算、业务等多种数据，规范数据标准，实现企业管理分析需求', tit: '规范数据标准'},
                    {icon: icon4, msg: '实现财务诊断与分析系统及合并报表的对接', tit: '财务诊断与需求分析'}
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
.financialAnalysis
    transition: all .5s;
</style>
