const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      // fs: path.resolve(__dirname, 'node_modules/react-native-level-fs'), // version Error
      fs: path.resolve(__dirname, 'node_modules/react-native-fs'),
    },
    // sourceExts: ['tsx', 'ts', 'jsx', 'mts', 'cts', 'mjs', 'js', 'cjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
