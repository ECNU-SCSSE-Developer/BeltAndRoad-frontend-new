<template>
    <div style="background-color: #fff">
        <van-nav-bar :title="title" left-arrow @click-left="$router.go(-1)" />
        <div class="padding flex flex-direction align-center justify-center" style="position: relative;">
            <div v-if="!loading" v-html="res" style="width: 100%;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                res:{},
                title:'',
                loading:true,
            }
        },
        methods: {},
        created() {
            this.loading = true;
            this.$handle.request('getSysAgreement',res=>{
                if(!res) return this.$handle.showErr('还未配置对应数据!');
                this.res = res.content.replace(/955px/g, '100%');
                this.title = res.name;
                this.loading = false;
            },{type:this.$route.query.type});
        }
    }
</script>

<style lang="less" scoped>
    .title{
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin: 0 auto 24px auto;
    }
</style>