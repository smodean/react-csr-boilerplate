import { config, DotenvParseOutput } from 'dotenv';

import paths from './paths';
import DefaultsEnv from './DefaultsEnv';

export default class Env implements DefaultsEnv {
  private static getConfig(path: string): DotenvParseOutput {
    const { error, parsed } = config({ path });

    if (error) {
      throw error;
    } else if (!parsed) {
      throw new Error();
    }

    return parsed;
  }

  private static getMessage(message: string): string {
    const first = Array(message.length + 12).fill('*').join('');
    const middle = `***   ${message}   ***`;
    const last = first;

    return `\n\t${first}\n\t${middle}\n\t${last}\n`;
  }

  public readonly IS_PRODUCTION = process.env.NODE_ENV === 'production';

  public readonly IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

  public readonly DEV_SERVER_PORT: DefaultsEnv['DEV_SERVER_PORT'];

  public readonly PROXY_TARGET: DefaultsEnv['PROXY_TARGET'];

  public readonly OPEN_BROWSER: DefaultsEnv['OPEN_BROWSER'];

  private readonly defaults: DefaultsEnv;

  constructor(defaults: DefaultsEnv) {
    this.defaults = defaults;

    this.initConfig();

    this.DEV_SERVER_PORT = this.getDevServerPort();

    this.PROXY_TARGET = this.getProxyTarget();

    this.OPEN_BROWSER = this.getOpenBrowser();
  }

  private getProxyTarget(): DefaultsEnv['PROXY_TARGET'] {
    const { PROXY_TARGET = this.defaults.PROXY_TARGET } = process.env;

    return PROXY_TARGET;
  }

  private getDevServerPort(): DefaultsEnv['DEV_SERVER_PORT'] {
    const { DEV_SERVER_PORT = `${this.defaults.DEV_SERVER_PORT}` } = process.env;

    return parseInt(DEV_SERVER_PORT, 10);
  }

  private getOpenBrowser(): DefaultsEnv['OPEN_BROWSER'] {
    const { OPEN_BROWSER } = process.env;

    if (OPEN_BROWSER === 'true' || OPEN_BROWSER === 'false') {
      return JSON.parse(OPEN_BROWSER);
    }

    if (OPEN_BROWSER) {
      return Boolean(OPEN_BROWSER);
    }

    return this.defaults.OPEN_BROWSER;
  }

  private initConfig(): DotenvParseOutput {
    const { getConfig, getMessage } = Env;

    try {
      if (this.IS_DEVELOPMENT) {
        const envConfig = getConfig(paths.dotenvDev);
        // eslint-disable-next-line no-console
        console.log(getMessage('loading from .env.dev SUCCESS'));

        return envConfig;
      }
      if (this.IS_PRODUCTION) {
        const envConfig = getConfig(paths.dotenvProd);
        // eslint-disable-next-line no-console
        console.log(getMessage('loading from .env.prod SUCCESS'));

        return envConfig;
      }

      throw new Error();
    } catch (error) {
      try {
        const envConfig = getConfig(paths.dotenv);
        // eslint-disable-next-line no-console
        console.log(getMessage('loading from .env SUCCESS'));

        return envConfig;
      } catch (defaultConfigError) {
        // eslint-disable-next-line no-console
        console.log(getMessage("env files didn't find"));
        return {};
      }
    }
  }
}
