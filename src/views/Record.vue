<template>
    <div>
        <van-search @search="searchRecord" placeholder="请输入借款人姓名、手机号或流水号查找" v-model="searchKey" class="margin-bottom-xs"/>
        <p v-if="records.length < 1" style="text-align: center" class="margin-top-xl">暂无相应的数据</p>
        <van-list v-model="loading"
                  :finished="finished"
                  :offset="80"
                  @load="getRecord"
        >
            <div class="padding-container" @click="$router.push({name:'record-detail',query:{id:item.id}})"
                 v-for="(item,index) in records" :key="index" style="margin-top: 1px">
                <div class="flex align-center justify-between">
                    <span style="color:#17233d">{{item.borrow_name}}</span>
                    <span style="color:#8DCD8D">{{item.order_status_name}}</span>
                </div>
                <div class="flex align-center justify-between margin-top-xs info">
                    <span>身份证号:{{item.card_no}}</span>
                    <span class="margin-left-lg">手机号:{{item.phone}}</span>
                </div>
                <div class="flex align-center justify-between margin-top-xs info">
                    <span>借款金额:{{item.borrow_amount}}元</span>
                    <span class="margin-left-xs">流水号:{{item.order_code}}</span>
                </div>
                <div class="flex align-center justify-between margin-top-xs info">
                    <span>查询时间:{{item.risk_time}}</span>
                    <span class="margin-left-xs">借款期限:{{item.borrow_cycle}}</span>
                </div>
            </div>
        </van-list>
        <div class="gap-block"></div>
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
    export default {
        data() {
            return {
                searchKey: '',
                loading: false,
                finished: false,
                records: [],
                cur_page: 1,
            }
        },
        methods: {
            searchRecord(){
                if(!this.searchKey) {
                    this.records = [];
                    this.finished = false;
                    this.cur_page = 1;
                    return this.getRecord();
                }
                this.loading = true;
                this.$handle.request('getOrderList', res => {
                    this.loading = false;
                    this.records = res.items;
                }, {name:this.searchKey})
            },
            getRecord() {
                this.loading = true;
                if (this.finished) return this.$handle.showErr('已经到底啦');
                this.$handle.request('getOrderList', res => {
                    this.loading = false;
                    this.records = this.records.concat(res.items);
                    this.cur_page = parseInt(res.currentPage) + 1;
                    this.finished = this.records.length >= res.totalCount;
                }, {page: this.cur_page})
            }
        },
        created() {
            this.getRecord();
        }
    }
</script>

<style lang="less" scoped>
    .info {
        width: 100%;
        span {
            font-size: 0.88em;
            color: @grey;
        }
    }

    p {
        font-size: 0.88em;
        color: @grey;
    }
</style>