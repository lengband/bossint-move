<template>
    <div class="new2">
        <div class="Title">
            <div class="title">财务共享服务的实践者</div>
            <div class="tip">2016年5月4日 13:02 <br>来自博信诚（北京）网络科技有限公司</div>
        </div>
        <div class="img_texts" v-for="(item, index) in msgs" :style="{'margin-bottom': index === msgs.length - 1 ? 80 + 'px' : 0 + 'px'}">
            <div class="main">
                <img :src="item.img" alt="">
                <p v-for="msg in item.msg">{{msg}}</p>
            </div>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>
import industryCommon from '../industry/industryCommon'
import conFooter from '../conFooter/conFooter'
let img1 = require('../../../static/img/关于我们/新闻发布子页面2/1.png')
let img2 = require('../../../static/img/关于我们/新闻发布子页面2/2.png')
let img3 = require('../../../static/img/关于我们/新闻发布子页面2/3.png')
export default {
    name: 'new1',
    data () {
        return {
            msgs: [
                {
                    img: [img1],
                    msg: ['2016年4月13日，由用友网络科技有限公司主办的主题为《财务共享 服务转型》的大型企业迈入财务2.0十大高峰论坛北京站在帝都如期举行。在会上超过400位的政府官员、企业家、财务负责人和信息化负责人共同探讨企业财务管理的转型。']
                },
                {
                    img: [img2],
                    msg: ['在当天的会上，中国国旅副总会计师陈文龙以及博信诚（北京）网络科技有限公司项目经理孙凯峰分享了中国国旅的财务共享服务建设经验和成果。']
                },
                {
                    img: [img3],
                    msg: ['中国国旅是中国最大的旅行社和免税品公司，其各级子公司达250余户，分公司及门店超过1000家，管理链条长达五级。对于这样的一家典型的集团型企业，其财务管理面临的问题可想而知。诸如点多面广、业务及经营模式灵活多变、人员流动大、业务系统多、核算细及数据量巨大等。', '据介绍，中国国旅于2014年底开始与由北京博信诚公司负责项目咨询、实施，于2105年2月底最终完成了实施方案以及确定了国旅财务共享最终产品开发。自2015年7月1日开始，分九批组织各级子公司上线，截至目前，集团内仅剩总社所属10家分公司上线，其余所有各级子公司、分公司及门店均已实现正式上线并完成系统切换。', '如此短的时间、如此快的上线率，“我们的共享服务中心达到了我们的预期。”陈文龙也总结了中国国旅财务共享项目的特点，即共享内容全面化、信息系统集成化、多端应用同步化、业务处理表单化以及业务财务一体化。看到中国国旅的成果，也让更多企确信财务共享服务对于切财务管理转型的重要推动和领头作用。']
                }
            ]
        }
    },
    components: {
        industryCommon,
        'con-footer': conFooter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.new2
    transition: all .5s;
    .Title
        background: url('../../../static/img/关于我们/新闻发布/aboutUs.png') no-repeat 0 0;
        .title
            padding-top: 70px;
            font-size: 18px;
            text-align: center;
            margin-bottom: 10px;
        .tip
            font-size: 12px;
            text-align: center;
            margin-bottom: 10px;
        p
            font-size: 14px;
    img
        width: 100%;
        display: block;
    .img_texts
        img
            margin-top: 20px;
            margin-bottom: 20px;
        p
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 20px;
</style>
