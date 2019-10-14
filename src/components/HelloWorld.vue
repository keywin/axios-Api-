<template>
  <div class="hello1">
    <el-table
      :data="testData"
      style="width: 100%">
      <el-table-column
        prop="add_time"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="source"
        label="资源">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { API_MODEL1_article } from '../api/api_model/http_model_1.js'
export default {
  name: 'HelloWorld1',
  data () {
    return {
      testData: []
    }
  },
  created () {
    API_MODEL1_article().then((res) => {
        console.log(res)
        this.testData = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
