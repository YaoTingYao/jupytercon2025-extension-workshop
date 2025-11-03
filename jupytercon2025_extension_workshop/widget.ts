import { Widget } from '@lumino/widgets';
import { MainAreaWidget,ToolbarButton, } from '@jupyterlab/apputils';
import {
  imageIcon,
    refreshIcon,
} from '@jupyterlab/ui-components';

class ImageCaptionWidget extends Widget {
  // Initialization
  constructor() {
    super();

    // Create and append an HTML <p> (paragraph) tag to our widget's node in
    // the HTML document
    const hello = document.createElement('p');
    hello.innerHTML = "Hello, world!";
    this.node.appendChild(hello);
  }
}

export class ImageCaptionMainAreaWidget extends MainAreaWidget<ImageCaptionWidget> {
  constructor() {
    const widget = new ImageCaptionWidget();
    super({ content: widget });
    //meta data
    this.title.label = 'Random image with caption';
    this.title.caption = this.title.label;
    this.title.icon = imageIcon;

    // Add a refresh button to the toolbar
    const refreshButton = new ToolbarButton({
      icon: refreshIcon,
      tooltip: 'Refresh image',
      onClick: () => {
        widget.load_image();
      }
    });
    this.toolbar.addItem('refresh', refreshButton);
  }
}