module.exports = {
  rules: {
    '@textlint-rule/no-unmatched-pair': true,
    'common-misspellings': true,
    'stop-words': {
      severity: 'warning',
      exclude: ['ie'],
    },
    'write-good': {
      severity: 'warning',
    },
  },
}
