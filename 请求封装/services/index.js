import camelCase from 'lodash/camelCase';

const services = {};

export default {
  install(Vue) {
    const requireModule = require.context('./', true, /^((?!index|\.unit\.).)*\.js$/);
    requireModule.keys().forEach(fileName => {
      const moduleDefinition = requireModule(fileName).default || requireModule(fileName);
      const modulePath = fileName
        .replace(/^\.\/modules\//, '')
        .replace(/(\.service)?\.\w+$/, '')
        .split(/\//)
        .map(camelCase);
      const leafService = getNamespace(services, modulePath);

      leafService[modulePath.pop()] = {
        ...moduleDefinition
      };
    });
    Object.defineProperty(Vue.prototype, '$api', {
      enumerable: true,
      get() {
        return services;
      }
    });
  }
};

function getNamespace(subtree, path) {
  if (path.length === 1) {
    return subtree;
  }

  const namespace = path.shift();
  subtree[namespace] = {
    ...subtree[namespace]
  };
  return getNamespace(subtree[namespace], path);
}
