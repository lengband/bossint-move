<template>
    <div class="others">
        <div class="emptyBar"></div>
        <div class="BlueTitle">其他行业解决方案</div>
        <div class="others-img">
            <div class="other-img" v-for="item in others">
                <div class="bgimg" :style="{'background-image': 'url('+item.bgimg+')'}">{{item.title}}</div>
                <div class="btn"><router-link :to="item.link">立即查看</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'others',
    props: ['others']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.others
    .emptyBar
        width: 100%;        
        height: 10px;
        background-color: #f6f7f7;
    .BlueTitle
        color: #1775c2;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        padding-top: 20px;
    .others-img
        .other-img
            .bgimg
                width: 2.8rem;
                height: 1.6rem;
                background-size: 100% 100%;
                color: #fff;
                line-height: 1.6rem;
                text-align: center;
                font-size: 16px;
                letter-spacing: 2px;
                margin:0 auto;
                margin-top: 30px;
                border-radius: 2px;
                margin-bottom: 15px;
            .btn
                width: 80px;
                height: 30px;
                margin:0 auto 50px;
                line-height: 30px;
                text-align: center;
                background-color: #2983c8;
                border-radius: 3px;
                a
                    color: #fff;
                    font-size: 12px;
</style>
