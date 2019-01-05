<template>
  <div>
    <img :src="logo" class="logo" alt="logo" />
    <p class="vue-erek-title">{{ title }}</p>
    <p class="vue-erek-summary">{{ summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'VueErekMainText',
  props: {
    ErekPath: {
      type: String,
      default: ''
    },
    ErekTitle: {
      type: String,
      default: ''
    },
    ErekSummary: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      logo: null,
      title: null,
      summary: null
    };
  },
  watch: {
    ErekPath(newVal) {
      this.$nextTick(() => {
        this.logo = newVal;
      });
    },
    ErekTitle(newVal) {
      this.$nextTick(() => {
        this.title = newVal;
      });
    },
    ErekSummary(newVal) {
      this.$nextTick(() => {
        this.summary = newVal;
      });
    }
  },
  mounted() {
    this.logo = this.ErekPath;
    this.title = this.ErekTitle;
    this.summary = this.ErekSummary;
  }
};
</script>

<style scoped lang="scss">
img.logo {
  margin-top: 11%;
  width: 7.2rem;
  height: 7.2rem;
}
p.vue-erek-title {
  font-weight: 600;
  font-size: 1.68rem;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 1.82rem;
}
p.vue-erek-summary {
  font-size: 1.24rem;
  color: #27292c;
  margin-top: 2rem;
  margin-bottom: 3rem;
}
@media screen and (min-width: 320px) and (max-width: 420px) {
  img.logo {
    margin-top: 22%;
    width: 6.2rem;
    height: 6.2rem;
  }
  p.vue-erek-title {
    font-size: 1.3rem;
    margin-top: 0.4rem;
  }
  p.vue-erek-summary {
    font-size: 0.88rem;
    margin-top: 3rem;
  }
}
</style>
