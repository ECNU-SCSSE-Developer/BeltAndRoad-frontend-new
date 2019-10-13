<template>
    <div id ="wordcloud" style="width:100%; height:840px;"></div>
   
</template>

<script>


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
             shape:'circle',
            //  maskImage:maskImage,

             left:'center',
             top:'center',
             width:'70%',
             height:'80%',
             right:null,
             bottom:null,
             sizeRange:[12,60],//数的大小范围
             
             rotationRange:[-90,90],//随机旋转的范围
             rotationStep:30,//旋转不长

             gridSize:8,//与词的间距有关
             drawOutOfBound:false,

             //Global text style
             textStyle:{
               normal:{
                 fontFamily:'sans-serif',
                 fontWeight:'bold',
                 color:function(){
                   return 'rgb('+[
                     Math.round(Math.random() * 100),
                     Math.round(Math.random() * 100),
                     Math.round(Math.random() * 100)
                   ].join(',')+')';
                 }
               },

               emphasis:{
                 shadowBlur:10,
                 shadowColor:'#333'
               }
             },

          data:[{
            name:'aaaa',
            value: 366,
          },
          {
            name:'aca',
            value: 36,
          },
          {
            name:'abbb',
            value: 66,
          }
          ]

           }]
            }

  myChart.setOption(option)
  window.addEventListener('resize',function(){//自适应
    myChart.resize()
  })
      }
  }
}

</script>
