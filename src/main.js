import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import handle from './utils/handle'
import 'vant/lib/index.css';
import 'lib-flexible/flexible.js'
import 'vant/lib/nav-bar/style/less';

Vue.prototype.$store = store;
Vue.prototype.$handle = handle;

Vue.config.productionTip = false
Vue.use(Vant);

const free = new Set(['protocol','search','index','login','application-form','application-login','authorization','pay-result']);

router.beforeEach((to,from,next)=>{
    const rules = [{
        match:free.has(to.name),
        action:()=> next()
    },{
        match:handle.isTokenExpire(),
        action:()=> next({name:'index'})
    },{
        match:!store.state.userinfo.phone,
        action:()=> {
            handle.request('getUser',res=>{
                if(!res.phone) return next({name:'login'});
                store.commit('setUserInfo',res);
                next();
            },{},false)
        }
    },{
        match:true,
        action:()=> next()
    }];
    for(let i = 0;i<rules.length;++i){
        if(rules[i].match) return rules[i].action();
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
