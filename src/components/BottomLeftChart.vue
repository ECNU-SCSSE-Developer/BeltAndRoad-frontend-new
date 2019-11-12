<template>
<div class="bottom-left-chart-1">
    <div class="header-name">
      <el-button type="text" size="medium" @click.native="onCatalog(1)">机电设备完好率</el-button>
    </div>
    <!-- <div class="header-name">机电设备完好率</div> -->
    <div class="img-infras">
        <img :src="imgUrl" height="290px" width="96%" />
    </div>    
    <div class="details-value"><span>99.01</span>%</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: 'BottomLeftChart',
  methods: {
    onCatalog(index) {
        const catalogs = ['policy', 'infrastructure', 'communication', 'education'];
        this.$router.push({name: catalogs[index]});
      }
  },
  data () {
    return {
      imgUrl: require("../assets/infrastru.png")
    }
  }
}
</script>

<style lang="less">
.bottom-left-chart-1 {
  .header-name {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }

  .img-infras {
      text-align: center
  }

  .details-value {
    height: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;

    span {
      color: #00c0ff;
      font-size: 45px;
    }
  }

  .dv-charts-container {
    height: calc(~"100% - 190px");
  }
}
</style>
