<template>
    <div>
        <p></p>
    </div>
</template>

<script>
    import storage from '@/utils/storage';
    export default {
        data() {
            return {}
        },
        methods: {},
        created(){
            const openid = storage.getOpenId();
            const code = this.$route.query.code;
            const rules = [{
                match:openid,
                action:()=>{
                    const order_code = this.$route.query.order_code;
                    this.$handle.request('loanerAuthorize',res=>{
                        if(res.sign == 1)return  this.$router.replace({name:'pay-result',query:{msg:'抱歉，本页面已失效',sign:1}})
                        this.$router.replace({name:'application-form',query:{order_code,openid}});
                    },{type:2,order_code});
                }
            }, {
                match:code,
                action:()=>{
                    const order_code = this.$route.query.state;
                    this.$handle.request('loanerAuthorize',res=>{
                        storage.setOpenId(res.open_id);
                        if(res.sign == 1) return this.$router.replace({name:'pay-result',query:{msg:'抱歉，本页面已失效',sign:1}})
                        this.$router.replace({name:'application-form',query:{order_code,openid:res.open_id}});
                    },{type:1,wx_code:code,order_code});
                }
            },{
                match:true,
                action:()=>{
                    const auth_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
                        process.env.APP_ID + '&redirect_uri=' +
                        encodeURI(process.env.REDIRECT_URL) + '/pay/application-login'
                        +'&response_type=code&scope=snsapi_userinfo&state='+ this.$route.query.order_code + '#wechat_redirect';
                    window.location.href = auth_url;
                }
            }];
            for(let i = 0;i<rules.length;++i){
                if(rules[i].match) return rules[i].action();
            }
        }
    }
</script>

<style lang="less" scoped>
    p{
        color: @grey;
        margin-top: 120px;
    }
</style>