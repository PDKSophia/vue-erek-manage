<template>
  <div>
    <Table :border="border" :stripe="stripe" :size="size" :data="tableData" :columns="columns"></Table>
  </div>
</template>

<script>
export default {
  name: 'VueErekTable',
  props: {
    border: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    },
    tableData: {
      type: Array,
      defualt: function () {
        return []
      }
    }
  },
  data () {
    return {
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
          title: '操作',
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
  }
}
</script>

<style>

</style>
