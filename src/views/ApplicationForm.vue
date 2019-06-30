<template>
    <div>
        <van-nav-bar title="申请表"/>
        <van-cell-group class="margin-top-lg">
            <van-field label="姓名：" center v-model="order.borrow_name"/>
            <van-field label="身份证号：" center v-model="order.card_no"/>
            <van-field label="手机号码：" center maxlength="11" v-model="order.phone"/>
            <van-field label="借款金额：" @blur="getAmount" center v-model="order.borrow_amount" type="number"/>
            <van-cell title="借款期限：" is-link center :value="getPeriod" @click="show_select_period = true"/>
            <van-field label="验证码：" center v-model="order.phone_code" maxlength="6">
                <VerifyCode slot="button" :phone="order.phone" @getVerifyCode="getVerifyCode"></VerifyCode>
            </van-field>
            <van-cell>
                <div slot="title" class="flex">
                    <van-checkbox checked-color="#8DCD8D" class="margin-right-xs" v-model="agree"/>
                    已阅读并同意《<span class="protocol" @click="$router.push({name:'protocol',query:{type:1}})">个人信息授权书</span>》
                </div>
            </van-cell>
        </van-cell-group>
        <div class="flex justify-center margin-top-xl">
            <van-button type="primary" @click="onSubmit" style="width: 80%">授权查询风控报告并支付费用</van-button>
        </div>
        <van-popup v-model="show_select_period" position="bottom">
            <div class="padding-container flex align-center justify-around" style="height: 280px">
                <div class="flex flex-direction align-center justify-center">
                    <p class="margin-bottom-sm">年</p>
                    <van-stepper v-model="order.year" :min="0" integer/>
                </div>
                <div class="flex flex-direction align-center justify-center">
                    <p class="margin-bottom-sm">月</p>
                    <van-stepper v-model="order.month" :min="0" :max="12" integer/>
                </div>
                <div class="flex flex-direction align-center justify-center">
                    <p class="margin-bottom-sm">日</p>
                    <van-stepper v-model="order.day" :min="(order.year >0 || order.month > 0) ? 0 : 1" :max="30"
                                 integer/>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import VerifyCode from '@/components/VerifyCode';
    import uitl from '@/utils/util'
    import wx from '@/utils/wx'

    export default {
        components: {
            VerifyCode
        },
        data() {
            return {
                agree: false,
                show_select_period: false,
                phone_code_right:'',
                order: {
                    year: 0,
                    month: 0,
                    day: 1,
                    order_code: '',
                    open_id: '',
                    phone: '',
                    time: '',
                    borrow_name: '',
                    borrow_amount: '',
                    card_no: '',
                    phone_code: '',
                    borrow_cycle: '',
                },
            }
        },
        methods: {
            getVerifyCode(code) {
                this.phone_code_right = code;
            },
            getAmount() {
                this.order.borrow_amount = parseFloat(this.order.borrow_amount).toFixed(2);
            },
            checkData() {
                const rules = [{
                    match: !this.order.borrow_name,
                    action: () => this.$handle.showErr('请填写借款人姓名')
                }, {
                    match: !uitl.verifyIdCode(this.order.card_no),
                    action: () => this.$handle.showErr('请填写正确的身份证号')
                }, {
                    match: !this.order.borrow_amount,
                    action: () => this.$handle.showErr('请填写借款金额')
                }, {
                    match: this.year < 1 && this.month < 1 && this.day < 1,
                    action: () => this.$handle.showErr('请填写借款周期')
                }, {
                    match: !this.order.phone_code,
                    action: () => this.$handle.showErr('请填写验证码')
                }, {
                    match: this.order.phone_code != this.phone_code_right,
                    action: () => this.$handle.showErr('验证码填写不正确')
                }, {
                    match: !this.agree,
                    action: () => this.$handle.showErr('请阅读并同意个人信息授权书')
                }];
                for(let i = 0;i<rules.length;++i){
                    if(rules[i].match) return rules[i].action();
                }
                return this.order;
            },
            onSubmit() {
                const post_data = this.checkData();
                if (post_data) {
                    this.$handle.request('loanPayWrite', res => {
                        wx.pay(res,()=>{
                            const msg = '支付成功，风控报告已发送至'+ res.company_short + ' ' + res.username;
                            this.$router.replace({name:'pay-result',query:{msg,sign:0}})
                        });
                    }, post_data)
                }
            }
        },
        computed: {
            getPeriod() {
                let period = '';
                if (this.order.year > 0) period += this.order.year + '年';
                if (this.order.month > 0) period += this.order.month + '月';
                if (this.order.day > 0) period += this.order.day + '日';
                return this.order.borrow_cycle = period;
            }
        },
        created() {
            this.order.order_code = this.$route.query.order_code;
            this.order.open_id = this.$route.query.openid;
        }
    }
</script>

<style lang="less" scoped>
    .protocol {
        text-decoration: underline;
        color: @primary-color;
    }

    p {
        color: @primary-color;
    }
</style>

<style>
    .van-field .van-cell__title {
        -webkit-box-flex: unset;
        -webkit-flex: unset;
        flex: unset;
    }
</style>