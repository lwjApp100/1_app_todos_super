<template>
  <view
    v-show="showRef"
    :class="position"
    :style="{ backgroundColor: bg_color }"
    style="animation-duration: 0.3s"
    class="ToastTemplate lb animation-slide-right"
  >
    {{ content }}
  </view>
</template>

<script>
// @no-check
export default {
  name: "ToastTemplate",
  data() {
    return {
      showRef: false,
      count: 0,
    };
  },
  props: {
    content: {
      type: String,
      default: () => "",
    },
    position: {
      type: String,
      default: () => "lb",
    },
    show: {
      type: Number,
      default: () => 0,
    },
    type: {
      type: String,
      default: () => "success",
    },
  },
  computed: {
    bg_color() {
      let bg = "#59abe3";
      if (this.type == "success") {
        bg = "#59abe3";
      } else if (this.type == "warning") {
        bg = "#f7a54a";
      } else if (this.type == "error") {
        bg = "#f59ca6";
      }
      return bg;
    },
  },
  watch: {
    show(newv, oldv) {
      if (this.count < 1) {
        this.count++;
        this.showRef = true;
        setTimeout(() => {
          this.showRef = false;
          this.count = 0;
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ToastTemplate {
  position: fixed;
  z-index: 99999;
  bottom: calc(var(--window-bottom) + 10rpx);
  padding: 20rpx;
  border-radius: 10rpx;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 700;
  align-items: center;
  &.lb {
    bottom: calc(var(--window-bottom) + 10rpx);
    left: 20rpx;
  }
  &.rb {
    bottom: calc(var(--window-bottom) + 10rpx);
    right: 20rpx;
  }
}
</style>
