import { realpathSync } from 'fs';
import { resolve } from 'path';

const appDirectory = realpathSync(process.cwd());

export const resolveApp = (relativePath: string): string => resolve(appDirectory, relativePath);

const paths = {
  appBuild: resolveApp('build'),
  appFavicon: resolveApp('public/favicon.ico'),
  appHtml: resolveApp('public/index.html'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
  appPath: resolveApp('.'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  dotenv: resolveApp('.env'),
  dotenvDev: resolveApp('.env.dev'),
  dotenvProd: resolveApp('.env.prod'),
  publicPath: '/',
} as const;

export default paths;
