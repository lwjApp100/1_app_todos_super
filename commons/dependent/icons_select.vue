<template>
  <view class="IconSelectTemplate">
    <view
      class="color_item t-icon"
      :class="current == item ? 'selected ' + item : ' ' + item"
      v-for="item in colors"
      :key="item"
      @click="select(item)"
    ></view>
  </view>
</template>

<script>
// @no-check
export default {
  name: "IconSelectTemplate",
  data() {
    return {
      current: "",
      colors: [
        "t-icon-computer-1",
        "t-icon-dianying",
        "t-icon-huoguo",
        "t-icon-set",
        "t-icon-feiji",
        "t-icon-umbrella",
        "t-icon-diqiapian",
        "t-icon-qiapian",
        "t-icon-qiandai",
        "t-icon-qianbao",
        "t-icon-yundong",
        "t-icon-xiaoxi",
        "t-icon-daibanshixiang",
        "t-icon-icon-test",
        "t-icon-kuaidi",
        "t-icon-yinle",
        "t-icon-weibiaoti-",
        "t-icon-yundongku",
        "t-icon-liaotian",
        "t-icon-yundongbao",
        "t-icon-CY",
        "t-icon-emoji-shuijue",
        "t-icon-zhongchangxiuxi",
        "t-icon-yinle1",
        "t-icon-zhishuzaolinSVG",
        "t-icon-restaurant00014",
        "t-icon-dushu",
        "t-icon-guoshu",
        "t-icon-dache1",
        "t-icon-dache",
        "t-icon-kaorou",
        "t-icon-shangbanxiaban",
        "t-icon-shouji",
        "t-icon-shuijue",
        "t-icon-youwanjingdian",
        "t-icon-yinle2",
        "t-icon-a-20230816meishitubiao_huoguo-tonghuoguo",
        "t-icon-iconfontqian",
        "t-icon-yao",
        "t-icon-xigua",
        "t-icon-daocha",
        "t-icon-kafei",
        "t-icon-pingguo",
        "t-icon-meishi",
        "t-icon-shuben",
        "t-icon-shejiao",
        "t-icon-chizi",
        "t-icon-shejiaotubiao-18",
        "t-icon-ruler",
        "t-icon-iconfont_vol2",
        "t-icon-xinwenbaozhi",
      ],
    };
  },
  methods: {
    select(c) {
      this.current = c;
      this.$emit("changed", c);
    },
  },
};
</script>

<style lang="scss" scoped>
.IconSelectTemplate {
  height: 80rpx;
  display: flex;
  justify-content: flex-start;
  gap: 20rpx;
  flex-wrap: wrap;
  align-items: center;
  padding: 20rpx;
  .color_item {
    width: 100rpx;
    height: 50rpx;
    &.t-icon {
      width: 30px;
      height: 30px;
    }

    &.selected {
      border: 3px solid #02a1d6;
    }
  }
}
</style>
