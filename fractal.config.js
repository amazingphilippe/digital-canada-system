const path = require('path');
const fractal = (module.exports = require('@frctl/fractal').create());
const defaultTheme = require('@frctl/mandelbrot');

fractal.set('project.title', 'Digital Canada Design System');

fractal.components.set('path', __dirname + '/src');
fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('builder.dest', path.join(__dirname, 'dist'));
fractal.components.set('label', 'System');

fractal.components.engine('@frctl/nunjucks');

fractal.components.set('default.preview', '@preview');
fractal.components.set('ext', '.html');

const customTheme = defaultTheme({
  favicon: '/images/favicon.ico',
  nav: ['search', 'components'],
  panels: ['html', 'view', 'notes'],
  styles: ['/themes/mandelbrot/css/black.css'],
  skin: {
    accent: '#000',
    complementary: '#FFCC33',
    links: '#004986'
  },
  highlightStyles:
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/tomorrow-night.min.css'
});

fractal.web.theme(customTheme);
