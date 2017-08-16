import Vue from 'vue'
import Router from 'vue-router'
import $ from 'jquery'

import Home from '@/components/Home'
import wochart from '@/components/product/wochart/wochart'
import financialShared from '@/components/product/financialShared/financialShared'
import payment from '@/components/product/payment/payment'
import funManagement from '@/components/product/funManagement/funManagement'
import HRcenter from '@/components/product/HRcenter/HRcenter'
import ReportForm from '@/components/product/ReportForm/ReportForm'
import relationship from '@/components/product/relationship/relationship'
import accounting from '@/components/product/accounting/accounting'
import financialAnalysis from '@/components/product/financialAnalysis/financialAnalysis'
import addInvoice from '@/components/product/addInvoice/addInvoice'

import service from '@/components/service/service'
import partner from '@/components/partner/partner'

import industry from '@/components/industry/industry'
import tour from '@/components/tour/tour'
import tourResolve from '@/components/tourResolve/tourResolve'
import architecture from '@/components/architecture/architecture'
import architectureResolve from '@/components/architectureResolve/architectureResolve'
import environment from '@/components/environment/environment'
import environmentResolve from '@/components/environmentResolve/environmentResolve'

import about from '@/components/about/about'
import join from '@/components/join/join'
import contact from '@/components/contact/contact'
import NewsRelease from '@/components/NewsRelease/NewsRelease'
import new1 from '@/components/new/new1'
import new2 from '@/components/new/new2'
import new3 from '@/components/new/new3'

Vue.use(Router)

let route = new Router({
  	routes: [
	    {
	        path: '/',
	        alias: '/home',
	      	name: 'home',
	      	component: Home
	    },
	    {
	    	path: '/wochart',
	    	name: 'wochart',
	    	component: wochart
	    },
	    {
	    	path: '/payment',
	    	name: 'payment',
	    	component: payment
	    },
	    {
	    	path: '/financialShared',
	    	name: 'financialShared',
	    	component: financialShared
	    },
	    {
	    	path: '/funManagement',
	    	name: 'funManagement',
	    	component: funManagement
	    },
	    {
	    	path: '/financialAnalysis',
	    	name: 'financialAnalysis',
	    	component: financialAnalysis
	    },
	    {
	    	path: '/addInvoice',
	    	name: 'addInvoice',
	    	component: addInvoice
	    },
	    {
	    	path: '/HRcenter',
	    	name: 'HRcenter',
	    	component: HRcenter
	    },
	    {
	    	path: '/ReportForm',
	    	name: 'ReportForm',
	    	component: ReportForm
	    },
	    {
	    	path: '/relationship',
	    	name: 'relationship',
	    	component: relationship
	    },
	    {
	    	path: '/accounting',
	    	name: 'accounting',
	    	component: accounting
	    },
	    {
	    	path: '/service',
	    	name: 'service',
	    	component: service
	    },
	    {
	    	path: '/partner',
	    	name: 'partner',
	    	component: partner
	    },
	    {
	    	path: '/industry',
	    	name: 'industry',
	    	component: industry
	    },
	    {
	    	path: '/tour',
	    	name: 'tour',
	    	component: tour
	    },
	    {
	    	path: '/tourResolve',
	    	name: 'tourResolve',
	    	component: tourResolve
	    },
	    {
	    	path: '/architecture',
	    	name: 'architecture',
	    	component: architecture
	    },
	    {
	    	path: '/architectureResolve',
	    	name: 'architectureResolve',
	    	component: architectureResolve
	    },
	    {
	    	path: '/environment',
	    	name: 'environment',
	    	component: environment
	    },
	    {
	    	path: '/environmentResolve',
	    	name: 'environmentResolve',
	    	component: environmentResolve
	    },
	    {
	    	path: '/about',
	    	name: 'about',
	    	component: about
	    },
	    {
	    	path: '/join',
	    	name: 'join',
	    	component: join
	    },
	    {
	    	path: '/contact',
	    	name: 'contact',
	    	component: contact
	    },
	    {
	    	path: '/NewsRelease',
	    	name: 'NewsRelease',
	    	component: NewsRelease
	    },
	    {
	    	path: '/new1',
	    	name: 'new1',
	    	component: new1
	    },
	    {
	    	path: '/new2',
	    	name: 'new2',
	    	component: new2
	    },
	    {
	    	path: '/new3',
	    	name: 'new3',
	    	component: new3
	    }
    ]
})
route.beforeEach((to, from, next) => {
	// 通过异步的方式才能访问到default 跳转路由的时候侧边栏隐藏
	setTimeout(() => {
		to.matched[0].instances.default.$root.$children[0].hideSlide()
		$(to.matched[0].instances.default.$root.$el).parent().scrollTop(0)
	}, 100)
	next()
})

export default route
