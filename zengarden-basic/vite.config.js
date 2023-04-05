const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}
