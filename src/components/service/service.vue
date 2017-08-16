<template>
    <div class="service">
        <div class="banner">
        	<img src="../../../static/img/服务/图1.jpg" alt="">
        </div>
        <div class="Title">咨询服务</div>
        <div class="section">
            <ul>
                <li v-for="item in section">
                    <img :src="item.img">
                    <div class="main">
                        <p>{{item.desc}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '@/components/conFooter/conFooter'
let img1 = require('../../../static/img/服务/图2.jpg')
let img2 = require('../../../static/img/服务/图3.jpg')
let img3 = require('../../../static/img/服务/图4.jpg')
let img4 = require('../../../static/img/服务/图5.jpg')
export default {
	data () {
		return {
			section: [
				{img: img1, desc: '全面财务共享专业服务能力。对建筑、房地产、旅游服务、商品零售、冶金矿业、餐饮业等行业业务的深刻理解'},
				{img: img2, desc: '共享服务中心组织设计、职权分工的咨询能力并进行工作行为引导和新工作文化传播。'},
				{img: img3, desc: '与客户的长期合作，以匠心精神的服务品质真诚对待客户'},
                {img: img4, desc: '互联网思维以及互联网新技术能力'}
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
.service
    transition: all .5s;
    .main
    	width: 90%;
    	margin: 0 auto;
    .banner
    	img
    		width: 100%;
    .Title
        font-size: 26px;
        line-height: 75px;
        height: 75px;
        text-align: center;
    .section
        ul
            li
                img
                    width: 100%;
                p
                    line-height: 25px;
                    margin-top: 6px;     
                    margin-bottom: 26px;     
</style>
