<template>
    <div class="flex flex-direction align-center justify-center">
        <p></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created(){
            const code = this.$route.query.code;
            const rules = [{
               match:!this.$handle.isTokenExpire(),
               action:()=> this.$router.replace({name:'search'})
            },{
               match:code,
               action:()=>{
                   this.$handle.request('userAutoToken',res=>{
                       this.$handle.setToken(res.access_token);
                       this.$router.replace({name:'search'});
                   },{wx_code:code});
               }
            },{
               match:true,
               action:()=>this.$router.replace('authorization')
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