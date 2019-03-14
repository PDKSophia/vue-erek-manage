module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
    ],
    'header-max-length': [2, 'always', 79],
    'subject-case': [0, 'never'],
    'subject-full-stop': [0, 'never']
  }
}
