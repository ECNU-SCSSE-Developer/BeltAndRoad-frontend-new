import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [{
    path: '/',
    name: 'search',
    component: () => import('./views/Search.vue')
},{
    path:'/pay/application-form',
    name:'application-form',
    component: () => import('./views/ApplicationForm.vue'),
    meta:{keepAlive:true},
},{
    path:'/pay/record-detail',
    name:'record-detail',
    component: () => import('./views/RecordDetail.vue')
},{
    path:'/pay/application-login',
    name:'application-login',
    component: () => import('./views/ApplicationLogin.vue')
}];

const keepAlives = new Set(['ApplicationForm','Login']);

function register(modules) {
    modules.forEach(module_name=>{
        routes.push({
            path: '/' + module_name.replace(module_name[0],module_name[0].toLowerCase()).replace(/([A-Z])/g,"-$1").toLowerCase(),
            name: module_name.replace(module_name[0],module_name[0].toLowerCase()).replace(/([A-Z])/g,"-$1").toLowerCase(),
            meta:{keepAlive:keepAlives.has(module_name)},
            component: () => import('./views/' + module_name + '.vue')
        });
    })
}

register([
    'Account','Record','Authorization','Login','Protocol','Index',
    'AccountModify','PayResult'
]);

export default new Router({mode: 'history',routes})