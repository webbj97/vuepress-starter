<!-- 组件说明 -->
<template>
  <div class="home-readme">
    <div class="home-readme__bg">
      <img
        class="home-readme__img"
        :src="$withBase('./logo.gif')"
        autoplay="autoplay"
        loop="loop"
        muted
      />
    </div>
    <a-button
      type="link"
      size="large"
      @click="start"
      class="home-readme__btn"
    >
      开始体验
    </a-button>
  </div>
</template>

<script>
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/lib/button/style/css";

export default {
  name: "Home",
  components: {
    "a-button": Button,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
  },
  methods: {
    start() {
      window.location.href = "/guide";
    },
  },
};
</script>

<style>

.home-readme{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home-readme__bg{
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.home-readme__img{
    position: fixed;
    right: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
}
.home-readme__btn{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -150px;
    width: 300px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 50px;
}
</style>