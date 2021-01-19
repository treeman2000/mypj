<template>
  <div id="app">
    输入什么 
    <el-input placeholder='输入什么'></el-input>
    <el-button>按钮</el-button>
    <el-button @click="sendRequest">发送请求</el-button>
    <tb :pdata='tstList'></tb>
  </div>
</template>

<script>
import axios from 'axios'
import Tb from './components/tb.vue'

// axios.defaults.headers['Access-Control-Allow-Origin']='true'

export default {
  name: 'App',
  components: {
    Tb
  },
  data(){
    return{
      tstList:[{date:'2020-05-02',name:'jack',address:'上海市普陀区金沙江路-1号'},
      {date:'2020-05-02',name:'jack',address:'上海市普陀区金沙江路-1号'},
      {date:'2020-05-02',name:'jack',address:'上海市普陀区金沙江路-1号'},
      {date:'2020-05-02',name:'jack',address:'上海市普陀区金沙江路-1号'},
      {date:'2020-05-02',name:'jack',address:'上海市普陀区金沙江路-1号'},
      {date:'2020-05-02',name:'jack',address:'上海市普陀区金沙江路-1号'}
      ]
    }
  },
  methods:{
    sendRequest(){
      axios({
        url: 'api'
      }).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>
