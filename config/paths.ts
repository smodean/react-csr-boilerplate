import { realpathSync } from 'fs';
import { resolve } from 'path';

const appDirectory = realpathSync(process.cwd());

export const resolveApp = (...relativePaths: Array<string>): string => resolve(appDirectory, ...relativePaths);

export const publicPath = '/';
export const appPath = resolveApp('.');
export const appBuild = resolveApp('build');
export const appPublic = resolveApp('public');
export const appSrc = resolveApp('src');
export const appFavicon = resolveApp(appPublic, 'favicon.ico');
export const appHtml = resolveApp(appPublic, 'index.html');
export const appNodeModules = resolveApp('node_modules');
export const appPackageJson = resolveApp('package.json');
export const appBrowser = resolveApp(appSrc, 'browser');
export const appShared = resolveApp(appSrc, 'shared');
export const appTsConfig = resolveApp('tsconfig.json');
export const dotenv = resolveApp('.env');
export const dotenvDev = resolveApp('.env.dev');
export const dotenvProd = resolveApp('.env.prod');
