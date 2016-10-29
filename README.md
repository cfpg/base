# base

Frontend generator for building static sites.

## Includes
- Watch + livereload
- requirejs
- uglify
- Sass
- Bourbon Neat - http://neat.bourbon.io/
- GSAP - https://greensock.com/gsap

## How to use
- Clone or download repo into folder
- Modify package.json as needed
- npm install
- Run ´grunt´ to execute watch task that listens to SASS and JS changes and builds them

## Project Structure
- / - root
- index.html - Main entry point
- src/
  - src/sass/ - Sass build files
    - src/sass/main.scss - Main stylesheet
  - src/js/ - JS build files
    - src/js/main.js - Entry point for JS files
- dist/
  - dist/main.js - Built JS file to be included in webpages
  - dist/main.css - Built CSS file to be included in webpages
