import React from 'react';
import LogoBlockEdit from './Logo/Edit';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import config from '@plone/volto/registry';

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const logoBlockConfig = config.blocks.blocksConfig.logo;
  const schemaObject = logoBlockConfig.blockSchema(props);

  return (
    <>
      <LogoBlockEdit {...props} />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          {...props}
          data={data}
          block={block}
          schema={schemaObject}
          onChangeBlock={onChangeBlock}
          formData={data}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
