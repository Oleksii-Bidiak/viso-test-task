import { Configuration } from 'webpack'
import { BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, port, isDev } = options
  const { build, entry, src } = paths
  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
      publicPath: isDev ? '/' : '',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(isDev, paths),
    },
    resolve: buildResolvers(src),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  }
}
