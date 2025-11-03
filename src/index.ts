import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './request';

/**
 * Initialization data for the jupytercon2025 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupytercon2025:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupytercon2025 is activated!');

    requestAPI<any>('hello')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The jupytercon2025 server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
