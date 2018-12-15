### 用户徽章
徽章配置在文件夹 `src / components / VueErekUserBadge` 中，可能不怎么好，如果有bug问题，请提issue，或者加入我，一起共同维护这个项目。

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/docs/docs-badge-1.png'>

<strong>Table Props: </strong>

props | type | default | description
---|---|---|---
badgeData | Object | { } | 显示的数据

<strong>badgeData example: </strong>
```javascript
  badgeData: {
    namespace: '获得的徽章',
    valueColor: '#52cdb7',
    data: [
      {
        name: '成就值',
        data: [
          { value: 6152, text: '查看量' },
          { value: 4522, text: '下载量' },
          { value: 192761, text: '点击量' }
        ]
      }
    ]
  }
```

<strong>Table Use: </strong>

```html
  <template>
    <!-- 其他代码 -->

    <vue-user-badge :badgeData='badgeData' />

    <!-- 其他代码 -->
  </template>

  <script>
    import VueUserBadge from '../../../components/BadgeComponents/vue-user-badge.vue'

    export default {
      components: {
        VueUserBadge
      },

      data () {
        return {
          badgeData: {}, // 徽章  
        }  
      }
    }

  </script>
```
