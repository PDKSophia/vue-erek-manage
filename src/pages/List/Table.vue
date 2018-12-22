<template>
  <div>
    <Table
      :border="border"
      :stripe="stripe"
      :size="size"
      :data="data"
      :columns="columns"
    ></Table>
    <div style="margin: 30px 0px;overflow: hidden" v-show="pagination.hasPage">
      <div style="float: right;">
        <Page
          :total="pagination.total"
          :current="pagination.pageNum"
          :pageSize="pagination.pageSize"
          showSizer
        ></Page>
      </div>
    </div>
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
    data: {
      type: Array,
      defualt: function() {
        return [];
      }
    },
    pagination: {
      type: Object,
      defualt: function() {
        return [];
      }
    }
  },
  watch: {
    pagination: {
      handler(newVal) {
        console.log(newVal);
      }
    }
  },
  data() {
    return {
      initPageOption: [10, 20, 30, 50],
      columns: [
        {
          title: '员工ID',
          key: 'id',
          width: 80,
          align: 'center'
        },
        {
          title: '员工名',
          key: 'username',
          width: 100,
          align: 'center'
        },
        {
          title: '所属部门',
          key: 'department',
          align: 'center'
        },
        {
          title: '所在职位',
          key: 'type',
          align: 'center'
        },
        {
          title: '员工状态',
          key: 'status',
          align: 'center',
          filters: [
            {
              label: '在职',
              value: '在职'
            },
            {
              label: '离职',
              value: '离职'
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            return row.status.indexOf(value) > -1;
          }
        },
        {
          title: '联系方式',
          key: 'phone',
          align: 'center'
        },
        {
          title: '操作时间',
          key: 'time',
          align: 'center'
        },
        {
          title: '操作',
          align: 'center',
          key: 'action',
          width: 150,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      var index = params.index;
                      this.$emit('onHandleClickItem', index, 'view');
                    }
                  }
                },
                '查看'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      var index = params.index;
                      this.$emit('onHandleClickItem', index, 'delete');
                    }
                  }
                },
                '删除'
              )
            ]);
          }
        }
      ]
    };
  }
};
</script>

<style></style>
