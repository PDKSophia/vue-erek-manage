<template>
  <div class="vue-erek-person-container">
    <div class="vue-user-item">
      <div class="vue-user-item-meta">
        <div class="vue-user-item-meta-avatar">
          <img class='vue-user-item-meta-avatar-image' :src='erekUser.avatar' alt="">
        </div>
        <div class="vue-user-item-meta-content">
          <h4 class="vue-user-item-meta-title">{{ erekUser.username }}</h4>
          <div class="vue-user-item-meta-summary">
            <span v-for='(tag, index) in erekUser.tag' :key="index">{{ tag }}<Divider type="vertical" v-if='index !== erekUser.tag.length-1' /></span>
          </div>
        </div>
      </div>
      <div class="vue-user-item-action">
        <ul>
          <a target="_blank" 
            class="vue-erek-link" 
            v-for='(item, key) in erekUser.link' 
            :key="key" 
            :href='item.target'
          >
            {{ item.text }}
            <Divider type="vertical" v-if='key !== erekUser.link.length-1' />
          </a>
        </ul>
      </div>
    </div>
    <vue-erek-br :bgColor='hrObj.bgColor' :height='hrObj.height' />
    <div class="vue-erek-article">
      <div class="vue-erek-badge-left">
        <vue-user-badge :badgeData='badgeData' />
      </div>
      <div class="vue-erek-content-right">
        <vue-erek-echarts-line
          :xAxis='xAxis'
          :yAxis='yAxis'
          :series='lineSeries'
          :itemList='itemList'
          :width='lineWidth'
          :height='lineHeight'
        ></vue-erek-echarts-line>
      </div>
    </div>
    <div class="vue-erek-meta-item-cell">
      <div class="vue-erek-card-item-middle">
        <vue-user-card-item :CardItem='bookCardItem'></vue-user-card-item>
      </div>
      <div class="vue-erek-card-item-middle">
        <vue-user-card-item :CardItem='bookCardItem'></vue-user-card-item>
      </div>
      <div class="vue-erek-card-item-middle">
        <vue-user-card-item :CardItem='bookCardItem'></vue-user-card-item>
      </div>
    </div>
  </div>
</template>

<script>
import VueErekBr from '../../../erekComponents/VueErekBr/vue-erek-br.vue'
import VueUserBadge from '../../../erekComponents/VueErekUserBadge/vue-user-badge.vue'
import VueErekEchartsLine from '../../../erekComponents/VueErekEcharts/erek-line.vue'
import VueErekEchartsRadar from '../../../erekComponents/VueErekEcharts/erek-radar.vue'
import VueUserCardItem from '../../../erekComponents/VueErekUserCardItem/CardRankItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'ErelUserInformation',
  components: {
    VueErekBr,
    VueUserBadge,
    VueErekEchartsLine,
    VueErekEchartsRadar,
    VueUserCardItem
  },
  computed: mapState({
    erekUser: state => state.user.erekUser
  }),
  data () {
    return {
      hrObj: {
        bgColor: '#f5f7f9',
        height: '20px'
      },
      badgeData: {}, // 徽章
      xAxis: { // x轴 
        data: []
      }, 
      yAxis: { // y轴
        min: null,
        max: null
      },
      itemList: [],
      lineWidth: '100%',
      lineHeight: '250px',
      lineSeries: [], // 折线数据

      radarWidth: '100%',
      radarHeight: '300px',
      radarSeries: [], // 雷达图数据
      radarIndicator: [], // 雷达图配置
      movieCardItem: {},
      bookCardItem: {}
    }
  },
  mounted() {
    // 发送请求获取所有个人中心的数据
    this.$api.fetchAllListData().then(res => {
      this.badgeData = Object.assign({}, {
        namespace: '获得的徽章',
        valueColor: '#52cdb7',
        data: res.data
      })
      // 折线图 - 近期日访问量
      let loginStep = res.loginStep
      for (let i = 0; i < loginStep.timeRange.length; i++) {
        this.xAxis.data.push(loginStep.timeRange[i])
      }
      this.yAxis.min = loginStep.countRange[0]
      this.yAxis.max = loginStep.countRange[1]

      for (let j = 0; j < loginStep.data.length; j++) {
        let normalColor = this.$utils.getColorFromArray()
        let config = {
          text: loginStep.data[j].text,
          badgeColor: normalColor
        }
        this.itemList.push(config)
        let obj = {
          data: loginStep.data[j].data,
          type: 'bar',
          barWidth: 15,
          itemStyle: {
            normal: {
              color: normalColor,  // 设置折线点颜色
            }
          },
          smooth: true // 折线 圆滑
        }
        this.lineSeries.push(obj)
      }
      // 雷达图 - 个人技能
      let skill = res.skill
      let radObj = {
        type: 'radar',
        data: [],
      }
      Object.keys(skill.mySkill).forEach((key) => {
        let dataObj = {
          value: [],
          name: skill.mySkill[key]
        }
        for (let j = 0; j < skill.mySkill.data.length; j++) {
          dataObj.value.push(skill.mySkill.data[j].value)
          this.radarIndicator.push(skill.mySkill.data[j].name)
        }
        radObj.data.push(dataObj)
      })
      this.radarSeries.push(radObj)
      this.radarIndicator = this.$utils.uniqueArray(this.radarIndicator)
      // 喜欢的电影列表
      let movieObj = {
        title: '喜欢的电影',
        subtitle: '更多',
        data: []
      }
      for (let n = 0; n < res.MovieList.length; n++) {
        movieObj.data.push(res.MovieList[n])
      }
      this.movieCardItem = JSON.parse(JSON.stringify(movieObj))
      // 喜欢的书籍列表
      let bookObj = {
        title: '喜欢的书籍',
        subtitle: '购买',
        data: []
      }
      for (let n = 0; n < res.BookList.length; n++) {
        bookObj.data.push(res.BookList[n])
      }
      this.bookCardItem = JSON.parse(JSON.stringify(bookObj))
    })
  },
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
            }
          }
      }
  }
}
.vue-erek-article {
  display: flex;
  width: 100%;
  margin-bottom: 30px;

  > .vue-erek-badge-left {
    flex: 3 0;
  }

  > .vue-erek-content-right {
    flex: 2 1;
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
</style>
