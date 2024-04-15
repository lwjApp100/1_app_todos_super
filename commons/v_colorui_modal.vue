<template>
  <view class="ColorUIModalTemplate">
    <view class="cu-modal" :class="isShow ? 'show' : ''">
      <view class="cu-dialog">
        <view class="cu-bar bg-white justify-start">
          <view class="text-bold" style="margin-left: 20rpx">{{ title }}</view>
          <view class="action" style="margin-left: auto" @tap="hideModal">
            <text class="cuIcon-close text-red"></text>
          </view>
        </view>
        <slot name="content"></slot>
        <view class="cu-bar bg-white justify-end">
          <view class="action">
            <button
              style="color: gray"
              class="cu-btn line-green text-green"
              @tap="hideModal"
            >
              取消
            </button>
            <button
              style="color: white; background-color: #498bc8"
              class="cu-btn margin-left"
              @tap="confirm"
            >
              确定
            </button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// @no-check
export default {
  name: "ColorUIModalTemplate",
  props: {
    isShow: {
      type: Boolean,
      default: () => true,
      required: true,
    },
    title: {
      type: String,
      default: () => "系统提示",
    },
  },
  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style lang="scss" scoped>
.cu-modal.show {
  transition-duration: 0.1s;
}
</style>
