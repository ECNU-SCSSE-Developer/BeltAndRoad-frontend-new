<template>
    <div class="list" name="show">
      <el-collapse accordion>
          <el-collapse-item  v-for ="article in articlelist " :title="article.title" :key="article">
             <div><div style="text-indent:2em; width:90%; margin:0px auto;">{{article.abstract}}</div></div>
              <!-- <div class=transform><el-link type="info" :underline="false" @click='goto()'>>>了解更多</el-link></div> -->
              <div class=transform><router-link  style="color:rgb(38,100,185);text-decoration:none;" :to="{name:'PolicyArticle', params:{img:article.img,detail:article.detail,title:article.title}} " >>>了解更多</router-link></div>
               </el-collapse-item>
      </el-collapse>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"show",
    data(){
        var obj=this;
        var url="";
        if(obj.listId==1)
        {url="json/PolicyPlan.json";
        }else if(obj.listId==2){
            url="json/PolicyInter.json";
        }

        this.$http.get(url).then(function(b){
            obj.articlelist=b.data;
        })
        return {
            articlelist:[]
        }
    },
    props:{//父子组件传值
        listId:Number

    },
    methods:{
      goto(){
          this.$router.push(
            { name:'PolicyArticle',
              params:{
                 id:article.id
              }
              })
      }
    },
    watch:{
        listId(){
            var obj =this;
            var url="";
            if(obj.listId==1)
        {url="json/PolicyPlan.json";
        }else if(obj.listId==2){
            url="json/PolicyInter.json";
        }

        this.$http.get(url).then(function(b){
            obj.articlelist=b.data;
        })
        return {
            articlelist:[]
        }
        }
    }

}
</script>

<style land="less" scoped>

 .list >>>.el-collapse-item__header{
     
        padding-left:2.5%;
           font-weight: bold;
}



 .list >>> .el-link.el-link--info{
     color:darkblue;
     font-size:12px;
    
 }

 .list >>> .el-link.el-link--info :hover{
     color:red;
 }

 .list >>> .transform{
     float:right;
     margin-right:8%;
     margin-bottom:2%;
 }


</style>
