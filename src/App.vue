<template>
  <div id="app">
    <query></query>
    <tb :pdata='tstList'></tb>
  </div>
</template>

<script>
import axios from 'axios'
import Tb from './components/tb.vue'
import Query from './components/query.vue'
// axios.defaults.headers['Access-Control-Allow-Origin']='true'

export default {
  name: 'App',
  components: {
    Tb,
    Query
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
        url: 'http://localhost:8080/empty'
      }).then(res=>{
        console.log(res)
      }).catch(err=>console.log(err))
    }
  }
}
</script>

<style>
</style>
