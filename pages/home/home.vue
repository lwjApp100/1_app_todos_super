<template>
  <view class="home_page">
    <cu-custom bgColor="tabbar_background" :isBack="false">
      <block slot="backText">
        <span style="color: white; font-weight: 700">备忘录</span>
      </block>
      <block slot="right">
        <span style="color: white; margin-right: 20rpx">完成历史</span>
      </block>
    </cu-custom>
    <view class="list_contaienr">
      <ListItem bgColor="#c5eff7"></ListItem>
      <ListItem bgColor="#59abe3"></ListItem>
      <ListItem bgColor="#e08283"></ListItem>
    </view>
  </view>
</template>

<script>
import ListItem from "./list_item.vue";
// @no-check
export default {
  name: "Home",
  components: {
    ListItem,
  },
};
</script>

<style lang="scss" scoped>
@import "../../commons/alone/utils.scss";
.home_page {
  .list_contaienr {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
    padding: 20rpx;
    height: getPageContentHeight();
    overflow: auto;
  }
}
</style>
