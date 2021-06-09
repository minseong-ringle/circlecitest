const withPlugins = require('next-compose-plugins')
const {GitRevisionPlugin} = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()
const commithash = gitRevisionPlugin.commithash()

module.exports = withPlugins([], {
  distDir: 'build/' + commithash

})
