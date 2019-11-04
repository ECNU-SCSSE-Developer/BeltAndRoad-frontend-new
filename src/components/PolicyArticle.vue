<template>
<div class="all">
  <el-backtop  :bottom="710" :right="1250" :visibility-height="-1"  @click="fatherPage" >
   <div
    style="{
        height: 100%;
        width: 100%;
        background-color: #FFF;
        text-align: center;
        color: #b10000;
        font-size:14px;
        border-radius:10px;
      }"
   ><i class="el-icon-back"></i>
    </div>
  </el-backtop>
<el-container>
  <el-header>{{this.$route.params.title}}</el-header>
  <div class="detail"><p>{{this.$route.params.detail}}</p></div>
  <hr>
  <el-main><div   class="demo-image__preview">
  <el-image 
    style="width: 80%; display:block; margin:5px auto"
    :src="this.$route.params.img">
   </el-image>
</div></el-main>
</el-container>
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


<style>

.all{
    margin:20px 10px;

}

  hr{
    *margin: 0;
    border: 1px;
    color: whitesmoke;
    width:70%;
    margin:0px auto;
    background-color: black; 
    height: 1px
}

  .el-header {
    background-color: white;
    color: #333;
    font-weight: bold;
    font-size:20px;
    text-align: center;
    line-height: 60px;
  }
  
  
  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

  .detail{
    height:20px;
    color:black;
    margin:0px auto 10px auto;
    font-size:9px;
  }





</style>