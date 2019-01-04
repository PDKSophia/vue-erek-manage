<template>
  <div class="erek-wrapper-box">
    <header>
      <vue-erek-main-text
        :ErekPath="ErekPath"
        :ErekTitle="ErekTitle"
        :ErekSummary="ErekSummary"
      />
    </header>
    <article>
      <div class="erek-resume-navbar">
        <ul class="erek-resume-ul-box">
          <li
            v-for="(item, index) in actualData"
            :key="index"
            @click="handleErekLink(item.status)"
            >{{ item.text }}</li
          >
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import VueErekMainText from '../../components/PageComponents/Index/MainText.vue';

export default {
  name: 'ErekLogin',
  components: {
    VueErekMainText
  },
  data() {
    return {
      ErekPath: require('../../assets/logo.png'),
      ErekTitle: 'Vue-Erek-Manage',
      ErekSummary: '一套基于 iView UI 的 Vue.js 后台管理系统',
      actualData: [
        {
          text: '文档',
          status: 'erek-docs'
        },
        {
          text: 'Github',
          status: 'erek-origincode'
        },
        {
          text: '登陆',
          status: 'erek-login'
        }
      ]
    };
  },
  methods: {
    handleErekLink(status) {
      console.log(status);
      switch (status) {
        case 'erek-origincode':
          window.location.href = 'https://github.com/PDKSophia/vue-erek-manage';
          break;
        case 'erek-docs':
          window.location.href =
            'https://github.com/PDKSophia/vue-erek-manage/wiki';
          break;
        case 'erek-login':
          this.$router.push({
            path: '/login'
          });
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.erek-wrapper-box {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #27292c;
  text-align: center;
}
.erek-admin-login {
  width: 20rem;
  height: 23rem;
  position: absolute;
  background: rgba(36, 36, 36, 0.3);
  z-index: 2018;
  right: 5%;
  top: 25%;
  text-align: center;
  padding-top: 1rem;

  > .erek-form-login {
    padding: 1rem 10%;
  }
}
.btn-disabled {
  background-color: #ccc;
  color: #232323;
  border: 1px solid #232323;
}
.btn-disabled:hover {
  background-color: #ccc;
  color: #232323;
  border: 1px solid #232323;
}
.erek-resume-navbar {
  margin: 3rem 40%;

  > ul,
  li {
    list-style: none;
  }

  > .erek-resume-ul-box {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    justify-content: space-around;
    color: rgb(250, 251, 252);

    > li {
      font-size: 1rem;
    }
    li:hover {
      color: rgb(250, 251, 252);
      cursor: pointer;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 420px) {
  .erek-resume-navbar {
    margin: 3rem;

    > .erek-resume-ul-box {
      > li {
        font-size: 0.88rem;
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .erek-resume-navbar {
    margin: 3rem 15rem;

    > .erek-resume-ul-box {
      > li {
        font-size: 0.88rem;
      }
    }
  }
}
</style>
