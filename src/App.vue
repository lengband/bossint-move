<template>
    <div id="app">
		<con-header :navShow="navShow"></con-header>
        <router-view @click.native="hideSlide" :style="{'transform': navShow ? 'translateX(-100%)' : 'translateX(0)'}" :navShow="navShow"></router-view>
        <transition name="nav">
            <aside-nav v-show="navShow" :navShow="navShow"></aside-nav>
        </transition>
    </div>
</template>

<script>
import './components/common/scale.js'
import asideNav from './components/asideNav/asideNav'
import conHeader from './components/conHeader/conHeader'
export default {
    name: 'app',
    data () {
    	return {
    		navShow: false
    	}
    },
    components: {
        'aside-nav': asideNav,
        'con-header': conHeader
    },
    created () {
        this.me = this
        this.$root.eventHub.$on('toggleNav', (navShowEmit) => {
            this.navShow = !navShowEmit
        })
        this.$root.eventHub.$on('changeRouter', () => {
            this.navShow = false
        })
        this.$root.eventHub.$on('logoHideNav', () => {
            this.navShow = false
        })
    },
    methods: {
        hideSlide () {
            this.navShow = false
        }
    }
}
</script>

<style lang="stylus">
@import 'components/common/clearCssDefault.css';
#app
	.nav-enter-active, .nav-leave-active 
		transition: all .5s;
	.nav-enter, .nav-leave-active
		right: -100%;
</style>
