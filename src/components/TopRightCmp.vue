<template>
  <div class="top-right-cmp">
    <div>
      <el-button type="text" size="medium" @click.native="onCatalog(2)">点击查看更多国家信息</el-button>
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <!-- <div class="chart-name">
      设备故障月趋势
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>-->
    <dv-charts :option="option" />
  </div>
</template>

<script>
import Charts from "@jiaminghi/charts";

export default {
  name: "TopRightCmp",
  data() {
    return {
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
      },
      option: {
        legend: {
          data: [
            {
              name: "国内生产总值GDP",
              color: "#00baff"
            },
            {
              name: "人均GDP",
              color: "#ff5ca9"
            }
          ],
          textStyle: {
            fill: "#fff"
          }
        },
        xAxis: {
          data: ["2013", "2014", "2015", "2016", "2017"],
          axisLine: {
            style: {
              stroke: "#999"
            }
          },
          axisLabel: {
            style: {
              fill: "#999"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            name: "国内生产总值GDP",
            data: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              style: {
                stroke: "#999"
              }
            },
            axisLabel: {
              style: {
                fill: "#999"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "国内生产总值GDP",
            type: "bar",
            data: [128.13, 140.04, 127.47, 140.45, 140.64],
            barStyle: {
              fill: "#00baff"
            }
          },
          {
            name: "人均GDP",
            type: "bar",
            data: [777.6, 825.6, 729.7, 780.5, 781.3],
            barStyle: {
              fill: "#ff5ca9"
            }
          }
          // {
          //   name: "监控系统",
          //   data: [2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5],
          //   type: "line",
          //   lineStyle: {
          //     stroke: "#ff5ca9"
          //   },
          //   linePoint: {
          //     radius: 4,
          //     style: {
          //       fill: "#ff5ca9",
          //       stroke: "transparent"
          //     }
          //   }
          // },
          // {
          //   name: "通信系统",
          //   data: [1.3, 2.3, 5.3, 5.3, 6.3, 5.3, 1.3],
          //   type: "line",
          //   smooth: true,
          //   lineArea: {
          //     show: true,
          //     gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"]
          //   },
          //   lineStyle: {
          //     lineDash: [5, 5]
          //   },
          //   linePoint: {
          //     radius: 4,
          //     style: {
          //       fill: "#00db95"
          //     }
          //   }
          // },
          // {
          //   data: [0.2, 1.2, 4.2, 4.2, 5.2, 4.2, 0.2],
          //   type: "line",
          //   name: "供配电系统",
          //   lineArea: {
          //     show: true,
          //     gradient: ["rgba(245, 217, 79, 0.8)", "rgba(245, 217, 79, 0.2)"]
          //   },
          //   lineStyle: {
          //     stroke: "#f5d94e"
          //   },
          //   linePoint: {
          //     radius: 4,
          //     style: {
          //       fill: "#f5d94e",
          //       stroke: "transparent"
          //     }
          //   }
          // }
        ]
      },
      choice: 0,
      time: 0
    };
  },
  methods: {
    onCatalog(index) {
      const catalogs = [
        "policy",
        "infrastructure",
        "communication",
        "education"
      ];
      this.$router.push({ name: catalogs[index] });
    },
    createChart() {
      this.choice = this.choice % 3;
      switch (this.choice) {
        case 0:
          this.option = {
            title:{
              text:'马里13-17年国内生产总值和人均GDP',
              style:{
                fill:'#999'
              }
            },
            legend: {
              data: [
                {
                  name: "国内生产总值GDP",
                  color: "#00baff"
                },
                {
                  name: "人均GDP",
                  color: "#ff5ca9"
                }
              ],
              textStyle: {
                fill: "#fff"
              }
            },
            xAxis: {
              data: ["2013", "2014", "2015", "2016", "2017"],
              axisLine: {
                style: {
                  stroke: "#999"
                }
              },
              axisLabel: {
                style: {
                  fill: "#999"
                }
              },
              axisTick: {
                show: false
              }
            },
            yAxis: [
              {
                name: "国内生产总值GDP",
                data: "value",
                splitLine: {
                  show: false
                },
                axisLine: {
                  style: {
                    stroke: "#999"
                  }
                },
                axisLabel: {
                  style: {
                    fill: "#999"
                  }
                },
                axisTick: {
                  show: false
                }
              }
            ],
            series: [
              {
                name: "国内生产总值GDP",
                type: "bar",
                data: [128.13, 140.04, 127.47, 140.45, 140.64],
                barStyle: {
                  fill: "#00baff"
                }
              },
              {
                name: "人均GDP",
                type: "bar",
                data: [777.6, 825.6, 729.7, 780.5, 781.3],
                barStyle: {
                  fill: "#ff5ca9"
                }
              }//马里
              // {
              //   name: "监控系统",
              //   data: [2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5],
              //   type: "line",
              //   lineStyle: {
              //     stroke: "#ff5ca9"
              //   },
              //   linePoint: {
              //     radius: 4,
              //     style: {
              //       fill: "#ff5ca9",
              //       stroke: "transparent"
              //     }
              //   }
              // },
              // {
              //   name: "通信系统",
              //   data: [1.3, 2.3, 5.3, 5.3, 6.3, 5.3, 1.3],
              //   type: "line",
              //   smooth: true,
              //   lineArea: {
              //     show: true,
              //     gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"]
              //   },
              //   lineStyle: {
              //     lineDash: [5, 5]
              //   },
              //   linePoint: {
              //     radius: 4,
              //     style: {
              //       fill: "#00db95"
              //     }
              //   }
              // },
              // {
              //   data: [0.2, 1.2, 4.2, 4.2, 5.2, 4.2, 0.2],
              //   type: "line",
              //   name: "供配电系统",
              //   lineArea: {
              //     show: true,
              //     gradient: ["rgba(245, 217, 79, 0.8)", "rgba(245, 217, 79, 0.2)"]
              //   },
              //   lineStyle: {
              //     stroke: "#f5d94e"
              //   },
              //   linePoint: {
              //     radius: 4,
              //     style: {
              //       fill: "#f5d94e",
              //       stroke: "transparent"
              //     }
              //   }
              // }
            ]
          };
          break;
        case 1:
          this.option = {
            title:{
              text:'利比里亚13-17年国内生产总值和人均GDP',
              style:{
                fill:'#999'
              }
            },
            legend: {
              data: [
                {
                  name: "国内生产总值GDP",
                  color: "#00baff"
                },
                {
                  name: "人均GDP",
                  color: "#ff5ca9"
                }
              ],
              textStyle: {
                fill: "#fff"
              }
            },
            xAxis: {
              data: ["2013", "2014", "2015", "2016", "2017"],
              axisLine: {
                style: {
                  stroke: "#999"
                }
              },
              axisLabel: {
                style: {
                  fill: "#999"
                }
              },
              axisTick: {
                show: false
              }
            },
            yAxis: [
              {
                name: "国内生产总值GDP",
                data: "value",
                splitLine: {
                  show: false
                },
                axisLine: {
                  style: {
                    stroke: "#999"
                  }
                },
                axisLabel: {
                  style: {
                    fill: "#999"
                  }
                },
                axisTick: {
                  show: false
                }
              }
            ],
            series: [
              {
                name: "国内生产总值GDP",
                type: "bar",
                data: [19.63, 20.10, 20.18, 20.08, 21.53],
                barStyle: {
                  fill: "#00baff"
                }
              },
              {
                name: "人均GDP",
                type: "bar",
                data: [459, 469, 460, 458, 467],
                barStyle: {
                  fill: "#ff5ca9"
                }
              }
              // 利比里亚
            ]
          };
          break;
          case 2:
          this.option = {
            title:{
              text:'秘鲁13-17年国内生产总值和人均GDP',
              style:{
                fill:'#999'
              }
            },
            legend: {
              data: [
                {
                  name: "国内生产总值GDP",
                  color: "#00baff"
                },
                {
                  name: "人均GDP",
                  color: "#ff5ca9"
                }
              ],
              textStyle: {
                fill: "#fff"
              }
            },
            xAxis: {
              data: ["2013", "2014", "2015", "2016", "2017"],
              axisLine: {
                style: {
                  stroke: "#999"
                }
              },
              axisLabel: {
                style: {
                  fill: "#999"
                }
              },
              axisTick: {
                show: false
              }
            },
            yAxis: [
              {
                name: "国内生产总值GDP",
                data: "value",
                splitLine: {
                  show: false
                },
                axisLine: {
                  style: {
                    stroke: "#999"
                  }
                },
                axisLabel: {
                  style: {
                    fill: "#999"
                  }
                },
                axisTick: {
                  show: false
                }
              }
            ],
            series: [
              {
                name: "国内生产总值GDP",
                type: "bar",
                data: [2012.18, 2010.81, 1899.27, 1916.40, 2113.89],
                barStyle: {
                  fill: "#00baff"
                }
              },
              {
                name: "人均GDP",
                type: "bar",
                data: [5970, 5950, 6160, 6340, 6270],
                barStyle: {
                  fill: "#ff5ca9"
                }
              }
            ]
          };
          break;
      }
      this.choice++;
      console.log(this.choice);
    }
  },
  mounted: function() {
    if (this.time === 0) {
      this.createChart();
      window.setInterval(() => {
        setTimeout(this.createChart, 0);
      }, 10000);
      this.time++;
    }
  }
};
</script>

<style lang="less">
.top-right-cmp {
  position: relative;
  padding: 0 50px;
  box-sizing: border-box;

  .chart-name {
    position: absolute;
    right: 70px;
    text-align: right;
    font-size: 20px;
    top: 10px;
  }
}
</style>
