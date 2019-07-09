import util from './util.js';
import axios from 'axios';
import router from '../router'
import storage from  './storage'
import { Toast } from 'vant';

const http = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: process.env.httpTimeout,
    headers:{'content-type': 'application/json'},
});

Toast.setDefaultOptions({duration:process.env.ToastDuration});

function postReq(requestHandler,showLoading) {
    const params = requestHandler.params ? requestHandler.params : {};
    const server_method = requestHandler.server_method;
    const data = { 'timestamp': util.getNowTime(), 'method': server_method, params: JSON.stringify(params) };
    const req_data = util.getRequestData(data);
    let loadTost;

    if(showLoading){
        loadTost = Toast.loading({
            duration:0,
            forbidClick: true,
            message: '加载中...'
        });
    }

    http.post('',req_data)
        .then(res=>{
            if(loadTost) loadTost.clear();
            if (res.status == 200) {
                requestHandler.success(res.data);
            }
            else Toast.fail('网络请求失败');
        }).catch((err)=>{
            console.log(err);
            if(loadTost) loadTost.clear();
            Toast.fail('无法连接到网络');
    });
}


function request(method,callback,post_data={},showLoading = true) {
    postReq({
        server_method: method,
        params: {...post_data, access_token:storage.getToken()},
        success:res=>{
            if(res.code == 2000) callback && callback(res.data);
            else if(res.code == 5001){
                Toast('登录状态失效，请重新登录');
                storage.reSetToken();
                router.replace({name:'index'});
            }
            else Toast(res.msg);
        }
    },showLoading)
}

function isTokenExpire() {
    return storage.isTokenExpired();
}

function setToken(token) {
    storage.setToken(token);
}

function apply(rules) {
    for(let i = 0;i<rules.length;++i){
        if(rules[i].match) return rules[i].action();
    }
}

export default {
    showErr(msg='操作失败'){
        Toast(msg);
    },
    showSuc(msg='操作成功'){
        Toast.success(msg);
    },
    request,
    isTokenExpire,
    setToken,
    apply,
}