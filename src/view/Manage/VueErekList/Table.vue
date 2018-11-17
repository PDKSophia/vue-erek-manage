<template>
  <div class='vue-erek-table-box'>
    <Row :gutter="16" :style="{marginBottom: '20px'}">
      <Col span="8">
        <div>
          <span class="erek-span-text">搜索 : </span>
          <input v-model="keyWords"  class='erek-input' :style='{marginLeft: "10px"}' type="text">
        </div>
      </Col>
      <Col span="8">
        <div>
          <span class="erek-span-text">使用状态 : </span>
          <Select v-model="selectValue" :style="{marginLeft: '10px', width: '70%'}">
            <Option v-for="item in optList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </Col>
      <Col span="4">
        <div align='center' style='paddingTop: 5px;'>
          <Button size='small' type="primary" style="marginRight: 10px" @click.native='handleSearchValue'>查询</Button>
          <Button size='small' @click.native='handleResetValue'>重置</Button>
        </div>
      </Col>
    </Row>
    <erek-table 
      :border='tableObj.border'
      :stripe='tableObj.stripe'
      :size='tableObj.size'
      :tableData='tableObj.tableData'
      @onHandleClickItem='handleEmitTableValue'
    />
    <div style="margin: 20px 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" ></Page>
      </div>
    </div>
  </div>
</template>

<script>
import ErekTable from '../../../erekPages/TableList/Index.vue'
export default {
  name: 'ErekManageTableList',
  components: {
    ErekTable
  },
  data () {
    return {
      keyWords: '',
      selectValue: '',
      optList: [
        {
          value: 'online',
          label: '在职'
        },
        {
          value: 'exit',
          label: '离职'
        }
      ],
      tableObj: {
        border: false,
        stripe: true,
        size: 'large',
        tableData: [],
      },
    }
  },
  methods: {
    handleSearchValue () {
      if (this.keyWords && this.selectValue) {
        this.$tool.toastTips('success', `你点击了查询，查询${this.keyWords}和${this.selectValue}`, 2)
      } else {
        this.$tool.toastTips('error', `搜索框不能为空`, 2)
      }
    },
    handleResetValue () {
      this.$tool.toastTips('warning', `你点击了重置`, 2)
      this.keyWords = ''
      this.selectValue = ''
    },
    handleEmitTableValue (value, type) {
      this.$tool.toastTips('info', `你当前点击 : ${type}, 下标索引为 : ${value}`, 1)
    }
  },
  mounted() {
    // 发送请求获取数据信息
    this.$api.fetchAllDataList().then((res) => {
      this.tableObj.tableData = res
    })
  },
}
</script>

<style scoped lang="scss">
.vue-erek-table-box {
  padding: 24px;
}
.erek-span-text {
  font-size: 14px;
}
</style>
