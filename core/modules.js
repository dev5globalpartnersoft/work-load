import chalk from 'chalk';
import * as modulesObject from 'modules';

const log = console.error;

const notFound = (type, typeName, moduleName) => () => {
  log(chalk.red(`Not found ${type} "${typeName}" inside module "${moduleName}"`));

  return 'Error...';
};

/**
 * modules.get`main`.layout`Header`;
 * modules.get('main').layout('Header');
 */
export const modules = {
  get: name => {
    const module = modulesObject[name];

    if (!module)
      log(
        chalk.red(
          `Not found module with name "${name}"! Please check if you have connected the module inside modules/index.js?`
        )
      );

    return {
      layout: layoutName =>
        module?.layouts?.[layoutName] || notFound('layout', layoutName, name),
    };
  },
};
