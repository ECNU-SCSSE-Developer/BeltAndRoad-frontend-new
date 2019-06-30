<template>
    <div>
        <van-nav-bar title="我的账号" />
        <van-cell-group  class="margin-top-lg">
            <van-cell title="姓名" :value="res.username"></van-cell>
            <van-cell title="公司(全称)" :value="res.company"></van-cell>
            <van-cell title="公司(简称)" :value="res.company_short"></van-cell>
            <van-cell title="手机号码"  :value="res.phone"></van-cell>
        </van-cell-group>
        <div class="flex justify-center margin-top-xl">
            <van-button @click.native="onModifyUserInfo" type="primary" style="width: 80%">修改个人信息</van-button>
        </div>
        <van-tabbar active-color="#8DCD8D" fixed route safe-area-inset-bottom style="position: fixed;bottom: 0;">
            <van-tabbar-item
                    replace
                    to="/"
                    icon="search"
            >查询</van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/record"
                    icon="notes-o"
            >档案</van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/account"
                    icon="contact"
            >账号</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                res:{},
            }
        },
        methods: {
            onModifyUserInfo(){
                this.$router.push({name:'account-modify',query:{
                    username:this.res.username,
                    company:this.res.company,
                    company_short:this.res.company_short
                }})
            }
        },
        created(){
            this.res = this.$store.state.userinfo;
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