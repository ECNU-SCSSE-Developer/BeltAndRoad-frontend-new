<template>
  <div id="wordcloud" style="width:100%; height:655px;"></div>
</template>

<script>
import { readlink } from "fs";
var echarts = require("echarts");
require("echarts-wordcloud");

export default {
  mounted() {
    this.getEchartsData1();
  },
  data() {
    return {
      image:
        "data:image/png;base64,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",
      maskImage1: new Image()
    };
  },
  methods: {
    getEchartsData1() {
      const myChart = this.$echarts.init(document.getElementById("wordcloud"));

      this.maskImage1.src = this.image;
      const option = {
        tooltip: {
          position: "top",
          show: true,
          formatter: function(params, ticket, callback) {
            switch (params.data.name) {
              case "国际陆海贸易新通道":
                return "国际陆海贸易新通道原名中新互联互通南向通道，是在“一带一路”框架<br/>下，以广西、云南、贵州、四川、重庆、甘肃、青海、新疆、陕西等中国<br/>西部相关省区市为关键节点，利用铁路、海运、公路等运输方式，向南通<br/>达新加坡等东盟主要国家，并进而辐射澳新、中东及欧洲等区域，向东连<br/>接东北亚、北美等区域，向北与重庆、兰州、新疆等地的中欧班列连接，<br/>是西部地区实现与东盟及其他国家区域联动和国际合作、有机衔接“一带<br/>一路”的复合型对外开放通道。";
              case "冰上丝绸之路":
                return "冰上丝绸之路是指穿越北极圈，连接北美、东亚和西欧三大经济中心的海运航道。";
              case "蓝色经济通道":
                return "以中国沿海经济带为支撑，连接中国－中南半岛经济走廊，经南海向西进<br/>入印度洋，衔接中巴、孟中印缅经济走廊，共同建设中国－印度洋－非洲<br/>－地中海蓝色经济通道；经南海向南进入太平洋，共建中国－大洋洲－南<br/>太平洋蓝色经济通道；积极推动共建经北冰洋连接欧洲的蓝色经济通道。";
              case "中阿合作论坛":
                return "中国国家主席胡锦涛访问了设在埃及开罗的阿拉伯国家联盟（下称“阿盟”<br/>）总部，会见了阿盟秘书长阿姆鲁·马哈茂德·穆萨（Amr Mahmoud Mous<br/>sa）和22个阿盟成员国代表。会见结束后，李肇星外长与穆萨秘书长共同<br/>宣布成立“中国—阿拉伯国家合作论坛”，并发表了《关于成立“中国—阿拉伯<br/>国家合作论坛”的公报》。";
              case "中欧班列":
                return "中欧班列（英文名称CHINA RAILWAY Express，缩写CR Express）是由<br/>中国铁路总公司组织，按照固定车次、线路、班期和全程运行时刻开行，<br/>运行于中国与欧洲以及“一带一路”沿线国家间的集装箱等铁路国际联运列<br/>车，是深化我国与沿线国家经贸合作的重要载体和推进“一带一路”建设的重<br/>要抓手。";
              case "六大经济走廊":
                return "“六廊六路多国多港”是共建“一带一路”的主体框架，为各国参与 “一带一<br/>路”合作提供了清晰的导向。";
              case "自贸区":
                return "一种是广义的自贸区（FREE TRADE AREA），指两个或两个以上国家或地<br/>区通过签署自贸协定，在WTO最惠国待遇基础上，相互进一步开放市场，<br/>分阶段取消绝大部分货物的关税和非关税壁垒，改善服务业市场准入条件<br/>，实现贸易和投资的自由化，从而形成促进商品、服务和资本、技术、人员<br/>等生产要素自由流动的“大区”。中国近年来积极推动建立的东盟、中日<br/>韩自贸区，即是广义自贸区。另一种是狭义的自贸区（FREE TRA<br/>DE ZONE），“指一国的部分领土，在这部分领土内运入的任何货<br/>物就进口关税及其他各税而言，被认为在关境以外，并免于实施惯常的海<br/>关监管制度。”这是国际上对“自由贸易区”最权威的定义，来自197<br/>3年的《京都公约》(全称《关于简化和协调海关业务制度的国际公约》<br/>)：“自由区”一词，也是第一个正式涉及自由贸易区的国际规范。“自<br/>由区”目前是国际通用提法，其核心是强调“境内关外”的自由贸易，直<br/>至今天国际上关于自由贸易区的种种理解和称谓，都是指符合该公约界定<br/>的经济区。上海自贸区属狭义自由贸易园区。";
              case "丝路精神":
                return "丝路精神即丝绸之路精神的简称。丝绸之路不仅是商业通道，更重要的是<br/>丝绸之路体现的“丝路精神”。丝绸之路作为人文社会的交往平台，多民族<br/>、多种族、多宗教、多文化在此交汇融合，在长期交往过程中各个国家之<br/>间形成了“团结互信、平等互利、包容互鉴、合作共赢，不同种族、不同信<br/>仰、不同文化背景的国家可以共享和平，共同发展”的丝路精神。";
              case "区域经济合作":
                return "区域性经济合作是指某一个区域内两个或两个以上的国家，为了维护共同<br/>的经济和政治利益，实现专业化分工和进行产品交换而采取共同的经济政<br/>策，实行某种形式的经济联合或组成区域性经济团体。";
              case "命运共同体":
                return "这个世界，各国相互联系、相互依存的程度空前加深，人类生活在同一个<br/>地球村里，生活在历史和现实交汇的同一个时空里，越来越成为你中有我<br/>、我中有你的命运共同体。";
              case "信息丝绸之路":
                return "信息丝绸之路，指的是开辟以通信和互联网产业为抓手的新型国际贸易之<br/>路。在建设“一带一路”的过程中，沿路各国从信息交流上互联互通，而互<br/>联互通重在网络先行，同时应积极推动媒体共享共赢，在资源互换、人员<br/>交流、业务培训上加强互动，建立起多元、长效的交流合作机制，开拓媒<br/>体间互联互通的合作新局面。";
              case "国际产能合作":
                return "产能合作是指产业和能力的输出，不是简单地把产品卖到国外，而是把产<br/>业整体输出到不同的国家去，帮助这些国家建立更加完整的工业体系、制<br/>造能力。";
              case "上海合作组织":
                return "上海合作组织，简称上合组织（英语：Shanghai Cooperation Organi<br/>zation，简称SCO；俄语：Шанхайская организация сотрудничества<br/>，简称ШОС），是哈萨克斯坦共和国、中华人民共和国、吉尔吉斯共和国<br/>、俄罗斯联邦、塔吉克斯坦共和国、乌兹别克斯坦共和国于2001年6月15日<br/>在中国上海宣布成立的永久性政府间国际组织。上海合作组织是迄今唯<br/>一在中国境内成立、以中国城市命名、总部设在中国境内的区域性<br/>国际组织。";
              case "丝路基金":
                return "丝路基金由外汇储备、中国投资有限责任公司、国家开发银行、中国进出<br/>口银行共同出资，于2014年12月29日在北京注册成立。";
              case "亚投行":
                return "亚投行全称亚洲基础设施投资银行（Asian Infrastructure Investme<br/>nt Bank，AIIB），是政府间性质的亚洲区域多边开发机构，也是全球首<br/>个由中国倡议设立的多边金融机构。亚投行重点支持基础设施建设，成立<br/>宗旨在促进亚洲区域的建设互联互通化和经济一体化的进程，并且加强中国<br/>及其他亚洲国家和地区的合作。2015年12月25日正式成立，总部设在<br/>北京。";
            }
          }
        },
        series: [
          {
            type: "wordCloud",
            shape: "ellipse",
            left: "center",
            top: "center",
            // width: "80%",
            // height: "80%",
            // right: "center",
            // bottom: "center",
            right: null,
            bottom: null,
            sizeRange: [12, 55], //数的大小范围
            maskImage: this.maskImage1,
            rotationRange: [-45, 0, 45, 90], //随机旋转的范围
            // rotationStep: 23.5, //旋转步长

            gridSize: 9, //与词的间距有关
            // drawOutOfBound: false,

            /**Global text style**/
            textStyle: {
              normal: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: function() {
                  //随机生成颜色
                  return (
                    "rgb(" +
                    [
                      Math.round((0.9 + Math.random()) * 100),
                      Math.round(0 * 100),
                      Math.round(0 * 100)
                    ].join(",") +
                    ")"
                  );
                }
              },

              emphasis: {
                shadowBlur: 2,
                shadowColor: "#F9E67C"
              }
            },

            data: [
              {
                name: "国际陆海贸易新通道",
                value: 110
              },
              {
                name: "冰上丝绸之路",
                value: 115
              },
              {
                name: "蓝色经济通道",
                value: 140
              },
              {
                name: "中阿合作论坛",
                value: 200
              },
              {
                name: "中欧班列",
                value: 125
              },
              {
                name: "六大经济走廊",
                value: 300
              },
              {
                name: "上海合作组织",
                value: 100
              },
              {
                name: "丝路精神",
                value: 350
              },
              {
                name: "区域经济合作",
                value: 277
              },
              {
                name: "命运共同体",
                value: 225
              },
              {
                name: "信息丝绸之路",
                value: 165
              },
              {
                name: "国际产能合作",
                value: 99
              },
              {
                name: "自贸区",
                value: 150
              },
              {
                name: "框架思路",
                value: 125
              },
              {
                name: "丝路基金",
                value: 150
              },
              {
                name: "亚投行",
                value: 235
              }
            ]
          }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", function() {
        //自适应
        myChart.resize();
      });
    }
  }
};
</script>
