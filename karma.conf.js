// Configuración de Karma: es el "ejecutor" que abre un Chrome sin ventana (ChromeHeadless)
// y corre ahí las pruebas escritas con Jasmine.
// webpack + babel convierten el JSX de React a JavaScript que el navegador entiende.
const conCobertura = process.argv.includes('--coverage');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: [{ pattern: 'test-entry.js', watched: false }],
    preprocessors: { 'test-entry.js': ['webpack'] },

    webpack: {
      mode: 'development',
      devtool: false,
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }], // permite JSX sin importar React
                ],
                // En modo cobertura, instrumenta el código de src/ (menos los .spec.js)
                plugins: conCobertura ? [['istanbul', { exclude: ['**/*.spec.js', 'test-entry.js'] }]] : [],
              },
            },
          },
        ],
      },
    },

    // ChromeHeadless con flags para funcionar en servidores (EC2) sin pantalla
    browsers: ['ChromeHeadlessSinSandbox'],
    customLaunchers: {
      ChromeHeadlessSinSandbox: { base: 'ChromeHeadless', flags: ['--no-sandbox', '--disable-gpu'] },
    },

    reporters: conCobertura ? ['progress', 'coverage'] : ['progress'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'text' }],
    },

    singleRun: true,
  });
};
