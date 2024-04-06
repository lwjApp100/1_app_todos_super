<template>
  <view class="ColorSelectTemplate">
    <view
      class="color_item"
      :class="current == item ? 'selected' : ''"
      v-for="item in colors"
      :key="item"
      :style="{ backgroundColor: item }"
      @click="select(item)"
    ></view>
  </view>
</template>

<script>
// @no-check
export default {
  name: "ColorSelectTemplate",
  data() {
    return {
      current: "",
      colors: [
        "#c5eff7",
        "#59abe3",
        "#e08283",
        "#faf0e6",
        "#86e2d5",
        "#f5deb3",
        "#ffe4e1",
        "#222222",
        "#99C1B9",
        "#4B4E6D",
        "#DDA77B",
        "#95A3B3",
        "#DB7F67",
        "#DBBEA1",
        "#A37B73",
        "#D34F73",
        "#3F292B",
        "#F46036",
        "#2E294E",
        "#1B998B",
        "#E71D36",
        "#C5D86D",
        "#650D1B",
        "#823200",
        "#EB5E55",
        "#3A3335",
        "#FDF0D5",
        "#C6D8D3",
        "#33658A",
        "#86BBD8",
        "#758E4F",
        "#F6AE2D",
        "#04773B",
        "#058E3F",
        "#C1AE7C",
        "#6C3A5C",
        "#E2C391",
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
.ColorSelectTemplate {
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
    &.selected {
      border: 3px solid #02a1d6;
    }
  }
}
</style>
