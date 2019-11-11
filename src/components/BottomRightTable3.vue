<template>
  <div class="bottom-right-table-3">
    <dv-border-box-6>
      <div class="table-name">
        <img src="../assets/icon3.png" />
        <el-button type="text" size="medium" @click.native="onCatalog(0)">政策解读</el-button>
      </div>
      <!-- <div class="table-name">
        <img src="../assets/icon3.png" />常见故障排行
      </div> -->

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable3',
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
          ['发改委有关负责人就《第三方市场合作指南和案例》答记者问'],
          ['《中国（海南）自由贸易试验区总体方案》解读'],
          ['国家发展改革委有关负责人就《企业境外经营合规管理指引》答记者问'],
          ['《进一步推进中国（福建）自由贸易试验区改革创新三十五条措施》解读'],
          ['《中俄在俄罗斯远东地区合作发展规划（2018-2024年）》解读'],
          ['中非合作论坛北京峰会“八大行动”内容解读'],
          ['国家发展改革委有关负责人就2018年版外商投资准入特别管理措施（负面清单）答记者问'],
          ['最高人民法院负责人 就《关于建立“一带一路”国际商事争端解决机制和机构的意见》答记者问'],
          ['中国人民银行有关负责人就外商投资支付机构准入和监管政策有关问题答记者问'],
          ['外交部副部长解读《中国的北极政策》白皮书']
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
.bottom-right-table-3 {
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
