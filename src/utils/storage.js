const period =  2592000000; //30天

export default {
    setToken(token){
        const expire_time = new Date().getTime() + period;
        window.localStorage.setItem('token',JSON.stringify({
            token,expire_time
        }));
    },
    getToken(){
        if(!window.localStorage.getItem('token')) return '';
        return JSON.parse(window.localStorage.getItem('token')).token;
    },
    isTokenExpired(){
        return !window.localStorage.getItem('token') || new Date().getTime() >=
            JSON.parse(window.localStorage.getItem('token'))
                .expire_time;
    },
    reSetToken(){
       window.localStorage.removeItem('token');
    },
    setOpenId(openid){
        window.localStorage.setItem('openid',openid);
    },
    getOpenId(){
        return window.localStorage.getItem('openid');
    }
}