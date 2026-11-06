---
block: logos
---

Shows a responsive row of up to six logos, each one optionally linked to a page or an external site. Use it for partner, client or sponsor logos.

The block stores its logos in `logos`, a list with one item per logo. Each logo has an image, an optional alternative text, and an optional link. The logos are shown in the order of the list.

### Fields

- `logos`: a list of logo objects, each with the fields below.
  - `title`: the name of the logo, shown next to the link.
  - `alt`: the alternative text of the image.
  - `logo`: a list with one item, `[{ "@id": path, "image_field": "image" }]`, with the path of an image in the site. Use a full URL for an image outside the site.
  - `href`: a list with one item, `[{ "@id": path or URL, "title": title }]`. Leave it out for a logo without a link.
  - `openLinkInNewTab`: `true` to open the link in a new tab.
- `logos_size`: `s` for small logos or `l` for large logos. The default is `s`.
- `logos_container_width`: `default` to use the width of the page, or `layout` to use the width of the layout. The default is `default`.

### Example

```json
{
  "@type": "logos",
  "logos_size": "s",
  "logos_container_width": "default",
  "logos": [
    {
      "@id": "logo-1",
      "title": "Partner A",
      "alt": "Partner A logo",
      "logo": [{ "@id": "/images/partner-a", "image_field": "image" }],
      "href": [{ "@id": "https://partner-a.example.org", "title": "Partner A" }],
      "openLinkInNewTab": true
    }
  ]
}
```
