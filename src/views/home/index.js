import Vue from 'vue';
import indexApp from './indexApp';

new Vue({
  components: {
    indexApp
  },
  data: {
    dataList:[{
      name:'里斯',
      age:30
    },{
      name:'lisa',
      age:20
    }]
  }
}).$mount('#app')
