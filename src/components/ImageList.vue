<template>
<div>
  <ul  class="piclist"> 
    <li v-for="pic in piclist" v-bind:key="pic"> 
      <div class="card">
  <el-card :body-style="{ padding: '0px' }" class="catalog" shadow="always">
  <div   class="demo-image__preview">
  <el-image 
    style="width: 90%; display:block; margin:5px auto"
    :src="pic.img"
    :preview-src-list="pic.sublist">
   </el-image>
</div>
  <div style="margin:0px auto;padding:3px 15px;font-weight:500;">
  <p>{{pic.title}}</p>
  </div>
   </el-card>

      </div>
    </li>
  </ul>
</div>
</template>


<script>
export default {
  data(){
    var obj=this;
    var url="json/PolicyImg.json";

    this.$http.get(url).then(function(b){
      obj.piclist=b.data;
    })
   return {
     piclist:[]
   } 
  }
}
</script>

<style scoped>

.card{
   /* height:220px; */
    width:200px;
   margin:30px 30px 5px 30px;
}
.piclist li{
    float:left;
    list-style:none; 
    font-size:12px;
    margin-bottom: 15px;


}
  .catalog {
        height:263px;
         width:200px;
         /* margin:30px 30px 0px 30px; */
    }



</style>