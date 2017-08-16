<template>
    <div class="financialAnalysis">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/增值税发票/增值税发票.jpg')
let icon1 = require('../../../../static/img/产品/增值税发票/图层-6.png')
let icon2 = require('../../../../static/img/产品/增值税发票/图层-7.png')
let icon3 = require('../../../../static/img/产品/增值税发票/图层-8.png')
let icon4 = require('../../../../static/img/产品/增值税发票/图层-9.png')
let icon5 = require('../../../../static/img/产品/增值税发票/图层-10.png')
let icon6 = require('../../../../static/img/产品/增值税发票/图层-11.png')
export default {
    name: 'financialShared',
	data () {
		return {
			product: {
                banner: banner1,
                title: '增值税发票',
                desc: '将企业的实物发票流统一集中管理，实现三流（合同流、票流、资金流）合一，结合电子发票新技术，通过发票信息集中管控来规避营改增纳税风险。',
                lis: [
                    {icon: icon1, msg: '需要对现有收入类业务进行梳理，价税分离、核算，减少对原系统改造、保持原系统稳定性，满足增值税核算的基本要求', tit: '满足增值税制下的核算要求'},
                    {icon: icon2, msg: '严密的管理不仅可以帮助企业保证缴税的合规性、合法性，更起到了降低税负风险的作用', tit: '严格的税票管理、降低税负'},
                    {icon: icon3, msg: '系统通过改造科目体系、变更会计核算规则，满足增值税会计核算，完美切换到增值税税制下应交增值税相关的核算', tit: '财务核算自动化'},
                    {icon: icon4, msg: '在系统中规范了各类申报模式的业务处理流程，从系统的角度加强了纳税业务操作的规范性，并且解脱了手工纳税申报的工作量', tit: '纳税申报统一管理'},
                    {icon: icon5, msg: '实现了系统层级的“财税一体化”，为增值税核对“票、表、账”信息提供了依据；减低了内部计税风险、为税务稽查工作提供了便利', tit: '财税信息一体化'},
                    {icon: icon6, msg: '系统将满足各个层级机构日常增值税相关的纳税操作，并在系统中做完成的数据记录，实现可操作、可查、可追溯的全面管理', tit: '满足各层级机构的税务处理需求'}
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
