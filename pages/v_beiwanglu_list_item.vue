<template>
  <view :style="{ backgroundColor: bgColor }" class="list_item_template">
    <view style="margin-right: 20rpx" class="t-icon" :class="icon"></view>
    <view class="content">{{ contentText }}</view>
    <view class="r" @click="rightEventHandle">{{ rightText }}</view>
  </view>
</template>

<script>
// @no-check
export default {
  name: "ListItem",
  methods: {
    rightEventHandle() {
      this.$emit("rightClick");
    },
  },
  props: {
    bgColor: {
      default: () => "",
      type: String,
      required: true,
    },
    icon: {
      default: () => "",
      type: String,
      required: true,
    },
    contentText: {
      default: () => "",
      type: String,
    },
    rightText: {
      default: () => "完成",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.list_item_template {
  padding: 30rpx 30rpx;
  min-height: 100rpx;
  font-weight: 600;
  font-size: 30rpx;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .r {
    margin-left: auto;
  }
  .t-icon {
    width: 50rpx;
    height: 50rpx;
  }
}
</style>
