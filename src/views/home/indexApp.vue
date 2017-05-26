
<style module lang="scss">
  .list {
    background:black;
    > li {
      color:#fff;
    }
  }
</style>

<template>
  <div>
    <ul :class="$style.list">
      <li v-for="(item,index) in dataList" @click="alert">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
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
