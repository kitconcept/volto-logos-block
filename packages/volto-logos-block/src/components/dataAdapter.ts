/**
 * Saves one field of the logos block from the settings form.
 *
 * It has the signature Volto uses for the `dataAdapter` of a block, and it
 * calls `onChangeBlock` with the block data merged with the changed field.
 *
 * @param {object} args - The arguments passed by Volto.
 * @param {string} args.block - The ID of the block being edited.
 * @param {object} args.data - The current data of the block.
 * @param {string} args.id - The name of the changed field.
 * @param {Function} args.onChangeBlock - Saves the data of the block.
 * @param {any} args.value - The new value of the field.
 */
export const LogosBlockDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
}: {
  block: string;
  data: Record<string, any>;
  id: string;
  onChangeBlock: (block: string, data: Record<string, any>) => void;
  value: any;
}) => {
  onChangeBlock(block, {
    ...data,
    [id]: value,
  });
};
