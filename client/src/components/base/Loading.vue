<template>
  <div class="load-pup">
    <div class="load-cont">
      <div class="circle">
        <div class="circle-outer borderTop"></div>
        <div class="circle-outer borderBot"></div>
        <div class="circle-inner"></div>
      </div>
      <p class="bind-loadTxt">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    text: {
      type: String,
      default: "加载中..."
    }
  }
};
</script>

<style scoped lang="scss">
/*loading样式*/
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.load-pup {
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  .load-cont {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin: -61px auto 0 auto;
    height: 100px;
    width: 100px;
    background: #000;
    opacity: 0.5;
    border-radius: 10px;
    text-align: center;
    z-index: 999;
    .circle {
      width: 36px;
      height: 36px;
      margin: 20px auto;
      -webkit-animation: rotate 0.75s 0s linear infinite;
      animation: rotate 0.75s 0s linear infinite;
      .circle-outer {
        margin: 0 auto;
        background-color: #ffffff;
        width: 36px;
        height: 18px;
      }
      .borderTop {
        border-top-right-radius: 18px;
        border-top-left-radius: 18px;
        background-image: -webkit-linear-gradient(to left, #818181, #000000);
        background-image: linear-gradient(to left, #818181, #000000);
      }
      .borderBot {
        border-bottom-right-radius: 18px;
        border-bottom-left-radius: 18px;
        background-image: -webkit-linear-gradient(to left, #818181, #fff);
        background-image: linear-gradient(to left, #818181, #fff);
      }
      .circle-inner {
        margin: 0 auto;
        margin-top: -33px;
        width: 30px;
        height: 30px;
        background-color: #000;
        border-radius: 15px;
      }
    }
    .bind-loadTxt {
      color: #fff;
      font-size: 15px;
      height: 17px;
      line-height: 17px;
      font-weight: bold;
    }
  }
}
</style>