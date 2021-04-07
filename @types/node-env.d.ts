/// <reference types="node" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV?: 'development' | 'production' | 'none';
    readonly OPEN_BROWSER?: string;
    readonly DEV_SERVER_PORT?: string;
    readonly PROXY_TARGET?: string;
    readonly ANALYZE_BUNDLE?: string;
  }
}
