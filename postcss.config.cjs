const postcssNessted = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')
const postcssCustomMedia = require('postcss-custom-media')

module.exports = {
  plugins: [postcssNessted(), postcssPresetEnv(), postcssCustomMedia({})]
}
