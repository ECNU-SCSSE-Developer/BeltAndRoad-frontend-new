<template>
  <div class="class">
    <div class="main">
      <div class="top" style="position: relative;">
        <div style="position: absolute; margin-top:2.5%; width:100%;">
          <img src="@/assets/policy_brush.png" />
        </div>
        <img src="@/assets/policy_bg2.jpg" />
      </div>
      <div>
        <el-tabs
          tab-position="left"
          style="height: 630px;   background-color: white;"
          v-model="activeName"
        >
          <el-tab-pane label="国家列表" name="first">
            <el-input
              v-model="search"
              size="mini"
              style="width : 120px; float:right"
              placeholder="输入关键字搜索"
            />
            <el-table
              :show-header="false"
              :data=date
              style="width: 100%;"
              @row-click="handleClick"
            >
              <el-table-column prop="title" style="width: 100%; " align="center"></el-table-column>
            </el-table>
            <el-pagination align="center" style="margin:10px" layout="prev, pager, next" :total="122"  @current-change="handleSizeChange"></el-pagination>
          </el-tab-pane>
          <el-tab-pane label="国家概况" name="second">
            <div class="title">{{currentCountryData.title}}</div>
            <hr />
            <p style="text-indent:32px;line-height:40px">{{currentCountryData.paragraph}}</p>
            <el-button type="text" style="float:right" @click="toShow">
              国家数据展示
              <i class="el-icon-right"></i>
            </el-button>
          </el-tab-pane>
          <el-tab-pane label="数据展示" name="third">
            <div>
              <el-select v-model="choice" placeholder="请选择" @change="onChange">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select v-model="country" placeholder="请选择" @change="changeCountry">
                <el-option
                  v-for="(item, index) in tableData"
                  :key="item.title"
                  :label="item.title"
                  :value="index"
                ></el-option>
              </el-select>
            </div>
            <div id="echartContainer"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      
      search: "",
      activeName: "first",
      country: 0,
      options: [
        {
          value: 0,
          label: "经济增长率"
        },
        {
          value: 1,
          label: "GDP构成"
        },
        {
          value: 2,
          label: "财政收入"
        },
        {
          value: 3,
          label: "公共债务"
        },
        {
          value: 4,
          label: "土地及房屋价格"
        }
      ],
      start: 0,
      end: 10,
      chart: null,
      choice: 0,
      tag: [
        ["2013", "2014", "2015", "2016", "2017"],
        [],
        ["2013", "2014", "2015", "2016", "2017"],
        ["2012", "2013", "2014", "2015"]
      ],

      tableData: [
        {
          title: "马里",
          paragraph:
            "在你准备赴马里共和国（The Republic of Mali，以下简称“马里”）投资合作之前，你是否对马里的投资合作环境有足够的了解？那里的政治、经济和社会文化环境如何？有哪些行业适合开展投资合作？在马里进行投资合作的商务成本是否具有竞争力？应该怎样办理相关审核手续？当地规范外国投资合作的法律法规有哪些？在马里开展投资合作应特别注意哪些问题？一旦遇到困难该怎么办？如何与当地政府、议会、工会、居民、媒体以及执法部门打交道？《对外投资合作国别（地区）指南》系列丛书之《马里》将会给你提供基本的信息，成为你了解马里的向导。",
          data: [
            [
              [128.13, 140.04, 127.47, 140.45, 140.64],
              [777.6, 825.6, 729.7, 780.5, 781.3],
              [2.3, 7, 6, 5.3, 5.4] ///"国内生产总值GDP(美元)", "人均GDP(美元)", "经济增长率"///
            ],
            [
              { value: 38.3, name: "农业" },
              { value: 16.6, name: "工业" },
              { value: 63.7, name: "服务业" }
            ],
            [
              [11372, 12151, 14811, 1562.4, 18170],
              [12924, 14199, 16223, 1910.6, 20839],
              [3412, 3623, 3488, 524.3, 5431] //"收入(亿非洲法郎)", "支出(亿非洲法郎)", "赤字(亿非洲法郎)"
            ],
            [
              [20.5, 22.03, 22.63, 26.68],
              [2.9, 3.8, 6.79, 9.47],
              [29.5, 31.4, 27.6, 36.3]
            ]
          ]
        },
        { title: "尼日利亚", paragraph: "", data: [] },
        { title: "利比里亚", paragraph: "", data: [] },
        { title: "秘鲁", paragraph: "", data: [] },
        { title: "贝宁", paragraph: "", data: [] },
        { title: "科摩罗", paragraph: "", data: [] },
        { title: "莱索托", paragraph: "", data: [] },
        { title: "塞浦路斯", paragraph: "", data: [] },
        { title: "赤道几内亚", paragraph: "", data: [] },
        { title: "也门", paragraph: "", data: [] },
        { title: "牙买加", paragraph: "", data: [] },
        { title: "卢森堡", paragraph: "", data: [] },
        { title: "泰国", paragraph: "", data: [] },
        { title: "意大利", paragraph: "", data: [] },
        { title: "古巴", paragraph: "", data: [] },
        { title: "巴巴多斯", paragraph: "", data: [] },
        { title: "菲律宾", paragraph: "", data: [] },
        { title: "印度尼西亚", paragraph: "", data: [] },
        { title: "文莱", paragraph: "", data: [] },
        { title: "巴林", paragraph: "", data: [] },
        { title: "奥地利", paragraph: "", data: [] },
        { title: "阿联酋", paragraph: "", data: [] },
        { title: "瓦努阿图", paragraph: "", data: [] },
        { title: "汤加", paragraph: "", data: [] },
        { title: "塞内加尔", paragraph: "", data: [] },
        { title: "厄瓜多尔", paragraph: "", data: [] },
        { title: "葡萄牙", paragraph: "", data: [] },
        { title: "斐济", paragraph: "", data: [] },
        { title: "马耳他", paragraph: "", data: [] },
        { title: "多米尼亚", paragraph: "", data: [] },
        { title: "智利", paragraph: "", data: [] },
        { title: "萨摩亚", paragraph: "", data: [] },
        { title: "苏里南", paragraph: "", data: [] },
        { title: "格林纳达", paragraph: "", data: [] },
        { title: "乍得", paragraph: "", data: [] },
        { title: "乌干达", paragraph: "", data: [] },

        { title: "坦桑尼亚", paragraph: "", data: [] },
        { title: "纳米比亚", paragraph: "", data: [] },
        { title: "肯尼亚", paragraph: "", data: [] },
        { title: "津巴布韦", paragraph: "", data: [] },
        { title: "刚果布", paragraph: "", data: [] },
        { title: "佛得角", paragraph: "", data: [] },
        { title: "多哥", paragraph: "", data: [] },
        { title: "布隆迪", paragraph: "", data: [] },
        { title: "安哥拉", paragraph: "", data: [] },
        { title: "埃塞俄比亚", paragraph: "", data: [] },
        { title: "莫桑比克", paragraph: "", data: [] },
        { title: "加蓬", paragraph: "", data: [] },
        { title: "赞比亚", paragraph: "", data: [] },
        { title: "塞舌尔", paragraph: "", data: [] },
        { title: "南苏丹", paragraph: "", data: [] },
        { title: "阿尔及利亚", paragraph: "", data: [] },
        { title: "委内瑞拉", paragraph: "", data: [] },
        { title: "哥斯达黎加", paragraph: "", data: [] },
        { title: "吉布提", paragraph: "", data: [] },
        { title: "毛里塔尼亚", paragraph: "", data: [] },
        { title: "几内亚", paragraph: "", data: [] },
        { title: "希腊", paragraph: "", data: [] },
        { title: "乌拉圭", paragraph: "", data: [] },
        { title: "多米尼克", paragraph: "", data: [] },
        { title: "圭亚那", paragraph: "", data: [] },
        { title: "卢旺达", paragraph: "", data: [] },
        { title: "利比亚", paragraph: "", data: [] },
        { title: "突尼斯", paragraph: "", data: [] },
        { title: "巴布亚新几内亚", paragraph: "", data: [] },
        { title: "玻利维亚", paragraph: "", data: [] },
        { title: "安提瓜和巴布达", paragraph: "", data: [] },
        { title: "特立尼达和多巴哥", paragraph: "", data: [] },
        { title: "苏丹", paragraph: "", data: [] },
        { title: "马达加斯加", paragraph: "", data: [] },
        { title: "摩洛哥", paragraph: "", data: [] },
        { title: "阿曼", paragraph: "", data: [] },
        { title: "黎巴嫩", paragraph: "", data: [] },
        { title: "越南", paragraph: "", data: [] },
        { title: "拉脱维亚", paragraph: "", data: [] },
        { title: "斯洛文尼亚", paragraph: "", data: [] },
        { title: "立陶宛", paragraph: "", data: [] },
        { title: "爱沙尼亚", paragraph: "", data: [] },
        { title: "阿尔巴尼亚", paragraph: "", data: [] },
        { title: "巴基斯坦", paragraph: "", data: [] },
        { title: "波黑", paragraph: "", data: [] },
        { title: "东帝汶", paragraph: "", data: [] },
        { title: "卡塔尔", paragraph: "", data: [] },
        { title: "克罗地亚", paragraph: "", data: [] },
        { title: "缅甸", paragraph: "", data: [] },
        { title: "新加坡", paragraph: "", data: [] },
        { title: "新西兰", paragraph: "", data: [] },
        { title: "塞尔维亚", paragraph: "", data: [] },
        { title: "波兰", paragraph: "", data: [] },
        { title: "伊拉克", paragraph: "", data: [] },
        { title: "保加利亚", paragraph: "", data: [] },
        { title: "阿塞拜疆", paragraph: "", data: [] },
        { title: "罗马尼亚", paragraph: "", data: [] },
        { title: "伊朗", paragraph: "", data: [] },
        { title: "亚美尼亚", paragraph: "", data: [] },
        { title: "匈牙利", paragraph: "", data: [] },
        { title: "乌兹别克斯坦", paragraph: "", data: [] },
        { title: "乌克兰", paragraph: "", data: [] },
        { title: "土耳其", paragraph: "", data: [] },
        { title: "塔吉克斯坦", paragraph: "", data: [] },
        { title: "斯洛伐克", paragraph: "", data: [] },
        { title: "斯里兰卡", paragraph: "", data: [] },
        { title: "沙特阿拉伯", paragraph: "", data: [] },
        { title: "尼泊尔", paragraph: "", data: [] },
        { title: "南非", paragraph: "", data: [] },
        { title: "摩尔多瓦", paragraph: "", data: [] },
        { title: "孟加拉", paragraph: "", data: [] },
        { title: "蒙古", paragraph: "", data: [] },
        { title: "马其顿", paragraph: "", data: [] },
        { title: "马来西亚", paragraph: "", data: [] },
        { title: "老挝", paragraph: "", data: [] },
        { title: "科威特", paragraph: "", data: [] },
        { title: "捷克", paragraph: "", data: [] },
        { title: "柬埔寨", paragraph: "", data: [] },
        { title: "吉尔吉斯斯坦", paragraph: "", data: [] },
        { title: "韩国", paragraph: "", data: [] },
        { title: "哈萨克斯坦", paragraph: "", data: [] },
        { title: "格鲁吉亚", paragraph: "", data: [] },
        { title: "俄罗斯", paragraph: "", data: [] },
        { title: "白俄罗斯", paragraph: "", data: [] },
        { title: "埃及", paragraph: "", data: [] },
        { title: "阿富汗", paragraph: "", data: [] }
      ],
      currentCountryData: {
        title: "马里",
        paragraph:
          "在你准备赴马里共和国（The Republic of Mali，以下简称“马里”）投资合作之前，你是否对马里的投资合作环境有足够的了解？那里的政治、经济和社会文化环境如何？有哪些行业适合开展投资合作？在马里进行投资合作的商务成本是否具有竞争力？应该怎样办理相关审核手续？当地规范外国投资合作的法律法规有哪些？在马里开展投资合作应特别注意哪些问题？一旦遇到困难该怎么办？如何与当地政府、议会、工会、居民、媒体以及执法部门打交道？《对外投资合作国别（地区）指南》系列丛书之《马里》将会给你提供基本的信息，成为你了解马里的向导。",
        data: [
          [
            [128.13, 140.04, 127.47, 140.45, 140.64],
            [777.6, 825.6, 729.7, 780.5, 781.3],
            [2.3, 7, 6, 5.3, 5.4] ///"国内生产总值GDP(美元)", "人均GDP(美元)", "经济增长率"///
          ],
          [
            { value: 38.3, name: "农业" },
            { value: 16.6, name: "工业" },
            { value: 63.7, name: "服务业" }
          ],
          [
            [11372, 12151, 14811, 1562.4, 18170],
            [12924, 14199, 16223, 1910.6, 20839],
            [3412, 3623, 3488, 524.3, 5431] //"收入(亿非洲法郎)", "支出(亿非洲法郎)", "赤字(亿非洲法郎)"
          ],
          [
            [20.5, 22.03, 22.63, 26.68],
            [2.9, 3.8, 6.79, 9.47],
            [29.5, 31.4, 27.6, 36.3]
          ]
        ]
      }
    };
  },

  methods: {
    handleClick(row) {
      this.country = row.title;
      this.currentCountryData = this.tableData.filter(data => {
        return data.title.includes(this.country);
      })[0];
      this.activeName = "second";
    },
    handleSizeChange(val){
      this.start = 10*val-10;
      this.end = 10*val > 122?122:10*val;
      this.$forceUpdate();
    },
    toShow() {
      this.activeName = "third";
      this.createChart();
    },
    onChange() {
      this.$forceUpdate();
      this.createChart();
    },
    createChart() {
      switch (this.choice) {
        case 0:
          this.chart.clear();
          this.chart.setOption({
            color: ["#5793f3", "#d14a61", "#675bba"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross"
              }
            },
            legend: {
              data: ["国内生产总值GDP", "人均GDP", "经济增长率"]
            },
            grid: {
              right: 160
            },
            xAxis: {
              data: this.tag[this.choice]
            },
            yAxis: [
              {
                type: "value",
                name: "国内生产总值GDP",
                position: "right",
                splitLine: {
                  show: false
                },
                min:
                  parseInt(
                    Math.min.apply(
                      null,
                      this.currentCountryData.data[this.choice][0]
                    )
                  ) - 1,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][0]
                    )
                  ) + 1,
                axisLine: {
                  lineStyle: {
                    color: "#5793f3"
                  }
                },
                axisLabel: {
                  formatter: "{value} 美元"
                }
              },
              {
                type: "value",
                name: "人均GDP",
                position: "right",
                offset: 80,
                splitLine: {
                  show: false
                },
                min:
                  parseInt(
                    Math.min.apply(
                      null,
                      this.currentCountryData.data[this.choice][1]
                    )
                  ) - 1,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][1]
                    )
                  ) + 1,
                axisLine: {
                  lineStyle: {
                    color: "#d14a61"
                  }
                },
                axisLabel: {
                  formatter: "{value} 美元"
                }
              },
              {
                type: "value",
                name: "经济增长率",
                position: "left",
                splitLine: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: "#675bba"
                  }
                },
                min:
                  parseInt(
                    Math.min.apply(
                      null,
                      this.currentCountryData.data[this.choice][2]
                    )
                  ) - 1,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][2]
                    )
                  ) + 1,
                axisLabel: {
                  formatter: "{value} %"
                }
              }
            ],
            series: [
              {
                name: "国内生产总值GDP",
                type: "bar",
                data: this.currentCountryData.data[this.choice][0]
              },
              {
                name: "人均GDP",
                type: "bar",
                yAxisIndex: 1,
                data: this.currentCountryData.data[this.choice][1]
              },
              {
                name: "经济增长率",
                type: "line",
                yAxisIndex: 2,
                data: this.currentCountryData.data[this.choice][2]
              }
            ]
          });
          break;
        case 2:
          this.chart.clear();
          this.chart.setOption({
            color: ["#5793f3", "#d14a61", "#675bba"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross"
              }
            },
            legend: {
              data: ["收入(亿非洲法郎)", "支出(亿非洲法郎)", "赤字(亿非洲法郎)"]
            },
            grid: {
              right: 160
            },
            xAxis: {
              data: this.tag[this.choice]
            },
            yAxis: [
              {
                type: "value",
                name: "收入",
                position: "right",
                splitLine: {
                  show: false
                },
                min:
                  parseInt(
                    Math.min.apply(
                      null,
                      this.currentCountryData.data[this.choice][0]
                    )
                  ) - 1000,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][0]
                    )
                  ) + 1000,
                axisLine: {
                  lineStyle: {
                    color: "#5793f3"
                  }
                },
                axisLabel: {
                  formatter: "{value} "
                }
              },
              {
                type: "value",
                name: "支出",
                position: "right",
                offset: 80,
                splitLine: {
                  show: false
                },
                min:
                  parseInt(
                    Math.min.apply(
                      null,
                      this.currentCountryData.data[this.choice][1]
                    )
                  ) - 1000,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][1]
                    )
                  ) + 1000,
                axisLine: {
                  lineStyle: {
                    color: "#d14a61"
                  }
                },
                axisLabel: {
                  formatter: "{value} "
                }
              },
              {
                type: "value",
                name: "赤字",
                position: "left",
                splitLine: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: "#675bba"
                  }
                },
                min: 0,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][2]
                    )
                  ) + 1000,
                axisLabel: {
                  formatter: "{value} "
                }
              }
            ],
            series: [
              {
                name: "收入",
                type: "bar",
                data: this.currentCountryData.data[this.choice][0]
              },
              {
                name: "支出",
                type: "bar",
                yAxisIndex: 1,
                data: this.currentCountryData.data[this.choice][1]
              },
              {
                name: "赤字",
                type: "bar",
                yAxisIndex: 2,
                data: this.currentCountryData.data[this.choice][2]
              }
            ]
          });
          break;
        case 3:
          this.chart.clear();
          this.chart.setOption({
            color: ["#5793f3", "#d14a61", "#675bba"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross"
              }
            },
            legend: {
              data: ["外债(亿欧元)", "内债(亿欧元)", "占GDP比重"]
            },
            grid: {
              right: 160
            },
            xAxis: {
              data: this.tag[this.choice]
            },
            yAxis: [
              {
                type: "value",
                name: "外债(亿欧元)",
                position: "right",
                splitLine: {
                  show: false
                },
                min:
                  parseInt(
                    Math.min.apply(
                      null,
                      this.currentCountryData.data[this.choice][0]
                    )
                  ) - 1,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][0]
                    )
                  ) + 1,
                axisLine: {
                  lineStyle: {
                    color: "#5793f3"
                  }
                },
                axisLabel: {
                  formatter: "{value} "
                }
              },
              {
                type: "value",
                name: "内债(亿欧元)",
                position: "right",
                offset: 80,
                splitLine: {
                  show: false
                },
                min:
                  parseInt(
                    Math.min.apply(
                      null,
                      this.currentCountryData.data[this.choice][1]
                    )
                  ) - 1,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][1]
                    )
                  ) + 1,
                axisLine: {
                  lineStyle: {
                    color: "#d14a61"
                  }
                },
                axisLabel: {
                  formatter: "{value} "
                }
              },
              {
                type: "value",
                name: "占GDP比重",
                position: "left",
                splitLine: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: "#675bba"
                  }
                },
                min:
                  parseInt(
                    Math.min.apply(
                      null,
                      this.currentCountryData.data[this.choice][2]
                    )
                  ) - 1,
                max:
                  Math.ceil(
                    Math.max.apply(
                      null,
                      this.currentCountryData.data[this.choice][2]
                    )
                  ) + 1,
                axisLabel: {
                  formatter: "{value} %"
                }
              }
            ],
            series: [
              {
                name: "外债(亿欧元)",
                type: "bar",
                data: this.currentCountryData.data[this.choice][0]
              },
              {
                name: "内债(亿欧元)",
                type: "bar",
                yAxisIndex: 1,
                data: this.currentCountryData.data[this.choice][1]
              },
              {
                name: "占GDP比重",
                type: "line",
                yAxisIndex: 2,
                data: this.currentCountryData.data[this.choice][2]
              }
            ]
          });
          break;
        case 1:
          this.chart.clear();
          this.chart.setOption({
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b}:{c} %"
            },
            legend: {
              data: ["农业", "工业", "服务业"]
            },
            series: [
              {
                name: "占比",
                type: "pie",
                radius: "55%",
                center: ["50%", "50%"],
                data: this.currentCountryData.data[this.choice],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          });
          break;
      }
    },
    changeCountry() {
      this.currentCountryData = this.tableData[this.country];
    }
  },
  mounted() {
    var ch = document.getElementById("echartContainer");
    // ch.style.width =
    //   (window.innerWidth * 0.8 - 111 > 800 - 111
    //     ? window.innerWidth * 0.8 - 111
    //     : 800 - 111) + "px";
    // ch.style.height =
    //   (ch.style.width > window.innerHeight
    //     ? window.innerHeight
    //     : ch.style.width) + "px";
    var myChart = echarts.init(document.getElementById("echartContainer"));
    this.chart = myChart;
    this.createChart();
    // window.addEventListener("resize", function() {
    //   let ch = document.getElementById("echartContainer");
    //   ch.style.width =
    //     (window.innerWidth * 0.8 - 111 > 800 - 111
    //       ? window.innerWidth * 0.8 - 111
    //       : 800 - 111) + "px";
    //   ch.style.height =
    //     (ch.style.width > window.innerHeight
    //       ? window.innerHeight
    //       : ch.style.width) + "px";
    //   myChart.resize();
    // });
  },
  computed:{
    date: function()
    {
      return this.tableData.filter(data => !this.search || data.title.includes(this.search)).slice(this.start,this.end)
    },
  }
};
</script>

<style lang="less" scoped>
.class {
  background-image: url(../assets/70周年6.jpg);
  width: 100%;
  height: 1100px;
  z-index: -10;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-backround-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.main {
  width: 1000px;
  height: 630px;
  padding-top: 4%;
  margin: 0px auto;
}
.title {
  font-family: "Helvetica";
  text-align: center;
  letter-spacing: 10px;
  margin: 30px 0px;
  color: #333;
  font-size: 40px;
}
.el-tabs--left .el-tabs__header.is-left {
  float: left;
  margin-bottom: 0;
  margin-right: 0;
}
#echartContainer {
  height: 500px;
  width: 800px;
}
.top img {
  height: 360px;
  width: 1000px;
  border-radius: 10px 10px 5px 5px;
}

/deep/.el-tabs__item {
  color: rgb(177, 0, 0);
  font-size: 16px;
  font-weight: bold;
  font-family: "微软雅黑";
  margin-top: 1%;
}
/deep/.el-tabs__item.is-active {
  color: #fff;
  background-color: rgb(177, 0, 0);
}
</style>
