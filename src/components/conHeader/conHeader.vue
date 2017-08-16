<template>
    <div class="conHeader">
        <a href="#/" class="logo" @click="logoHideNav()"><img src="./logo5.png" alt=""></a>
        <a class="navIcon" @click="leftFold"><img src="./nav-icon.png" height="16" width="20" alt=""></a>
    </div>
</template>

<script>

export default {
    name: 'conHeader',
    data () {
        return {
        }
    },
    props: {
        navShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        leftFold () {
            console.log(this.$router)
            this.$root.eventHub.$emit('toggleNav', this.$props.navShow)
        },
        logoHideNav () {
            this.$root.eventHub.$emit('logoHideNav', this.$props.navShow)
        }
    },
    mounted () {
        this.$watch(() => this.$props.navShow, newValue => { this.navShow = newValue })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    .conHeader
        transition: all .5s;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        background: rgba(0, 0, 0, .7);
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 10;
        .navIcon
            padding-top: .02rem;
            padding-right: .2rem;
            float: right;
        .logo
            margin-left: 0.24rem;
            display: inline-block;
            height: 100%;
            img
                margin-top: .05rem;
                height: .3rem;
                
</style>
