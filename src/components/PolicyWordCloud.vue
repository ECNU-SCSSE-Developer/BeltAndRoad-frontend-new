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
            sizeRange: [9, 35], //数的大小范围
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
              },
              {
                name: "自由贸易试验区",
                value: 431
              },
              {
                name: "空中丝绸之路",
                value: 212
              },
              {
                name: "中蒙俄经济走廊",
                value: 123
              },
              {
                name: "海上丝绸之路",
                value: 12
              },
              {
                name: "八大行动",
                value: 9
              },
              {
                name: "十三五",
                value: 4
              },
              {
                name: "走出去",
                value: 142
              },
              {
                name: "教育",
                value: 192
              },
              {
                name: "建设",
                value: 14
              },
              {
                name: "廉洁丝绸之路",
                value: 152
              },
              {
                name: "贡献",
                value: 141
              },
              {
                name: "展望",
                value: 147
              },
              {
                name: "准入",
                value: 149
              },
              {
                name: "债券",
                value: 159
              },
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
