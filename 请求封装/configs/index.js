// eslint-disable-next-line no-undef
const environment = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

// 外部js引用, 如 xx.service.js 中需要获取应用配置信息
export const config = require(`./modules/${environment}.config.js`);

export default {
  // 组件内部使用：
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$conf', {
      enumerable: true,
      get() {
        return config;
      }
    });
  }
};
