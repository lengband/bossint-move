<template>
    <div class="wochart">
        <div class="banner">
        	<img src="../../../../static/img/产品/ecoplace wochat/图1.jpg" alt="">
        </div>
        <div class="description">
        	<div class="main">
        		<div class="title">Ecoplace  wochat</div>
        		<p>为了在全新的数字化时代能实现最大价值，企业需要消除各个层级的复杂性，并拥抱数字化转型，利用数字化技术让企业更快发现机遇，提高运营效率，重构业务模式、产品和服务，最终向客户和利益相关者即时交付更多价值。</p>
        	</div>
        	<div class="section" v-for="item in section">
        		<div class="img"><img :src="item.img" alt=""></div>
        		<div class="main">
        			<div class="title">{{item.title}}</div>
        			<div class="desc">{{item.desc}}</div>
        		</div>
        	</div>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
let img1 = require('../../../../static/img/产品/ecoplace wochat/图2.jpg')
let img2 = require('../../../../static/img/产品/ecoplace wochat/图3.jpg')
let img3 = require('../../../../static/img/产品/ecoplace wochat/图4.jpg')
export default {
	data () {
		return {
			section: [
				{img: img1, title: '工作互联通', desc: '量身定制专业化及个性化的工作协作与沟通方式的解决方案。集成项目协作、即时通讯、问答中心、资源共享等功能于一体让财务、业务、人力资源、市场等企业业务管理统一协同。'},
				{img: img2, title: '管理无边界', desc: '打破时空的局限，在任意时间、空间、地点及时的解决关键业务问题，对接企业各类业务管理系统，在电脑、手机上进行工作协作，解决亟待处理事件。'},
				{img: img3, title: '沟通无界限', desc: '通过通讯录、跨组织群组的建立让组织更加趋向扁平化，准确的定位工作人选，及时分配工作任务，进行有效的项目沟通，资源共享可取，自如穿梭于各工作小组、清晰了解各项工作任务、每项待办事务，待办事项不滞留，大幅度提升工作效率'}
			]
		}
	},
	components: {
		'con-footer': conFooter
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.wochart
    transition: all .5s;
    .main
    	width: 90%;
    	margin: 0 auto;
    .banner
    	margin-bottom: 50px;
    	img
    		width: 100%;
    .description
    	.title
    		font-size: 24px;
    		line-height: 35px;
    		margin-top: 16px;
    		margin-bottom: 10px;
    	p
    		font-size: 14px;
    		line-height: 25px;
    	.section
    		margin-bottom: 50px;
    		.img
    			img
    				width: 100%;
    		.title
    			font-size: 20px;
    			color: #2181cb;
    			text-align: center;
    		.desc
    			font-size: 14px;
    			line-height: 24px;
</style>
