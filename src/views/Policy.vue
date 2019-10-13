<template>
 <div class="all">
    <div class="main">
     
    <div class="top" style="position: relative;">
      <div style="position: absolute; margin-top:2.5%; width:100%;"><img src="@/assets/policy_brush.png"></div>
       <img src="@/assets/policy_bg2.jpg">
     </div>
     <!--main body-->
    <div class="mid">
      <div class="mid-left">
         <VerticalNav></VerticalNav>
      </div>
      <!--end of left-->
      
      <div class="mid-right">
      <div v-if="kk==1" >
        <ArticleList :listId="1" ></ArticleList>
      </div >

      <div v-if="kk==2">
        2222222
      </div>
      <div v-if="kk==3">
      <ArticleList :listId="2" ></ArticleList>
      </div>
      <div v-if="kk==4">
       <WordCloud></WordCloud>
      </div>
    <div v-if="kk==5">
      quick
       </div>
      </div>
      <!--end of right-->

    </div>
   <!--end of main body-->
    <div class="foot"></div>
   
    </div>
 </div>
</template>

<script>

import VerticalNav from '../components/PolicyVerticalNavigation.vue'
import ArticleList from '../components/PolicyList.vue'
import WordCloud from "../components/PolicyWordCloud.vue"
import Msg from '../components/msg.js'



  export default {
    data(){
      return {
        kk:1
      }
    },

    mounted:function(){
      var _this=this;
      Msg.$on('val',function(m){
        _this.kk=m;
      })
     
    },

    components:{
    VerticalNav,
    ArticleList,
    WordCloud
    }

  }
</script>

<style lang="less" scoped>

 *{
   padding:0;
   margin:0;
   
 }

.all{
   
 background-image: url(../assets/70周年6.jpg);
 width:100%;
 height:1100px;
 z-index:-10;
 background-repeat: no-repeat;
 background-size:cover;
 -webkit-backround-size:cover;
 -o-background-size:cover;
 background-position:center 0;
}
   .mid{
    
     width:1000px;
    // margin-top:10px;
   }
   .mid-left{
       width:150px;
       float:left;/*两个div左右排列，设置float*/
         margin-right:1px;
         padding-top:23px;
        
   }
   .mid-right{
     padding-top:25px;
       width:849px;
        float:left;
 
   }
  .main{
    width:1000px;
     padding-top:4%;
     margin :0px auto;
    
  
  }

  .top img{
       height:360px;
       width:1000px;
       border-radius: 10px 10px 5px 5px;
 


   }

    .mid-left,.mid-right{
       background-color: #fff;
       height: 630px;
   }
</style>
