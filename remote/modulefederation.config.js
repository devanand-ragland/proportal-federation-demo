const { dependencies } = require('./package.json')

module.exports = {
  name: 'remote',
  exposes: {
    './Button': './src/Button.tsx'
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react']
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom']
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom']
    },
    formik: {
      singleton: true,
      requiredVersion: dependencies['formik']
    },
    'styled-components': {
      singleton: true,
      requiredVersion: dependencies['styled-components']
    }
  }
}
