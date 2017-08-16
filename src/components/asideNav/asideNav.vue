<template>
    <div class="asideNav" ref="navList" id="asideNav">
       <ul class="mainNav" ref="mainNav">
           <li  class="mainNavList" v-for="(item, index) in navList" @click="slideDown($event)" >
               <router-link :to="item.children ? '' : routesArr[index]"><img :src="item.img" alt="">{{item.name}} 
                    <img src="./arrow.png" height="20" width="20" alt="" class="arrow" v-show="item.children">
                </router-link>
                <ul class="children" v-if="item.children">
                    <li class="child" v-for="(ite, inde) in item.children">
                        <router-link :to="routesArr[index][inde]">{{ite}}</router-link>
                    </li>
                </ul>
           </li>
       </ul>
    </div>
</template>

<script>
import $ from 'jquery'
import BScroll from 'better-scroll'

var icon1 = require('../../../static/img/首页/icon01.png')
var icon2 = require('../../../static/img/首页/icon02.png')
var icon3 = require('../../../static/img/首页/icon03.png')
var icon4 = require('../../../static/img/首页/icon04.png')
var icon5 = require('../../../static/img/首页/icon05.png')
var icon6 = require('../../../static/img/首页/icon06.png')
export default {
    name: 'asideNav',
    data () {
        return {
            navList: [
                {img: icon1, name: '主页'},
                {img: icon2, name: '产品', children: ['Ecoplace wochat', '财务共享服务中心', '实时报表一键合并', '管理会计', '企业财务分析与诊断', '企业资金管理', '企业全渠道支付', '增值税发票管理', '员工关系服务', '人力资源共享服务']},
                {img: icon3, name: '行业'},
                {img: icon4, name: '服务'},
                {img: icon5, name: '伙伴'},
                {img: icon6, name: '关于我们', children: ['公司介绍', '加入我们', '联系我们', '新闻发布']}
            ],
            routesArr: [
                        'home',
                        ['wochart', 'financialShared', 'ReportForm', 'accounting', 'financialAnalysis', 'funManagement', 'payment', 'addInvoice', 'relationship', 'HRcenter'],
                        'industry',
                        'service',
                        'partner',
                        ['about', 'join', 'contact', 'NewsRelease']
                    ]
        }
    },
    methods: {
        slideDown (e) {
            if (!event._constructed) {
                return
            }
            let childDom
            if ($(e.target).hasClass('mainNavList')) {
                childDom = $(e.target).find('.children')[0]
            } else {
                childDom = $(e.target).parents('.mainNavList').find('.children')[0]
            }
            // if ($(childDom).css('display') === 'none') {
            //     $(childDom).parent().find('.arrow').css('transform', 'rotate(90deg)')
            // } else if ($(childDom).css('display') === 'block') {
            //     $(childDom).parent().find('.arrow').css('transform', 'rotate(0deg)')
            // }
            $(childDom).parents('.mainNavList').find('.children').slideToggle(() => {
                this.$nextTick(() => {
                    this.asideNavScroll.refresh()
                })
            })
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.asideNavScroll = new BScroll(this.$refs.navList, {
                scrollY: true,
                click: true
            })
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.asideNav
    width: 100%;
    height: 5rem;
    position: fixed;
    right: 0%;
    top: .4rem;
    z-index:10;
    .mainNav
        background-color: #fff;
        box-shadow: 1px 0px 3px #efefef;
        border-right: 1px solid #efefef;
        .mainNavList
            line-height: 0.78rem;
            border-bottom: 1px solid #e5e5e5;
            font-size: 16px;
            position: relative;
            a
                color: #666;
                display: inline-block;
                width: 100%;
                height: 100%;
            // &:first-child
            //     background-color: #f6f7f7;
            //     box-shadow: 0px 1px 7px #efefef;
            img
                margin-left: .2rem;
                vertical-align: middle;
                margin-right: 0.17rem;
                &.arrow
                    position: absolute;
                    right: 0rem;
                    top: 0.3rem;
                    transition: all .2s;
                    transform: rotate(90deg);
            .children
                border-top: 1px solid #e5e5e5;
                display: none;
                li
                    padding-left: 0.6rem;
                    border-bottom: 1px solid #e5e5e5; 
</style>
