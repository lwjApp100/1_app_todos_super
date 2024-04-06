<template>
  <view class="home_page">
    <cu-custom bgColor="tabbar_background" :isBack="false">
      <block slot="backText">
        <span style="color: white; font-weight: 700">备忘录</span>
      </block>
      <block slot="right">
        <view class="right_box">
          <span style="color: white; margin-right: 20rpx">完成历史</span>
          <span
            @click="addEventHandle"
            style="color: white; margin-right: 20rpx; font-size: 80rpx"
          >
            +
          </span>
        </view>
      </block>
    </cu-custom>
    <view class="list_contaienr">
      <ListItem
        v-for="item in list"
        :key="item.id"
        :icon="item.icon"
        :contentText="item.content"
        :bgColor="item.bg"
        @rightClick="rightClickEventHandle(item)"
      >
      </ListItem>
    </view>
    <!--  -->
    <ColorUIModalTemplate
      title="添加"
      :isShow="showModal"
      @hideModal="hideModalEventHandle"
      @confirm="confirmEventHandle"
    >
      <block slot="content">
        <input
          v-model="input_value"
          placeholder="请输入内容"
          style="height: 60rpx; border: 3px solid teal; box-sizing: border-box"
          name="input"
        />
        <ListItem
          :icon="selecte_icon"
          :contentText="input_value"
          :bgColor="selecte_color"
          rightText=""
        ></ListItem>
        <view style="height: 300rpx; overflow: auto">
          <ColorSelectTemplate
            @changed="colorChangedEventHandle"
          ></ColorSelectTemplate>
        </view>
        <view style="height: 300rpx; overflow: auto">
          <IconSelectTemplate
            @changed="iconChangedEventHandle"
          ></IconSelectTemplate>
        </view>
      </block>
    </ColorUIModalTemplate>
    <ToastTemplate :content="toast_content" :show="show_toast"></ToastTemplate>
  </view>
</template>

<script>
import ListItem from "./list_item.vue";
import { bwlGetListApi, bwlAddApi } from "../../services/apiService.js";
import ColorUIModalTemplate from "../../commons/dependent/colorui_modal.vue";
import ColorSelectTemplate from "../../commons/dependent/colors_select.vue";
import ToastTemplate from "../../commons/dependent/toast.vue";
import IconSelectTemplate from "../../commons/dependent/icons_select.vue";

// @no-check
export default {
  name: "Home",
  data() {
    return {
      showModal: false,
      list: [],
      input_value: "",
      toast_content: "",
      selecte_color: "",
      selecte_icon: "",
      show_toast: 0,
    };
  },
  components: {
    ListItem,
    ColorUIModalTemplate,
    ColorSelectTemplate,
    ToastTemplate,
    IconSelectTemplate,
  },
  onLoad() {
    this.getList();
  },
  methods: {
    iconChangedEventHandle(c) {
      this.selecte_icon = c;
    },
    colorChangedEventHandle(c) {
      this.selecte_color = c;
    },
    confirmEventHandle() {
      try {
        const str = this.input_value.replace(/" "/g, "");
        if (!str || !this.selecte_color || !this.selecte_icon) {
          this.toast_content = "内容不能为空且必须选择颜色和图标";
          this.show_toast++;
          return;
        }
        bwlAddApi(this.input_value, this.selecte_color, this.selecte_icon);
        this.getList();
        this.showModal = false;
        setTimeout(() => {
          this.reset();
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
    reset() {
      this.input_value = "";
      this.selecte_color = "";
      this.selecte_icon = "";
    },
    hideModalEventHandle() {
      this.showModal = false;
    },
    addEventHandle() {
      this.showModal = true;
    },
    getList() {
      this.list = bwlGetListApi();
      console.log(this.list);
    },
    rightClickEventHandle(item) {
      console.log(item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../commons/alone/utils.scss";
.home_page {
  .right_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list_contaienr {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
    padding: 20rpx;
    height: calc(
      100vh - var(--status-bar-height) - 50px - var(--window-bottom)
    );
    overflow: auto;
  }
}
</style>
