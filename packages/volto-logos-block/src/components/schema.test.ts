import { describe, expect, it } from 'vitest';
import { LogosBlockSchema } from './schema';

// The schema only calls intl.formatMessage, so a stub with the default
// messages is enough. react-intl is a peer dependency, not a dev dependency.
const intl = {
  formatMessage: ({ defaultMessage }: { defaultMessage: string }) =>
    defaultMessage,
} as any;

describe('LogosBlockSchema', () => {
  it('resolves with only intl, as the @blocks-schema endpoint calls it', () => {
    const schema = LogosBlockSchema({ intl });

    expect(schema.title).toBe('Logos');
    expect(Object.keys(schema.properties)).toEqual([
      'logos',
      'logos_size',
      'logos_container_width',
    ]);
  });

  it('resolves when the endpoint also passes the form data as props', () => {
    const data = { '@type': 'logos' };

    const schema = (
      LogosBlockSchema as (args: Record<string, unknown>) => {
        properties: Record<string, unknown>;
      }
    )({ data, intl, props: { data } });

    expect(schema.properties.logos).toBeDefined();
  });

  it('describes the fields of a logo in the nested object list', () => {
    const schema = LogosBlockSchema({ intl });
    const logos = schema.properties.logos as {
      schema: { properties: Record<string, unknown> };
    };

    expect(Object.keys(logos.schema.properties)).toEqual([
      'title',
      'logo',
      'alt',
      'href',
      'openLinkInNewTab',
    ]);
  });
});
