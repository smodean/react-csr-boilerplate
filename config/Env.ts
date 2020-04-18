import { config, DotenvParseOutput } from 'dotenv';

import paths from './paths';

interface EnvDefaults {
  readonly DEV_SERVER_PORT: number;
  readonly PROXY_TARGET?: string;
  readonly OPEN_BROWSER?: boolean;
  readonly ANALYZE_BUNDLE?: boolean;
}

export default class Env implements EnvDefaults {
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

  private static parseStringToBoolean(value: string | undefined, defaultValue: boolean): boolean {
    if (value === 'true' || value === 'false') {
      return JSON.parse(value);
    }

    if (value) {
      return Boolean(value);
    }

    return defaultValue;
  }

  public readonly IS_PRODUCTION = process.env.NODE_ENV === 'production';

  public readonly IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

  public readonly DEV_SERVER_PORT: number;

  public readonly PROXY_TARGET?: string;

  public readonly OPEN_BROWSER: boolean;

  public readonly ANALYZE_BUNDLE: boolean;

  public readonly dotEnvConfig: DotenvParseOutput;

  private readonly defaults: EnvDefaults;

  constructor(defaults: EnvDefaults) {
    this.defaults = defaults;

    this.dotEnvConfig = this.loadEnvConfig();

    this.DEV_SERVER_PORT = this.getDevServerPort();

    this.PROXY_TARGET = this.getProxyTarget();

    this.OPEN_BROWSER = this.getOpenBrowser();

    this.ANALYZE_BUNDLE = this.getAnalyzeBundle();
  }

  private getProxyTarget(): Env['PROXY_TARGET'] {
    return process.env.PROXY_TARGET || this.defaults.PROXY_TARGET;
  }

  private getDevServerPort(): Env['DEV_SERVER_PORT'] {
    const { DEV_SERVER_PORT = `${this.defaults.DEV_SERVER_PORT}` } = process.env;

    return parseInt(DEV_SERVER_PORT, 10);
  }

  private getOpenBrowser(): Env['OPEN_BROWSER'] {
    return Env.parseStringToBoolean(process.env.OPEN_BROWSER, Boolean(this.defaults.OPEN_BROWSER));
  }

  private getAnalyzeBundle(): Env['ANALYZE_BUNDLE'] {
    return Env.parseStringToBoolean(process.env.ANALYZE_BUNDLE, Boolean(this.defaults.ANALYZE_BUNDLE));
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
