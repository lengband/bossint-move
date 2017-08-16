<template>
    <div class="industryCommonHead">
        <div class="banner">
            <img :src="industryHead.img" alt="">
            <div class="layerBar">{{industryHead.layerBar}}</div>
        </div>
        <div class="resolve">
            <div class="main">
                <p>{{industryHead.msg}}</p>
                <div class="btn"><router-link :to="industryHead.link">解决方案</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'industryCommonHead',
    props: ['industryHead']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.industryCommonHead
    transition: all .5s;
    .banner
        position: relative;
        .layerBar
            position: absolute;
            bottom: 4px;
            left: 0px;
            width: 100%;
            height: 45px;
            line-height: 45px;
            color: #fff;
            background:rgba(0, 0, 0, .7);
            font-size: 20px;
            text-indent: 5%;
        img
            width: 100%;
    .resolve
        border-bottom: 1px solid #e5e5e5;
        .main
            p
                line-height: 20px;
                margin-top: 20px;
            .btn
                width: 76px;
                height: 25px;
                text-align: center;
                line-height: 25px;
                background-color: #1dacda;
                border-radius: 2px;
                margin-top: 20px;
                margin-bottom: 30px;
                a
                    color: #fff;
</style>
