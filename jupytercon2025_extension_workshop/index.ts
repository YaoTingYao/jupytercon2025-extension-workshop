import { requestAPI } from './request';
import { ILauncher } from '@jupyterlab/launcher'
import { ImageCaptionMainAreaWidget } from './widget';
import { imageIcon } from '@jupyterlab/ui-components';
import { ILauncher } from '@jupyterlab/launcher'
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils'; // Icommand is a token
/**
 * Initialization data for the jupytercon2025-extension-workshop extension.
 */

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupytercon2025-extension-workshop:plugin',
  description: 'A JupyterLab extension that displays a random image and caption.',
  autoStart: true,
  requires: [ICommandPalette, ILauncher],  // dependencies of our extension
  activate: (
    app: JupyterFrontEnd,
  // The activation method receives dependencies in the order they are specified in
  // the "requires" parameter above:
  palette: ICommandPalette
  ) => {
    console.log('JupyterLab extension jupytercon2025-extension-workshop is activated!');

    requestAPI<any>('hello')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The jupytercon2025_extension_workshop server extension appears to be missing.\n${reason}`
        );
      });

    //Register a new command:
    const command_id = 'image-caption:open';
    app.commands.addCommand(command_id, {
      execute: () => {
        // When the command is executed, create a new instance of our widget
        const widget = new ImageCaptionMainAreaWidget();

        // Then add it to the main area:
        app.shell.add(widget, 'main');
        return widget;
      },
      label: 'View a random image & caption'
    });
      
    //Register a new command:
    const command_id = 'image-caption:open';
    app.commands.addCommand(command_id, {
      execute: () => {
        // When the command is executed, create a new instance of our widget
        const widget = new ImageCaptionMainAreaWidget();

        // Then add it to the main area:
        app.shell.add(widget, 'main');
      },
      label: 'View a random image & caption'
    });

    app.commands.addCommand(command, {
      execute: () => {
        const widget = new ImageCaptionMainAreaWidget();

        app.shell.add(widget, 'main');
      },
      icon: imageIcon,
      label: 'View a random image & caption'
    });

    palette.addItem({ command: command_id, category: 'Tutorial' });
    launcher.add({ command: command_id });
  }
};