<template>
    <div class="container">
        <div v-if="getting_code" class="gotten">重发需等待{{count_down}}秒</div>
        <div v-else @click="getVerifyCode"  class="getting">获取验证码</div>
    </div>
</template>

<script>
    export default {
        props:['phone'],
        data() {
            return {
                getting_code:false,
                count_down:59
            }
        },
        methods: {
            getVerifyCode(){
                const re =  /^1[34578]\d{9}$/;
                if(!this.phone || !re.test(this.phone)) return this.$handle.showErr('请正确输入手机号');
                this.getting_code = true;
                const timer = setInterval(()=>{
                    this.count_down = this.count_down - 1;
                },1000);
                setTimeout(()=>{
                    this.getting_code = false;
                    this.count_down = 59;
                    if(timer) clearInterval(timer);
                },59000);
                this.$handle.request('sendMsg',res=>{
                    this.$handle.showSuc('发送成功');
                    this.$emit('getVerifyCode',res.verifyCode);
                },{'phone':this.phone})
            }
        }
    }
</script>

<style lang="less" scoped>
    .getting{
        color: @primary-color;
        font-size: 1em;
    }
    .gotten{
        color: @grey;
        font-size:  1em;
    }
    .container{
        cursor: pointer;
    }
</style>