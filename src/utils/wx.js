import wx from 'wx-js-sdk-1.4.0'
import handle from './handle'
import store from '../store'
import { Dialog } from 'vant';
function init(callback){
    const url = process.env.REDIRECT_URL + '/';
    handle.request('getSignPackage',res=>{
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.appId, // 必填，公众号的唯一标识
            timestamp:res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填，生成签名的随机串
            signature: res.signature,// 必填，签名
            jsApiList: ['updateAppMessageShareData','chooseWXPay'] // 必填，需要使用的JS接口列表
        });
        callback && callback();
    },{url})
}

export default {
    share(order_code,callback){
        init(()=>{
            const userinfo = store.state.userinfo;
            const desc = userinfo.company_short + userinfo.username + '邀请您提供风控资料';
            wx.ready(() => {      //需在用户可能点击分享按钮前就先调用
                wx.updateAppMessageShareData({
                    title:'斯莱特琳', // 分享标题
                    desc,
                    link:'http://frontend.sltl.top/pay/application-login?order_code='+order_code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'http://frontend.sltl.top/share.png', // 分享图标
                    success: () => {
                        callback && callback();
                    },
                    fail:err=>{
                        Dialog({ message: JSON.stringify(err) });
                    }
                });
            });
        })
    },
    pay(pay_data,callback){
        init(()=>{
            wx.ready(() => {
                wx.chooseWXPay({
                    timestamp: pay_data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    nonceStr: pay_data.nonceStr, // 支付签名随机串，不长于 32 位
                    package: pay_data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                    signType: pay_data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    paySign: pay_data.paySign, // 支付签名
                    success: () => {
                        callback && callback();
                    },
                    fail:()=>{
                        Dialog({ message: '无法拉起微信支付，请检查是否处在微信环境' });
                    }
                });
            });
        })
    },
}