<template>
    <div class="financialShared">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/财务共享服务中心/财务共享服务中心.jpg')

let icon1 = require('../../../../static/img/产品/会计管理/图层-3.png')
let icon2 = require('../../../../static/img/产品/会计管理/图层-4.png')
let icon3 = require('../../../../static/img/产品/会计管理/图层-5.png')
let icon4 = require('../../../../static/img/产品/会计管理/图层-6.png')
export default {
    name: 'financialShared',
	data () {
		return {
			product: {
                banner: banner1,
                title: '财务共享服务中心',
                desc: 'ecoplace将帮助集团企业在集中管控与操作规范基础上逐步降低财务运作成本，实现财务组织全面转型。 同时，基于共享服务模式，战略财务、业务财务、共享财务协同驱动，支持集团企业产业化发展，提升产业竞争优势。',
                lis: [
                    {
                        icon: icon1,
                        msg: '业务处理实现标准化、流程化、专业化、自动化，提高财务业务处理效率和处理质量，降低财务人工成本',
                        tit: '降低财务成本'
                    },
                    {
                        icon: icon2,
                        msg: '加强资金管控、预算管控、合同管控，完善合规流程，实现主要控制线上运行，降低运营风险',
                        tit: '加强风险管理'
                    },
                    {
                        icon: icon3,
                        liMgs: ['建立与财务相关的主数据管理', ' 实现经营数据、财务数据的标准化管理', '建立基于大数据的相关分析'],
                        tit: '挖掘数据价值'
                    },
                    {
                        icon: icon4,
                        liMgs: ['优化财务架构，强化战略财务职能和作用', ' 提升财务服务的满足度，支持业务发展', '适应公司快速增长的发展战略要求'],
                        tit: '支持企业发展'}
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
.financialShared
    transition: all .5s;
</style>
