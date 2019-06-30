<template>
    <div class="padding-container flex flex-direction align-center">
        <van-icon name="sign" size="8em" color="#8DCD8D" style="margin-top: 140px" />
        <p>为了保证您的正常使用，请先进行授权</p>
        <van-button type="primary"  style="width: 80%" :url="auth_url" >前往授权页</van-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                auth_url:''
            }
        },
        methods: {

        },
        created(){
          this.auth_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
                          process.env.APP_ID + '&redirect_uri=' +
                          encodeURI(process.env.REDIRECT_URL) + '/index'
              +'&response_type=code&scope=snsapi_userinfo#wechat_redirect';
            window.location.href = this.auth_url;
        }
    }
</script>

<style lang="less" scoped>
    p{
        color: @grey;
        font-size: 0.88em;
        margin: 12px auto;
    }
</style>