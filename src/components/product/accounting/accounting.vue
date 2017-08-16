<template>
    <div class="financialShared">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/会计管理/会计管理.jpg')

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
                title: '管理会计',
                desc: '博信诚公司帮助集团企业梳理管理架构、构建管理会计核算体系，确认战略财务、共享财务、业务财务的分工与职责，通过指导层、控制层与执行层来构建集团预算管理、成本控制、财务分析与诊断等管理体系。其主要价值如下：',
                lis: [
                    {
                        icon: icon1,
                        liMgs: ['业务财务的一体化为企业快速了解经营结果提供了可能',
                            '快速从核算数据中得到经营状况',
                            '可以依据数据及时的响应运营中的问题'],
                        tit: '提高效率'
                    },
                    {
                        icon: icon2,
                        liMgs: ['通过分析管理会计的数据，分析经营中的利润点', '按照经营分析结果指导企业的内部管理水平'],
                        tit: '管理提升'
                    },
                    {
                        icon: icon3,
                        liMgs: [' 按照责任中心进行核算，提供完整的考核数据', ' 基于考核指标对责任中心进行考核，激励组织'],
                        tit: '绩效考核'
                    },
                    {
                        icon: icon4,
                        liMgs: ['按照管理口径核算，可以提供基于管理要求的数据', ' 基于管理数据做经营分析，为经营决策提供支持'],
                        tit: '决策支持'}
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
