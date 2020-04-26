const config = {
  plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};

module.exports = config;
