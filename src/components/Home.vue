<template>  
  <div>
    <h1>柱形图</h1>
    <div id="main" style="width: 600px;height:400px;"></div>
    <input type="text"> 
  </div>
</template>
<script>
import "../style.css"
  export default {
    name: 'home',
    data() {   
      return{
        option: {
          title: {
            text: '各种衣服..666'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    mounted: function() {
      var myChart = this.echarts.init(document.getElementById('main'));
      myChart.setOption(this.option);
    }
  }
</script>
