<template>
    <div class="about">
        <div class="banner">
            <img src="../../../static/img/关于我们/公司介绍/33333.jpg" alt="">
        </div>
        <div class="aboutmsg">
            <div class="main">
                <div class="title">公司介绍</div>
                <p>博信诚(北京)网络科技有限公司是国家高新技术企业，是企业及政府数字化业务解决方案服务商，主要为大中型企业客户提供基于大数据、人工智能、云计算的数字化协作、财务共享服务、人力资源共享服务解决方案，涉及主要行业包括建筑施工、环境生态、旅游服务、商品零售、餐饮等行业领域。</p>
                <p>公司咨询服务团队是一支经验丰富的复合型团队，拥有诸多既懂规划又懂业务还懂技术的专家和技术工程师，他们在各自领域拥有多年的企业数字化业务服务经验。本着创新引领未来、为客户创造价值的服务理念，博信诚(北京)网络科技有限公司对如何为企业数字化提供高质量的专业咨询和技术服务，有着独特的观点和实践。</p>
                <p>公司创始人是拥有外资企业公司和海外背景的资深业务和技术专家，通过与世界500强企业各类业务和技术专家的紧密协作，以及创新性的企业数字化业务解决方案，帮助客户更高效地面对当前互联网的各种业务技术挑战。 </p>
            </div>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '../conFooter/conFooter'
export default {
    name: 'about',
    components: {
        'con-footer': conFooter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.about
    transition: all .5s;
    .banner
        img
            width: 100%;
    .aboutmsg
        .title
            color: #1775c2;
            font-size: 18px;
            height: 20px;
            line-height: 20px;
            margin-top: 30px;
            margin-bottom: 20px;
        p
            line-height: 20px;
            font-size: 14px;
            letter-spacing: 1px;
            margin-bottom: 30px;
</style>
