module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.output.publicPath('./');
    config.output.filename('[name].[hash].js')
  })
}