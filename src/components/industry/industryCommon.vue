<template>
    <div class="industryCommon">
        <div class="main">
            <div class="nodot" v-if="!content.dot">
                <div class="title">{{content.blueTitle}}</div>
                <p>{{content.msg}}</p>
            </div>
            <div class="dot" v-if="content.dot">
                <div class="title" v-show="content.blueTitle">{{content.blueTitle}}</div>
                <ul :style="{'margin-bottom': content.bigLi ? 40 + 'px' : 40 + 'px'}">
                    <li v-for="item in content.dotArr" :style="{'line-height': content.bigLi ? 40 + 'px' : 26 + 'px', 'font-size': content.bigLi ? 18 + 'px' : 14 + 'px'}"><img src="./dot.png">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'industryCommon',
    props: ['content']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.industryCommon
    .title
        color: #0973c5;
        font-size: 16px;
        font-weight: 500;
        line-height: 50px;
    .nodot
        p
            line-height: 20px;
            margin-bottom: 30px;
    .dot
        ul
            margin-bottom: 40px;
            li
                font-size: 14px;
                position: relative;
                padding-left: 12px; 
                img
                    display: block;
                    width: 5px;
                    height: 5px;
                    position: absolute;
                    left: 0px;
                    top: 12px;
                
</style>
