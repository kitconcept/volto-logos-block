import { Edit } from './components';
import { layoutSchema } from './components/Logo/layoutSchema';
import { LogoBlockView } from './components';
import freedomSVG from '@plone/volto/icons/freedom.svg';
import './theme/logo.scss';

import { BlocksObjectWidget } from './components/widgets';
const applyConfig = (config) => {
  config.blocks.blocksConfig.logo = {
    id: 'logo',
    title: 'Logo',
    group: 'common',
    icon: freedomSVG,
    view: LogoBlockView,
    edit: Edit,
    mostUsed: true,
    sidebarTab: 1,
    blockSchema: layoutSchema,
    blockHasOwnFocusManagement: true,
  };

  config.blocks.blocksConfig.logo.blocksConfig = {
    ...config.blocks.blocksConfig,
  };
  config.widgets.type.logos = BlocksObjectWidget;
  return config;
};

export default applyConfig;
