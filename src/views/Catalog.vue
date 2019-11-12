<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <!-- <div class="mh-left">技术支持:<a href="https://github.com/jiaming743/DataV">https://github.com/jiaming743/DataV</a></div> -->
        <div class="mh-left"></div>
        <div class="mh-middle">“一带一路”可视化平台</div>
        <div class="mh-right">
          <!-- <dv-border-box-2
            style="width: 120px; height: 50px; line-height: 50px; text-align:center;margin-left:200px;"
          >
            设备档案馆
          </dv-border-box-2> -->
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <div class="mc-top">
          <Top-Left-Cmp />
          <Top-Middle-Cmp />
          <Top-right-Cmp />
        </div>
        <div class="mc-bottom">
          <dv-border-box-6 class="bottom-left-container">
            <Bottom-Left-Chart />
            <!-- <dv-decoration-4 class="mcb-decoration-1" style="width:5px;height:45%;" />
            <dv-decoration-4 class="mcb-decoration-2" style="width:5px;height:45%;" />
            <Bottom-Left-Chart-1 />
            <Bottom-Left-Chart-2 /> -->
          </dv-border-box-6>

          <div class="bottom-right-container">
            <Bottom-Right-Table-1 />
            <Bottom-Right-Table-2 />
            <Bottom-Right-Table-3 />
            <Bottom-Right-Table-4 />
          </div>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
import TopLeftCmp from '../components/TopLeftCmp'
import TopMiddleCmp from '../components/TopMiddleCmp'
import TopRightCmp from '../components/TopRightCmp'

import BottomLeftChart1 from '../components/BottomLeftChart1'
import BottomLeftChart2 from '../components/BottomLeftChart2'
import BottomLeftChart from '../components/BottomLeftChart'

import BottomRightTable1 from '../components/BottomRightTable1'
import BottomRightTable2 from '../components/BottomRightTable2'
import BottomRightTable3 from '../components/BottomRightTable3'
import BottomRightTable4 from '../components/BottomRightTable4'

export default {
  name: 'DataView',
  components: {
    TopLeftCmp,
    TopMiddleCmp,
    TopRightCmp,
    BottomLeftChart,
    BottomLeftChart1,
    BottomLeftChart2,
    BottomRightTable1,
    BottomRightTable2,
    BottomRightTable3,
    BottomRightTable4
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('../assets/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }
    }

    .mh-middle {
      font-size: 30px;
    }

    .mh-left, .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");

    .mc-top, .mc-bottom {
      box-sizing: border-box;
      padding: 30px;
      display: flex;
    }

    .mc-top {
      height: 40%;
    }

    .mc-bottom {
      height: 60%;
    }

    .top-left-cmp, .bottom-left-container {
      width: 32%;
    }

    .top-middle-cmp, .top-right-cmp {
      width: 34%;
    }

    .bottom-left-container {
      position: relative;

      .border-box-content {
        display: flex;
      }

      .mcb-decoration-1, .mcb-decoration-2 {
        position: absolute;
        left: 50%;
        margin-left: -2px;
      }

      .mcb-decoration-1 {
        top: 5%;
        transform: rotate(180deg);
      }

      .mcb-decoration-2 {
        top: 50%;
      }

      .bottom-left-chart-1, .bottom-left-chart-2 {
        width: 100%;
        height: 100%;
      }
    }

    .bottom-right-container {
      width: 68%;
      padding-left: 30px;
      box-sizing: border-box;
      display: flex;
    }
  }
}
</style>




<!--template>
    <div class="container">
        <div>
            <CatalogCard name="政策解读" @click.native="onCatalog(0)"/>
            <CatalogCard name="基础设施建设" @click.native="onCatalog(1)"/>
        </div>
        <div>
            <CatalogCard name="企业交流" @click.native="onCatalog(2)"/>
            <CatalogCard name="文化传播" @click.native="onCatalog(3)"/>
        </div>
    </div>
</template>

<script>
  import CatalogCard from '@/components/CatalogCard'

  export default {
    components: {
      CatalogCard
    },
    data() {
      return {}
    },
    methods: {
      onCatalog(index) {
        const catalogs = ['policy', 'infrastructure', 'communication', 'education'];
        this.$router.push({name: catalogs[index]});
      }
    }
  }
</script>

<style lang="less" scoped>
    .container {
        &:extend(.flex);
        background-image: url(../assets/policy_bg1.png);
        background-size: cover;
        height: 100%;
        width: 100%;
    }

    .row {
        &:extend(.flex);
        flex-direction: row;
    }


</style-->
