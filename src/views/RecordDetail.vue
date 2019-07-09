<template>
    <div v-if="!loading">
        <van-nav-bar title="档案详情" left-arrow @click-left="$router.go(-1)" />
        <div class="padding-container">
            <div class="flex align-center justify-between">
                <span style="color:#17233d">{{res.borrow_name}}</span>
                <span v-if="res.order_status == 5" style="color:#8DCD8D">{{res.order_status_name}}</span>
                <span v-else style="color:red">{{res.order_status_name}}</span>
            </div>
            <p>借款金额：{{res.borrow_amount}}</p>
            <p>借款期限：{{res.borrow_cycle}}</p>
        </div>
        <div class="padding-container" v-if="res.search_list && res.search_list.length > 0">
            <p>历史查询记录(共{{res.search_list.length}}条)：</p>
            <div class="padding-container">
                <div class="flex align-center justify-between" v-for="(item,index) in res.search_list" :key="index">
                    <p>{{item.company}}</p>
                    <p>{{item.risk_time}}</p>
                </div>
            </div>
        </div>
        <div v-if="Object.keys(info).length > 0">
            <div class="padding-container">
                <div class="flex align-center justify-between">
                    <p>身份验证</p>
                    <p v-if="info.verify_idcard == '认证通过'" style="color: #8DCD8D">通过</p>
                    <p v-else style="color: red">不通过</p>
                </div>
                <div class="flex align-center justify-between" v-for="(item,index) in info.certificate" :key="index">
                    <p>职业资格</p>
                    <div>
                        <span>{{item.clevel}}</span>
                        <span>{{item.profession}}</span>
                    </div>
                </div>
                <div class="flex align-center justify-between">
                    <p>手机实名</p>
                    <p v-if="info.verify_mobileInfo_3c == '一致'" style="color: #8DCD8D">一致</p>
                    <p v-else style="color: red">不一致</p>
                </div>
                <div class="flex align-center justify-between">
                    <p>手机在月消费</p>
                    <p v-if="info.consume_grade">{{info.consume_grade}}</p>
                    <p v-else>未查到相关数据</p>
                </div>
                <div class="flex align-center justify-between">
                    <p>手机月在网</p>
                    <p v-if="info.online_time">{{info.online_time}}</p>
                    <p v-else>未查到相关数据</p>
                </div>
            </div>
            <div class="padding-container">
                <div class="flex align-center justify-between">
                    <p>近12个月航空常去城市</p>
                    <p v-if="info.passenger_value_report">{{info.passenger_value_report}}</p>
                    <p v-else>未查到相关数据</p>
                </div>
                <div class="flex align-center justify-between">
                    <p>近3个月乘高铁次数</p>
                    <p v-if="info.railway_userInfo_v2">{{info.railway_userInfo_v2==='[5-∞)' ? '5+' : info.railway_userInfo_v2}}</p>
                    <p v-else>未查到相关数据</p>
                </div>
            </div>
            <div class="padding-container">
                <p>司法公告</p>
                <div class="flex align-center justify-between">
                    <p>风险</p>
                    <p v-if="info.bad_infoe">疑似{{info.bad_infoe}}</p>
                    <p v-else>未查到相关数据</p>
                </div>
                <div class="flex align-center justify-between" v-for="(item,index) in info.enforced_person" :key="index">
                    <p>{{item.caseCode}}</p>
                    <p>被执行人</p>
                </div>
                <div class="flex align-center justify-between" v-for="(item,index) in info.enforced_disruptor" :key="index">
                    <p>{{item.caseCode}}</p>
                    <p>失信被执行人</p>
                </div>
            </div>
            <div class="padding-container">
                <p>信用评估</p>
                <div class="flex align-center justify-between">
                    <p>总履约笔数</p>
                    <p v-if="info.credit_probe_v32.t01ccgzza">{{info.credit_probe_v32.t01ccgzza}}笔</p>
                    <p v-else>未查到相关数据</p>
                </div>
                <div class="flex align-center justify-between">
                    <p>总逾期笔数</p>
                    <p v-if="info.credit_probe_v32.t01ccgzzc">{{info.credit_probe_v32.t01ccgzzc}}笔</p>
                    <p v-else>未查到相关数据</p>
                </div>
                <div class="flex align-center justify-between">
                    <p>当前消金网贷笔数</p>
                    <p v-if="info.risk_assessment_beesmell_v2.net_var1 >= 0">{{info.risk_assessment_beesmell_v2.net_var1}}笔</p>
                    <p v-else>未查到相关数据</p>
                </div>
                <div class="flex align-center justify-between">
                    <p>博彩类网站</p>
                    <p v-if="info.risk_assessment_beesmell_v2.net_var2 >= 0">{{6 - info.risk_assessment_beesmell_v2.net_var2 > 0 ? 6 - info.risk_assessment_beesmell_v2.net_var2 : 0}}笔</p>
                    <p v-else>未查到相关数据</p>
                </div>
                <div class="flex align-center justify-between">
                    <p>近3个月网贷申请</p>
                    <p v-if="info.radar >=0 ">{{info.radar}}笔</p>
                    <p v-else>未查到相关数据</p>
                </div>
            </div>
            <div class="gap-line"></div>
            <div class="padding-container flex align-center justify-between">
                <p>黑名预警</p>
                <div v-if="info.blacklist_v2">
                    <van-tag v-if="info.blacklist_v2 === 'A'" type="danger" size="medium">高危</van-tag>
                    <van-tag v-else-if="info.blacklist_v2 === 'B'" color="#f2826a" size="medium">中高危</van-tag>
                    <van-tag v-else-if="info.blacklist_v2 === 'C'" color="#FFD900" size="medium">中危</van-tag>
                    <van-tag v-else-if="info.blacklist_v2 === 'D'" type="success" size="medium">低危</van-tag>
                    <p v-else>数据异常</p>
                </div>
                <p v-else>未查到相关数据</p>
            </div>
        </div>
        <div class="flex justify-center margin-top-xl" v-if="res.guard_pay_status == 5">
            <van-button @click.native="onPay" type="primary" style="width: 80%">申请通过并开始监控</van-button>
        </div>
        <div class="gap-block" style="background-color: #fff"></div>
    </div>
</template>

<script>
    import wx from '@/utils/wx'
    export default {
        data() {
            return {
                res:{
                    order_code:''
                },
                info:{},
                loading:false
            }
        },
        methods: {
            getRecordDetail(){
                this.loading = true;
                this.$handle.request('getOrderDetail',res=>{
                    this.loading = false;
                    this.res = res.orderDetail;
                    this.info = res.riskDetail;
                },{order_id:this.$route.query.id})
            },
            onPay(){
                this.$handle.request('guardPayStart',res=>{
                    wx.pay(res,()=>{
                        this.$handle.showSuc('支付成功');
                        this.$router.go(0);
                    })
                },{order_code:this.res.order_code})
            }
        },
        created(){
            this.getRecordDetail();
        }
    }
</script>

<style lang="less" scoped>
    p{
        font-size: 0.88em;
        color: #333;
        margin: 4px 0;
    }
    .padding-container{
        margin-top: 1px;
    }
</style>