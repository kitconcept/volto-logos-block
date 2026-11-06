import { describe, expect, it, vi } from 'vitest';
import { LogosBlockDataAdapter } from './dataAdapter';

describe('LogosBlockDataAdapter', () => {
  it('calls onChangeBlock with the block data merged with the changed field', () => {
    const onChangeBlock = vi.fn();
    const data = { '@type': 'logos', logos_size: 's', logos: [] };

    LogosBlockDataAdapter({
      block: 'block-1',
      data,
      id: 'logos_size',
      onChangeBlock,
      value: 'l',
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'logos',
      logos_size: 'l',
      logos: [],
    });
  });

  it('keeps the other fields when a new field is set', () => {
    const onChangeBlock = vi.fn();
    const data = { '@type': 'logos', logos_size: 's' };

    LogosBlockDataAdapter({
      block: 'block-1',
      data,
      id: 'logos_container_width',
      onChangeBlock,
      value: 'layout',
    });

    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'logos',
      logos_size: 's',
      logos_container_width: 'layout',
    });
  });
});
