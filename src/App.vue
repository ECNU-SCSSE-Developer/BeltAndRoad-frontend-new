<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
</template>

<style lang="less">
    @import "styles/common.less";

    html, body {
        height: 100%;
        background-color: #fff;
    }

    #app {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
        Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        height: 100%;
        background-color: #eee;
    }

    * {
        margin: 0;
        padding: 0;
    }
</style>
