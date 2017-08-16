<template>
    <div class="product">
        <div class="banner" v-if="product.banner">
            <img :src="product.banner" alt="">
        </div>
        <div class="description" v-if="product.desc">
            <div class="main">
                <div class="title">{{product.title}}</div>
                <p>{{product.desc}}</p>
            </div>
        </div>
        <div class="panel" v-if="product.lis">
            <div class="main">
                <ul>
                    <li v-for="item in product.lis" class="clearfix">
                        <div class="icon"><img :src="item.icon" alt=""></div>
                        <div class="msg">
                            <div class="tit" v-show="item.tit">{{item.tit}}</div>
                            <div class="msgDetail">{{item.msg}}</div>
                            <ul v-if="item.liMgs">
                                <li v-for="ite in item.liMgs" class="dotList">{{ite}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['product']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.product
    .main
        width: 90%;
        margin: 0 auto;
    .banner
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
    .panel
        background-color: #f6f7f7;
        padding-top: 30px;
        padding-bottom: 40px;
        margin-top: 60px;
        margin-bottom: 70px;
        .main
            >ul
                >li
                    padding-top: .1rem;
                    padding-bottom: .1rem;
                    display: flex;
                    min-height: .4rem;
                    .icon
                        padding-top: 10px;
                        flex: 0 0 .35rem;
                        height: 36px;
                        img
                            width: 100%;
                    .msg
                        margin-left: 20px;
                        flex: 0 0 2.70rem;
                        font-size: 12px;
                        line-height: 18px;
                        .tit
                            color: #2181cb;
                            font-size: 16px;
                            padding-bottom: 5px; 
                        .dotList
                            padding-left: 10px;
                            background: url('./dot.png') no-repeat 0 8px;
</style>
