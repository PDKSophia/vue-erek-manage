<template>
  <div class="vue-erek-person-container">
    <div class="vue-user-item">
      <div class="vue-user-item-meta">
        <div class="vue-user-item-meta-avatar">
          <img class='vue-user-item-meta-avatar-image' src="../../../assets/avatar1.jpeg" alt="">
        </div>
        <div class="vue-user-item-meta-content">
          <h4 class="vue-user-item-meta-title">彭道宽</h4>
          <div class="vue-user-item-meta-summary">
            Vue-Erek-Manage 开发者 | 前端工程师 | 平台维护者
          </div>
        </div>
      </div>
      <div class="vue-user-item-action">
        <ul>
          <a href='https://github.com/PDKSophia/vue-erek-manage' target="_blank" class="vue-erek-link">Github</a>
          <Divider type="vertical" />
          <a href='https://juejin.im/user/594ca8a35188250d892f4139/posts' target="_blank" class="vue-erek-link">掘金</a>
          <Divider type="vertical" />
          <a href='https://weibo.com/u/2971991985' target="_blank" class="vue-erek-link">微博</a>
          <Divider type="vertical" />
          <a href='https://github.com/PDKSophia/blog.io' target="_blank" class="vue-erek-link">博客</a>
        </ul>
      </div>
    </div>
    <erek-br :bgColor='hrObj.bgColor' :height='hrObj.height'></erek-br>
    <div class="vue-erek-article">
      <div class="vue-erek-badge-left">
        <vue-erek-badge :badgeData='badgeData'></vue-erek-badge>
      </div>
      <div class="vue-erek-content-right">
        <vue-erek-badge :badgeData='badgeData'></vue-erek-badge>
      </div>
    </div>
  </div>
</template>

<script>
import ErekBr from '../../../common/ErekBr/vue-erek-br.vue'
import VueErekBadge from '../../../components/Badge/vue-erek-badge.vue'

export default {
  name: 'ErelUserInformation',
  components: {
    ErekBr,
    VueErekBadge
  },
  data () {
    return {
      hrObj: {
        bgColor: '#f5f7f9',
        height: '30px'
      },
      badgeData: {
        namespace: '获得的徽章',
        valueColor: '#52cdb7',
        data: [
          {
            name: '成就值',
            data: [
              {
                value: 20,
                text: '查看量'
              },
              {
                value: 62,
                text: '下载量'
              },
              {
                value: 96,
                text: '点击量'
              }
            ]
          },
          {
            name: '钱包',
            data: [
              {
                value: 861,
                text: 'Q币'
              },
              {
                value: 876,
                text: '优惠券'
              },
              {
                value: 9172,
                text: '余额'
              }
            ]
          },
          {
            name: '钱包',
            data: [
              {
                value: 861,
                text: 'Q币'
              },
              {
                value: 876,
                text: '优惠券'
              },
              {
                value: 9172,
                text: '余额'
              }
            ]
          },
          {
            name: '钱包',
            data: [
              {
                value: 861,
                text: 'Q币'
              },
              {
                value: 876,
                text: '优惠券'
              },
              {
                value: 9172,
                text: '余额'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.vue-erek-person-container {
  width: 100%;
  color: rgba(0, 0, 0, 0.45);

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
                  color: rgba(0, 0, 0, 0.65)
              }
              > .vue-user-item-meta-summary {
                  font-size: 14px;
                  line-height: 22px;
                  color: rgba(0, 0, 0, 0.45)
              }
          }
      }

      > .vue-user-item-action {
          display: flex;
          flex: 1 0;
          justify-content: flex-end;
          align-items: center;
          font-size: 14px;

          > ul{ 
            list-style: none;
            display: inline-flex;
            text-align: center;
            justify-content: center;
            align-items: center;

            > .vue-erek-link {
                color: #2894FF;
                width: 66px;
            }
          }
      }
  }
}
.vue-erek-article {
  display: flex;
  width: 100%;

  > .vue-erek-badge-left {
    flex: 2 0;
  }

  > .vue-erek-content-right {
    flex: 2 1;
  }
}
</style>
