<docs>
  ### indexApp 组件哦
  * hhehe
  * h3h3h
</docs>
<style module scoped>
  .list {
    background:black;
  }
  .list > li {color:#fff;}
</style>

<template>
  <div>
    <ul class="list">
      <li v-for="(item,index) in dataList" @click="alert">{{item.name}}</li>
    </ul>
  </div>
</template>
<script lang="js">
  export default {
    data() {
      return {
        dataList:[{
          name:'sgadf'
        },{
          name:'23人噶撒旦法撒旦法'
        }]
      }
    },
    methods: {
      alert() {
        console.log('alert')
      }
    }
  }
</script>
