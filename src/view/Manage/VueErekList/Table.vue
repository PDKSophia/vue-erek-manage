<template>
  <div class="vue-erek-table-box">
    <Row :gutter="16" :style="{ marginBottom: '20px' }">
      <i-col span="8">
        <div>
          <span class="erek-span-text">搜索 :</span>
          <input v-model="keyWords" class="erek-input" :style="{ marginLeft: '10px' }" type="text">
        </div>
      </i-col>
      <i-col span="8">
        <div>
          <span class="erek-span-text">使用状态 :</span>
          <Select v-model="selectValue" :style="{ marginLeft: '10px', width: '70%' }">
            <Option v-for="item in optList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </i-col>
      <i-col span="4">
        <div align="center" style="paddingTop: 5px;">
          <Button
            size="small"
            type="primary"
            style="marginRight: 10px"
            @click.native="handleSearchValue"
          >查询</Button>
          <Button size="small" @click.native="handleResetValue">重置</Button>
        </div>
      </i-col>
    </Row>
    <erek-table-list
      :border="tableConfig.border"
      :stripe="tableConfig.stripe"
      :size="tableConfig.size"
      :data="tableConfig.data"
      :pagination="tableConfig.pagination"
      @onHandleClickItem="handleEmitTableValue"
    />
  </div>
</template>

<script>
import ErekTableList from 'components/FrameComponents/List/Table.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ErekManageTableList',
  components: {
    ErekTableList
  },
  computed: mapState({
    isFetch: state => state.table.isFetch,
    list: state => state.table.list,
    pageNum: state => state.table.pageNum,
    pageSize: state => state.table.pageSize,
    total: state => state.table.total
  }),
  data() {
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
      tableConfig: {
        border: true,
        stripe: true,
        size: 'large',
        data: [],
        pagination: {
          hasPage: true,
          pageNum: 0,
          pageSize: 0,
          total: 0
        }
      }
    };
  },
  methods: {
    ...mapActions(['startFetch', 'stopFetch', 'retrieveTableList']),
    handleSearchValue() {
      if (this.keyWords && this.selectValue) {
        this.$utils.toastTips(
          'success',
          `你点击了查询，查询${this.keyWords}和${this.selectValue}`,
          2
        );
      } else {
        this.$utils.toastTips('error', `搜索框不能为空`, 2);
      }
    },
    handleResetValue() {
      this.$utils.toastTips('warning', `你点击了重置`, 2);
      this.keyWords = '';
      this.selectValue = '';
    },
    handleEmitTableValue(value, type) {
      this.$utils.toastTips(
        'info',
        `你当前点击 : ${type}, 下标索引为 : ${value}`,
        1
      );
    }
  },
  mounted() {
    console.log('aha', this.isFetch);
    if (this.isFetch) {
      this.tableConfig.data = [...this.list];
      this.tableConfig.pagination = {
        hasPage: true,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        total: this.total
      };
    } else {
      this.startFetch();
      // 发送请求获取数据信息
      this.$api.list.fetchRequestTableApi().then(res => {
        this.tableConfig.data = res.list;
        this.tableConfig.pagination = {
          hasPage: true,
          pageNum: res.current,
          pageSize: res.size,
          total: res.total
        };
        this.retrieveTableList(res);
        setTimeout(() => {
          this.stopFetch();
        }, 1000);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.vue-erek-table-box {
  padding: 24px 24px;
  // height: 100%;
  width: 100%;
  background-color: #fff;
}
.erek-span-text {
  font-size: 14px;
}
</style>
