<template>
    <div >
        <div class="padding-container flex flex-direction align-center justify-center" style="background-color: #eee">
            <img style="margin-top: 120px" :src="icons[icon_index]" alt="">
            <div class="des">{{des}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                des:'',
                icons:[
                    require('_img/pay/suc.png'),
                    require('_img/pay/err.png')
                ],
                icon_index:0,
            }
        },
        methods: {

        },
        mounted(){
            this.des = this.$route.query.msg;
            this.icon_index = this.$route.query.sign;
            //sign 0:成功 1:失败
        }
    }
</script>

<style lang="less" scoped>
    .des{
        color: #666;
        margin-top: 24px;
        font-size: 1em;
    }
    .sub-des{
        color: #bcbcbc;
        font-size: 14px;
        margin-top: 6px;
        width: 100%;
        text-align: center;
    }
</style>