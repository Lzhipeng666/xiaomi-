<template>
  <div class="nav-bar" :class="{'is_fixed':isFiexed}">
    <div class="container">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href>概述</a>
        <span>|</span>
        <a href>参数</a>
        <span>|</span>
        <a href>用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  props: {
    title: String
  },
  data() {
    return {
      isFiexed: false
    };
  },
  mounted() {
    //   检测浏览器滚动
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      // 获取浏览器的高度，因为浏览器有兼容性所以多取几个值
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFiexed = scrollTop > 152 ? true : false;
    }
  },
  destroyed() {
    //   销毁
    window.removeEventListener("scroll", this.initHeight, false);
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;
  z-index: 10;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>