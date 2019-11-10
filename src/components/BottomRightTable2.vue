<template>
  <div class="bottom-right-table-2">
    <dv-border-box-6>
      <div class="table-name">
        <img src="../assets/icon2.png" />
        <el-button type="text" size="medium" @click.native="onCatalog(0)">图解政策</el-button>
      </div>
      <!-- <div class="table-name">
        <img src="../assets/icon2.png" />故障设备排行榜
      </div> -->

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable2',
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
          ['一图读懂“中央支持深圳建设中国特色社会主义先行示范区”'],
          ['一图读懂2019“一带一路”建设成果报告'],
          ['图解：市场准入负面清单制度有些啥'],
          ['广西参与“一带一路”科技创新行动计划实施方案解读'],
          ['《关于加强和规范“一带一路”对外交流平台审核工作的通知》要点解读'],
          ['气象“一带一路”发展规划出台 2025年将建成重点区域观测站网'],
          ['国务院调整自贸区部分规定 银行、轨道交通等行业放宽准入'],
          ['图解：“外商投资服务指南”全汇总'],
          ['图解：《关于进一步引导和规范境外投资方向的指导意见》'],
          ['营造更高水平对外开放环境 22条国务院政策干货看过来']
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
.bottom-right-table-2 {
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
