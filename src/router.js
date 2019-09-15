import Vue from 'vue'
import Router from 'vue-router'
import {humpToHyphen} from "./utils/util";

Vue.use(Router);

let routes = [{
  path: '/',
  name: 'Catalog',
  component: () => import('./views/Catalog.vue')
}];

const keepAliveSet = new Set([]);


function register(modules) {
  modules.forEach(module_name => {
    routes.push({
      path: '/' + humpToHyphen(module_name),
      name: humpToHyphen(module_name),
      meta: {keepAlive: keepAliveSet.has(module_name)},
      component: () => import('./views/' + module_name + '.vue')
    });
  })
}

register(['Policy', 'Infrastructure', 'Communication', 'Education']);

export default new Router({mode: 'history', routes})
