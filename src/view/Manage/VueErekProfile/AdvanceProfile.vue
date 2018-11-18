<template>
  <div class="vue-erek-profile-container">
    <header>
      <div class="vue-erek-meta-header">
        <div class="vue-erek-meta-flex-row">
          <h1>地铁车辆通用技术条件</h1>
          <div class="vue-erek-meta-actions">
            <Row :gutter="6">
              <Col span="12">
                <Button @click='handleActionOne'>操作一</Button>
              </Col>
              <Col span="12">
                <Button @click='handleActionTwo'>操作二</Button>
              </Col>
            </Row>
          </div>
        </div>
        <div class="vue-erek-meta-flex-row">
          <div class="vue-erek-meta-content">
            <Row :gutter="30">
              <Col span="12">
                <p>仓库编号 : VErek-2018-1031</p>
                <p>创建人 :	彭道宽</p>
                <p>创建时间	: 2018-10-31 19:20</p>
              </Col>
              <Col span="12">
                <p>所属组织 : Github</p>
                <p>所属分类 : Erek-Net</p>
                <p>备注 : Erek-Net下的一款开源后台管理快速开发框架</p>
              </Col>
            </Row>
          </div>
          <div class="vue-erek-meta-extraContent">
            <Row :gutter="30">
              <Col span="12">
                <p class='meta-extra-label'>状态</p>
                <p class='meta-extra-value'>开发中</p>
              </Col>
              <Col span="12">
                <p class='meta-extra-label'>总额</p>
                <p class='meta-extra-value'>¥498.00</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'VueErekAdvanceProfile'
}
</script>

<style lang='scss' scoped>
.vue-erek-profile-container {
  width: 100%; 
  
  .vue-erek-meta-header {
    padding: 30px 40px;
  }
}
.vue-erek-meta-flex-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-variant: tabular-nums;
  color: rgba(0,0,0,.85);
  box-sizing: border-box;
  margin-bottom: 16px;
  justify-content: space-between;

  .vue-erek-meta-extraContent {
    text-align: right;
  }

  .vue-erek-meta-content {
    width: 63%;
    padding-left: 10px;
    line-height: 32px;
    font-size: 16px;
    color: rgba(0,0,0,.55);
  }

  .vue-erek-meta-extraContent {
    padding-top: 6px;
    line-height: 36px;
    margin-left: 10px;
    text-align: right;
    
    .meta-extra-label {
        font-size: 16px;
        color: rgba(0,0,0,.45);
    }

    .meta-extra-value {
        font-size: 22px;
        color: rgba(0,0,0,.8);
    }
  }
}
</style>
