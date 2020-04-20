<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">小米商城</a>
      <span>|</span>
      <a href="javascript:;">MIUI</a>
      <span>|</span>
      <a href="javascript:;">米家</a>
      <span>|</span>
      <a href="javascript:;">米聊</a>
      <span>|</span>
      <a href="javascript:;">小米商城隐私政策</a>
      <span>|</span>
      <a href="javascript:;">小米商城用户协议</a>
      <span>|</span>
      <a href="javascript:;">问题反馈</a>
    </div>
    <div class="copy">
      Copyright ©2019
      <span class="domain">mi.futurefe.com</span> All Rights Reserved
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copy {
    .domain {
      color: $colorA;
    }
  }
}
</style>