<template>
  <div>
    <Table :border="border" :stripe="stripe" :size="size" :data="data" :columns="columns"></Table>
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
  name: 'VueAdvanceTable',
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
      defualt: function () {
        return [];
      }
    },
    pagination: {
      type: Object,
      defualt: function () {
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
          title: '序号',
          key: 'id',
          width: 80,
          align: 'center'
        },
        {
          title: '操作类型',
          key: 'actiontype',
          align: 'center',
          width: 100
        },
        {
          title: '操作人',
          key: 'username',
          align: 'center',
          width: 100
        },
        {
          title: '所属部门',
          key: 'department',
          align: 'center',
          width: 100
        },
        {
          title: '联系方式',
          key: 'phone',
          align: 'center',
          width: 120
        },
        {
          title: '操作时间',
          key: 'time',
          align: 'center',
          width: 130
        },
        {
          title: '简介',
          key: 'desc',
          align: 'center'
        }
      ]
    };
  }
};
</script>

<style></style>
