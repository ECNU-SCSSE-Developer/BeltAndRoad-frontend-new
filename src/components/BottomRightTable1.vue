<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <img src="../assets/icon1.png" />
        <el-button type="text" size="medium" @click.native="onCatalog(0)">计划规划</el-button>
      </div>
      <!-- <div class="table-name">
        <img src="../assets/icon1.png" />人员贡献排行榜
      </div> -->

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable1',
  methods: {
    onCatalog(index) {
        const catalogs = ['policy', 'infrastructure', 'communication', 'education'];
        this.$router.push({name: catalogs[index]});
      }
  },
  data () {
    return {
      config: {
        data: [
          [ '文旅部公示45个“一带一路”文旅产业国际合作重点项目'],
          [ '河南自贸区郑州片区三年计划发布：申建自由贸易港'],
          [ '宁夏回族自治区《推进“一带一路”和内陆开放型经济试验区建设2019年工作计划》'],
          [ '海南省优化营商环境行动计划(2018—2019年)'],
          [ '北京市推进共建“一带一路”三年行动计划（2018—2020年）'],
          [ '国务院印发《中国(海南)自由贸易试验区总体方案》'],
          [ '《广西参与“一带一路”科技创新行动计划实施方案（2018—2020年）》'],
          [ '《浙江省标准联通共建“一带一路”行动计划（2018-2020年）》'],
          [ '《河南省标准联通参与建设“一带一路”行动计划（2018-2020年）》'],
          [ '陕西省标准联通共建“一带一路” 行动计划（2018-2020年）'],
          ['《北京市关于全面深化改革、扩大对外开放重要举措的行动计划》'],
          ['河北省《关于积极参与“一带一路”建设推进国际产能合作的实施方案》']
        ],
        index: true,
        columnWidth: [30, 155],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  }
}
</script>

<style lang="less">
.bottom-right-table-1 {
  width: calc(~"25% + 10px");
  height: 100%;
  margin: 0 -5px;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .table-name {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
