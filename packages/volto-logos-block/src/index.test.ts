import { describe, expect, it, vi } from 'vitest';
import applyConfig from './index';
import { LogosBlockSchema } from './components/schema';
import { LogosBlockDataAdapter } from './components/dataAdapter';

// The components are not needed to check the registration, and importing
// the View pulls in the light theme's container, which the test runner
// does not resolve.
vi.mock('./components/View', () => ({ default: () => null }));
vi.mock('./components/Edit', () => ({ default: () => null }));

describe('applyConfig', () => {
  it('registers the schema and the data adapter of the logos block', () => {
    const config = applyConfig({
      blocks: { blocksConfig: {} },
    } as any);
    const blockConfig = config.blocks.blocksConfig.logos;

    expect(blockConfig.blockSchema).toBe(LogosBlockSchema);
    expect(blockConfig.dataAdapter).toBe(LogosBlockDataAdapter);
  });
});
