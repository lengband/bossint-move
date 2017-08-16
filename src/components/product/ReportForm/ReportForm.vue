<template>
    <div class="payment">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/实施报表一件合并/实施报表一件合并.jpg')

let icon1 = require('../../../../static/img/产品/实施报表一件合并/icon1.png')
let icon2 = require('../../../../static/img/产品/实施报表一件合并/icon2.png')
let icon3 = require('../../../../static/img/产品/实施报表一件合并/icon3.png')
let icon4 = require('../../../../static/img/产品/实施报表一件合并/icon4.png')
export default {
	data () {
		return {
			product: {
                banner: banner1,
                title: '实时报表一键合并',
                desc: '实时报表一键合并，实时账表一体化，做到全自动对账与抵消。',
                lis: [
                    {icon: icon1, msg: '可实时出具财务、业务数据报表', tit: '实时性'},
                    {icon: icon2, msg: '报表数据全部由系统后台自动计算得出，数据均来源于财务账务系统，保证报表数据与账务数据的一致和可追溯性，通过报表的联查功能可以追溯到凭证数据，且可通过凭证追溯到原始单据', tit: '账表一体化'},
                    {icon: icon3, msg: '可以针对大型集团的不同业务情况，提取不同业务要求的数据；合并报表在支持从抵消分录取数的基础上，同样支持填制差额数据进行抵消', tit: '灵活性'},
                    {icon: icon4, msg: '针对大型企业集团的不同业务板块，报表支持配置不同的个性化公式，以配合不同业务板块出具报表的不同需求', tit: '个性化'}
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
