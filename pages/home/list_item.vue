<template>
  <view :style="{ backgroundColor: bgColor }" class="list_item_template">
    list_item_template
  </view>
</template>

<script>
// @no-check
export default {
  name: "ListItem",
  props: {
    bgColor: {
      default: () => "",
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list_item_template {
  padding: 30rpx 20rpx;
  min-height: 60rpx;
  font-weight: 600;
  font-size: 30rpx;
}
</style>
