<template>
    <div v-if="!loading">
        <Indication v-if="show_indication" @click.native="show_indication = false"/>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item class="banner" v-for="(item,index) in res" :key="index">
                <img :src="item.img_url" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="flex align-center" style="width: 100%;box-shadow:0px 6px 21px 0px rgba(0,0,0,0.06);">
            <div class="padding-container flex flex-direction align-center justify-center" style="flex: 1"
                 @click="$router.push({name:'protocol',query:{type:3}})">
                <van-icon name="question-o" color="#8DCD8D" size="40px"/>
                <p class="margin-top-sm">使用教程</p>
            </div>
            <div class="padding-container flex flex-direction align-center justify-center" style="flex: 1"
                 @click="$router.push({name:'protocol',query:{type:4}})">
                <van-icon name="completed" color="#8DCD8D" size="40px"/>
                <p class="margin-top-sm">报告样例</p>
            </div>
        </div>
        <div class="flex justify-center">
            <van-button @click.native="check" type="primary" style="width: 80%;margin-top: 100px">发送查询请求</van-button>
        </div>
        <van-tabbar active-color="#8DCD8D" fixed route safe-area-inset-bottom style="position: fixed;bottom: 0;">
            <van-tabbar-item
                    replace
                    to="/"
                    icon="search"
            >查询
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/record"
                    icon="notes-o"
            >档案
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/account"
                    icon="contact"
            >账号
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import wx from '@/utils/wx';
    import Indication from '@/components/Indication'
    import storage from '@/utils/storage'

    export default {
        components: {
            Indication
        },
        data() {
            return {
                res: {},
                loading: false,
                show_indication: false,
            }
        },
        methods: {
            check() {
                // const rules = [{
                //     match: !this.$store.state.userinfo.phone,
                //     action: () => {
                //         this.$handle.request('getUser', res => {
                //             if (!res.phone) return this.$router.push({name: 'login'});
                //             else{
                //                 this.$store.commit('setUserInfo', res);
                //                 this.genOrder();
                //             }
                //         }, {}, false);
                //     }
                // }, {
                //     match: true,
                //     action: () => {
                //         this.genOrder();
                //     }
                // }];
                // for (let i = 0; i < rules.length; ++i) {
                //     if (rules[i].match) return rules[i].action();
                // }
                this.$handle.request('getUser', res => {
                    if (!res.phone) return this.$router.push({name: 'login'});
                    else {
                        this.$store.commit('setUserInfo', res);
                        this.genOrder();
                    }
                }, {}, false);
            },
            genOrder() {
                this.$dialog.confirm({
                    message: '该操作会新生成一张申请表，生成后需要您手动选择好友进行分享，且每张申请表仅能填写一次，是否确认生成?',
                }).then(() => {
                    this.$handle.request('genOrder', res => {
                        wx.share(res, () => {
                            this.$dialog.alert({
                                message: '分享信息设置成功，请点击右上角点状按钮选择好友进行分享'
                            }).then(() => this.show_indication = true);
                        });
                    })
                }).catch(() => {
                });
            }
        },
        created() {
            this.loading = true;
            this.$handle.request('getIndexData', res => {
                this.loading = false;
                this.res = res;
            })
        }
    }
</script>

<style lang="less" scoped>
    .banner {
        width: 100%;
        height: 480px;
    }

    .banner img {
        width: 100%;
        height: 100%;
    }

    p {
        color: #333;
        font-size: 0.88em;
    }
</style>
