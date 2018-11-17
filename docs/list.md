### 关于列表
所有 `vue-erek-manage` 列表页均在文件夹 src / erekPages 中，如果有bug问题，请提issue，或者加入我，一起共同维护这个项目。

#### 表格列表
你可以新建一个 .vue 文件，将 `erek / TableList / Index.vue` 的代码copy到你的文件中，也可以直接在 TableList / Index.vue 文件中修改

【注意】：请将 `columns` 修改成你显示的数据

<strong>Table Props: </strong>

props | type | default | description
---|---|---|---
border | Boolean |  true | 是否显示纵向边框
stripe | Boolean | true | 是否显示间隔斑马纹	
size | String | small | 表格尺寸，可选值为 large、small、default 或者不填
tableData | Array | [ ] | 显示的数据

<strong>tableData example: </strong>
```javascript
  tableData: [
    {
      id: 1,
      username: '彭道宽',
      staffID: 1982,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      department: '研发部',
      type: '负责人',
      status: 'online',
      phone: '189****8869',
      time: 1539670042000
    },
    {
      id: 2,
      username: '懒羊羊',
      staffID: 2938,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      department: '技术部',
      type: '员工',
      status: 'exit',
      phone: '182****8321',
      time: 1539630042000
    },
  ]
```

<strong>Table Events: </strong>
当你点击 “查看” 、 “编辑” 、 “删除” 时，__会将当前点击的那条索引以及点击的类型返回__
```javascript
  handleEmitTableValue (value) {
    console.log(value) // 索引
    console.log(type) // 查看 / 编辑 / 删除
  }
```

<strong>Table Use: </strong>

```html
  <template>
    <!-- 其他代码 -->

    <erek-table 
      :border='tableObj.border'
      :stripe='tableObj.stripe'
      :size='tableObj.size'
      :tableData='tableObj.tableData'
      @onHandleClickItem='handleEmitTableValue'
    />

    <!-- 其他代码 -->
  </template>

  <script>
    import ErekTable from '../../../erekPages/TableList/Index.vue' 
    
    export default {
      components: {
        ErekTable
      },

      data () {
        return {
          tableObj: {
            border: false,
            stripe: true,
            size: 'large',
            tableData: [], // 该数据应为api请求后的数据
          },    
        }  
      }

      methods: {
        handleEmitTableValue (value) {
          console.log(value) // 索引
          console.log(type) // 查看 / 编辑 / 删除
        }
      }
    }

  </script>
```

--------

#### 标准列表
你可以新建一个 .vue 文件，将 `erek / StandList / Index.vue` 的代码copy到你的文件中，也可以直接在 StandList / Index.vue 文件中修改

<strong>StandList Props: </strong>

props | type | default | description
---|---|---|---
standlist | Array | [ ] | 显示的数据

<strong>tableData example: </strong>
```javascript
  standlist: [
    {
      id: 1,
      username: '彭道宽',
      staffID: 1982,
      content: '那是一种内在的东西， 他们到达不了，也无法触及的',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      department: '研发部',
      phone: '189****8869',
    },
    {
      id: 2,
      username: '懒羊羊',
      staffID: 2938,
      content: '那是一种内在的东西， 他们到达不了，也无法触及的',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      department: '技术部',
      phone: '182****8321',
    },
  ]
```

<strong>Table Events: </strong>
当你点击 “查看” 、 “编辑” 、 “删除” 时，__会将当前点击的那条数据以及点击的类型返回__
```javascript
  handleEmitClickItem (item, type) {
    console.log(item) // click 的那条数据
    console.log(type) // 查看 / 编辑 / 删除
  }
```

<strong>Table Use: </strong>

```html
  <template>
    <!-- 其他代码 -->

    <erek-stand-list
      :standlist='standlist'
      @onHandleClickStandItem='handleEmitClickItem'
    />

    <!-- 其他代码 -->
  </template>

  <script>
    import ErekStandList from '../../../erekPages/StandardList/Index.vue'
    
    export default {
      components: {
        ErekStandList
      },

      data () {
        return {
          standlist: [] // 该数据应为api请求后的数据
        }
      },

      methods: {
        handleEmitClickItem (value) {
          console.log(item) // click 的那条数据
          console.log(type) // 查看 / 编辑 / 删除
        }
      }
    }

  </script>
```