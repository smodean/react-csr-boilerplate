/// <reference types="node" />
/// <reference types="react-dom" />

declare module '*.bmp' {
  const src: string;

  export = src;
}

declare module '*.gif' {
  const src: string;

  export = src;
}

declare module '*.jpg' {
  const src: string;

  export = src;
}

declare module '*.jpeg' {
  const src: string;

  export = src;
}

declare module '*.png' {
  const src: string;

  export = src;
}

declare module '*.webp' {
    const src: string;

    export = src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };

  export = classes;
}
declare module '*.css' {
  const classes: { readonly [key: string]: string };

  export = classes;
}
