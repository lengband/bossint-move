<template>
    <div class="join">
        <div class="banner">
            <img src="../../../static/img/关于我们/加入我们/加入我们.jpg" alt="">
        </div>
        <div class="recruitLists">
            <ul>
                <div class="main">
                    <li class="clearfix" v-for="item in recruitLists">
                        <div class="icon"><img src="../../../static/img/关于我们/加入我们/头像.png" height="90" width="90" alt=""></div>
                        <div class="title">{{item.title}}</div>
                        <div class="titleEn">{{item.titleEn}}</div>
                        <ol class="duty">
                            <li v-for="ite in item.duty">{{ite}}</li>
                        </ol>
                        <ol class="condition">
                            <li v-for="ite in item.condition">{{ite}}</li>
                        </ol>
                        <p>公司提供五险一金、绩效奖金、交通补助、餐补、通讯补贴、带薪年假、定期体检、员工旅游等福利。</p>
                        <p>申请此职位，请投简历至<span class="blueLetter">wyt@bossint.com.cn</span>，邮件标题注明申请职位及简历来源。</p>
                        <div class="btn"><a href="http://company.zhaopin.com/CC223756888.htm">申请职位</a></div>
                    </li>
                </div>
            </ul>
        </div>
        <con-footer></con-footer>
    </div>
</template>

<script>
import conFooter from '../conFooter/conFooter'
export default {
    name: 'about',
    data () {
        return {
            recruitLists: [
                {
                    title: 'ERP财务共享高级实施顾问',
                    titleEn: 'ERP Financial Sharing Senior Executive Consultant ',
                    duty: [
                        '岗位职责:',
                        '1、掌握大集团企业财务管理流程和需求，负责集团客户财务管理解决方案。',
                        '2、熟练掌握财务管理模块的应用，能够依据企业需求和产品匹配形成最佳的产品解决方案。',
                        '3、负责与客户保持业务需求沟通与项目进程沟通。',
                        '4、负责客户方案与产品培训。'
                    ],
                    condition: [
                        '任职条件:',
                        '1、财务相关专业/计算机专业等相关专业，正规院校本科以上学历。',
                        '2、有软件财务模块的项目经验，3年以上优先考虑。',
                        '3、有大项目经历优先考虑。',
                        '4、具有积极的工作态度、富有责任心。',
                        '5、良好的表达、分析沟通表达能力。'
                    ]
                },
                {
                    title: 'ERP财务共享项目经理',
                    titleEn: 'ERP Financial Sharing Project Manager ',
                    duty: [
                        '岗位职责:',
                        '1、掌握大集团企业财务管理流程和需求，负责集团客户财务管理解决方案。',
                        '2、熟练掌握财务管理模块的应用，能够依据企业需求和 产品匹配形成最佳的产品解决方案。',
                        '3、负责与客户保持业务需求沟通与项目进程沟通。',
                        '4、负责客户方案与产品培训。'
                    ],
                    condition: [
                        '任职条件:',
                        '1、财务相关专业/计算机专业等相关专业，正规院校本科以上学历。',
                        '2、有软件财务模块的项目经验，3年以上优先考虑。',
                        '3、完成过3-5个项目实施，有大项目经历优先考虑。',
                        '4、具有积极的工作态度、富有责任心。',
                        '5、良好的表达、分析沟通表达能力。'
                    ]
                },
                {
                    title: 'web前端开发工程师',
                    titleEn: 'Web front end development engineer ',
                    duty: [
                        '岗位职责:',
                        '1、参与公司Web产品线(企业 saas产品和社交产品方向）各模块的设计、开发和单元测试工作。',
                        '2、与产品需求、UE设计师沟通，理解需求，并进行敏捷开发、持续交付和验证。',
                        '3、优化Web前端应用，改善用户体验。',
                        '4、关注Web前沿技术，研究前端技术发展方向。'
                    ],
                    condition: [
                        '任职条件:',
                        '1、国家统招本科及以上学历，计算机相关专业。',
                        '2、精通面向对象的javascript开发，能实现模块封装，了解MVC，MVVM等开发模式。',
                        '3、熟悉W3C标准，熟练运用HTML、CSS等前端技术，熟悉Jquery，能解决各种浏览器兼容性问题。',
                        '4、熟悉响应式布局，具备webApp项目经验者优先。',
                        '5、掌握使用Backbone、React，Bootstrap 等框架或类库者优先。',
                        '6、有H5开发经验优先。',
                        '7、能承担较大工作压力，具备良好的沟通能力和团队合作精神。',
                        '8、参与或负责过商业大型复杂互联网产品Web端的独立模块开发。',
                        '9、工作经验2年以上，有移动端经验者优先考虑。'
                    ]
                },
                {
                    title: 'JAVA开发工程师',
                    titleEn: 'JAVA Development Engineer',
                    duty: [
                        '岗位职责:',
                        '1、参与系统设计、方案讨论。',
                        '2、负责系统功能模块开发。',
                        '3、负责系统功能维护升级。'
                    ],
                    condition: [
                        '任职条件:',
                        '1、与软件相关专业本科及以上学历，两年以上开发经验。',
                        '2、精通JAVA编程。',
                        '3、熟练掌握主流开源技术、如Spring、Redis、Nginx、Apache Shiro、Dubbox、Zookeeper、lucenne等。',
                        '4、熟悉主流数据库及持久化方式，Mysql，JPA、Mbatis、Spring jdbc等。',
                        '5、熟悉负载均衡、服务发现、高可用、自动伸缩、分布式服务等技术。',
                        '6、有较强的独立工作能力和团队协作精神，有较好的沟通表达能力。',
                        '7、有产品设计架构经验者优先。',
                        '8、有企业ERP开发经验者优先。',
                        '9、熟悉linux系统和维护优先。'
                    ]
                },
                {
                    title: '市场专员',
                    titleEn: 'Market commissio',
                    duty: [
                        '任职条件:',
                        '1、公司官网的日常运维、内容更新、栏目管理等。',
                        '2、微信公众号、EDM邮件的内容编辑和日常推送。',
                        '3、各类营销资料的内容收集、整理及制作。',
                        '4、组织各类市场的线上/线下活动，配合公司进行全面业务推广。',
                        '5、配合重点项目的开展，进行相关的外联工作及商务活动。'
                    ],
                    condition: [
                        '任职条件:',
                        '1、本科以上学历，市场营销、广告、传媒等相关专业优先或者对市场营销工作感兴趣。',
                        '2、有较强的文案能力，有线下活动执行的经历。',
                        '3、学习能力强，具备基本沟通技巧，具备一定销售及客户服务意识。'
                    ]
                },
                {
                    title: 'UIUE产品经理（简历中一定附带个人作品）',
                    titleEn: 'UIUE Product Manager',
                    duty: [
                        '岗位职责:',
                        '1、负责互联网产品（web端和App端）UI和UE的用户角色行为分析、交互规划，从用户体验（性能、功能、交互）角度提出最佳的交互设计和界面设计方案。',
                        '2、按设计规范输出UI素材和开发用图。',
                        '3、与产品经理和开发工程师等一起改进产品的用户体验。',
                        '4、跟进研发工程师完成产品开发工作，并解决开发中遇到的相关问题。',
                        '5、合作精神及独立工作、研究能力。'
                    ],
                    condition: [
                        '任职条件:',
                        '1、有丰富的交互设计理论知识，对各种常用软件有强烈兴趣并有灵敏触觉，富有创造力和激情，并有动手实践的良好习惯，有自己的见解。',
                        '2、从事互联网产品交互设计2年以上（必须条件），有丰富的需求调研、产品交互设计、可用性测试经验。',
                        '3、能熟练使用Axure、Visio、photoshop、Flash 等产品原型设计软件，具备优秀的交互原型设计能力和用户界面设计能力，了解AE动画设计的优先。',
                        '4、熟悉企业互联网、移动互联网行业产品优先。',
                        '5、有社交产品、企业管理软件产品UI／UE经验者优先。',
                        '6、了解基于浏览器和客户端的技术，具备一定的html、CSS等代码技能优先。'
                    ]
                },
                {
                    title: '产品经理',
                    titleEn: 'Product Manager',
                    duty: [
                        '岗位职责:',
                        '1、负责制定产品规划和产品开发计划。',
                        '2、负责企业互联网产品需求定义与功能设计。',
                        '3、与客户沟通需求和痛点，并进行归纳总结。',
                        '4、参与市场活动与策划。',
                        '5、参与客户解决方案的沟通。'
                    ],
                    condition: [
                        '任职条件:',
                        '1、有企业互联网产品，特别是有企业社交化业务产品设计的背景优先。',
                        '2、有对大企业集团管理信息化多年经验，特别是对企业互联网有深刻理解。',
                        '3、有从事企业管理软件产品经理经验。',
                        '4、对云计算、移动社交、数据分析有技术背景的优先。',
                        '5、对互联网有很深的了解。'
                    ]
                }
            ]
        }
    },
    components: {
        'con-footer': conFooter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.join
    transition: all .5s;
    .banner
        margin-bottom: 50px;
        img
            width: 100%;
    .recruitLists
        ul
            .main
                >li
                    border-bottom: 1px solid #e5e5e5;
                    margin-bottom: 20px;
                    &:last-child
                        border: 0;
                    .icon
                        margin-bottom: 20px;
                        img
                            width: 50px;
                            height: 50px;
                            margin: 0 auto;
                            display: block;
                    .title
                        text-align: center;
                        font-size: 14px;
                        line-height: 20px;
                    .titleEn
                        text-align: center;
                        color: #666;
                        font-size: 12px;
                        margin-bottom: 20px;
                    >ol
                        margin-bottom: 30px;
                        >li
                            font-size: 14px;
                            line-height: 30px;
                    p
                        font-size: 14px;
                        line-height: 24px;
                        margin-bottom: 10px; 
                        .blueLetter
                            color: #2983c8;
                    .btn
                        width: 90px;
                        height: 30px;
                        background-color: #1775c2;
                        border-radius: 3px;
                        text-align:center;
                        letter-spacing: 2px;
                        float: right;
                        margin-bottom: 16px;
                        a
                            color: #fff;
                            line-height: 30px;
</style>
