<template>
  <div class="bottom-right-table-4">
    <dv-border-box-6>
      <div class="table-name">
        <img src="../assets/icon4.png" />
        <el-button type="text" size="medium" @click.native="onCatalog(0)">丝路百科</el-button>
      </div>
      <!-- <div class="table-name">
        <img src="../assets/icon4.png" />故障位置排行榜
      </div> -->

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable4',
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
          ['国际陆海贸易新通道（New International Land-Sea Trade Corridor）'],
          ['冰上丝绸之路'],
          ['蓝色经济通道'],
          ['中阿合作论坛'],
          ['中欧班列'],
          ['六大经济走廊'],
          ['上海合作组织（Shanghai Cooperation Organization）'],
          ['丝路精神'],
          ['区域经济合作']
        ],
        index: true,
        columnWidth: [30,155],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  }
}
</script>

<style lang="less">
.bottom-right-table-4 {
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
