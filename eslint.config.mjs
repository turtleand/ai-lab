import js from '@eslint/js';

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'src/**/*.astro']
  },
  js.configs.recommended
];
