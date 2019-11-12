<template>
  <div class="top-middle-cmp">
    <div>
      <el-button type="text" size="medium" @click.native="onCatalog(2)">点击查看更多国家信息</el-button>
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <!-- <div class="chart-name">
      设备完好率月趋势
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>-->
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: "TopMiddleCmp",
  methods: {
    onCatalog(index) {
      const catalogs = [
        "policy",
        "infrastructure",
        "communication",
        "education"
      ];
      this.$router.push({ name: catalogs[index] });
    }
  },
  data() {
    return {
      option: {
        title: {
          text: "部分国家17年经济增长率一览",
          style: {
            fill: "#fff"
          }
        },
        legend: {
          data: ["经济增长率"],
          textStyle: {
            fill: "#fff"
          }
        },
        xAxis: {
          type: "category",
          data: [
            "贝宁",
            "马里",
            "科摩罗",
            "莱索托",
            "尼日利亚",
            "利比里亚",
            "秘鲁",
            "塞浦路斯",
            "也门",
            "赤道几内亚",
            "牙买加",
            "卢森堡",
            "泰国",
            "意大利",
            "古巴",
            "巴巴多斯",
            "菲律宾",
            "印度尼西亚",
            "文莱",
            "巴林",
            "奥地利",
            "阿联酋",
            "瓦努阿图",
            "汤加",
            "塞内加尔",
            "厄瓜多尔",
            "葡萄牙",
            "斐济",
            "马耳他",
            "多米尼加",
            "智利",
            "萨摩亚",
            "苏里南"
          ],
          boundaryGap: false,
          axisLabel: {
            style: {
              fill: "#fff",
              interval: 0,
              rotate: 45,
              fontSize: 7,
              fontWeight: "normal"
            }
          },
          axisLine: {
            style: {
              stroke: "#fff"
            }
          },
          axisTick: {
            alignWithLabel: true,
            interval: 0
          }
        },
        yAxis: {
          data: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: "#fff"
            }
          },
          axisLabel: {
            style: {
              fill: "#fff"
            },
            formatter({ value }) {
              return value.toFixed(2);
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [
              5.6,
              5.4,
              2.7,
              1.7,
              0.83,
              2.5,
              2.53,
              3.9,
              -13.8,
              -5.3,
              0.5,
              4.0,
              3.9,
              1.5,
              1.6,
              1,
              6.8,
              5.07,
              1.3,
              3.9,
              2.9,
              0.8,
              4.5,
              2.7,
              7.2,
              3.0,
              2.7,
              4.2,
              6.6,
              4.6,
              1.5,
              2.57,
              -1.2
            ],
            type: "bar",
            name: "经济增长率",
            smooth: true,
            barWidth: "60%"
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
.top-middle-cmp {
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
