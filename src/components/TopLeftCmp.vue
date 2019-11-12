<template>
  <div class="top-left-cmp">
    <div class="dc-left">
      <dv-border-box-5>
        <div class="main-value" id="countryNum"><spann>{{this.countries.length}}</spann>个</div>
        <div class="compare-value"><span>境外经贸合作区82家</span></div>
        <!--<div class="compare-value"><span>同比</span>81</div>-->
        <!--<div class="compare-value"><span>环比</span>15</div>-->
      </dv-border-box-5>
      <div class="dc-text">
        距“一带一路”首次提出
        <dv-decoration-3 style="width:200px;height:20px;" />
      </div>
    </div>
    <div class="dc-right">
      <div class="dc-text">
        “一带一路”涉及国家数
        <dv-decoration-3 style="width:200px;height:20px;" />
      </div>
      <dv-border-box-5 :reverse="true">
        <div class="compare-value"><span>2013.09.07</span></div>
        <div class="compare-value"><span>{{this.getToday()}}</span></div>
        <div class="main-value"><span>{{this.getDays()}}</span>天</div>
        <!--<div class="compare-value"><span>同比</span>66</div>-->
        <!--<div class="compare-value"><span>环比</span>9</div>-->
      </dv-border-box-5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopLeftCmp',
  data() {
    return {
      countries:['科摩罗','贝宁','莱索托','所罗门群岛','马里','赤道几内亚','利比里亚','秘鲁','塞浦路斯','牙买加','卢森堡','意大利','古巴','巴巴多斯','瓦努阿图','汤加',
        '厄瓜多尔','葡萄牙','斐济','密克罗尼西亚联邦','马耳他','萨尔瓦多','多米尼加','智利','萨摩亚','苏里南','格林纳达','委内瑞拉','多哥','冈比亚','乌干达','佛得角',
        '布隆迪','坦桑尼亚','津巴布韦','刚果（布）','乍得','尼日利亚','肯尼亚','安哥拉','纳米比亚','加蓬','莫桑比克','赞比亚','加纳','塞舌尔','南苏丹','喀麦隆','塞拉利昂',
        '科特迪瓦','阿尔及利亚','哥斯达黎加','吉布提','毛里塔尼亚','几内亚','索马里','希腊','乌拉圭','纽埃','多米尼克','圭亚那','卢旺达','塞内加尔','突尼斯','利比亚',
        '巴布亚新几内亚','玻利维亚','安提瓜和巴布达','特立尼达和多巴哥','奥地利','马达加斯加','巴拿马','摩洛哥','埃塞俄比亚','苏丹','新西兰','波黑','黑山','土库曼斯坦',
        '立陶宛','拉脱维亚','巴勒斯坦','阿尔巴尼亚','阿富汗','爱沙尼亚','巴基斯坦','斯洛文尼亚','克罗地亚','黎巴嫩','阿曼','巴林','也门','埃及','约旦','叙利亚','印度尼西亚',
        '菲律宾','缅甸','文莱','东帝汶','不丹','阿联酋','泰国','越南','新加坡','以色列','阿塞拜疆','亚美尼亚','捷克','孟加拉国','白俄罗斯','柬埔寨','格鲁吉亚','匈牙利','伊拉克',
        '伊朗','吉尔吉斯斯坦','老挝','哈萨克斯坦','卡塔尔','科威特','摩尔多瓦','马尔代夫','马来西亚','北马其顿','蒙古国','尼泊尔','波兰','保加利亚','罗马尼亚','塞尔维亚',
        '沙特阿拉伯','斯洛伐克','塔吉克斯坦','俄罗斯','南非','斯里兰卡','韩国','土耳其','乌克兰','库克群岛','乌兹别克斯坦']
      
    }
  },
  methods: {
    getToday: function() {
      var today = new Date()
      var year = today.getFullYear()
      var month = today.getMonth()+1
      var day = today.getDate()
      today = year + "." + month + "." + day
      return today
    },
    getDays: function(){
      var days = parseInt(new Date().getTime()/1000)-new Date('2013-9-7 00:00:00').getTime()/1000
      return (parseInt(days/60/60/24))
    }
  }
}
</script>

<style lang="less">
.top-left-cmp {
  display: flex;

  .dc-left, .dc-right {
    width: 50%;
  }

  .dv-border-box-5 {
    height: 60%;
  }

  .dc-text {
    display: flex;
    flex-direction: column;
    height: 40%;
    font-size: 20px;
    padding: 20px;
    box-sizing: border-box;
  }

  .dc-left .dc-text {
    align-items: flex-end;
    justify-content: center;
  }

  .dc-right .dc-text {
    justify-content: flex-start;
    padding-top: 20px;
  }

  .dc-left .dv-border-box-5 {
    padding: 30px;
    box-sizing: border-box;
  }

  .dc-right .dv-border-box-5 {
    padding: 40px;
    padding-left: 75px;
    box-sizing: border-box;
  }

  .main-value {
    font-weight: bold;
    font-size: 22px;

    span {
      font-size: 53px;
      color: #00c0ff;
      margin-right: 0px;
    }

    spann {
      font-size: 53px;
      color: #00c0ff;
      margin-left: 30px;
    }
  }

  .compare-value {
    height: 25px;
    line-height: 35px;
    font-size: 18px;

    span {
      margin-right: 3px;
      margin-left: 15px;
      text-align: center;
      color: #00c0ff;
    }
  }
}
</style>
