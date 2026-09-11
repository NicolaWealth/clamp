module.exports = {
  require: ['ts-node/register'],
  reporter: 'spec',
  'full-trace': true,
  color: true,
  bail: true,
  spec: 'src/**/*.test.ts'
};
