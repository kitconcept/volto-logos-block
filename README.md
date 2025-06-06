<picture>
  <source align="right" width="200" media="(prefers-color-scheme: dark)" srcset="https://kitconcept.com/kitconcept-white.svg">
  <img align="right" width="200" alt="kitconcept, GmbH" src="https://kitconcept.com/kitconcept-black.svg">
</picture>

# Volto Logos Block (@kitconcept/volto-logos-block)

A logos block for Volto

[![npm](https://img.shields.io/npm/v/@kitconcept/volto-logos-block)](https://www.npmjs.com/package/@kitconcept/volto-logos-block)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://kitconcept.github.io/volto-logos-block/)
[![Code analysis checks](https://github.com/kitconcept/volto-logos-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-logos-block/actions/workflows/code.yml)
[![Unit tests](https://github.com/kitconcept/volto-logos-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-logos-block/actions/workflows/unit.yml)

The Volto Logos Block allows editors to add a row of up to 6 logos to a page. The logos are displayed in a responsive grid layout, automatically adjusting the number of logos per row based on the available space. This block is designed to be flexible and easy to use, making it a great addition to any Volto project.

The logos block matches the style of the existing Logos footer slot in VLT 6.

> [!WARNING]
> This package depends on `@kitconcept/volto-light-theme` and Volto 18 or later.
> It could be used without it, but you would have to provide your own block's view component and the logos container styling.


## Features

   - 	Flexible Logo Display – Supports adding logos and automatically adjusting based on available space.
   -    Responsive Layout – Adapts dynamically to different screen sizes to ensure logos are displayed optimally.
   -    Seamless Volto Integration – Works smoothly within existing Volto using VLT projects

## Compatibility

From version 3.x.x this add-on requires `@kitconcept/volto-light-theme` and Volto 18 or later.
There is also a hard breaking in the data stored in the block.
No migration is provided, so you have to remove the block and add it again or provide your own migration.

The data structure in versions <=2.x.x was using the usual blocks in block data structure (`blocks`/`blocks_layout`).

The data structure in version 3.x.x is using a simpler arrayed `object_list` widget data structure.

This is the compatibility matrix.

| volto-logos-block version | Volto version | VLT version  |
|---------------------------|---------------|--------------|
| 2.x.x                     |  17, 18       | Not required |
| 3.x.x                     |  18           | 6.x.x        |


## Installation

To install your project, you must choose the method appropriate to your version of Volto.

### Volto 18 and later

Add `@kitconcept/volto-logos-block` to your `package.json`:

```json
"dependencies": {
    "@kitconcept/volto-logos-block": "*"
}
```

Add `@kitconcept/volto-logos-block` to your `volto.config.js`:

```javascript
const addons = ['@kitconcept/volto-logos-block'];
```

If this package provides a Volto theme, and you want to activate it, then add the following to your `volto.config.js`:

```javascript
const theme = '@kitconcept/volto-logos-block';
```

## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.


## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Pre-requisites

-   [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
-   [Make](https://6.docs.plone.org/install/create-project.html#make)
-   [Docker](https://6.docs.plone.org/install/create-project.html#docker)

## Usage
1. Go to http://localhost:3000, login, add the logos you want to use as image content objects to your site.
2. Create a new page. The logos block will show up in the Volto blocks chooser. Add it to the page
3. Select the number of items
4. Choose the Logos you uploaded earlier as content


### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 🙏

![phpThumb_generated_thumbnail](https://github.com/kitconcept/volto-logos-block/assets/44289551/3b2ca2ad-3b85-4a2c-9e86-55eda2689374)

The development of this plugin has been kindly sponsored by [Deutsches Zentrum für Luft- und Raumfahrt (DLR)](https://www.dlr.de/de).

Crafted with care by **Generated using [Cookieplone (0.8.2)](https://github.com/plone/cookieplone) and [cookiecutter-plone (d9b5293)](https://github.com/plone/cookiecutter-plone/commit/d9b52933cbc6efd137e93e35a270214e307359f0) on 2025-01-17 17:05:27.327585**. A special thanks to all contributors and supporters!

