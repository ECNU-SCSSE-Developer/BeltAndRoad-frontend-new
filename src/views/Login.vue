<template>
    <div>
        <van-nav-bar title="用户登录" left-arrow @click-left="$router.replace({name:'search'})" />
        <van-cell-group  class="margin-top-lg">
            <van-field label="姓名："  center v-model="username" />
            <van-field label="公司(全称)：" center v-model="company" />
            <van-field label="公司(简称)：" center v-model="company_short" maxlength="4" />
            <van-field label="手机号码：" type="number" maxlength="11" center v-model="phone" />
            <van-field label="验证码：" center v-model="verify_code" maxlength="6">
                <VerifyCode :phone="phone" slot="button" @getVerifyCode="getVerifyCode"></VerifyCode>
            </van-field>
            <van-cell>
                <div slot="title" class="flex">
                    <van-checkbox checked-color="#8DCD8D" class="margin-right-xs"  v-model="agree" />
                    已阅读并同意《<span class="protocol"  @click="$router.push({name:'protocol',query:{type:2}})">用户使用协议</span>》
                </div>
            </van-cell>
        </van-cell-group>
        <div class="flex justify-center margin-top-xl">
            <van-button @click.native="onSubmit" type="primary" style="width: 80%">登录并绑定微信</van-button>
        </div>
    </div>
</template>

<script>
    import VerifyCode from '@/components/VerifyCode';
    export default {
        components:{
            VerifyCode
        },
        data() {
            return {
                phone:'',
                verify_code:'',
                verify_code_right:'',
                username:'',
                company:'',
                company_short:'',
                agree:false,
            }
        },
        methods: {
            isChinese(value){
                const re = /^[\u4e00-\u9fa5]+$/i;
                return re.test(value);
            },
            checkData(){
                const rules = [{
                    match:!this.username,
                    action:()=>this.$handle.showErr('请填写您的姓名')
                },{
                    match:!this.isChinese(this.username),
                    action:()=>this.$handle.showErr('姓名只能是中文')
                },{
                    match:!this.company,
                    action:()=>this.$handle.showErr('请填写公司全称')
                },{
                    match:!this.isChinese(this.company),
                    action:()=>this.$handle.showErr('公司全称只能是中文')
                },{
                    match:!this.company_short,
                    action:()=>this.$handle.showErr('请填写公司简称')
                },{
                    match:!this.isChinese(this.company_short),
                    action:()=>this.$handle.showErr('公司简称只能是中文')
                },{
                    match:!this.verify_code,
                    action:()=>this.$handle.showErr('请填写验证码')
                },{
                    match:this.verify_code != this.verify_code_right,
                    action:()=>this.$handle.showErr('验证码不正确')
                },{
                    match:!this.agree,
                    action:()=>this.$handle.showErr('请阅读并同意用户协议')
                }]
                for(let i = 0;i<rules.length;++i){
                    if(rules[i].match) return rules[i].action();
                }
                return {
                    phone_code:this.verify_code,
                    phone:this.phone,
                    username:this.username,
                    company_short:this.company_short,
                    company:this.company
                }
            },
            onSubmit(){
                const post_data = this.checkData();
                if(post_data){
                    this.$handle.request('userLogin',()=>{
                        this.$handle.showSuc('绑定成功');
                        this.$store.commit('setUserInfo',post_data);
                        setTimeout(()=>{
                            this.$router.replace({name:'search'});
                        },800)
                    },post_data)
                }
            },
            getVerifyCode(code){
                this.verify_code_right = code;
            }
        }
    }
</script>

<style lang="less" scoped>
    .protocol{
        text-decoration: underline;
        color: @primary-color;
    }
</style>

<style>
    .van-cell__title{
        -webkit-box-flex: unset;
        -webkit-flex: unset;
        flex: unset;
    }
</style>