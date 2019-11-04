<template>
    <div id ="wordcloud" style="width:100%; height:655px;"></div>
   
</template>

<script>
import { readlink } from 'fs';


export default {


mounted(){
   this.getEchartsData1()
},

  methods:{
      getEchartsData1() {
        const myChart =this.$echarts.init(document.getElementById('wordcloud'))
        const option = {
           series:[{
             type:'wordCloud',
             shape:'ellipse',
            //  maskImage:maskImage,

             left:'center',
             top:'center',
             width:'80%',
             height:'80%',
             right:'center',
             bottom:'center',
             sizeRange:[12,60],//数的大小范围
             
             rotationRange:[-90,90],//随机旋转的范围
             rotationStep:23.5,//旋转步长

             gridSize:15,//与词的间距有关
             drawOutOfBound:false,

             /**Global text style**/
             textStyle:{
               normal:{
                 fontFamily:'sans-serif',
                 fontWeight:'bold',
                 color:function(){ //随机生成颜色
                   return 'rgb('+[
                     Math.round((0.9+Math.random()) * 100),
                     Math.round(0 * 100),
                     Math.round(0* 100)
                   ].join(',')+')';
                 }
               },

               emphasis:{
                 shadowBlur:2,
                 shadowColor:'#F9E67C'
               }
             },

          data:[{
            name:'国际陆海贸易新通道',
            value: 110,
          },
          {
            name:'冰上丝绸之路',
            value: 115,
          },
          {
            name:'蓝色经济通道',
            value: 140,
          },
          {
            name:'中阿合作论坛',
            value:200,
          },
          {
            name:'中欧班列',
            value: 125,
          },
          {
            name:'六大经济走廊',
            value: 300,
          },
          {
            name:'上海合作组织',
            value: 100,
          },
          {
            name:'丝路精神',
            value:350,
          },
          {
            name:'区域经济合作',
            value: 277,
          },
          {
            name:'命运共同体',
            value: 225,
          },
          {
            name:'信息丝绸之路',
            value: 165,
          },
          {
            name:'国际产能合作',
            value:99,
          },
          {
            name:'自贸区',
            value: 150,
          },
          {
            name:'框架思路',
            value: 125,
          },
          {
            name:'丝路基金',
            value: 150,
          },
          {
            name:'亚投行',
            value:235,
          }
          ]

           }]
            }

  myChart.setOption(option)
  window.addEventListener('resize',function(){ //自适应
    myChart.resize()
  })
      }
  }
}

</script>
