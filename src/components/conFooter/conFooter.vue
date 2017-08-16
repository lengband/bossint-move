<template>
    <div class="conFooter">
        <div class="emptyBar"></div>
        <div class="foot-content">
            <div class="content-item">
                <div class="title">了解bossint</div>
                <ul>
                    <li><router-link to="industry">行业案例</router-link></li>
                    <li><router-link to="service">服务</router-link></li>
                    <li><router-link to="partner">伙伴</router-link></li>
                </ul>
            </div>
            <div class="content-item">
                <div class="title">服务咨询</div>
                <ul>
                    <li style="color: #666;">电话咨询</li>
                    <li><router-link to="contact">前往公司</router-link></li>
                </ul>
            </div>
            <div class="content-item">
                <div class="title">关于bossint</div>
                <ul>
                    <li><router-link to="about">公司介绍</router-link></li>
                    <li><router-link to="join">加入我们</router-link></li>
                    <li><router-link to="contact">联系我们</router-link></li>
                    <li><router-link to="NewsRelease">新闻发布</router-link></li>
                </ul>
            </div>
        </div>
        <div class="contactWraper">
            <ul class="contact">
                <li><img src="../../../static/img/首页/foot1.png" alt=""><span class="li-desc">北京市朝阳区霞光里66号远洋新干线A座1508</span></li>
                <li><img src="../../../static/img/首页/foot3.png" alt=""><span class="li-desc">(86-10) 84466910<span class="lightcolor">（周一至周五  9:00-18:00）</span></span></li>
                <li><img src="../../../static/img/首页/foot2.png" alt=""><span class="li-desc">100026</span></li>
            </ul>
        </div>
        <footer>bossint©2016&nbsp;博信诚(北京)网络科技有限公司</footer> 
    </div>
</template>

<script>

export default {
    name: 'conHeader',
    methods: {
        leftFold () {
            this.$root.eventHub.$emit('toggleNav', event.target)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    .conFooter
        .emptyBar
            height: 10px;
            background-color: #f6f7f7;
        .foot-content
            display: flex;
            width: 80%;
            margin: 0 auto 8px;
            a
                color: #666;
            .content-item
                flex: 1;
                justify-content: center;
                text-align: center;
                .title
                    font-size: 14px;
                    line-height: .5rem;
                    font-weight: 600;
                ul
                    li
                        font-size: 12px;
                        line-height: .3rem;
        .contactWraper
            margin-top: 30px;
            font-size: 12px;
            padding-bottom: 30px;
            border-bottom: 1px solid #e5e5e5;
            .contact
                width: 74%;
                margin: 0 auto;
                li
                    color: #666;
                    line-height: 23px;
                    img
                        width: 15px;
                        height: 15px;
                        margin-right: 8px;
                    .lightcolor
                        color: #999;
        footer
            text-align: center;
            height: .38rem;
            line-height: .38rem;
</style>    
