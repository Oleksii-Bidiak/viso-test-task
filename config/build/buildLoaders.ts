import { RuleSetRule } from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { BuildPaths } from './types/config';

export function buildLoaders(isDev: boolean, paths: BuildPaths): RuleSetRule[] {
  const { babelConfig } = paths;

	const cssLoaders = buildCssLoaders(isDev);
  const babelLoader = buildBabelLoader(babelConfig);
  const typescriptLoader = buildTypescriptLoader(isDev);

  return [cssLoaders, babelLoader, typescriptLoader];
}
