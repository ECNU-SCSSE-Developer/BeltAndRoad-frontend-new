<template>
    <div class="list" name="show">
      <el-collapse accordion>
          <el-collapse-item  v-for ="article in articlelist " :title="article.title">
              <div>{{article.abstract}}</div>
          </el-collapse-item>
      </el-collapse>
        
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
     
            /* color:red; */
           font-weight: bold;
}
</style>
