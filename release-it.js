/* eslint-disable no-template-curly-in-string */
module.exports = {
  npm: {
    publish: true,
  },

  hooks: {
    'after:bump':
      'pipx run towncrier build --draft --yes --version ${version} > .changelog.draft && pipx run towncrier build --yes --version ${version}',
    'after:release': 'rm .changelog.draft',
  },
  git: {
    changelog: 'pipx run towncrier build --draft --yes --version 0.0.0',
    requireUpstream: false,
    requireCleanWorkingDir: false,
    commitMessage: 'Release ${version}',
    tagName: '${version}',
    tagAnnotation: 'Release ${version}',
  },
  github: {
    release: true,
    releaseName: '${version}',
    releaseNotes: 'cat .changelog.draft',
  },
};
