<template>
  <div class="erek-card-list-container">
    <Row :gutter="16">
      <Col span="8" v-for="(item, index) in data" :key="item.id">
        <div class="erek-list-item">
          <div class="ant-list-item-content-single">
            <div class="erek-card-body">
              <div class="erek-card-meta">
                <div class="erek-card-meta-avatar">
                  <img class="erek-card-cardAvatar" :src="item.avatar" alt>
                </div>
                <div class="erek-card-meta-detail">
                  <div class="erek-card-meta-title">
                    <a>{{ item.departName}}</a>
                  </div>
                  <div class="erek-card-meta-description">
                    <div class="erek-card-ellipsis">{{ item.departDesc }}</div>
                  </div>
                </div>
              </div>
            </div>
            <ul class="erek-card-actions">
              <li style="width: 33.33%">
                <span>操作一</span>
              </li>
              <li style="width: 33.33%">
                <span>操作二</span>
              </li>
              <li style="width: 33.33%">
                <span>操作三</span>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
    <div style="margin: 30px 0px; overflow: hidden" v-show="pagination.hasPage">
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
  name: 'ErekCardItemComponents',
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    pagination: {
      type: Object,
      defualt: function () {
        return []
      }
    }
  },
  watch: {
    pagination: {
      handler(newVal) {
        console.log(newVal)
      }
    }
  },
}
</script>

<style scoped lang="scss">
.erek-card-list-container {
  width: 100%;
  color: rgba(0, 0, 0, 0.45);

  .erek-list-item {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 16px;
    background-color: #fff;

    .ant-list-item-content-single {
      max-width: 100%;
      display: block;
      flex: 1 1;
      justify-content: flex-start;
      outline: none;
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      border: 1px solid #e8e8e8;
      cursor: pointer;
      border-radius: 2px;

      .erek-card-body {
        padding: 24px;
        zoom: 1;

        .erek-card-meta {
          margin: -4px 0;
          zoom: 1;

          .erek-card-meta-avatar {
            padding-right: 16px;
            float: left;

            .erek-card-cardAvatar {
              width: 48px;
              height: 48px;
              border-radius: 48px;
            }
          }

          .erek-card-meta-detail {
            overflow: hidden;
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5;
            color: rgba(0, 0, 0, 0.65);

            .erek-card-meta-title {
              margin-bottom: 12px;
              font-size: 16px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: rgba(0, 0, 0, 0.85);
              font-weight: 500;

              > a {
                color: rgba(0, 0, 0, 0.85);
                display: inline-block;
                max-width: 100%;
              }
            }
            .erek-card-meta-description {
              color: rgba(0, 0, 0, 0.45);

              .erek-card-ellipsis {
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                position: relative;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                word-break: break-all;
                width: 100%;
              }
            }
          }
        }
      }

      .erek-card-actions {
        background: #f7f9fa;
        width: 100%;
        border-top: 1px solid #e8e8e8;
        zoom: 1;
        list-style: none;
        color: rgba(0, 0, 0, 0.45);
        padding: 2;
        cursor: pointer;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;

        > li {
          width: 50%;
          margin: 12px 0;
          border-right: 1px solid #e8e8e8;
        }
      }
    }
  }
}
.erek-card-actions > li:last-child {
  border: none !important;
}
</style>
