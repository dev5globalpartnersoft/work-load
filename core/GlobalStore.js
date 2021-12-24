import { createStore } from '@ice/store';
import * as modules from 'modules';

// Theme model
import ThemeModel from './models/ThemeModel';

const models = {
  theme: ThemeModel,
};

try {
  Object.values(modules).forEach(module => {
    if (!module.name || typeof module.name !== 'string')
      throw new Error('You created a new module without correct name!');
    if (models[module.name])
      throw new Error(`Modules already has a model with the name: "${module.name}"!`);

    if (module.model) models[module.name] = module.model;
  });
} catch (error) {
  console.error(error.message);
}

const initialStore = createStore(models);

export const store = initialStore;
