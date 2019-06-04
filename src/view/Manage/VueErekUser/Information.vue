<template>
  <div class="vue-erek-person-container">
    <div class="vue-user-item">
      <div class="vue-user-item-meta">
        <div class="vue-user-item-meta-avatar">
          <img :src="user.avatar" class="vue-user-item-meta-avatar-image" alt>
        </div>
        <div class="vue-user-item-meta-content">
          <h4 class="vue-user-item-meta-title">{{ user.username }}</h4>
          <div class="vue-user-item-meta-summary">
            <span v-for="(tag, index) in user.tag" :key="index">
              {{ tag }}
              <Divider v-if="index !== user.tag.length - 1" type="vertical"/>
            </span>
          </div>
        </div>
      </div>
      <div class="vue-user-item-action">
        <ul>
          <a
            v-for="(item, key) in user.link"
            :key="key"
            :href="item.target"
            target="_blank"
            class="vue-erek-link"
          >
            {{ item.text }}
            <Divider v-if="key !== user.link.length - 1" type="vertical"/>
          </a>
        </ul>
      </div>
    </div>
    <vue-divider :bg-color="divider.bgColor" :height="divider.height"/>
    <div class="vue-erek-article">
      <div class="vue-erek-badge-left">
        <vue-user-badge :config="badgeConfig"/>
      </div>
    </div>
    <vue-divider :bg-color="divider.bgColor" :height="divider.height"/>
    <div class="vue-erek-article">
      <div class="vue-erek-badge-left divider-right">
        <div class="vue-erek-pyq-title">动态</div>
        <div class="vue-erek-pyq-2">
          <div class="pyq-3-list-item">
            <div class="pyq-4-list-meta">
              <div class="pyq-5-avatar-left">
                <img
                  class="images-avatar"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                  alt
                >
              </div>
              <div class="pyq-6-avatar-right">
                <p class="text-sty-0">
                  <span class="text-sty-1">曲丽丽</span> 在
                  <span class="text-sty-2">高逼格设计天团</span>
                  新建项目六月迭代
                </p>
                <p>4小时前</p>
              </div>
            </div>
          </div>
          <div class="pyq-3-list-item">
            <div class="pyq-4-list-meta">
              <div class="pyq-5-avatar-left">
                <img
                  class="images-avatar"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                  alt
                >
              </div>
              <div class="pyq-6-avatar-right">
                <p class="text-sty-0">
                  <span class="text-sty-1">曲丽丽</span> 在
                  <span class="text-sty-2">高逼格设计天团</span>
                  新建项目六月迭代
                </p>
                <p>4小时前</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vue-erek-content-right">
        <div class="vue-erek-pyq-title">团队</div>
        <div class="erek-team-1">
          <div class="erek-team-2">
            <Card>
              <div style="text-align:center">
                <img
                  class="team-image"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                >
                <h3>Vue.js</h3>
              </div>
            </Card>
          </div>
          <div class="erek-team-2">
            <Card>
              <div style="text-align:center">
                <img
                  class="team-image"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                >
                <h3>React.js</h3>
              </div>
            </Card>
          </div>
          <div class="erek-team-2">
            <Card>
              <div style="text-align:center">
                <img
                  class="team-image"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                >
                <h3>Vue.js</h3>
              </div>
            </Card>
          </div>
          <div class="erek-team-2">
            <Card>
              <div style="text-align:center">
                <img
                  class="team-image"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                >
                <h3>Vue.js</h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDivider from 'components/CommonComponents/Divider/Index.vue'
import VueUserBadge from 'components/CommonComponents/Badge/Index.vue'
import EchartsLine from '../../../components/EchartsComponents/Line.vue'
import { mapState } from 'vuex'

export default {
  name: 'ErelUserInformation',
  components: {
    VueDivider,
    VueUserBadge,
    EchartsLine
  },
  computed: mapState({
    user: state => state.user.user
  }),
  data() {
    return {
      divider: {
        bgColor: '#f5f7f9',
        height: '20px'
      },
      badgeConfig: {}, // 徽章
      xAxis: {
        // x轴
        data: []
      },
      yAxis: {
        // y轴
        min: null,
        max: null
      },
      itemList: [],
      lineWidth: '100%',
      lineHeight: '250px',
      lineSeries: [] // 折线数据
    }
  },
  watch: {
    user: {
      handler(newVal) {
        if (newVal) {
          this.$nextTick(() => {
            this.badgeConfig = {
              namespace: '获得的徽章',
              valueColor: '#6f80da',
              data: { ...newVal.badge }
            }
          })
        }
      }
    }
  },
  async mounted() {
    this.badgeConfig = {
      namespace: '获得的徽章',
      valueColor: '#6f80da',
      data: { ...this.user.badge }
    }
  }
}
</script>

<style scoped lang="scss">
.vue-erek-person-container {
  width: 100%;
  color: rgba(0, 0, 0, 0.45);
  background-color: #fff;

  > .vue-user-item {
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;

    > .vue-user-item-meta {
      align-items: flex-start;
      display: flex;
      flex: 2 1;

      > .vue-user-item-meta-avatar {
        margin-right: 10px;

        > .vue-user-item-meta-avatar-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }

      > .vue-user-item-meta-content {
        flex: 1 0;
        padding-left: 12px;

        > .vue-user-item-meta-title {
          margin-bottom: 4px;
          font-size: 18px;
          line-height: 30px;
          margin-top: 15px;
          color: rgba(0, 0, 0, 0.65);
        }
        > .vue-user-item-meta-summary {
          font-size: 14px;
          line-height: 22px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
    }

    > .vue-user-item-action {
      display: flex;
      flex: 1 0;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;

      > ul {
        list-style: none;
        display: inline-flex;
        text-align: center;
        justify-content: center;
        align-items: center;

        > .vue-erek-link {
          color: #6f80da;
        }
      }
    }
  }
}
.vue-erek-article {
  display: flex;
  width: 100%;

  > .vue-erek-badge-left {
    flex: 3 0;

    > .vue-erek-pyq-2 {
      padding: 0 16px;

      .pyq-3-list-item {
        padding-top: 16px;
        padding-bottom: 16px;
        align-items: center;
        display: flex;
        border-bottom: 1px solid #e8e8e8;
        flex-wrap: wrap;

        .pyq-4-list-meta {
          display: flex;
          width: 100%;

          > .pyq-5-avatar-left {
            width: 8%;
            > .images-avatar {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              float: right;
              margin-right: 10px;
            }
          }

          > .pyq-6-avatar-right {
            width: 85%;
          }
        }
      }
    }
  }

  > .vue-erek-content-right {
    flex: 2 1;

    > .erek-team-1 {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      > .erek-team-2 {
        width: 50%;

        .team-image {
          width: 50px;
          height: 50%;
          border-radius: 50%;
          margin: 5px 0;
        }
      }
    }
  }

  > .divider-right {
    border-right: 20px solid #f5f7f9;
  }
}

.vue-erek-meta-item-cell {
  display: flex;
  width: 100%;
  padding: 16px 16px 32px;

  > .vue-erek-card-item-middle {
    flex: 1 0;
  }
}

.vue-erek-pyq-title {
  padding: 16px 0 16px 14px;
  font-size: 16px;
  min-height: 48px;
  color: rgba(0, 0, 0, 0.65);
  border-bottom: 1px solid #e8e8e8;
}

.text-sty-0 {
  margin-bottom: 3px;
}
.text-sty-1 {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
}
.text-sty-2 {
  color: #1890ff;
}
</style>
