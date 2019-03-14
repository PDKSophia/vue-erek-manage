<template>
  <div class="erek-wrapper-box">
    <header>
      <vue-erek-main-text :ErekPath="ErekPath" :ErekTitle="ErekTitle" :ErekSummary="ErekSummary"/>
    </header>
    <article>
      <div class="erek-resume-navbar">
        <ul class="erek-resume-ul-box">
          <li
            v-for="(item, index) in actualData"
            :key="index"
            @click="handleErekLink(item.STATUS)"
          >{{ item.TEXT }}</li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import VueErekMainText from '../../components/PageComponents/Index/MainText.vue';
import { app } from 'js/app/index-config';
export default {
  name: 'ErekLogin',
  components: {
    VueErekMainText
  },
  data() {
    return {
      ErekPath: '',
      ErekTitle: '',
      ErekSummary: '',
      actualData: []
    };
  },
  methods: {
    handleErekLink(status) {
      switch (status) {
        case 'erek-origincode':
          window.location.href = 'https://github.com/PDKSophia/vue-erek-manage';
          break;
        case 'erek-docs':
          window.location.href =
            'https://github.com/PDKSophia/vue-erek-manage/wiki';
          break;
        default:
          this.$router.push({
            path: '/login'
          });
          break;
      }
    }
  },
  mounted() {
    this.ErekPath = app.APP_LOGO;
    this.ErekTitle = app.APP_NAME;
    this.ErekSummary = app.APP_SUMMARY;
    this.actualData = [...app.APP_MENU];
  }
};
</script>

<style scoped lang="scss">
.erek-wrapper-box {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fafafa;
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
    color: #27292c;

    > li {
      font-size: 1rem;
    }
    li:hover {
      color: #27292c;
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
