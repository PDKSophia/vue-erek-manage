<template>
  <div>
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
    <Table :border="true" :stripe="true" size="small" :data="tableData" :columns="columns"></Table>
    <div style="margin: 20px 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" ></Page>
      </div>
    </div>
  </div>
</template>

<script>
import dataList from '../../../config/data.list'
export default {
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
      tableData: [],
      columns: [
        {
          title: '员工ID',
          key: 'id',
          width: 80,
        },
        {
          title: '员工名',
          key: 'username',
          width: 100,
        },
        {
          title: '员工编号',
          key: 'staffID'
        },
        {
          title: '所属部门',
          key: 'department'
        },
        {
          title: '所在职位',
          key: 'type'
        },
        {
          title: '员工状态',
          key: 'status',
          filters: [
            {
              label: '在职',
              value: 'online'
            },
            {
              label: '离职',
              value: 'exit'
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            return row.status.indexOf(value) > -1;
          }
        },
        {
          title: '联系方式',
          key: 'phone'
        },
        {
          title: '入职时间',
          key: 'time'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.$tool.toastTips('info', `你当前点击: ${++params.index}`, 1)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.$tool.toastTips('info', `你当前点击: ${params.index}`, 2)
                  }
                }
              }, '删除')
            ])
          }
        }
      ]
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
    }
  },
  mounted() {
    this.tableData = dataList
  },
}
</script>

<style scoped lang="scss">
.erek-span-text {
  font-size: 14px;
}
</style>
