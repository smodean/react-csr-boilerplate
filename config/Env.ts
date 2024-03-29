import { config, DotenvParseOutput } from 'dotenv';

import * as paths from './paths';

type EnvDefaults = Partial<Record<'DEV_SERVER_PORT' | 'PROXY_TARGET' | 'OPEN_BROWSER' | 'ANALYZE_BUNDLE', string>>;

export class Env {
  public readonly NODE_ENV = process.env.NODE_ENV;

  public readonly IS_PRODUCTION = this.NODE_ENV === 'production';

  public readonly IS_DEVELOPMENT = this.NODE_ENV === 'development';

  public readonly DEV_SERVER_PORT: number;

  public readonly PROXY_TARGET?: string;

  public readonly OPEN_BROWSER: boolean;

  public readonly ANALYZE_BUNDLE: boolean;

  public readonly dotEnvConfig: DotenvParseOutput;

  private readonly defaults: EnvDefaults;

  public constructor(defaults: EnvDefaults) {
    this.defaults = defaults;

    this.dotEnvConfig = this.loadEnvConfig();

    this.DEV_SERVER_PORT = this.getDevServerPort();

    this.PROXY_TARGET = this.getProxyTarget();

    this.OPEN_BROWSER = !!process.env.OPEN_BROWSER;

    this.ANALYZE_BUNDLE = !!process.env.OPEN_BROWSER;
  }

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

  private getProxyTarget(): Env['PROXY_TARGET'] {
    return process.env.PROXY_TARGET || this.defaults.PROXY_TARGET;
  }

  private getDevServerPort(): Env['DEV_SERVER_PORT'] {
    const { DEV_SERVER_PORT = `${this.defaults.DEV_SERVER_PORT}` } = process.env;

    return parseInt(DEV_SERVER_PORT, 10);
  }

  private loadEnvConfig(): DotenvParseOutput {
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
