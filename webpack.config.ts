import path from 'path'
import { type Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    babelConfig: path.resolve(__dirname, 'babel.config.js'),
    styles: path.resolve(__dirname, 'src', 'shared', 'styles'),
  }

  const mode: BuildMode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/'

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  })

  return config
}
