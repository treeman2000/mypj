<template>
<div>
  <el-table
    :data="ShowedData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

  <div>
      <el-pagination layout='prev,pager,next' :total=6 :page-size=pageSize @current-change='ChangePage'>
      </el-pagination>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: this.pdata,
        curPage:1,
        pageSize:3,
        ShowedData: []
      }
    },
    props:{
        'pdata':{
            type:Array,
            default: ()=> [{date:'2020-99-99',name:'jack',address:'上海江路-1号'},
            {date:'2020-99-99',name:'jack',address:'上海江路-1号'},
            {date:'2020-99-99',name:'jack',address:'上海江路-1号'}]
        }
    },
    methods:{
        showCurPage(){
            // console.log(this.curPage*3+2)
            this.ShowedData=[this.tableData[this.curPage*3-3],this.tableData[this.curPage*3-2],this.tableData[this.curPage*3-1]]
        },
        ChangePage(n){
            this.curPage=n
            console.log(n)
            this.showCurPage()
        }
    }
  }
</script>