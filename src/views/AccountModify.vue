<template>
    <div>
        <van-nav-bar title="修改信息" left-arrow @click-left="$router.go(-1)" />
        <van-cell-group  class="margin-top-lg">
            <van-field label="姓名："  center v-model="username" />
            <van-field label="公司(全称)：" center v-model="company" />
            <van-field label="公司(简称)：" center v-model="company_short" maxlength="4" />
        </van-cell-group>
        <div class="flex justify-center margin-top-xl">
            <van-button @click.native="onSubmit" type="primary" style="width: 80%">确认修改</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username:'',
                company:'',
                company_short:'',
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
                }];
                for(let i = 0;i<rules.length;++i){
                    if(rules[i].match) return rules[i].action();
                }
                return {
                    username:this.username,
                    company_short:this.company_short,
                    company:this.company
                }
            },
            onSubmit(){
                const post_data = this.checkData();
                if(post_data){
                    this.$handle.request('updateUserInfo',()=>{
                        this.$handle.request('getUser',res=>{
                            this.$handle.showSuc('修改成功');
                            this.$store.commit('setUserInfo',res);
                            setTimeout(()=>{
                                this.$router.go(-1);
                            },800)
                        })
                    },post_data)
                }
            },
        },
        created(){
            const userinfo = this.$route.query;
            this.username = userinfo.username;
            this.company_short = userinfo.company_short;
            this.company = userinfo.company;
        }
    }
</script>

<style lang="less" scoped>

</style>