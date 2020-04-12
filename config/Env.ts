import { config, DotenvParseOutput } from 'dotenv';

import paths from './paths';

function getMessage(message: string): string {
  const first = Array(message.length + 12).fill('*').join('');
  const middle = `***   ${message}   ***`;
  const last = first;

  return `\n\t${first}\n\t${middle}\n\t${last}\n`;
}

export default class Env {
  private static getConfig(path: string): DotenvParseOutput {
    const { error, parsed } = config({ path });

    if (error) {
      throw error;
    } else if (!parsed) {
      throw new Error();
    }

    return parsed;
  }

  public readonly IS_PRODUCTION: boolean;

  public readonly IS_DEVELOPMENT: boolean;

  public readonly DEV_SERVER_PORT: number;

  public readonly PROXY_TARGET?: string;

  public readonly OPEN_BROWSER: boolean;

  constructor(defaults: Pick<Env, 'PROXY_TARGET' | 'OPEN_BROWSER' | 'DEV_SERVER_PORT'>) {
    this.IS_PRODUCTION = process.env.NODE_ENV === 'production';
    this.IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

    this.initConfig();

    const { DEV_SERVER_PORT = `${defaults.DEV_SERVER_PORT}`, OPEN_BROWSER, PROXY_TARGET = defaults.PROXY_TARGET } = process.env;

    this.DEV_SERVER_PORT = parseInt(DEV_SERVER_PORT, 10);

    this.PROXY_TARGET = PROXY_TARGET;

    this.OPEN_BROWSER = ((): boolean => {
      if (OPEN_BROWSER === 'true' || OPEN_BROWSER === 'false') {
        return JSON.parse(OPEN_BROWSER);
      }

      if (OPEN_BROWSER) {
        return Boolean(OPEN_BROWSER);
      }

      return defaults.OPEN_BROWSER;
    })();
  }

  private initConfig(): DotenvParseOutput {
    const { getConfig } = Env;

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
