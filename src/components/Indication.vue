<template>
    <div>
        <div class="mask"></div>
        <div class="indicater">
            <img src="~_img/util/indicater.png" alt="">
        </div>
        <p>点击右上角 '···' 状按钮即可选择好友进行分享</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    .mask{
        height: 100%;
        width: 100%;
        z-index: 99;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: .66;
    }
    .indicater{
        z-index: 100;
        position: absolute;
        right: 32px;
        top:0;
        img{
            width: 80px;
            height: 110px;
        }
    }
    p{
        color: @primary-color;
        position: absolute;
        z-index: 100;
        top: 120px;
        left: 48px;
    }
</style>