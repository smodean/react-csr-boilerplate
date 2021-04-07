import { realpathSync } from 'fs';
import { resolve } from 'path';

const appDirectory = realpathSync(process.cwd());

export const resolveApp = (relativePath: string): string => resolve(appDirectory, relativePath);

export const appBuild = resolveApp('build');
export const appFavicon = resolveApp('public/favicon.ico');
export const appHtml = resolveApp('public/index.html');
export const appNodeModules = resolveApp('node_modules');
export const appPackageJson = resolveApp('package.json');
export const appPath = resolveApp('.');
export const appPublic = resolveApp('public');
export const appSrc = resolveApp('src');
export const appTsConfig = resolveApp('tsconfig.json');
export const dotenv = resolveApp('.env');
export const dotenvDev = resolveApp('.env.dev');
export const dotenvProd = resolveApp('.env.prod');
export const publicPath = '/';
