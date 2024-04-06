import {
  commonStorageGet,
  commonStorageSet,
} from "../commons/alone/storage.js";
import { commonTimeGetCurrentTime } from "../commons/alone/commonTime.js";

const bwlBase = "pqdbxbq_bwl_none_localkey";

// 备忘录

const createBwl = (content, bg, icon) => {
  if (!content) {
    throw new Error("传值不能为空");
  }
  return {
    content: content,
    time: commonTimeGetCurrentTime(),
    id: new Date().getTime(),
    bg,
    icon,
  };
};

/**
 * 获取备忘录列表数据
 */
export function bwlGetListApi() {
  const result = commonStorageGet(bwlBase, []);
  return result;
}

/**
 * 添加一条备忘录数据
 * @param {*} content
 */
export function bwlAddApi(content, bg, icon) {
  const result = commonStorageGet(bwlBase, []);
  const bwl = createBwl(content, bg, icon);
  result.push(bwl);
  commonStorageSet(bwlBase, result);
}
