/**
 * 本地存储
 * @param {*} key
 * @param {*} data
 */
export function commonStorageSet(key, data) {
  uni.setStorageSync(key, data);
}

/**
 * 读取存储
 * @param {*} key
 * @param {*} defaultValue
 */
export function commonStorageGet(key, defaultValue = null) {
  const value = uni.getStorageSync(key);
  return value || defaultValue;
}
