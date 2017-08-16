<template>
    <div class="payment">
        <productBody :product="product"></productBody>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
import productBody from '@/components/product/productBody/productBody'
let banner1 = require('../../../../static/img/产品/人力资源共享服务中心/人力资源共享服务中心.jpg')

let icon1 = require('../../../../static/img/产品/人力资源共享服务中心/icon1.png')
let icon2 = require('../../../../static/img/产品/人力资源共享服务中心/icon2.png')
let icon3 = require('../../../../static/img/产品/人力资源共享服务中心/icon3.png')
let icon4 = require('../../../../static/img/产品/人力资源共享服务中心/icon4.png')
export default {
	data () {
		return {
			product: {
                banner: banner1,
                title: '人力资源共享服务中心',
                desc: '为集团型企业量身定制人力资源共享服务平台，通过共享模式的集中处理，改变HR以往的角色定位，工作效率得到有效提升。',
                lis: [
                    {icon: icon1, msg: '让HR管理实现标准化、规范化、专业化的集中式业务管理', tit: '企业战略聚焦'},
                    {icon: icon2, msg: '让HR部门成为战略伙伴、专家外脑参与企业经营', tit: 'HR角色重塑'},
                    {icon: icon3, msg: '业务数据抽取及时准确，工作效率大幅提升', tit: '流程标准化'},
                    {icon: icon4, msg: '通过共享模式的集中处理，有效控制成本，保障投入资源最大价值化', tit: '资源优化配置'}
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
