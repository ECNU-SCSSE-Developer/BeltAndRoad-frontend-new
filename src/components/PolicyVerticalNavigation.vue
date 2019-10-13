<template>
    <div  class="policyNav">
    <el-menu  default-active="1">
       <el-menu-item index="1" @click="menu1">
        <i class="el-icon-document"></i>
        <span slot="title">计划规划</span>
      </el-menu-item>
      <el-menu-item index="2" @click="menu2">
        <i class="el-icon-picture-outline"></i>
        <span slot="title">图解政策</span>
      </el-menu-item>
      <el-menu-item index="3" @click="menu3" >
        <i class="el-icon-reading"></i>
        <span slot="title">政策解读</span>
      </el-menu-item>
      <el-menu-item index="4" @click="menu4">
        <i class="el-icon-view"></i>
        <span slot="title">丝路百科</span>
      </el-menu-item>
       <el-menu-item index="5" @click="menu5">
        <i class="el-icon-video-camera"></i>
        <span slot="title">"习"与丝路</span>
      </el-menu-item>
    </el-menu>

    </div>
</template>


<script>
import Msg from './msg.js'
export default {
  methods:{
    menu1:function(){
      Msg.$emit("val","1")
    },
    menu2:function(){
      Msg.$emit("val","2")
    },
    menu3:function(){
      Msg.$emit("val","3")
    },
    menu4:function(){
      Msg.$emit("val","4")
    },
    menu5:function(){
      Msg.$emit("val","5")
    }
  }

}
</script>

<style lang="less" scoped>
.policyNav{
    .el-menu-item{
      // background-color: rgb(177, 0, 0);
      // color:#FFF;
      background-color: #fff;
      color:rgb(177, 0, 0);
      font-size: 16px;
      font-weight:bold;
      font-family:"微软雅黑";
      margin-top:1%;
    }
    .is-active{
      color:#fff;
      background-color: rgb(177, 0, 0);
    }
}
</style>