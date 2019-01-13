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
  name: 'VueBaseTable',
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
          title: '商品编号',
          key: 'commo_id',
          align: 'center',
          width: 100
        },
        {
          title: '商品名称',
          key: 'commo_title',
          align: 'center',
          width: 300
        },
        {
          title: '商品条码',
          key: 'commo_qrcode',
          align: 'center'
        },
        {
          title: '单价',
          key: 'single_price',
          align: 'center',
          width: 100
        },
        {
          title: '数量',
          key: 'commo_count',
          align: 'center',
          width: 100
        },
        {
          title: '金额',
          key: 'all_price',
          align: 'center',
          width: 100
        }
      ]
    };
  }
};
</script>

<style></style>
