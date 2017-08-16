<template>
    <div class="payment">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/企业全渠道支付/企业全渠道支付.jpg')

let icon1 = require('../../../../static/img/产品/企业全渠道支付/icon1.png')
let icon2 = require('../../../../static/img/产品/企业全渠道支付/icon2.png')
let icon3 = require('../../../../static/img/产品/企业全渠道支付/icon3.png')
let icon4 = require('../../../../static/img/产品/企业全渠道支付/icon4.png')
export default {
	data () {
		return {
			product: {
                banner: banner1,
                title: '企业全渠道支付',
                desc: '通过智能POS机与ecoplace的完美结合，为企业提供了一个安全、快捷、方便的支付环境。不仅帮助企业实现了款项的快速归集，同时也为企业拓展了更多收银场景，使企业真正做到全渠道的安全收款。',
                lis: [
                    {icon: icon1, msg: '智能 POS机收款与ecoplace 无缝整合，并打通企业内部的资金管理'},
                    {icon: icon2, msg: '通过与上百家银行的连接能力，建立资金结算平台'},
                    {icon: icon3, msg: '交易安全，通过四要素认证的方式完成支付，用户卡片不会被盗用'},
                    {icon: icon4, msg: '费率优惠，比银企直联、传统刷卡、微信、支付宝、快捷支付等支付方式具有更优惠的费率政策'}
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
