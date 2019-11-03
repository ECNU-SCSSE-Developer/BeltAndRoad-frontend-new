<template>
<div>
     <el-backtop  :bottom="100" :visibility-height="0" @click="fatherPage" >
   <div
    style="{
        height: 100%;
        width: 100%;
        background-color: #FFF;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        color: #b10000;
        font-size:14px;
        border-radius:10px;
      }"
   >
      返回首页
    </div>
  </el-backtop>
  
   <el-backtop  style="color:#b10000"> </el-backtop>

</div>
</template>

<script>
export default {
    methods:{
      fatherPage:function(){
        this.$router.go(-1)
      }
    }
}
</script>

