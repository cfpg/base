requirejs.config({
  baseUrl: '../../node_modules',
  paths: {
    app: '../src/js/main',
    jquery: '../../node_modules/jquery/dist/jquery',
    gsap: '../../node_modules/gsap/src/minified/jquery.gsap.min'
  },
  shim: {
    'gsap': {
      deps: [
        '../../node_modules/gsap/src/minified/jquery.gsap.min.js',
        '../../node_modules/gsap/src/minified/TweenMax.min.js'
      ],
      exports: 'gsap'
    }
  }
});
