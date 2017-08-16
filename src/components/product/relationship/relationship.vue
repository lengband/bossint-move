<template>
    <div class="payment">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/员工服务关系/员工服务关系.jpg')

let icon1 = require('../../../../static/img/产品/员工服务关系/icon1.png')
let icon2 = require('../../../../static/img/产品/员工服务关系/icon2.png')
let icon3 = require('../../../../static/img/产品/员工服务关系/icon3.png')
export default {
	data () {
		return {
			product: {
                banner: banner1,
                title: '员工关系服务',
                desc: '依托互联网+移动应用模式，让企业HR管理与员工更加紧密无间，通过移动端及自助端应用查询，可以及时获取各类HR相关信息、政策制度及相关各类服务内容。',
                lis: [
                    {icon: icon1, msg: '入职导航、各类工作证明开据、HR政策制度查询、HR管理用表下载', tit: '查询下载'},
                    {icon: icon2, msg: '结合社交化的沟通模式，进行企业全员的业务协同应用，无线扩大HR管理范畴及范围', tit: '管理范畴'},
                    {icon: icon3, msg: '搭建为企业员工服务的平台，通过及时、贴心的全时服务提升员工的满意度', tit: '员工满意度'}
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
