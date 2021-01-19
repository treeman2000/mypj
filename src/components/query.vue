<template>
    <div>
        日期: 
        <el-select v-model="timeInterval" placeholder="请选择日期">
            <el-option v-for="item in timeIntervals" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data(){
        return{
            timeIntervals:[
                {value: 1, label:'今天'},
                {value: 7, label:'过去7天'},
                {value: 15, label:'过去15天'},
                {value: 30, label:'过去30天'},
                {value: -1,label:'自定义'}
            ],
            timeInterval:1
        }
    }
}
</script>